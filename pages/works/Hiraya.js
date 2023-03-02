import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Hiraya">
			<Container>
				<Title>
					Hiraya <Badge>2021</Badge>
				</Title>
				<P>
					An Art Exhibition Page for Our Subject, Software Engineering I
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/artAppreciationLandingPage'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Website</Meta>
						<Link href='https://art-appreciation.vercel.app/'>
							Vercel <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web Application</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>HTML, CSS, Javascript</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/hiraya.png" alt="EMS" />
			</Container>
		</Layout>
	)
}

export default Work
