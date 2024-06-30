import { Image, Stack, Text } from '@chakra-ui/react';
import sideImage from '../../assets/right-column.svg'
import Logo from '../../assets/icon.svg'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const AuthPage = () => {
  const navigate = useNavigate()
  return (
    <Stack color={'bgColor.400'} direction={'row'}>
      <Stack width={{ base: '100%', md: '50%' }}>
        <Stack direction={'row'} alignItems={'center'} p={'20px'} onClick={()=>navigate('/')} cursor={'pointer'}>
          <Image src={Logo} w={'40px'} />
          <Text fontWeight={'900'} fontSize={'25px'}>EventEase</Text>
        </Stack>
        <Outlet />
      </Stack>
      <Stack width={'50%'} display={{ base: 'none', md: 'flex' }}>
        <Image src={sideImage} objectFit={'cover'} />
      </Stack>
    </Stack>
  )
}

export default AuthPage