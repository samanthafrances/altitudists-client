import React from 'react';
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
} from "@chakra-ui/react";


const Home = () => {
  return (
    <Container maxW='l' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1.5px"
      >
        <Text fontSize="5xl" color="black">
          ALTITUDISTS
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{ }</TabPanel>
            <TabPanel>{ }</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
