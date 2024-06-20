import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Rotten Orange">
			<Container>
				<Title>
					Rotten Orange <Badge>2023</Badge>
				</Title>
				<P>
					All-in-one Software-as-a-Service (SaaS) for hotel and lodging businesses
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
						<span>HTML, CSS, Javascript, Bootstrap, PHP Doctrine</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/RottenOrange/RottenOrange1.png" alt="Rotten Orange login portal" />
				<WorkImage src="/images/works/RottenOrange/RottenOrange2.png" alt="Rotten Orange admin client" />
				<WorkImage src="/images/works/RottenOrange/RottenOrange3.png" alt="Rotten Orange admin client" />
				<WorkImage src="/images/works/RottenOrange/RottenOrange4.png" alt="Rotten Orange admin client" />
				<WorkImage src="/images/works/RottenOrange/RottenOrange5.png" alt="Rotten Orange admin client" />
			</Container>
		</Layout>
	)
}

export default Work
