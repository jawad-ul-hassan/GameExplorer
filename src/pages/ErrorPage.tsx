import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        rowGap="25px"
        padding={3}
      >
        <Heading fontSize="7xl">Oops!</Heading>
        <Text fontSize="2xl">
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An expected error occured.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
