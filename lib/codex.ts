import { env } from '@/lib/env'
import type { GitHubIssue, GitHubRepository } from '@/types/github'

export interface CodexTaskMetadata {
  source: 'github'
  repository: string
  issueNumber: number
  issueUrl: string
  labels: string[]
}

export interface CodexTaskPayload {
  title: string
  description: string
  metadata: CodexTaskMetadata
  projectId?: string
}

export interface CodexTaskResponse {
  id: string
  url?: string
  status?: string
}

const DEFAULT_EMPTY_BODY_MESSAGE = '_No issue description provided._'

function normalizeCodexBaseUrl(baseUrl: string) {
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
}

export function buildCodexTaskPayload(
  issue: GitHubIssue,
  repository: GitHubRepository,
  projectId?: string
): CodexTaskPayload {
  const labels = issue.labels?.map((label) => label.name).filter(Boolean) ?? []
  const descriptionSections = [
    issue.body?.trim() ? issue.body.trim() : DEFAULT_EMPTY_BODY_MESSAGE,
    '',
    '---',
    '**Issue metadata**',
    `- Repository: ${repository.full_name}`,
    `- Issue #: ${issue.number}`,
    `- Reported by: ${issue.user?.login ?? 'unknown'}`,
    `- Labels: ${labels.length > 0 ? labels.join(', ') : 'none'}`,
    `- URL: ${issue.html_url}`,
  ]

  const payload: CodexTaskPayload = {
    title: `Fix GitHub issue #${issue.number}: ${issue.title}`,
    description: descriptionSections.join('\n'),
    metadata: {
      source: 'github',
      repository: repository.full_name,
      issueNumber: issue.number,
      issueUrl: issue.html_url,
      labels,
    },
  }

  if (projectId) {
    payload.projectId = projectId
  }

  return payload
}

export async function createCodexTaskFromIssue(
  issue: GitHubIssue,
  repository: GitHubRepository
): Promise<CodexTaskResponse> {
  const { codexApiUrl, codexApiKey, codexProjectId } = env.server

  if (!codexApiUrl) {
    throw new Error('Codex API URL is not configured')
  }

  if (!codexApiKey) {
    throw new Error('Codex API key is not configured')
  }

  const payload = buildCodexTaskPayload(issue, repository, codexProjectId ?? undefined)

  const endpoint = `${normalizeCodexBaseUrl(codexApiUrl)}/tasks`

  let response: Response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${codexApiKey}`,
      },
      body: JSON.stringify(payload),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    throw new Error(`Failed to reach Codex API: ${message}`)
  }

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unable to read response body')
    throw new Error(
      `Codex API responded with ${response.status} ${response.statusText}: ${errorText}`
    )
  }

  let data: unknown
  try {
    data = await response.json()
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    throw new Error(`Failed to parse Codex API response: ${message}`)
  }

  const result = data as Partial<CodexTaskResponse>
  if (!result.id) {
    throw new Error('Codex API response is missing a task identifier')
  }

  return {
    id: result.id,
    url: result.url,
    status: result.status,
  }
}
