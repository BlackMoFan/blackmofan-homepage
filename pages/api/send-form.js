export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' })
	}

	try {
		const { name, email, intent, message } = req.body
		const formId = process.env.FORMSPREE_FORM_ID // Fetch the Formspree form ID from the .env file

		const response = await fetch(`https://formspree.io/f/${formId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				intent: intent.join(', '), // Combine intents into a single string
				message,
			}),
		})

		if (!response.ok) {
			const errorData = await response.json()
			return res.status(response.status).json({ error: errorData.error || 'Failed to send form' })
		}

		res.status(200).json({ success: true })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
