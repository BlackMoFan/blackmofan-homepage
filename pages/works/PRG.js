import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="PRG 2023">
			<Container>
				<Title>
					Philippine ROTC Games <Badge>2022</Badge>
				</Title>
				<P>
					Official website for PRG 2023 Visayas Leg with updated unofficial scores from each sport. Updated by designated, on-site personnel from West Visayas State University. 
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
						<span>Bootstrap, PHP Doctrine</span>
					</ListItem>
				</List>
				
				<WorkImage src="/images/works/PRG/PRG1.png" alt="PRG public client" />
				<WorkImage src="/images/works/PRG/PRG2.png" alt="PRG public client" />
				<WorkImage src="/images/works/PRG/PRG3.png" alt="PRG public client" />
				<WorkImage src="/images/works/PRG/PRG4.png" alt="PRG public client" />
				<WorkImage src="/images/works/PRG/PRG5.png" alt="PRG public client" />
				<WorkImage src="/images/works/PRG/PRG-admin1.png" alt="PRG admin client" />
				<WorkImage src="/images/works/PRG/PRG-admin2.png" alt="PRG admin client" />
				<WorkImage src="/images/works/PRG/PRG-admin3.png" alt="PRG admin client" />
			</Container>
		</Layout>
	)
}

export default Work
