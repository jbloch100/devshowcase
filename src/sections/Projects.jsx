import React from 'react'
import { fetchRepos } from '../lib/github'
import { DEFAULT_GITHUB_USER } from '../lib/config'

export default function Projects() {
  const [repos, setRepos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [err, setErr] = React.useState('')

  React.useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const user = params.get('u') || DEFAULT_GITHUB_USER
    ;(async () => {
      try {
        const all = await fetchRepos(user)
        setRepos(all.slice(0, 8))
      } catch(e) {
        console.error(e)
        setErr('Could not load GitHub repositories.')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <p>Selected projects in React, Vite, and AI/ML.</p>
      {loading && <p>Loading…</p>}
      {err && <p>{err}</p>}
      {!loading && !err && (
        <div className="grid">
          {repos.map(repo => (
            <a className="card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
              <div>
                <h3>{repo.name}</h3>
                <p>{repo.description || 'No description provided.'}</p>
              </div>
              <div>
                <small>★ {repo.stargazers_count} • {repo.language || '—'}</small>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
