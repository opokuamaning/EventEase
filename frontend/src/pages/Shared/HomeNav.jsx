import { HStack, Image, Text, Button } from '@chakra-ui/react'
import Logo from '../../assets/icon.svg'
const HomeNav = () => {
    return (
        <HStack alignItems={'center'} justifyContent={'space-between'} p={'15px'} bgGradient='linear(to-r, bgColor.200t, bgColor.100t)'>
            <HStack>
                <Image src={Logo} />
                <Text fontWeight={'600'} fontSize={'20px'} color={'bgColor.400'}>EventEase</Text>
            </HStack>
            <HStack>
                <Button border={'1px solid #D0D5DD'} p={'7px'} borderRadius={'5px'}>Login</Button>
                <Button backgroundColor={'bgColor.300'} color={'bgColor.100'} borderRadius={'5px'}>Sign Up</Button>
            </HStack>
        </HStack>
    )
}

export default HomeNav