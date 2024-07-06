import { useState } from 'react';
import { Stack, Text, FormControl, Input, FormLabel, FormErrorMessage, InputGroup, InputRightElement, Button, Divider, Link, Image, Checkbox } from '@chakra-ui/react';
import googleLogo from '../../assets/Google.svg';
const ForgotPassword = () => {
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
            <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.1400'}>Forgot Password</Text>
            <Text>Enter your registered email to receive reset link in your inbox</Text>
          </Stack>
          <Stack>
            <form action="" >
              <Stack gap={'5'}>
                <FormControl variant="floating" id="your-name" isRequired>
                  <Input type='email' placeholder='' />
                  <FormLabel>Email</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <Button bg={'bgColor.300'} color={'bgColor.100'}>Send Link</Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )};

export default ForgotPassword