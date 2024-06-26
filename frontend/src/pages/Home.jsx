import { Stack } from '@chakra-ui/react'
import HomeNav from './Shared/HomeNav'
import CallToAction from './Shared/CallToAction'
import WhyEventEase from './Shared/WhyEventEase'
import BenefitsOfEventEase from './Shared/BenefitsOfEventEase'
import HereToStay from './Shared/HereToStay'
import GetStarted from './Shared/GetStarted'
import Footer from './Shared/Footer'
const Home = () => {
    return (
        <Stack>
            <HomeNav />
            <Stack bgGradient='linear(to-r, bgColor.200t, bgColor.100t)' mt={'-8px'}>
                <CallToAction />
            </Stack>
            <Stack>
                <WhyEventEase />
            </Stack>
            <Stack bgGradient='linear(to-r, bgColor.100t, bgColor.200t)'>
                <BenefitsOfEventEase />
            </Stack>
            <Stack bgGradient='linear(to-r, bgColor.300, bgColor.1200, bgColor.300)' mt={'-8px'}>
                <HereToStay />
            </Stack>
            <Stack>
                <GetStarted />
            </Stack>
            <Stack backgroundColor={'bgColor.300'}>
                <Footer />
            </Stack>
        </Stack>
    )
}

export default Home