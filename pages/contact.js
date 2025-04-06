import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, Checkbox, Stack, useToast, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useState } from 'react'

const Contact = () => {
	const toast = useToast()
	const [selectedIntents, setSelectedIntents] = useState([])
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const formBackground = useColorModeValue('white', 'gray.700')
	const inputBorderColor = useColorModeValue('gray.300', 'gray.600')
	const checkboxColorScheme = useColorModeValue('teal', 'teal')

	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target
		setSelectedIntents((prev) =>
			checked ? [...prev, value] : prev.filter((intent) => intent !== value)
		)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const response = await fetch('/api/send-form', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					email,
					intent: selectedIntents,
					message,
				}),
			})

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.error || 'Failed to send form')
			}

			toast({
				title: 'Message Sent',
				description: 'Your message has been sent successfully!',
				status: 'success',
				duration: 5000,
				isClosable: true,
			})

			setName("")
			setEmail("")
			setMessage("")
			setSelectedIntents([])
		} catch (error) {
			toast({
				title: 'Error',
				description: error.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Layout>
			<Container bg={formBackground} p={6} borderRadius="md" boxShadow="md">
				<Heading as="h3" fontSize={20} mb={4}>
					Contact Me
				</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl id="name" isRequired>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Your Name"
							borderColor={inputBorderColor}
						/>
					</FormControl>
					<FormControl id="email" isRequired mt={4}>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your Email"
							borderColor={inputBorderColor}
						/>
					</FormControl>
					<FormControl id="intent" mt={4}>
						<FormLabel>Intent</FormLabel>
						<Stack spacing={2}>
							<Checkbox
								value="Software Development"
								name="intent"
								isChecked={selectedIntents.includes('Software Development')}
								onChange={handleCheckboxChange}
								colorScheme={checkboxColorScheme}
							>
								Software Development
							</Checkbox>
							<Checkbox
								value="Web Design"
								name="intent"
								isChecked={selectedIntents.includes('Web Design')}
								onChange={handleCheckboxChange}
								colorScheme={checkboxColorScheme}
							>
								Web Design
							</Checkbox>
							<Checkbox
								value="Consulting"
								name="intent"
								isChecked={selectedIntents.includes('Consulting')}
								onChange={handleCheckboxChange}
								colorScheme={checkboxColorScheme}
							>
								Consulting
							</Checkbox>
							<Checkbox
								value="Other"
								name="intent"
								isChecked={selectedIntents.includes('Other')}
								onChange={handleCheckboxChange}
								colorScheme={checkboxColorScheme}
							>
								Other
							</Checkbox>
						</Stack>
					</FormControl>
					<FormControl id="message" isRequired mt={4}>
						<FormLabel>Message</FormLabel>
						<Textarea
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Your Message"
							borderColor={inputBorderColor}
						/>
					</FormControl>
					<Button type="submit" colorScheme="teal" mt={4} isLoading={isLoading}>
						Send
					</Button>
				</form>
			</Container>
		</Layout>
	)
}

export default Contact