import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import EMS from '../public/images/works/thumbnail/employee.png'
import RottenOrange from '../public/images/works/thumbnail/rotten.png'
import artAppreciation from '../public/images/works/thumbnail/artgallery.png'
import dogAge from '../public/images/works/thumbnail/dog.png'
import personallink from '../public/images/works/thumbnail/links.png'
import PIS from '../public/images/works/thumbnail/poison.png'
import USC from '../public/images/works/thumbnail/USC.png'
import PRG from '../public/images/works/thumbnail/PRG.png'
import URBANITY from '../public/images/works/thumbnail/URBANITY.png'


const Works = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Works
				</Heading>

				<SimpleGrid columns={[1,1,2]} gap={6}>
					{/* <Section>
						<WorkGridItem id="marklist" title="Mark List" thumbnail={thumbMarkList}>
							A Student Registration and Mark List System Console Application with Password Support 
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="wifiDisplay" title="WiFi Display" thumbnail={thumbWifiDisplay}>
							Simple Console Application for Win X and Linux Users to Display WiFi Information
						</WorkGridItem>
					</Section> */}
					<Section>
						<WorkGridItem id="EMS" title="Employee Management System" thumbnail={EMS}>
							A website application for managing employees efficiently
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="PIS" title="Poison Information Service" thumbnail={PIS}>
							A web application enabling patients to report poisoning incidents for immediate referral to the nearest hospital with the required antidote.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="RottenOrange" title="Rotten Orange" thumbnail={RottenOrange}>
							Comprehensive SaaS solution for hotel and lodging businesses.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="USC" title="WVSU USC" thumbnail={USC}>
							The ultimate hub for all WVSU University Student Council activities.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="PRG" title="PRG 2023" thumbnail={PRG}>
							Official PRG 2023 Visayas Leg website with real-time unofficial sport scores, managed by designated West Visayas State University personnel.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="URBANITY" title="URBANITY" thumbnail={URBANITY}>
							CMS for Parc Regency Residences - G, ensuring tenancy and financial transparency.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="Hiraya" title="Hiraya for Art Appreciation" thumbnail={artAppreciation}>
							Art exhibition page showcasing diverse creative works.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="doggo" title="Dog Age Converter" thumbnail={dogAge}>
							A web app converting dog years to human years.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id="personalLink" title="Personal Linktree-like Site" thumbnail={personallink}>
							A web app compiling all my social media account links, similar to Linktree.
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Works
