import NextLink from 'next/link'
import { 
	Button, 
	Container, 
	Box, 
	Heading, 
	Image, 
	Link,
	List,
	ListItem,
	//SimpleGrid,
	Icon,
	useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
//import { GridItem } from '../components/grid-item'
import {
	IoLogoGithub
} from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
const Page = () => {
	return (
		<Layout>
			<Container>
				<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
					{/* Hello, I&apos;m a Full-Stack Developer based in the Philippines! */}
					Crafting digital experiences from the Philippines.
				</Box>
				<Box display={{md:'flex'}}>
					<Box flexGrow={3}>
						<Heading as="h2" variant="page-title">
							Rod Lester A. Moreno
						</Heading>
						<p>Black Mo Fan | SWE | Stoic</p>
					</Box>
					<Box 
						flexShrink={0} 
						mt={{base: 4, md: 0}} 
						ml={{md: 6}} 
						align="center">
						<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/blackmofan.jpg" alt="Profile Image"/>
					</Box>
				</Box>

				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>Black Mo Fan is currently a freelance software engineer and
						founder of a sole proprietorship company, RottenData Labs.  He is committed
						and driven with the purpose of bettering life. When not online, he loves hanging out with his family and dogs. Currently, he is learning about SWE and business analytics.
					</Paragraph>
					<Box align="center" my={4} display="grid" gridGap={2} gridAutoFlow="column dense" justifyContent="center">
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Portfolio
							</Button>
						</NextLink>
						<a href="/files/CV.pdf" download>
							<Button rightIcon={<DownloadIcon />} colorScheme="teal">
								Download My CV
							</Button>
						</a>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>2001</BioYear>
						Born in Antique, Philippines.
					</BioSection>
					<BioSection>
						<BioYear>2020</BioYear>
						Graduated Secondary School in Antique National School with Honors
					</BioSection>
					<BioSection>
						<BioYear>2020</BioYear>
						Passed the DOST-SEI Scholarship Exam and Became a DOST Scholar of Batch 2020
					</BioSection>
					<BioSection>
						<BioYear>2020 to 2024</BioYear>
						Graduated Magna Cum Laude with BS in Computer Science at West Visayas State University
					</BioSection>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I 🤍
					</Heading>
					<Paragraph>
						My family, dogs, life in general, reading, and enough resting time
					</Paragraph>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						On the web
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/blackmofan" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
									@blackmofan
								</Button>
							</Link>
						</ListItem>
					</List>

					{/* <SimpleGrid columns={[1,2,2]} gap={6}>
						<GridItem href="https://www.youtube.com/devaslife" title="Dev as Life" thumbnail={thumbYouTube}>I got this tut from this YouTube channel</GridItem>
					</SimpleGrid> */}
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
