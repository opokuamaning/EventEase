import React from 'react'
import { Image, Divider, Link, Stack, Text, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import sideImage from '../../assets/right-column.svg'
import Logo from '../../assets/icon.svg'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import googleLogo from '../../assets/Google.svg'
const SignUpForm = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Stack color={'bgColor.400'} direction={'row'}>
      <Stack width={{base: '100%', md: '50%'}}>
        <Stack direction={'row'} alignItems={'center'} p={'20px'}>
          <Image src={Logo} w={'40px'} />
          <Text fontWeight={'900'} fontSize={'25px'}>EventEase</Text>
        </Stack>
        <Stack p={'15% 10%'}>
          <Stack lineHeight={'19px'}>
            <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.1400'}>Sign Up</Text>
            <Text>Create A Free Account With Us</Text>
          </Stack>
          <Stack>
            <form action="" >
              <Stack gap={'5'}>
                <FormControl variant="floating" id="your-name" isRequired isInvalid>
                  <Input type='text' placeholder='' />
                  <FormLabel>Your Name</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl variant="floating" id="your-name" isRequired isInvalid>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder=''
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <FaRegEyeSlash /> : <FaRegEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Password</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl variant="floating" id="your-name" isRequired isInvalid>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder=''
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <FaRegEyeSlash /> : <FaRegEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl variant="floating" id="your-name" isRequired isInvalid>
                  <Input type='tel' placeholder='' />
                  <FormLabel>Mobile Number</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <Button bg={'bgColor.300'} color={'bgColor.100'}>Sign Up</Button>
              </Stack>
            </form>
          </Stack>
          <Stack gap={5}>
            <Stack direction={'row'} alignItems={'center'}>
              <Divider bg={'bgColor.1300'}></Divider>
              <Text fontSize={'16px'}>or</Text>
              <Divider bg={'bgColor.1300'}></Divider>
            </Stack>
            <Stack>
              <Button>Continue with Google {` `} <Image src={googleLogo} /></Button>
            </Stack>
            <Stack textAlign={'center'}>
              <Text>Already have an account? <Link color={'bgColor.300'} fontWeight={'600'}>Sign in</Link></Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack width={'50%'} display={{base: 'none', md: 'flex'}}>
        <Image src={sideImage} objectFit={'cover'} />
      </Stack>
    </Stack>
  )
}

export default SignUpForm