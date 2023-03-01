import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

// import thumbMarkList from '../public/images/works/studentRegistration.png'
import thumbMarkList from '../public/images/works/origami.jpg'
// import thumbWifiDisplay from '../public/images/works/cmdIcon.png'
import thumbWifiDisplay from '../public/images/works/judah.jpg'
import employeeIcon from '../public/images/works/console.jpg'
import artAppreciation from '../public/images/works/into-the-light.jpg'
import dogAge from '../public/images/works/coffee.jpg'
import personallink from '../public/images/works/retrocam.jpg'


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
							Simple Console Application for Win X and Linux Users to Display WiFi Information
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="EMS" title="Employee Management System" thumbnail={employeeIcon}>
							An Employee Management System for Our Subject, Software Engineering I
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="Hiraya" title="Hiraya for Art Appreciation" thumbnail={artAppreciation}>
							An Art Exhibition Page for Our Subject, Software Engineering I
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="doggo" title="Dog Age Converter" thumbnail={dogAge}>
							Converts Dog Years to Human Years
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="personalLink" title="Personal Linktree-like Site" thumbnail={personallink}>
							Compilation of all my social media accounts
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Works
