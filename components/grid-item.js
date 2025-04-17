import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
	const bgColor = useColorModeValue('white', 'gray.800')
	const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')
	const hoverBgColor = useColorModeValue('gray.100', 'gray.700')

	return (
		<Box
			w="100%"
			align="center"
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
			bg={bgColor}
			transition="transform 0.3s, box-shadow 0.3s, background-color 0.3s"
			_hover={{
				transform: 'scale(1.05)',
				boxShadow: 'lg',
				bg: hoverBgColor,
			}}
		>
			<LinkBox cursor="pointer">
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeholder="blur"
					loading="lazy"
				/>
				<LinkOverlay href={href} target="_blank">
					<Text mt={2} fontSize={20} fontWeight="bold" color={textColor}>
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14} mt={1} color={textColor}>
					{children}
				</Text>
			</LinkBox>
		</Box>
	)
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
	const borderColor = useColorModeValue('white', 'gray.600')
	const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')
	const hoverBgColor = useColorModeValue('white', 'gray.600')

	return (
		<Box
			w="100%"
			align="center"
			p={5}
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
			borderColor={borderColor}
			borderWidth={2}
			// bg={bgColor}
			transition="transform 0.3s, box-shadow 0.3s, background-color 0.3s"
			_hover={{
				transform: 'scale(1.05)',
				boxShadow: 'lg',
				bg: hoverBgColor,
			}}
		>
			<NextLink href={`/works/${id}`} passHref>
				<LinkBox cursor="pointer">
					<Image
						src={thumbnail}
						alt={title}
						className="grid-item-thumbnail"
						placeholder="blur"
						loading="lazy"
					/>
					<LinkOverlay href={`/works/${id}`}>
						<Text mt={1} fontSize={20} fontWeight="bold" color={textColor} lineHeight={1.2}>
							{title}
						</Text>
					</LinkOverlay>
					<Text fontSize={14} mt={1} color={textColor}>
						{children}
					</Text>
				</LinkBox>
			</NextLink>
		</Box>
	)
}

export const GridItemStyle = () => (
	<Global
		styles={`
		.grid-item-thumbnail {
			border-radius: 12px;
		}
		`}
	/>
)
