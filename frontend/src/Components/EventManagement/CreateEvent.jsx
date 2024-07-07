import { Stack, Text, FormControl, Input, FormLabel, FormErrorMessage, InputGroup, Button, Switch, Image } from "@chakra-ui/react";
import { ArrowBackIcon, } from "@chakra-ui/icons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CreateEvent = () => {
  return (
    <Stack mt={{ base: '94px', md: '70px' }}>
      <Stack color={'bgColor.100'} gap={5} bgGradient={'linear(to-r, bgColor.300, bgColor.1200, bgColor.300)'} p={'30px'} display={'flex'} direction={'row'}>
        <Stack bg={'bgColor.100'} w={'30px'} h={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} onClick={() => navigate(-1)}>
          <ArrowBackIcon color={'bgColor.300'} />
        </Stack>
        <Stack alignItems={'center'} w={'95%'}>
          <Text fontWeight={'900'} fontSize={{ base: '20px', md: '36px' }}>Create New Event</Text>
          <Text fontSize={'14px'} textAlign={'center'} fontWeight={'500'}>Be sure to add very detailed description to the event.</Text>
        </Stack>
      </Stack>
      <Stack w={'50%'} display={'flex'} m={'50px auto'}>
        <form action="" >
          <Stack gap={'5'}>
            <Stack direction={'row'}>
              <FormControl variant="floating" id="event-name" isRequired>
                <Input type='text' placeholder='' />
                <FormLabel>Event Name</FormLabel>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl variant="floating" id="event-venue" isRequired>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type='text'
                    placeholder=''
                  />
                </InputGroup>
                <FormLabel>Event Date</FormLabel>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack direction={'row'}>
              <FormControl variant="floating" id="event-name" isRequired>
                <Input type='text' placeholder='' />
                <FormLabel>Event Price</FormLabel>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl variant="floating" id="event-venue" isRequired>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type='text'
                    placeholder=''
                  />
                </InputGroup>
                <FormLabel>Event Venue</FormLabel>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl id="event-summary" >
                <FormLabel>Event Summary</FormLabel>
                <Stack borderRadius={'10px'}>
                  <ReactQuill theme="snow" />
                </Stack>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl id="event-summary" >
                <FormLabel>Event Description</FormLabel>
                <Stack borderRadius={'10px'}>
                  <ReactQuill theme="snow" />
                </Stack>
              </FormControl>
            </Stack>
            <Stack>
              <Stack direction={'row'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'14px'}>Make this event free</Text>
                <FormControl display='flex' alignItems='center' w={'20%'}>
                  <FormLabel htmlFor='email-alerts' mb={'0'}>
                    No
                  </FormLabel>
                  <Switch id='email-alerts' mr={'15px'} />
                  <FormLabel htmlFor='email-alerts' mb={'0'} >
                    Yes
                  </FormLabel>
                </FormControl>
                <FormLabel >
                  <Input type="file" />
                </FormLabel>
              </Stack>
              <Stack></Stack>
            </Stack>
            <Image />
            <Stack  alignItems={'end'} >
              <Stack direction={'row'}>
              <Button>Cancel</Button>
              <Button bg={'bgColor.300'} color={'bgColor.100'}>Save Event</Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  )
}

export default CreateEvent