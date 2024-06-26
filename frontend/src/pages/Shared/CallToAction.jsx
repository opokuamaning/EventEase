import { Stack, Text, Image, Button } from '@chakra-ui/react'
import curve from '../../assets/Curve.svg'
import heroImage from '../../assets/HeroImage.svg'
const CallToAction = () => {
    return (
        <Stack w={{ base: '90%', md: '50%' }} display={'flex'} m={'auto'} p={'5px'} gap={'10'}>
            <Stack gap={'6'}>
                <Stack lineHeight={'30px'}>
                    <Text fontSize={'35px'} fontWeight={'900'} color={'bgColor.400'}>Your Ultimate</Text>
                    <Text fontSize={'35px'} fontWeight={'900'} color={'bgColor.300'}>Event Management</Text>
                    <Text fontSize={'35px'} fontWeight={'900'} color={'bgColor.400'}>Solution</Text>
                </Stack>
                <Text color={'bgColor.400'} fontSize={'13px'} fontWeight={'500'}>EventEase provides the tools to make your event memorable and stress-free. Join us today and experience the ease of perfect event management! </Text>
                <Image src={curve} />
                <Button backgroundColor={'bgColor.300'} color={'bgColor.100'}>Get Started For Free</Button>
            </Stack>
            <Stack>
                <Image src={heroImage} />
            </Stack>
        </Stack>
    )
}

export default CallToAction    