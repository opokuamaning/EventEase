import { HStack, Image, Text, Button } from '@chakra-ui/react'
import Logo from '../../assets/icon.svg'
import { Link, } from 'react-router-dom'
const HomeNav = () => {
    return (
        <HStack alignItems={'center'} justifyContent={'space-between'} p={{base: '15px', md: '15px 70px'}} bgGradient='linear(to-r, bgColor.200t, bgColor.100t)'>
            <Link to='/'>
                <HStack>
                    <Image src={Logo} w={'40px'}/>
                    <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.400'}>EventEase</Text>
                </HStack>
            </Link>
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