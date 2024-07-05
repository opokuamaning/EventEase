import { HStack, Stack, Image, Text, WrapItem, Avatar, Tabs, TabList, Tab, } from '@chakra-ui/react'
import Logo from '../../../assets/icon.svg'
import { Link, Outlet, } from 'react-router-dom'
import Footer from '../../../pages/Shared/Footer'
const EventNav = () => {
    return (
        <Stack color={'bgColor.400'}>
            <HStack position={'fixed'} w={'100%'} alignItems={'center'} justifyContent={'space-between'} p={{ base: '15px', md: '15px 70px' }} zIndex={'1000'} bgGradient={{ base: 'linear(to-r, bgColor.200t, bgColor.100t)', md: 'bgColor.100' }}>
                <Link to='/'>
                    <HStack>
                        <Image src={Logo} w={'40px'} />
                        <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.400'}>EventEase</Text>
                    </HStack>
                </Link>
                <Stack>
                    <Tabs variant='unstyled'>
                        <TabList>
                            <Tab>Event</Tab>
                            <Tab>My Event</Tab>
                            <Tab>My Tickets</Tab>
                        </TabList>
                    </Tabs>
                </Stack>
                <HStack>
                    <WrapItem>
                        <Avatar size='md' name='Ryan  ' src='' />{' '}
                    </WrapItem>
                </HStack>
            </HStack>
            <Outlet />
            <Stack backgroundColor={'bgColor.300'}>
                <Footer />
            </Stack>
        </Stack>
    )
}

export default EventNav