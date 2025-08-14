import React from 'react'

const SKILLS = [
  // Web
  'React', 'Vite', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind', 'Node.js', 'Git', 'GitHub', 'REST APIs', 'Accessibility',
  // AI / Data
  'Python', 'Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Data Pipelines'
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div className="badges">
        {SKILLS.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
    </section>
  );
}
