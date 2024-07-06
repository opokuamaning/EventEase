import { Stack, Text, Image, Button } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { eventData as data } from "../../data/db";
const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  const event = data.find(event => event.eventId === parseInt(id, 10));
  console.log(event.eventName, 20);
  if (!event) {
    return <Stack>Event Not Found</Stack>
  }
  return (
    <Stack mt={{ base: '94px', md: '70px' }}>
      <Stack color={'bgColor.100'} gap={5} bgGradient={'linear(to-r, bgColor.300, bgColor.1200, bgColor.300)'} p={'30px'} display={'flex'} alignItems={'center'}>
        <Text fontWeight={'900'} fontSize={{ base: '20px', md: '36px' }}>{event.eventName}</Text>
        <Text fontSize={'14px'} textAlign={'center'} fontWeight={'500'}>Search for your favorite event and register. You can’t afford to miss it</Text>
        <Text fontSize={'14px'} textAlign={'center'} fontWeight={'500'}>{`${event.eventLocation} | ${event.date} at ${event.time}`}</Text>
      </Stack>
      <Stack direction={'row'} display={'flex'} w={'90%'} justifyContent={'center'} m={'50px  auto'}>
        <Stack w={'60%'} gap={10}>
          <Text fontSize={'24px'} fontWeight={'800'}>Description</Text>
          <Text>{event.description}</Text>
          <Text fontWeight={'400'} fontSize={'16px'}>
            Before purchasing a ticket or making a payment through Paystack,
            please read our Privacy Policy. By proceeding, you agree to our terms
            and conditions. For questions, contact our support team.
          </Text>
          {event.eventType === 'Paid' ? (<Button w={'30%'} bg={'bgColor.300'} color={'bgColor.100'}>Buy event ticket for free</Button>) : (<Button w={'30%'} bg={'bgColor.300'} color={'bgColor.100'}>Buy event ticket for GHS {event.price}</Button>)}
        </Stack>
        <Stack w={'40%'}>
          <Image src={event.image} objectFit={'cover'}  w={'400px'} h={'400px'} borderRadius={'32px'} m={'auto'}/>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default EventDetails