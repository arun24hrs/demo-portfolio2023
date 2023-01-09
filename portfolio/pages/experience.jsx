import React from 'react'
import {
    Heading,

    Box,

    Text,

    HStack
  } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box
          my={50}
          p={10}
          border="1px solid rgb(100, 162, 0)"
          w={"80%"}
          m="auto"
          gap={4}
        >
          <Heading my={5}>Experience</Heading>
          <HStack gap={57}>
            <Box>
              <Text>IPR EXECUTIVE</Text>
              <Heading size="sm">
                LaskshmiKumaran & Sridharan, New Delhi
              </Heading>
              <ul>
                <li style={{ color: "grey" }}>
                  Analysis of Patent Applications
                </li>
                <li style={{ color: "grey" }}>
                  Preparing Brief Reports for clients
                </li>
                <li style={{ color: "grey" }}>
                  Analysis of the Foreign filed applications.
                </li>
                <li style={{ color: "grey" }}>Preparing and filing Form-3.</li>
              </ul>
            </Box>
            <Box>
              <Text>SERVICE OPERATIONS TRAINEE</Text>
              <Heading size="sm">Radission Blu l Dwarka, New Delhi</Heading>
              <ul>
                <li style={{ color: "grey" }}>
                  Preparing mise en place and Mise-en-scène
                </li>
                <li style={{ color: "grey" }}>Order taking</li>
                <li style={{ color: "grey" }}>Guest Handling</li>
                <li style={{ color: "grey" }}>Billing</li>
              </ul>
            </Box>
            <Box>
              <Text>IPR EXECUTIVE</Text>
              <Heading size="sm">
                LaskshmiKumaran & Sridharan, New Delhi
              </Heading>
              <Text size={"sm"}>
                I have successfully completed industrial training in all four
                major departments which are:
              </Text>
              <ul>
                <li style={{ color: "grey" }}>Front Office</li>
                <li style={{ color: "grey" }}>Food & Beverage Services</li>
                <li style={{ color: "grey" }}>Food Production</li>
                <li style={{ color: "grey" }}>HouseKeeping</li>
              </ul>
            </Box>
          </HStack>
        </Box>
  )
}

export default Experience;




//https://api.github.com/search/repositories?q=user:arun24hrs+fork:true&sort=updated&per_page=10&type=Repositories