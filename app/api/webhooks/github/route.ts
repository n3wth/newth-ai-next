import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'node:crypto'

import { createCodexTaskFromIssue } from '@/lib/codex'
import { env } from '@/lib/env'
import type { GitHubIssueEvent } from '@/types/github'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function verifyGitHubSignature(signature: string | null, payload: string, secret: string) {
  if (!signature) {
    return false
  }

  const hmac = createHmac('sha256', secret)
  const digest = `sha256=${hmac.update(payload).digest('hex')}`

  const signatureBuffer = Buffer.from(signature)
  const digestBuffer = Buffer.from(digest)

  if (signatureBuffer.length !== digestBuffer.length) {
    return false
  }

  return timingSafeEqual(signatureBuffer, digestBuffer)
}

export async function POST(request: NextRequest) {
  const githubSecret = env.server.githubWebhookSecret
  if (!githubSecret) {
    console.error('GitHub webhook secret is not configured')
    return NextResponse.json(
      { error: 'Server misconfiguration: missing GitHub webhook secret' },
      { status: 500 }
    )
  }

  const signature = request.headers.get('x-hub-signature-256')
  const event = request.headers.get('x-github-event')

  const rawBody = await request.text()

  if (!verifyGitHubSignature(signature, rawBody, githubSecret)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  if (!event) {
    return NextResponse.json({ error: 'Missing X-GitHub-Event header' }, { status: 400 })
  }

  let payload: GitHubIssueEvent
  try {
    payload = JSON.parse(rawBody) as GitHubIssueEvent
  } catch (error) {
    console.error('Failed to parse GitHub webhook payload', error)
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  if (event !== 'issues') {
    return NextResponse.json({ message: `Ignored event type: ${event}` }, { status: 200 })
  }

  if (!payload.issue || !payload.repository) {
    return NextResponse.json({ error: 'Malformed issues payload' }, { status: 400 })
  }

  const actionableActions = new Set(['opened', 'reopened'])

  if (!payload.action || !actionableActions.has(payload.action)) {
    return NextResponse.json(
      { message: `Ignored issues action: ${payload.action ?? 'unknown'}` },
      { status: 200 }
    )
  }

  try {
    const result = await createCodexTaskFromIssue(payload.issue, payload.repository)

    return NextResponse.json({ message: 'Codex task created', taskId: result.id }, { status: 200 })
  } catch (error) {
    console.error('Failed to create Codex task from issue', error)
    return NextResponse.json({ error: 'Failed to create Codex task' }, { status: 500 })
  }
}
