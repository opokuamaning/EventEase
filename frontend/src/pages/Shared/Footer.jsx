import { Stack, UnorderedList, ListItem, Text } from '@chakra-ui/react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Stack m={'auto'} w={{base: '100%', md: '70%'}} color={'bgColor.100'}>
            <Stack display={'flex'} gap={30} p={'30px 10px'}>
                <Stack direction={{ base: 'column', md: 'row' }} gap={10} justifyContent={'space-between'}>
                    <UnorderedList styleType={'none'}>
                        <ListItem fontWeight={'700'}>Contact us</ListItem>
                        <ListItem fontWeight={'300'}>Phone: +233205858348</ListItem>
                        <ListItem fontWeight={'300'}>Email: amaningopoku@gmail.com</ListItem>
                    </UnorderedList>
                    <UnorderedList styleType={'none'}>
                        <ListItem fontWeight={'700'}>Get In Touch</ListItem>
                        <Stack direction={'row'} gap={10} fontWeight={'300'}>
                            <Stack>
                                <ListItem>Contact Us</ListItem>
                                <ListItem>Privacy Policy</ListItem>
                            </Stack>
                            <Stack>
                                <ListItem>East legon</ListItem>
                                <ListItem>Accra - Ghana</ListItem>
                            </Stack>
                        </Stack>
                    </UnorderedList>
                </Stack>
                <Stack m={'auto'}>
                    <Stack p={'10px 10px'} direction={'row'}>
                    <Stack direction={'row'} fontSize={'25px'} alignItems={'center'} >
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                    </Stack>
                    <Stack>
                        <Text>Copyright © All rights Reserved</Text>
                    </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer