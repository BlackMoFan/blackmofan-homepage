import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Personal Linktree-like Site">
			<Container>
				<Title>
					Personal Linktree-like Site <Badge>2022</Badge>
				</Title>
				<P>
					Compilation of all my social media accounts
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/one-stop-link-sharing'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Website</Meta>
						<Link href='https://blackmofan-links.vercel.app/'>
							Vercel <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web Application</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>HTML, CSS, Javascript, Vanta.js</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/one-stop-link-sharing.png" alt="EMS" />
			</Container>
		</Layout>
	)
}

export default Work
