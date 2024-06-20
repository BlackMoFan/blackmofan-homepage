import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Poison Information Service">
			<Container>
				<Title>
					Poison Information Service <Badge>2022</Badge>
				</Title>
				<P>
					A website application where patients can report their poisoning cases to be referred to the nearest hospital with available antidote
				</P>
				<List ml={4} my={4}>
					{/* <ListItem>
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
					</ListItem> */}
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web Application</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ReactJS, TailwindCSS, Laravel, PostgreSQL</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/PIS.png" alt="PIS public client" />
				<WorkImage src="/images/works/PIS-admin.png" alt="PIS admin client" />
			</Container>
		</Layout>
	)
}

export default Work
