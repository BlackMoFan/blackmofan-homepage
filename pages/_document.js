import { ColorModeScript  } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
	render () {
		return(
			<Html lang="en">
			<Head>
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
