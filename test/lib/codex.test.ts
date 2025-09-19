import { describe, expect, it } from 'vitest'

import { buildCodexTaskPayload } from '@/lib/codex'
import type { GitHubIssue, GitHubRepository } from '@/types/github'

describe('buildCodexTaskPayload', () => {
  const repository: GitHubRepository = {
    id: 1,
    name: 'newth-ai-next',
    full_name: 'n3wth/newth-ai-next',
    html_url: 'https://github.com/n3wth/newth-ai-next',
  }

  const issue: GitHubIssue = {
    id: 42,
    number: 128,
    title: 'Fix navigation bug',
    body: 'Steps to reproduce:\n1. Open navigation\n2. Click GitHub link',
    html_url: 'https://github.com/n3wth/newth-ai-next/issues/128',
    user: { login: 'octocat' },
    labels: [{ name: 'bug' }, { name: 'high-priority' }],
  }

  it('creates a rich payload with metadata and description', () => {
    const payload = buildCodexTaskPayload(issue, repository, 'project-123')

    expect(payload.title).toBe('Fix GitHub issue #128: Fix navigation bug')
    expect(payload.metadata.repository).toBe('n3wth/newth-ai-next')
    expect(payload.metadata.issueNumber).toBe(128)
    expect(payload.metadata.labels).toEqual(['bug', 'high-priority'])
    expect(payload.projectId).toBe('project-123')
    expect(payload.description).toContain('**Issue metadata**')
    expect(payload.description).toContain('Repository: n3wth/newth-ai-next')
    expect(payload.description).toContain('Issue #: 128')
    expect(payload.description).toContain('Reported by: octocat')
  })

  it('uses a fallback when the issue body is empty', () => {
    const payload = buildCodexTaskPayload({ ...issue, body: null, labels: [] }, repository)

    expect(payload.description).toContain('No issue description provided')
    expect(payload.metadata.labels).toEqual([])
  })
})
