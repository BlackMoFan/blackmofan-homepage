import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, Checkbox, Stack, useToast, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { sendEmail } from '../api/send-email'

const Contact = () => {
	const toast = useToast()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const formBackground = useColorModeValue('white', 'gray.700')
	const inputBorderColor = useColorModeValue('gray.300', 'gray.600')
	const checkboxColorScheme = useColorModeValue('teal', 'teal')

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)

		const formData = new FormData(event.target)
		const data = Object.fromEntries(formData.entries())

		try {
			await sendEmail(data)
			toast({
				title: 'Message sent.',
				description: 'Your message has been sent successfully!',
				status: 'success',
				duration: 5000,
				isClosable: true,
			})
		} catch (error) {
			toast({
				title: 'An error occurred.',
				description: 'Unable to send your message. Please try again later.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
		} finally {
			setIsSubmitting(false)
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
						<Input name="name" placeholder="Your Name" borderColor={inputBorderColor} />
					</FormControl>
					<FormControl id="email" isRequired mt={4}>
						<FormLabel>Email</FormLabel>
						<Input type="email" name="email" placeholder="Your Email" borderColor={inputBorderColor} />
					</FormControl>
					<FormControl id="intent" isRequired mt={4}>
						<FormLabel>Intent</FormLabel>
						<Stack spacing={2}>
							<Checkbox name="intent" value="Software Development" colorScheme={checkboxColorScheme}>Software Development</Checkbox>
							<Checkbox name="intent" value="Web Design" colorScheme={checkboxColorScheme}>Web Design</Checkbox>
							<Checkbox name="intent" value="Consulting" colorScheme={checkboxColorScheme}>Consulting</Checkbox>
							<Checkbox name="intent" value="Other" colorScheme={checkboxColorScheme}>Other</Checkbox>
						</Stack>
					</FormControl>
					<FormControl id="message" isRequired mt={4}>
						<FormLabel>Message</FormLabel>
						<Textarea name="message" placeholder="Your Message" borderColor={inputBorderColor} />
					</FormControl>
					<Button type="submit" colorScheme="teal" mt={4} isLoading={isSubmitting}>
						Send
					</Button>
				</form>
			</Container>
		</Layout>
	)
}

export default Contact