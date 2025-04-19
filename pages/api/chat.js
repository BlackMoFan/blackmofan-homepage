// import fetch from "node-fetch";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { messages } = req.body

        // Load the CV facts from a JSON object
        const cvFacts = {
            name: "Rod Lester A. Moreno",
            email: "rodlester.moreno23@gmail.com",
            phone: "+63 969 034 4954",
            location: "San Jose, Antique, 5700",
            website: "https://blackmofan.vercel.app",
            github: "https://github.com/blackmofan",
            linkedin: "https://www.linkedin.com/in/rolem",
            education: {
                degree: "Bachelor of Science in Computer Science",
                university: "West Visayas State University, College of ICT",
                gwa: "1.47",
                years: "2020 - 2024",
                honors: [
                "Dean’s Lister (from 1st to final year)",
                "Magna Cum Laude"
                ],
                coursework: [
                "Operating Systems",
                "Computer Graphics and Visual Computing",
                "Web Design and Development",
                "Data Structures and Algorithms",
                "Object-Oriented Programming",
                "Artificial Intelligence & Machine Learning",
                "Software Engineering",
                "Information Management",
                "Data Mining",
                "Systems Analysis and Design"
                ]
            },
            experience: [
                {
                title: "Software Engineer",
                company: "Asterix, Inc. (WVSU, Iloilo)",
                dates: "Apr. 2024 – Present",
                details: "Led architecture, development, deployment of web apps while mentoring a cross-functional team."
                },
                {
                title: "Website Developer",
                company: "eVA Outsourcing (San Jose, Antique)",
                dates: "Aug. 2024 – Apr. 2025",
                details: "Maintained and developed an international BigCommerce eCommerce platform."
                },
                {
                title: "Project Lead & Full-Stack Software Engineer Intern",
                company: "BINHI (Iloilo City)",
                dates: "Feb. 2024 – Jun. 2024",
                details: "Led a full-stack Laravel-based web solution from planning to deployment."
                },
                {
                title: "Lead Full-Stack Developer (Contract)",
                company: "WVSU-CITE (Iloilo City)",
                dates: "Sept. 2022 – Mar. 2023",
                details: "Directed backend dev and launched a platform for student communication/resource access."
                }
            ],
            projects: [
                {
                name: "MolarSupport",
                year: 2023,
                link: null,
                description: "CNN-based dental image analyzer for CBCT images. That would be MolarSupport, which was awarded Best Thesis at my university in my graduating year of 2024. It’s a web-based assistive tool for dentists, aimed at predicting post-operative risks and outcomes of molar extractions. It uses CNNs to analyze CBCT scans and helps visualize potential complications. Working with my co-developers, I handled both the frontend with Next.js + DaisyUI and backend using FastAPI. It was a challenging but deeply rewarding project because it had both a real-world application and technical complexity.",
                techStack: ["Next.js", "Typescript", "Python", "SQLite", "Flask", "TailwindCSS", "DaisyUI", "REST APIs", "Docker"]
                },
                {
                name: "NeuroForge",
                year: 2023,
                description: "AI platform with GAN, KNN, LSTM, Bi-LSTM, Naive Bayes, and sentiment classifier.",
                techStack: ["Python", "Flask", "GANs", "ML Libraries", "HTML", "Bootstrap"]
                },
                {
                name: "N-Essentials",
                year: 2024,
                link: "https://n-essentials.com.au",
                description: "BigCommerce platform customizations, theme, 3rd-party APIs, data migration tools.",
                techStack: ["BigCommerce", "jQuery", "Python", "HTML", "CSS", "JavaScript"]
                },
                {
                name: "DomainScope",
                year: 2024,
                link: "https://domain-scope.vercel.app",
                description: "Whois API-powered web app for domain record research and tracking.",
                techStack: ["React", "TailwindCSS", "DaisyUI", "Python", "REST APIs"]
                },
                {
                name: "Poison Information Service",
                year: 2023,
                description: "Chatbot-enabled CMS with Dijkstra’s algorithm for nearest facility recommendations.",
                techStack: ["Next.js", "Laravel", "TailwindCSS", "FastAPI"]
                },
                {
                name: "Rotten Orange TMS",
                year: 2023,
                description: "Cloud-based boarding house management system with top Lighthouse scores.",
                techStack: ["PHP", "CSS", "JavaScript", "MySQL", "AWS"]
                },
                {
                name: "National Sports Event Tracker",
                year: 2022,
                description: "Real-time and historical regional sports tracking using Doctrine ORM.",
                techStack: ["PHP", "Bootstrap", "MySQL"]
                }
            ],
            rewards: [
                {
                title: "Top 10 Finalist – HackFest 2022: Gen Z – GDSC-Loyola",
                year: 2022
                },
                {
                title: "DOST Scholar – Department of Science and Technology – SEI",
                year: 2020
                },
                {
                title: "College Best Thesis – WVSU College of ICT",
                year: 2024
                }
            ],
            skills: {
                languagesTools: ["Python", "C++", "JavaScript", "PHP", "TypeScript", "Git", "Canva", "Photoshop"],
                frontend: ["React", "Next.js", "TailwindCSS", "DaisyUI", "Bootstrap"],
                backend: ["Flask", "Node.js", "Express.js", "Laravel", "REST APIs"],
                databases: ["SQLite", "MySQL", "PostgreSQL"],
                ai_ml: ["CNN", "GAN", "KNN", "Naive Bayes", "LSTM", "GRU", "K-Means", "Linear Regression"],
                platforms: ["Docker", "CI/CD", "BigCommerce", "WordPress", "AWS (Basics)"]
            },
            interests: [
                "Full-Stack Software Development",
                "Artificial Intelligence",
                "Robotics"
            ],
            girlfriend: "Johanna Jean",
            wife: "Mommy Johanna Jean",
            children: "Johan and Lavender"
        };


        // Add an engineered system prompt
        const systemPrompt = `You are Rod Lester A. Moreno's digital self. You will only answer questions based on the following CV facts\n\n${JSON.stringify(cvFacts, null, 2)}\n\n. If a question is asked that is not covered by these facts, respond with: \"I currently don't have information or cannot disclose it. Please reach out to <a href='mailto:rodlester.moreno23@gmail.com'>rodlester.moreno23@gmail.com</a> or visit the <a href='https://blackmofan.vercel.app/contact'>Hire Me</a> page.\"`

		const payload = {
			contents: [
			{
				role: "user",
				parts: [{ text: `${systemPrompt}\nUser: ${messages.map(msg => msg.content).join('\n')}` }]
			}
			]
		};

		try {
			const response = await fetch(`${API_URL}?key=${API_KEY}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const data = await response.json();
            // console.log("Payload sent to Gemini API:", payload);
            // console.log("Gemini API Response:", data);
			const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
			res.json({ reply: reply || "Sorry, no response." });
            // console.log("Gemini API Reply:", reply);
		} catch (error) {
			console.error("Gemini API Error:", error);
			res.status(500).json({ reply: "Error contacting Gemini." });
		}
    } catch (error) {
        console.error('Error communicating with Gemini:', error)
        res.status(500).json({ error: 'Failed to communicate with Gemini' })
    }
}
