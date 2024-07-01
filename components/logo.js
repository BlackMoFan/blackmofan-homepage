import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;
	
	&:hover img {
		transform: rotate(20deg);
	}
`

const Logo = () => {
	const footPrintImg = `/images/logo${useColorModeValue('','-dark')}.webp`
	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={footPrintImg} width={40} height={40} alt="logo" />
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily='M PLUS Rounded 1c", sans-serif'
						fontWeight="bold"
						ml={4}>
							Black Mo Fan
						</Text>
				</LogoBox>
			</a>
		</Link>
	)
}

export default Logo
