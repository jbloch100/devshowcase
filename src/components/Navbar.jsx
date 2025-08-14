import React from 'react'
import { scrollToId } from '../lib/scroll'

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <a href="#" onClick={(e)=>{e.preventDefault();scrollToId('hero')}}><strong>DevShowcase</strong></a>
        <div>
          <a href="#projects" onClick={(e)=>{e.preventDefault();scrollToId('projects')}}>Projects</a>
          <a href="#skills" onClick={(e)=>{e.preventDefault();scrollToId('skills')}}>Skills</a>
          <a href="#about" onClick={(e)=>{e.preventDefault();scrollToId('about')}}>About</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact')}}>Contact</a>
        </div>
      </div>
    </div>
  )
}
