import { ColorModeScript  } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
	render () {
		return(
			<Html lang="en">
			<Head>
				<title>Rod Lester A. Moreno - Portfolio</title>
				<meta name="description" content="Rod Moreno's website portfolio showcasing his projects in software development" />
				<meta name="keywords" content="rod, rod lester, rod moreno, rod lester moreno, blackmofan" />
				<meta property="og:title" content="Rod Lester A. Moreno - Portfolio" />
				<meta property="og:description" content="Rod Moreno's website portfolio showcasing his projects in software development" />
				<meta property="og:image" content="https://blackmofan.vercel.app/images/blackmofan.jpg" />
				{/* Add the favicon link here */}
				<link rel="icon" href="/images/logo.webp" />
			</Head>
			<body>
			<ColorModeScript initialColorMode = {theme.config.initialColorMode} />
			<Main />
			<NextScript />
			</body>
			</Html>
		)
	}
}
