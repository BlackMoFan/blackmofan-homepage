import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbMarkList from '../public/images/works/studentRegistration.png'
import thumbWifiDisplay from '../public/images/works/cmdIcon.png'

const Works = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Works
				</Heading>

				<SimpleGrid columns={[1,1,2]} gap={6}>
					<Section>
						<WorkGridItem id="marklist" title="Mark List" thumbnail={thumbMarkList}>
							A Student Registration and Mark List System Console Application with Password Support 
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="wifiDisplay" title="WiFi Display" thumbnail={thumbWifiDisplay}>
							Simple Console Application for Win X Users to Display Information with Security Key for Once-Connected WiFi Networks
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Works
