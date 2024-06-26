import { Stack, Text, Card, CardBody, Image, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import gs1 from '../../assets/GetStarted1.svg';
import gs2 from '../../assets/GetStarted2.svg';
import gs3 from '../../assets/GetStarted3.svg';
const GetStarted = () => {
  return (
    <Stack p={{base: '10px', md: '50px'}}>
      <Stack color={'bgColor.400'} w={{base: '90%', md: '60%'}} textAlign={'center'} m={' 50px auto'}>
        <Text fontSize={{base: '25px', md: '36px'}} fontWeight={'700'}>Get Started Now!</Text>
        <Text>
          EventEase provides a comprehensive and efficient solution for all your event
          management needs, helping you create successful and memorable events effortlessly.
        </Text>
      </Stack>
      <Stack m={'auto'}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={gs1}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack spacing='3' w={'80%'} mt={'-100px'} mr={'auto'} ml={'auto'}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'5px'} backgroundColor={'bgColor.100'} h={'232px'} boxShadow={'md'}>
                  <Text textAlign={'center'} p={'10px'}>
                    Don't wait! Sign up for EventEase now and take your event management to the next level with ease,
                    security, and expert support.
                  </Text>
                </Stack>
                <Button rightIcon={<ArrowForwardIcon />} backgroundColor={'transparent'} color={'bgColor.300'}>Sign Up</Button>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={gs2}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack spacing='3' w={'80%'} mt={'-100px'} mr={'auto'} ml={'auto'}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'5px'} backgroundColor={'bgColor.100'} h={'232px'} boxShadow={'md'}>
                  <Text textAlign={'center'} p={'10px'}>
                    Reduce your reliance on multiple tools and platforms by using EventEase
                    as your all-in-one event management solution
                  </Text>
                </Stack>
                <Button rightIcon={<ArrowForwardIcon />} backgroundColor={'transparent'} color={'bgColor.300'}>Sign Up</Button>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={gs3}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack spacing='3' w={'80%'} mt={'-100px'} mr={'auto'} ml={'auto'}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'5px'} backgroundColor={'bgColor.100'} h={'232px'} boxShadow={'md'}>
                  <Text textAlign={'center'} p={'10px'}>
                    Gain valuable insights into your event’s performance with our comprehensive reporting and analytics tools.
                  </Text>
                </Stack>
                <Button rightIcon={<ArrowForwardIcon />} backgroundColor={'transparent'} color={'bgColor.300'}>Sign Up</Button>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default GetStarted