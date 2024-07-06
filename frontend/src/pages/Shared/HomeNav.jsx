import { HStack, Image, Text, Button, Stack, Tab, Tabs, TabList } from '@chakra-ui/react'
import Logo from '../../assets/icon.svg'
import { Link, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
const HomeNav = () => {
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState('blue');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor('red')
        } else {
            setBgColor('blue')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <HStack
            position={'fixed'}
            w={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={{ base: '15px', md: '15px 70px' }}
            zIndex={'1000'}
            bgGradient={{ base: bgColor, md: bgColor }}>
            <Link to='/'>
                <HStack>
                    <Image src={Logo} w={'40px'} />
                    <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.400'}>EventEase</Text>
                </HStack>
            </Link>
            <Stack color={'bgColor.400'}>
                <Tabs variant='unstyled'>
                    <TabList>
                        <Tab>About Us</Tab>
                        <Tab onClick={() => navigate('/events/event-home')}>Events</Tab>
                        <Tab>Contact Us</Tab>
                    </TabList>
                </Tabs>
            </Stack>
            <HStack>
                <Link to='/auth/login'>
                    <Button border={'1px solid #D0D5DD'} p={'7px'} borderRadius={'5px'} backgroundColor={'bgColor.100'}>Login</Button>
                </Link>
                <Link to='/auth/signup'>
                    <Button backgroundColor={'bgColor.300'} color={'bgColor.100'} borderRadius={'5px'}>Sign Up</Button>
                </Link>
            </HStack>
        </HStack>
    )
}

export default HomeNav