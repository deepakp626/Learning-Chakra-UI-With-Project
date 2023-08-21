import React from 'react'
import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const Card = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
  const textColor = useColorModeValue("gray.600", "whiteAlpha.600")
  return (
    <>
      <VStack bg={bgColor} w="full" h="full" p={10} spacing={10} align="flex-start" >
        <VStack alignItems="flex-start">
          <Heading>Your card</Heading>
          <Text>If the price is too hard on your eyes,</Text>
          <Button onClick={toggleColorMode} variant="outline">Try changes the theme</Button>
        </VStack>
        <HStack spacing={6} alignItems="center" w="full">
          <AspectRatio ratio={1} w={24}>
            <Image src="/post.jpeg" alt="image" />
          </AspectRatio>
          <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Heading size="md">Penny board</Heading>
              <Text color="gray.600">PNYCOM27541</Text>
            </VStack>
            <Heading size="sm" textAlign="end">
              $119.00
            </Heading>
          </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w="full">
          <HStack justifyContent="space-between">
            <Text color={textColor}>Subtotsl</Text>
            <Heading size="sm" >$119.00</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={textColor}>shiping</Text>
            <Heading size="sm" >$19.99</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={textColor}>Taxes (estimated)</Text>
            <Heading size="sm" >$23.99</Heading>
          </HStack>
          <Divider />
          <HStack justifyContent="space-between">
            <Text color={textColor}>total </Text>
            <Heading size="sm" >$162.99</Heading>
          </HStack>
        </VStack>
      </VStack>
    </>
  )
}

export default Card