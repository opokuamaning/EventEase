import { Input, Stack, Text, Checkbox, CheckboxGroup, RadioGroup, Radio, Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { eventData as data } from "../../data/db";

const EventHome = () => {
  return (
    <Stack mt={'70px'}>
      <Stack color={'bgColor.100'} gap={5} bgGradient={'linear(to-r, bgColor.300, bgColor.1200, bgColor.300)'} p={'30px'} display={'flex'} alignItems={'center'}>
        <Text fontWeight={'900'} fontSize={'36px'}>Discover New Events Coming Up</Text>
        <Text fontSize={'14px'} fontWeight={'700'}>Search for your favorite event and register. You can’t afford to miss it</Text>
        <Input type="search" w={'30%'} border={'1px solid #FFF'} color={'bgColor.1000'} placeholder="Search for events by their name" />
      </Stack>
      <Stack w={'90%'} display={'flex'} m={'auto'} >
        <Stack direction={'row'}>
          <Stack width={'15%'}>
            <Stack>
              <Text fontWeight={'700'} fontSize={'20px'}>Filters</Text>
              <Stack pl={'15px'}>
                <Stack>
                  <Text fontWeight={'500'} fontSize={'16px'}>Type</Text>
                  <CheckboxGroup colorScheme='green' defaultValue={['Free', 'Paid']}>
                    <Stack spacing={[1, 5]} direction={['column', 'row']} pl={'15px'}>
                      <Checkbox value='naruto'>Free</Checkbox>
                      <Checkbox value='sasuke'>Paid</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Stack>
                <Stack>
                  <Text fontWeight={'500'} fontSize={'16px'}>Price</Text>
                  <RadioGroup defaultValue='1'>
                    <Stack spacing={4} direction='column' pl={'15px'}>
                      <Radio value='2'>Above 500</Radio>
                      <Radio value='3'>Below 500</Radio>
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack w={'85%'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} bg={'red'} justifyContent={'center'}>
            {
              data.map((event) => (
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                  w={'32%'}
                  h={'200px'}
                  key={event.eventId}
                  
                >
                  <Image
                    objectFit='cover'
                    w={'140px    '}
                    maxW={{ base: '100%', sm: '200px' }}
                    src={event.image}
                    alt='Caffe Latte'
                  />

                  <Stack>
                    <CardBody display={'flex'} flexDirection={'column'} gap={3}>
                      <Stack >
                        <Stack direction={'row'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                          <Heading fontSize={'12px'}>{event.eventName}</Heading>
                          <Text fontSize={'8px'} color={event.eventType === 'Free' ? 'bgColor.1500' : 'bgColor.1600'} fontWeight={'500 '}>{event.eventType}</Text>
                        </Stack>
                        <Stack fontSize={'12px'}>
                          <Text>{event.eventLocation} - {event.address}</Text>
                          <Text>{event.date} | {event.time}</Text>
                        </Stack>
                      </Stack>
                      <Text py='2' fontSize={'12px'} > {event.description} <Link to='/paid-event' color={'bgColor.1500'}>Read More...</Link>
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default EventHome