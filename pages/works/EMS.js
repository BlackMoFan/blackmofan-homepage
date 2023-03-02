import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Employee Management System">
			<Container>
				<Title>
					Employee Management System <Badge>2022</Badge>
				</Title>
				<P>
					An Employee Management System for Our Subject, Software Engineering I
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Repository</Meta>
						<Link href='https://github.com/BlackMoFan/script-kiddies'>
							Github <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Website</Meta>
						<Link href='http://dishevelled-title.000webhostapp.com/utilities/login.php'>
							Webhostapp <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web Application</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>HTML, CSS, Javascript, MySQL, PHP</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/script-kiddies.png" alt="EMS" />
			</Container>
		</Layout>
	)
}

export default Work
