import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Dog Age Converter">
			<Container>
				<Title>
					Dog Age Converter <Badge>2021</Badge>
				</Title>
				<P>
					Converts Dog's Age in Years to Human Years
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/dogAgeConverter'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Website</Meta>
						<Link href='https://dog-age-converter.vercel.app/'>
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
				
				<WorkImage src="/images/works/dogAgeConverter.png" alt="EMS" />
			</Container>
		</Layout>
	)
}

export default Work
