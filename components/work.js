import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, IconButton } from '@chakra-ui/react'
import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/works">
			<Link>Works</Link>
		</NextLink>
		<span>
			&nbsp;
			<ChevronRightIcon />
			&nbsp;
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

export const WorkImage = ({ src, alt }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Image
				borderRadius="lg"
				w="full"
				src={src}
				alt={alt}
				mb={4}
				cursor="pointer"
				onClick={onOpen}
				boxShadow="md"
			/>
			<Modal isOpen={isOpen} onClose={onClose} size="full">
				<ModalOverlay />
				<ModalContent>
					<ModalBody p={0} position="relative">
						<IconButton
							aria-label="Close full screen"
							icon={<CloseIcon />}
							position="absolute"
							top="10px"
							right="10px"
							zIndex="10"
							onClick={onClose}
							colorScheme="teal"
						/>
						<Image
							src={src}
							alt={alt}
							objectFit="contain"
							w="100%"
							h="100vh"
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
)
