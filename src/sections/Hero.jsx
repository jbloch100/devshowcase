import React from 'react'
import { scrollToId } from '../lib/scroll'
import { DEFAULT_GITHUB_USER } from '../lib/config'

export default function Hero() {
  const [user, setUser] = React.useState(DEFAULT_GITHUB_USER)

  React.useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const u = params.get('u')
    if (u) setUser(u)
  }, [])

  return (
    <section id="hero" className="hero container">
      <span className="tagline">Hi, I’m</span>
      <h1>Jonathan Bloch</h1>
      <p className="lead">
        Front‑End Developer • React & Vite • Building fast, secure UIs and AI-powered apps.
      </p>
      <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
        <a className="cta" href="#projects" onClick={(e)=>{e.preventDefault();scrollToId('projects')}}>See Projects</a>
        <a className="cta" style={{background:'linear-gradient(135deg, var(--accent-2), var(--accent))'}} href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact')}}>Contact</a>
      </div>
      <p style={{marginTop:18, color:'var(--muted)'}}>A showcase of my work in front-end development, AI solutions, and data-driven applications.</p>
    </section>
  )
}
