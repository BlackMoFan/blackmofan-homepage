import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="WVSU USC">
			<Container>
				<Title>
					WVSU-USC Main Website <Badge>2022</Badge>
				</Title>
				<P>
					One-stop goto for everything related to the WVSU University Student Council
				</P>
				<List ml={4} my={4}>
					{/* <ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/one-stop-link-sharing'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem> */}
					<ListItem>
						<Meta>Website</Meta>
						<Link href='https://wvsu-usc.org/'>
							Hosted website link <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web Application</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ReactJS, TailwindCSS, PHP Doctrine</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/USC/USC1.png" alt="USC public client" />
				<WorkImage src="/images/works/USC/USC2.png" alt="USC public client" />
				<WorkImage src="/images/works/USC/USC-admin.png" alt="USC admin client" />
			</Container>
		</Layout>
	)
}

export default Work
