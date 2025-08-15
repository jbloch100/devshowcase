import React from 'react';

const FORMSPREE_ID = 'mldlvnev';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

export default function Contact() {
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const [error, setError] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get('name') || '',
      email: fd.get('email') || '',
      message: fd.get('message') || '',
    };

    try {
      if (import.meta.env.DEV) {
        // DEV: send directly to Formspree (no CORS issues locally)
        const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // PROD: use our Vercel serverless proxy
        const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      }

      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Network error');
    }
  }

  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 560 }}>
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button disabled={status === 'sending'} type="submit">
        {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </form>
      {status === 'sent' && <p style={{ marginTop: 10, color: 'green' }}>Thanks! I’ll get back to you soon.</p>}
      {status === 'error' && <p style={{ marginTop: 10, color: 'tomato' }}>Something went wrong: {error}</p>}
    </section>
  );
}