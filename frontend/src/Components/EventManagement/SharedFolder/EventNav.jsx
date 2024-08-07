import { HStack, Stack, Image, Text, Tabs, TabList, Tab, Button, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../../../assets/icon.svg'
import { Link, Outlet, } from 'react-router-dom'
import Footer from '../../../pages/Shared/Footer'
const EventNav = () => {
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState('bgColor.100');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor('bgColor.200')
        } else {
            setBgColor('bgColor.100')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <Stack color={'bgColor.400'} >
            <HStack
            position={'fixed'}
            w={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={{ base: '15px', md: '15px 70px' }}
            zIndex={'1000'}
            bg={bgColor}>
            transition={'background-color 0.5s ease'}
            <Link to='/'>
                <HStack>
                    <Image src={Logo} w={'40px'} />
                    <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.400'}>EventEase</Text>
                </HStack>
            </Link>
            <Stack color={'bgColor.400'} display={{ base: 'none', md: 'flex' }}>
                <Tabs variant='unstyled'>
                    <TabList>
                        <Tab onClick={() => navigate('/')}>Home</Tab>
                        <Tab onClick={() => navigate('/events/event-home')}>Events</Tab>
                        <Tab>About Us</Tab>

                        <Tab>Contact Us</Tab>
                    </TabList>
                </Tabs>
            </Stack>
            <HStack display={{ base: 'none', md: 'flex' }}>
                <Link to='/auth/login'>
                    <Button border={'1px solid #D0D5DD'} p={'7px'} borderRadius={'5px'} backgroundColor={'bgColor.100'}>Login</Button>
                </Link>
                <Link to='/auth/signup'>
                    <Button backgroundColor={'bgColor.300'} color={'bgColor.100'} borderRadius={'5px'}>Sign Up</Button>
                </Link>
            </HStack>
            <Stack display={{ base: 'flex', md: 'none' }} color={'bgColor.400'} >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList gap={5}>
                        <MenuItem onClick={() => navigate('/')}>
                            Home
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/events/event-home')}>
                            Events
                        </MenuItem>
                        <MenuItem >
                            About Us
                        </MenuItem>
                        <MenuItem >
                            Contact Us
                        </MenuItem>
                        <MenuItem gap={5}>
                                <Link to='/auth/login'>
                                    <Button border={'1px solid #D0D5DD'} p={'7px'} borderRadius={'5px'} backgroundColor={'bgColor.100'}>Login</Button>
                                </Link>
                                <Link to='/auth/signup'>
                                    <Button backgroundColor={'bgColor.300'} color={'bgColor.100'} borderRadius={'5px'}>Sign Up</Button>
                                </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>

        </HStack>
            <Outlet />
            <Stack backgroundColor={'bgColor.300'}>
                <Footer />
            </Stack>
        </Stack>
    )
}

export default EventNav