import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
const HereToStay = () => {
    return (
        <Stack color={'bgColor.100'} textAlign={'center'} w={{base: '90%', md: '60%'}} m={'auto'} p={'50px'} >
            <Text fontSize={'20px'} fontWeight={'700'}>EventEase Is Here To Stay</Text>
            <Text>
                Both organizers and attendees benefit from our intuitive design and easy navigation,
                backed by our dedicated support whenever you need assistance. Choose EventEase for a hassle-free,
                efficient, and enjoyable event management experience, and make your next event a success with us!
            </Text>
        </Stack>
    )
}

export default HereToStay