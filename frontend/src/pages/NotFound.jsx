import { VStack, Text } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <VStack>
            <Text>Oops!</Text>
            <Text>404 - Page not found</Text>
            {/* <Text>Sorry, the page you are looking for does not exist.</Text> */}
            <Text>{error.statusText || error.message}</Text>
        </VStack>
    )
}

export default NotFound