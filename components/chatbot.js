import { useState } from 'react';
import {
  Box,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  VStack,
  Text,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const Chatbot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const textColor = useColorModeValue('gray.800', 'white');
  const userBgColor = useColorModeValue('teal.100', 'teal.700');
  const botBgColor = useColorModeValue('gray.300', 'gray.500');

  const suggestedQuestions = [
    "Can you summarize your most recent role?",
    "What project are you most proud of and why?",
    "What are your strongest technical skills?"
  ];

  const sendMessage = async (messageContent) => {
    const userMessage = { role: 'user', content: messageContent };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      const botMessage = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error communicating with chatbot:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <>
      <IconButton
        icon={<ChatIcon />}
        aria-label="Chatbot"
        colorScheme="teal"
        onClick={onOpen}
        zIndex="1000"
      />
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent m={5}>
          <ModalHeader>Chat with RØD</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch" h="400px" overflowY="auto" mb={4}>
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  bg={msg.role === 'user' ? userBgColor : botBgColor}
                  alignSelf={msg.role === 'user' ? 'flex-end' : 'flex-start'}
                  px={4}
                  py={2}
                  borderRadius="md"
                  boxShadow="md"
                  maxW="80%"
                >
                  <Text
                    color={textColor}
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                  >
                    {msg.content}
                  </Text>
                </Box>
              ))}
            </VStack>

            {/* Suggested Questions */}
            <VStack spacing={2} mb={3} align="stretch">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  colorScheme="teal"
                  onClick={() => sendMessage(question)}
                  isDisabled={isLoading}
                >
                  {question}
                </Button>
              ))}
            </VStack>

            {/* Input + Send */}
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              mb={2}
            />
            <Button
              colorScheme="teal"
              onClick={handleSendMessage}
              isLoading={isLoading}
              isDisabled={!input.trim()}
            >
              Send
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Chatbot;
