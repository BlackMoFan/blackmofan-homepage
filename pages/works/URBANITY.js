import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="URBANITY">
			<Container>
				<Title>
					Urban Residency Boosting Accessibility, Networking, Information, And TechnologY (URBANITY) <Badge>2024</Badge>
				</Title>
				<P>
				 	Content management system for tenancy and financial transparency for Parc Regency Residences - G
				</P>
				<List ml={4} my={4}>
					{/* <ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/one-stop-link-sharing'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem> */}
					{/* <ListItem>
						<Meta>Website</Meta>
						<Link href='https://wvsu-usc.org/'>
							Hosted website link <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem> */}
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web Application</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>NextJS, Typescript, TailwindCSS, Laravel, PostgreSQL</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/URBANITY/URBANITY-admin1.png" alt="URBANITY admin client" />
				<WorkImage src="/images/works/URBANITY/URBANITY-admin2.png" alt="URBANITY admin client" />
			</Container>
		</Layout>
	)
}

export default Work
