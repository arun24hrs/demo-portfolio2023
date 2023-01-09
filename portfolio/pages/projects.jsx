import React from 'react'
import { StarIcon, LinkIcon } from "@chakra-ui/icons";
import {
    Heading,

    Box,

    Text,

    Badge,

    HStack,
    Grid,
  } from "@chakra-ui/react";

const Projects = ({allDetails}) => {
    const {items} = allDetails;
    console.log(items)
  return (
    <Grid>
    {items.map((el) => (
      <Box border={"1px solid red"} onClick={()=>handleClick(el.name)}>
        <Heading size={"md"}>{el.name || "N/A"}</Heading>
        <Text>{el.description || "N/A"}</Text>
        <HStack gap={3}>
          <HStack>
            <StarIcon />
            <Text>{el.watchers}</Text>
          </HStack>
          <HStack>
            <LinkIcon />
            <Text>{el.forks_count}</Text>
          </HStack>
          <Badge colorScheme='purple'>{el.language || "N/A"}</Badge>
        </HStack>
      </Box>
    ))}
    </Grid>
  )
}

export async function getServerSideProps() {
    let resp = await fetch(`https://api.github.com/search/repositories?q=user:arun24hrs+fork:true&sort=updated&per_page=10&type=Repositories`);
    let allData = await resp.json();

    return {
      props: {
        allDetails: allData,
      },
    };
  }

export default Projects