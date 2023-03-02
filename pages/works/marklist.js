import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Mark List">
			<Container>
				<Title>
					Mark List <Badge>2020</Badge>
				</Title>
				<P>
					A Student Registration and Mark List System Console Application with Password Support
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/MiniProjects-Cpp/blob/main/Student%20Registration%20and%20Mark%20List%20System%20-%20Project%20in%20First%20Year%20College.cpp'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>C++, Windows CLI</span>
					</ListItem>
				</List>
				
				{/* <WorkImage src="/images/works/studentRegistration.png" alt="Mark List" /> */}
				<WorkImage src="/images/works/studentRegistration.png" alt="Mark List" />
			</Container>
		</Layout>
	)
}

export default Work
