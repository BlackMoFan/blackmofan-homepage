import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({children, router}) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<title>Rod Lester A. Moreno - Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Rod Moreno's website portfolio showcasing his projects in software development" />
				<meta name="keywords" content="rod, rod lester, rod moreno, rod lester moreno, blackmofan" />
				<meta property="og:title" content="Rod Lester A. Moreno - Portfolio" />
				<meta property="og:description" content="Rod Moreno's website portfolio showcasing his projects in software development" />
				<meta property="og:image" content="https://blackmofan.vercel.app/images/blackmofan.jpg" />
			</Head>

			<Navbar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				<NoSsr>
					<VoxelDog />
				</NoSsr>
				{children}
			</Container>
		</Box>
	)
}

export default Main
