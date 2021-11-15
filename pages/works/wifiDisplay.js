import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="WiFi Details Display">
			<Container>
				<Title>
					WiFi Details Display <Badge>2021</Badge>
				</Title>
				<P>
					Simple Console Application for Win X Users to Display Information with Security Key for Once-Connected WiFi Networks
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href='https://github.com/BlackMoFan/MiniProjects-Cpp/blob/main/SimpleWiFiPasswordDisplay.cpp'>
							https://github.com/BlackMoFan/MiniProjects-Cpp/blob/main/SimpleWiFiPasswordDisplay.cpp <ExternalLinkIcon mx="2px" />
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
				
				<WorkImage src="/images/works/cmdIcon.png" alt="WiFi Display" />
				<WorkImage src="/images/works/wifiDisplay.png" alt="WiFi Display" />
			</Container>
		</Layout>
	)
}

export default Work
