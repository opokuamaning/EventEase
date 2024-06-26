import { Stack, Text, Image, Button, Box } from '@chakra-ui/react'
import curve from '../../assets/Curve.svg'
import heroImage from '../../assets/HeroImage.svg'
const CallToAction = () => {
    return (
        <Stack w={{ base: '90%', md: '90%' }} direction={{ base: 'column', md: 'row' }} display={'flex'} m={'auto'} pt={'50px'} pb={'50px'} gap={'10'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack gap={'6'}>
                <Stack lineHeight={{base: '30px',  md: '54px'}}>
                    <Text fontSize={{base: '30px', md: '54px'}} fontWeight={'900'} color={'bgColor.400'}>Your Ultimate</Text>
                    <Text fontSize={{base: '30px', md: '54px'}} fontWeight={'900'} color={'bgColor.300'}>Event Management</Text>
                    <Text fontSize={{base: '30px', md: '54px'}} fontWeight={'900'} color={'bgColor.400'}>Solution</Text>
                </Stack>
                <Stack>
                    <Box order={{ base: 1, md: 2 }}>
                        <Text color={'bgColor.400'} fontSize={{base: '13px', md: '18px'}} w={{base: 'auto', md: '75%'}} fontWeight={'500'}>EventEase provides the tools to make your event memorable and stress-free. Join us today and experience the ease of perfect event management! </Text>
                    </Box>
                    <Box order={{ base: 2, md: 1 }}>
                        <Image src={curve} w={{base: 'auto', md: '75%'}}/>
                    </Box>
                </Stack>
                <Button backgroundColor={'bgColor.300'} color={'bgColor.100'} w={{ base: 'auto', md: '30%' }}>Get Started For Free</Button>
            </Stack>
            <Stack>
                <Image src={heroImage} w={{ base: 'auto', md: '700px' }} />
            </Stack>
        </Stack>
    )
}

export default CallToAction    