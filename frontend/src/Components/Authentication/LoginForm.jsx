import { useState } from 'react';
import { Stack, Text, FormControl, Input, FormLabel, FormErrorMessage, InputGroup, InputRightElement, Button, Divider, Image, Checkbox } from '@chakra-ui/react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import googleLogo from '../../assets/Google.svg';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [show, setShow] = useState({
      password: false,
      confirmPassword: false
    });
    const handleClick = (value) => {
      if (value === 'password') setShow({ ...show, password: !show.password })
          else if (value === 'confirmPassword') setShow({ ...show, confirmPassword: !show.confirmPassword });
    };
  return (
    <Stack color={'bgColor.400'} direction={'row'}>
      <Stack width={'90%'} m={'auto'}>
        <Stack p={'15% 10%'}>
          <Stack lineHeight={'19px'}  pb={'10px'}>
            <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.1400'}>Sign in</Text>
            <Text>Please login to continue to your account.</Text>
          </Stack>
          <Stack>
            <form action="" >
              <Stack gap={'5'}>
                <FormControl variant="floating" id="your-email" isRequired>
                  <Input type='email' placeholder='' />
                  <FormLabel>Your Email</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl variant="floating" id="your-password" isRequired>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show.password ? 'text' : 'password'}
                      placeholder=''
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={()=>handleClick('password')}>
                        {show.password ? <FaRegEyeSlash /> : <FaRegEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Password</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <Stack direction={'row'}>
                 <FormControl >
                    <FormLabel display={'flex'} gap={3} alignItems={'center'} color={'bgColor.1400'}><Checkbox borderColor={'bgColor.1400'} />Remember me</FormLabel>
                  </FormControl>  
                  <Link to={'/auth/forgot-password'} color={'bgColor.300'} w={'50%'}>Forgot Password?</Link> 
                </Stack>
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
              <Button gap={2}><Text>Continue with Google</Text> <Image src={googleLogo} /></Button>
            </Stack>
            <Stack textAlign={'center'}>
              <Text>Already have an account? <Link color={'bgColor.300'} fontWeight={'600'} to={'/auth/signup'}>Sign in</Link></Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )};

export default LoginForm