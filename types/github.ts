export interface GitHubUser {
  id?: number
  login: string
  html_url?: string
  avatar_url?: string
}

export interface GitHubLabel {
  id?: number
  name: string
  color?: string
}

export interface GitHubIssue {
  id?: number
  number: number
  title: string
  body: string | null
  html_url: string
  user?: GitHubUser | null
  labels?: GitHubLabel[]
  state?: string
  created_at?: string
  updated_at?: string
}

export interface GitHubRepository {
  id?: number
  name: string
  full_name: string
  html_url: string
}

export interface GitHubIssueEvent {
  action?: string
  issue?: GitHubIssue
  repository?: GitHubRepository
  sender?: GitHubUser
}
