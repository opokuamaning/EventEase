import { Input, Stack, Text, Checkbox, CheckboxGroup, RadioGroup, Box, Radio, Card, CardBody, Heading, Image, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { eventData as data } from "../../data/db";

const EventHome = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [search, setSearch] = useState('');
  const { isOpen, onToggle } = useDisclosure()

  const truncatedDescription = (description, id) => {
    const words = description.split(' ');
    if (words.length <= 15) return description;
    const truncated = words.slice(0, 10).join(' ');
    return <>
      {truncated} <Text color="bgColor.300" onClick={() => navigate(`/events/event-details/${id}`)} cursor={'pointer'}>Read More...</Text>
    </>

  }

  const filteredEvent = data.filter(event => {
    const matchEventType = selectedType.length === 0 || selectedType.includes(event.eventType);
    const matchEventPrice = selectedPrice === '' || (selectedPrice === 'below500' && event.price < 500) || (selectedPrice === 'above500' && event.price >= 500);
    const matchSearch = event.eventName.toLowerCase().includes(search.toLowerCase());
    return matchEventType && matchEventPrice && matchSearch;
  })
  return (
    <Stack mt={{ base: '94px', md: '70px' }}>
      <Stack color={'bgColor.100'} gap={5} bgGradient={'linear(to-r, bgColor.300, bgColor.1200, bgColor.300)'} p={'30px'} display={'flex'} alignItems={'center'}>
        <Text fontWeight={'900'} fontSize={{ base: '20px', md: '36px' }}>Discover New Events Coming Up</Text>
        <Text fontSize={'14px'} textAlign={'center'} fontWeight={'700'}>Search for your favorite event and register. You can’t afford to miss it</Text>
        <Input type="search" onChange={(e) => setSearch(e.target.value)} w={{ base: '100%', md: '30%' }} height={'56px'} border={'1px solid #FFF'} color={'bgColor.1000'} placeholder="Search for events by their name" />
      </Stack>
      <Stack w={'90%'} display={'flex'} m={'auto'} p={'40px 0'}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Stack width={{ base: '100%', md: '15%' }} display={{ base: 'none', md: 'block' }}>
            <Stack>
              <Text fontWeight={'700'} fontSize={'20px'}>Filters</Text>
              <Stack pl={'15px'}>
                <Stack>
                  <Text fontWeight={'500'} fontSize={'16px'}>Type</Text>
                  <CheckboxGroup colorScheme='teal' defaultValue={['Free', 'Paid']} onChange={setSelectedType}>
                    <Stack spacing={[1, 5]} direction={'column'} pl={'15px'}>
                      <Checkbox value='Free' colorScheme="teal">Free</Checkbox>
                      <Checkbox value='Paid'>Paid</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Stack>
                <Stack>
                  <Text fontWeight={'500'} fontSize={'16px'}>Price</Text>
                  <RadioGroup defaultValue='1' onChange={setSelectedPrice}>
                    <Stack spacing={4} direction='column' pl={'15px'}>
                      <Radio value='above500' colorScheme="teal">Above 500</Radio>
                      <Radio value='below500' colorScheme="teal">Below 500</Radio>
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack display={{ base: 'flex', md: 'none' }} alignContent={'center'} >
              <Stack >
                <Stack direction={'row'} display={'flex'} justifyContent={'space-between'}>
                  <Text fontWeight={'700'} fontSize={'20px'}>Filter</Text>
                  <Button onClick={onToggle}>Sort by</Button>
                </Stack>
                <Collapse in={isOpen} animateOpacity>
                  <Stack>
                    <Text fontWeight={'800'} fontSize={'16px'}>Type</Text>
                    <CheckboxGroup colorScheme='teal' defaultValue={['Free', 'Paid']} onChange={setSelectedType}>
                      <Stack spacing={[1, 5]} direction={'column'} pl={'15px'}>
                        <Checkbox value='Free' colorScheme="teal">Free</Checkbox>
                        <Checkbox value='Paid'>Paid</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Stack>
                  <Stack>
                    <Text fontWeight={'800'} fontSize={'16px'}>Price</Text>
                    <RadioGroup defaultValue='1' onChange={setSelectedPrice}>
                      <Stack spacing={4} direction='column' pl={'15px'}>
                        <Radio value='above500' colorScheme="teal" border={'1px solid teal'}>Above 500</Radio>
                        <Radio value='below500' colorScheme="teal" border={'1px solid teal'}>Below 500</Radio>
                      </Stack>
                    </RadioGroup>
                  </Stack>
                </Collapse>
              </Stack>
          </Stack>
          <Stack w={{ base: '95%', md: '85%' }} display={'flex'} flexDirection={{ base: 'column', md: 'row' }} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
            {
              filteredEvent.map((event) => (
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                  w={{ base: '100%', md: '32%' }}
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
                      <Text py='2' fontSize={'12px'}>
                        {truncatedDescription(event.description, event.eventId)}
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