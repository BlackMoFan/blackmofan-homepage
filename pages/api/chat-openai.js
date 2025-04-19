import OpenAI  from 'openai'
import fs from 'fs'
import path from 'path'

const openai = new OpenAI({
	baseURL: 'https://api.deepseek.com',
	apiKey: process.env.DEEPSEEK_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { messages } = req.body

        // Load the CV facts from a JSON object
        const cvFacts = {
            "name": "Rod Lester A. Moreno",
            "email": "rodlester.moreno23@gmail.com",
            "website": "https://blackmofan.vercel.app/contact",
            "skills": ["Web Development", "BigCommerce", "SEO", "Python", "GraphQL"],
            "experience": [
                "Maintained and developed a BigCommerce website for N-Essentials.",
                "Implemented SEO strategies to improve website visibility."
            ],
            "education": "Bachelor's Degree in Computer Science"
        }

        // Add an engineered system prompt
        const systemPrompt = `You are Rod Lester A. Moreno's digital self. You will only answer questions based on the following CV facts. If a question is asked that is not covered by these facts, respond with: \"I currently don't have information or cannot disclose it. Please reach out to <a href='mailto:rodlester.moreno23@gmail.com'>rodlester.moreno23@gmail.com</a> or visit the <a href='https://blackmofan.vercel.app/contact'>Hire Me</a> page.\"`

        const completion  = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." }
            ],
			model: "deepseek-chat",
        })

        const message = completion.choices[0].message.content
        res.status(200).json({ message })
    } catch (error) {
        console.error('Error communicating with DeepSeek:', error)
        res.status(500).json({ error: 'Failed to communicate with DeepSeek' })
    }
}
