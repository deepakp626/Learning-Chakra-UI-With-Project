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
    Divider
  } from "@chakra-ui/react";

const YourDetails = () => {
  return (
    <>
           <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
          <VStack spacing={2} align="flex-start">
            <Heading>Your Details</Heading>
            <Text> If you already have a account chick here to log in. </Text>
          </VStack>

          <SimpleGrid columns={2} columnGap={3} rowGap={4}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name :</FormLabel>
                <Input placeholder="Enter first name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name :</FormLabel>
                <Input placeholder="Enter last name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address :</FormLabel>
                <Textarea placeholder="Enter your address" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City :</FormLabel>
                <Input placeholder="Enter City" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country :</FormLabel>
                <Select placeholder="select country">
                  <option>India</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox>Ship to the billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button  w="full" size="lg">
                place item
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
    </>
  )
}

export default YourDetails