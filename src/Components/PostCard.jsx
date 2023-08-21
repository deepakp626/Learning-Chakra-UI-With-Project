import { Avatar, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const PostCard = () => {
    return (
        <>
            <Stack maxW="320px" boxShadow="md" borderRadius="xl" >
                <Image src='/post.jpeg' alt='image' />
                <Stack p="2">
                    <HStack>
                        <Avatar name="John Doe" size="sm" />
                        <Text fontWeight="600">John Doe</Text>
                        <Text fontSize="xs">1 min ago</Text>
                    </HStack>
                    <VStack align="flex-start">
                        <Heading fontSize="lg">Subcribe my channal</Heading>
                        <Text fontSize="sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </Text>
                        <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                        <Button as={Link} to="/post" alignSelf="flex-end" size="sm" bg="#3c5e00" color="white" >view post</Button>
                    </VStack>
                </Stack>
            </Stack>
        </>
    )
}

export default PostCard