import { DEFAULT_GITHUB_USER } from './config'

export async function fetchRepos(username) {
  const user = username || DEFAULT_GITHUB_USER
  const url = `https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&sort=updated`
  const res = await fetch(url, { headers: { 'Accept': 'application/vnd.github+json' } })
  if (!res.ok) {
    const msg = `GitHub API error ${res.status}`
    throw new Error(msg)
  }
  const data = await res.json()
  // Filter out forks; sort by stargazers then recent update
  const cleaned = data
    .filter(r => !r.fork)
    .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)))
  return cleaned
}
