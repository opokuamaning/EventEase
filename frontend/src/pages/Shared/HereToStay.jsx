import { Stack, Text } from '@chakra-ui/react'
const HereToStay = () => {
    return (
        <Stack color={'bgColor.100'} textAlign={'center'} p={{ base: '30px', md: '50px' }} m={'auto'}>
            <Text fontSize={{ base: '25px', md: '36px' }} fontWeight={'700'}>EventEase Is Here To Stay</Text>
            <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Text w={{ base: '95%', md: '50%' }} fontSize={'14px'}>
                    Both organizers and attendees benefit from our intuitive design and easy navigation,
                    backed by our dedicated support whenever you need assistance. Choose EventEase for a hassle-free,
                    efficient, and enjoyable event management experience, and make your next event a success with us!
                </Text>
            </Stack>
        </Stack>
    )
}

export default HereToStay