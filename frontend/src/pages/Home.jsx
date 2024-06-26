import { Stack, Text } from '@chakra-ui/react'
import HomeNav from './Shared/HomeNav'
import CallToAction from './Shared/CallToAction'

const Home = () => {
    return (
        <Stack>
            <HomeNav />
            <Stack bgGradient='linear(to-r, bgColor.200t, bgColor.100t)' mt={'-8px'}>
                <CallToAction />
            </Stack>
        </Stack>
    )
}

export default Home