import {
  Stack,
  Text,
  Card,
  Image,
} from "@chakra-ui/react";
import activity1 from "../../assets/activity1.svg";
import command from "../../assets/command1.svg";
import pieChart from "../../assets/pie-chart1.svg";
const WhyEventEase = () => {
  return (
    <Stack m={'auto'} direction={{ base: 'column', md: 'row' }} gap={'20px'} pt={'50px'} pb={'50px'} justifyContent={'center'} alignItems={'center'}>
      <Stack color={'bgColor.400'} w={{base: '100%', md: '50%'}} p={'20px'}>
        <Text fontSize={{ base: '30px', md: '50px' }} fontWeight={'900'}>Why Should I use EventEase?</Text>
        <Text fontSize={'14px'}>
          EventEase is your ultimate solution for seamless event management.
          Easily create and manage events with our user-friendly interface, and
          effortlessly sell tickets online while keeping track of sales in
          real-time. Streamline the registration process for your attendees to
          ensure a smooth check-in experience, and enjoy secure and reliable
          payment processing with trusted gateways.
        </Text>
      </Stack>
      <Stack color={'bgColor.400'} fontSize={'14px'} p={'20px'}>
        <Card p={'5px'} direction={'row'} shadow={'none'}>
          <Image src={activity1} alt="activity" w={'30px'} position={'absolute'} top={'5%'} CardShadow={'lg'}/>
          <Stack position={'relative'} left={'12%'} w={'80%'}>
            <Text fontWeight={'900'}>Simple and Effective</Text>
            <Text>Easily create and manage events with our user-friendly interface.</Text>
          </Stack>
        </Card>
        <Card p={'5px'} direction={'row'} shadow={'none'}>
          <Image src={pieChart} alt="activity" w={'30px'} position={'absolute'} top={'5%'} CardShadow={'lg'}/>
          <Stack position={'relative'} left={'12%'} w={'80%'}>
            <Text fontWeight={'900'}>Data Management</Text>
            <Text>Access detailed reports and analytics to understand your event’s performance.</Text>
          </Stack>
        </Card>
        <Card p={'5px'} direction={'row'} shadow={'none'}>
          <Image src={command} alt="activity" w={'30px'} position={'absolute'} top={'5%'} CardShadow={'lg'}/>
          <Stack position={'relative'} left={'12%'} w={'80%'}>
            <Text fontWeight={'900'}>Secure Payments</Text>
            <Text>Enjoy secure and reliable payment processing with trusted gateways.</Text>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};

export default WhyEventEase;
