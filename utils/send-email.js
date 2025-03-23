import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (data) => {
	await resend.emails.send({
		from: data.email,
		to: 'your-email@example.com',
		subject: `New message from ${data.name}`,
		html: `
			<p><strong>Name:</strong> ${data.name}</p>
			<p><strong>Email:</strong> ${data.email}</p>
			<p><strong>Intent:</strong> ${data.intent}</p>
			<p><strong>Message:</strong> ${data.message}</p>
		`,
	})
}
