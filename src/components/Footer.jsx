import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>© {new Date().getFullYear()} • Built with <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> + <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>.</div>
        <div style={{marginTop: 8}}><small className="mono">/devshowcase</small></div>
      </div>
    </footer>
  )
}
