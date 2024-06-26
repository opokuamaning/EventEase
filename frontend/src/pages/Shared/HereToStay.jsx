import { Stack, Text } from '@chakra-ui/react'
const HereToStay = () => {
    return (
        <Stack color={'bgColor.100'} textAlign={'center'} p={{base: '10px', md: '50px'}} m={'auto'}>
            <Text fontSize={{base: '25px', md: '36px'}} fontWeight={'700'}>EventEase Is Here To Stay</Text>
            <Text>
                Both organizers and attendees benefit from our intuitive design and easy navigation,
                backed by our dedicated support whenever you need assistance. Choose EventEase for a hassle-free,
                efficient, and enjoyable event management experience, and make your next event a success with us!
            </Text>
        </Stack>
    )
}

export default HereToStay