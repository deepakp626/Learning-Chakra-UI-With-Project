import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import YourDetails from '../Components/YourDetails'
import Card from '../Components/Card'

const cardPage = () => {
  return (
    <>
      <Container maxW="container.xl" p="10">
        <Flex h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <YourDetails />

          <Card />
        </Flex>
      </Container>
    </>
  )
}

export default cardPage