module.exports = async (req, res) => {
	try {
		if (req.method !== 'POST') {
			res.setHeader('Allow', 'POST');
			return res.status(405).json({ error: 'Method Not Allowed' });
		}

		// read JSON body
		const body = await new Promise((resolve, reject) => {
			let data = '';
			req.on('data', (c) => (data += c));
			req.on('end', () => resolve(data));
			req.on('error', reject);
		});
		let payload = {};
		try { payload = JSON.parse(body || '{}'); } catch { payload = {}; }

		const { name = '', email = '', message = '' } = payload;

		const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mldlvnev';
		const form = new FormData();
		form.append('name', name);
		form.append('email', email);
		form.append('message', message);
		form.append('_subject', 'Portfolio Contact – DevShowcase');

		const r = await fetch(FORMSPREE_ENDPOINT, {
			method: 'POST',
			headers: { Accept: 'application/json' },
			body: form,
		});

		const text = await r.text();
		let data;
		try { data = JSON.parse(text); } catch { data = { raw: text }; }

		if (!r.ok) {
			return res.status(r.status).json({
				error: data?.errors?.map(e => e.message).join(', ') || data?.message || 'Upstream error'
			});
		}
		return res.status(200).json({ ok: true });
	} catch (e) {
		return res.status(500).json({ error: 'Contact send failed', details: String(e) });
	}
};
	
