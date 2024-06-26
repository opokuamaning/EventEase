import { Stack, Text, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
import benefits from '../../assets/Benefits.svg';
const BenefitsOfEventEase = () => {
    return (
        <Stack m={'auto'} direction={{ base: 'column', md: 'row' }} gap={'20px'} pt={'50px'} pb={'50px'} justifyContent={'center'} alignItems={'center'}>
            <Stack color={'bgColor.400'} w={{ base: '100%', md: '50%' }}>
                <Text fontSize={{ base: '30px', md: '50px' }} fontWeight={'900'}>Benefits of Using EventEase</Text>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='bgColor.300' boxSize={5} />
                        Streamlined Ticket Sales
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='bgColor.300' boxSize={5} />
                        Ease of Use
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='bgColor.300' boxSize={5} />
                        Secure Payments
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='bgColor.300' boxSize={5} />
                        Efficient check-in process
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='bgColor.300' boxSize={5} />
                        Comprehensive Data Management
                    </ListItem>
                </List>
            </Stack>
            <Stack>
                    <Image src={benefits} w={{ base: 'auto', md: '500px' }} />
            </Stack>
        </Stack>
    )
}

export default BenefitsOfEventEase