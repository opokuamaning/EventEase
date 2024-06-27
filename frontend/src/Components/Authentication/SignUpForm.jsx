import React from 'react'
import { Image, Stack, Text, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import sideImage from '../../assets/right-column.svg'
import Logo from '../../assets/icon.svg'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Stack color={'bgColor.400'} direction={'row'} h={'100vh'}>
      <Stack width={'40%'}>
        <Stack direction={'row'} alignItems={'center'} p={'20px'}>
          <Image src={Logo} w={'40px'} />
          <Text fontWeight={'900'} fontSize={'25px'}>EventEase</Text>
        </Stack>
        <Stack p={'10%'}>
          <Stack lineHeight={'19px'}>
            <Text fontWeight={'900'} fontSize={'25px'}>Sign Up</Text>
            <Text>Create A Free Account With Us</Text>
          </Stack>
          <Stack>
            <form action="" >
              <Stack gap={'5'}>
                <FormControl>
                  <FormLabel>Your Name</FormLabel>
                  <Input type='text' />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <FaRegEyeSlash /> : <FaRegEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <FaRegEyeSlash /> : <FaRegEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input type='tel' />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <Button bg={'bgColor.300'} color={'bgColor.100'}>Sign Up</Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
      <Stack width={'60%'}>
        <Image src={sideImage} objectFit={'cover'} />
      </Stack>
    </Stack>
  )
}

export default SignUpForm