import { Stack, Text, Button } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
import { ArrowBackIcon } from "@chakra-ui/icons";
import {QRCodeSVG} from 'qrcode.react';
const BookedSuccessful = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { event } = location.state || {};
  console.log(event);

  if (!event) {
    return <Stack>Event Not Found</Stack>
  }
  const qrValues = JSON.stringify({
    eventName: event.eventName,
    eventLocation: event.eventLocation,
    address: event.address,
    date: event.date,
    time: event.time,
    description: event.description,
    price: event.price,
  })
  console.log(qrValues);
  return (
    <Stack mt={{ base: '94px', md: '70px' }}>
      <Stack color={'bgColor.100'} gap={5} bgGradient={'linear(to-r, bgColor.300, bgColor.1200, bgColor.300)'} p={'30px'} display={'flex'} direction={'row'}>
        <Stack cursor={'pointer'} bg={'bgColor.100'} w={'30px'} h={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} onClick={() => navigate(-1)}>
          <ArrowBackIcon color={'bgColor.300'} />
        </Stack>
        <Stack alignItems={'center'} w={'95%'}>
          <Text fontWeight={'900'} fontSize={{ base: '20px', md: '36px' }}>Ticket Booked Successfully</Text>
          <Text fontSize={'14px'} textAlign={'center'} fontWeight={'500'}>Be sure to add very detailed description to the event.</Text>
        </Stack>
      </Stack>
      <Stack w={{base: '95%', md: '50%'}} gap={'5'} display={'flex'} justifyContent={'center'} alignItems={'center'} m={'50px auto'} >
        <Stack textAlign={'center'}>
          <Text fontSize={'24px'} fontWeight={'900'}>Your Ticket has been booked successfully</Text>
          <Text fontSize={'14px'}>
            Please note that your QR code will be scanned on the day of the event to verify its authenticity.
            An email containing your QR code and all relevant event details will be sent to you upon successful ticket
            purchase. Ensure you bring a digital or printed copy of this email to the event for a seamless entry.
          </Text>
        </Stack>
        <Stack alignItems={'center'}>
          <QRCodeSVG value={qrValues} size={'225'}/>
          <Stack direction={'row'}>
            <Button onClick={()=>navigate('/events/event-home')}>Back to Events</Button>
            <Button bg={'bgColor.1700'} color={'bgColor.100'}>Cancel Ticket</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default BookedSuccessful