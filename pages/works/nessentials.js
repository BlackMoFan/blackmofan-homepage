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
					BigCommerce Website<Badge>2024</Badge>
				</Title>
				<P>
					Maintained and developed a BigCommerce website for N-Essentials, an Australian company that sells essential oils and other related products. I also implemented SEO strategies to improve the website&apos;s visibility on search engines.
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
						<Link href='https://n-essentials.com.au'>
							N-Essentials <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>BigCommerce</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>HTML, CSS, Javascript, BigCommerce, Python, GraphQL</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/n-essentials.png" alt="NESSENTIALS" />
			</Container>
		</Layout>
	)
}

export default Work
