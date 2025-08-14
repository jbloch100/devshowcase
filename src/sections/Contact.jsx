import React from 'react'

const FORMSPREE_ID = "mldlvnev"
const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

export default function Contact() {
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget; // store before await
    setStatus('sending');

    try {
      const formData = new FormData(form);
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 560 }}>
        <label>Name<input name="name" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button disabled={status === 'sending'} type="submit">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
      </form>
      {status === 'sent' && <p style={{ marginTop: 10 }}>Thanks! I'll get back to you soon.</p>}
      {status === 'error' && <p style={{ marginTop: 10 }}>Something went wrong. Please try again later.</p>}
    </section>
  );
}