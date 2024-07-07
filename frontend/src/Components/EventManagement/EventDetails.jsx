import { Stack, Text, Image, Button } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom";
import { eventData as data } from "../../data/db";
import { ArrowBackIcon } from "@chakra-ui/icons";
const EventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const event = data.find(event => event.eventId === parseInt(id, 10));
  console.log(event.eventName, 20);

  if (!event) {
    return <Stack>Event Not Found</Stack>
  }

  const handleBookTicket = () => {
    navigate('/events/booking-success/', { state: { event } });
  }
  return (
    <Stack mt={{ base: '94px', md: '70px' }}>
      <Stack color={'bgColor.100'} gap={5} bgGradient={'linear(to-r, bgColor.300, bgColor.1200, bgColor.300)'} p={'30px'} display={'flex'} direction={'row'}>
        <Stack cursor={'pointer'} bg={'bgColor.100'} w={'30px'} h={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} onClick={() => navigate(-1)}>
          <ArrowBackIcon color={'bgColor.300'} />
        </Stack>
        <Stack alignItems={'center'} w={'95%'}>
          <Text fontWeight={'900'} fontSize={{ base: '20px', md: '36px' }}>{event.eventName}</Text>
          <Text fontSize={'14px'} textAlign={'center'} fontWeight={'500'}>{event.eventSummary}</Text>
          <Text fontSize={'14px'} textAlign={'center'} fontWeight={'500'}>{event ? `${event.eventLocation} | ${event.date} at ${event.time}` : ''}</Text>
        </Stack>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} display={'flex'} w={'90%'} justifyContent={'center'} m={'50px  auto'}>
        <Stack w={{ base: '100%', md: '60%' }} gap={10}>
          <Text fontSize={'24px'} fontWeight={'800'}>Description</Text>
          <Text>{event.description}</Text>

        </Stack>
        <Stack w={{ base: '100%', md: '40%' }}>
          <Image src={event.image} objectFit={'cover'} w={{ base: '300px', md: '400px' }} h={{ base: '300px', md: '400px' }} borderRadius={'32px'} m={'auto'} />
        </Stack>
      </Stack>
      <Stack  w={{base: '95%', md: '40%'}} m={{base: 'auto', md: '0'}} pl={{base: '0', md: '5%'}}>
        <Text fontSize={'14px'}>
          Before purchasing a ticket or making a payment through Paystack,
          please read our Privacy Policy. By proceeding, you agree to our terms
          and conditions. For questions, contact our support team.
        </Text>
        <Button alignSelf={{base: 'center', md: 'start'}} backgroundColor={'bgColor.300'} color={'bgColor.100'} w={{ base: '70%', md: '40%' }} onClick={handleBookTicket}>{event.eventType === 'Free' ? <Text>Buy event ticket for free</Text> : <Text>Buy event ticket for GHS {event.price}</Text>}</Button>
      </Stack>
    </Stack>
  )
}

export default EventDetails