import { Image, Divider, Link, Stack, Text, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import googleLogo from '../../assets/Google.svg'
import{ useState } from 'react'
const ResetPassword = () => {
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
            <Text fontWeight={'900'} fontSize={'25px'} color={'bgColor.1400'}>Reset Password</Text>
            <Text>Enter your new password. Make sure to use a strong password.</Text>
          </Stack>
          <Stack>
            <form action="" >
              <Stack gap={'5'}>
                <FormControl variant="floating" id="password" isRequired>
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
                <FormControl variant="floating" id="your-name" isRequired>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={show.confirmPassword ? 'text' : 'password'}
                      placeholder=''
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={()=>handleClick('confirmPassword')}>
                        {show.confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <Button bg={'bgColor.300'} color={'bgColor.100'}>Save New Password</Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ResetPassword