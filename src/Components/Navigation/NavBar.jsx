import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Input, List, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure, ChevronDownIcon, HStack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const btnRef = React.useRef()
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Flex h="75px" bg="#3c5e00" justifyContent="space-between" alignItems="center" px="4">
                <IconButton onClick={onOpen} ref={btnRef} variant="ghost" color="white" _hover={{ bg: 'main.400' }} fontSize="2xl">
                    <FaBars />
                </IconButton>

                <HStack color="white">
                    <Button as={Link} to="/"  variant="">Home</Button>
                    <Button as={Link} to="/post" variant="">Post</Button>
                    <Button as={Link} to="/card" variant="">Cards</Button>
                </HStack>

                <Menu>
                    <MenuButton  >
                    <Avatar src='/post.jpeg'  />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

                {/* <Popover>
                    <PopoverTrigger>
                             <Avatar />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                                <List>
                                    <ListItem>Profile </ListItem>
                                    <ListItem>Setting </ListItem>
                                </List>
                        </PopoverBody>
                    </PopoverContent>
                </Popover> */}
            </Flex>
        </>
    )
}

export default NavBar