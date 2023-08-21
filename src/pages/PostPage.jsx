import { Avatar, Box, Container, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'


const Postpage = () => {
  return (
    <>
      <Container maxW="container.xl" pb={16}>
        <Stack spacing={4} mt={8}>
          <Heading fontSize="2xl" textTransform="capitalize">Subcribe to my channel</Heading>
          <Image src='/post.jpeg' />
          <HStack>
            <Avatar src='/post.jpeg'  size="lg" />
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quidem doloribus odio nobis quo voluptas eveniet suscipit maiores nulla tempora harum aliquid excepturi magnam neque ipsam. Obcaecati debitis deserunt <eum className=""></eum></Text>

          <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


        </Stack>
      </Container>
    </>
  )
}

export default Postpage