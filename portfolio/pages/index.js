import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'
import Router, {useRouter} from 'next/router'
import { StarIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  HStack,
  Grid,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ details, allDetails }) {

  const {items} = allDetails;

  console.log(items)
  const handleClick = (name) => {
    Router.push(`https://github.com/arun24hrs/${name}`)
  }

  return (


    <>
      <Head>
        <title>Arun Kr. Rana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/98110085?s=40&v=4"
        />
      </Head>
      <main>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={details.avatar_url}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {details.name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @{details.login}
          </Text>
          <Text fontWeight={400} color={"gray.500"} mb={4}>
            {details.location}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("grey.700", "grey.400")}
            px={1}
          >
            {details.bio}
          </Text>

          <Stack
            align={"center"}
            justify={"center"}
            direction={"row"}
            mt={6}
            wrap={"wrap"}
            gap={2}
          >
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              HTML
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              CSS
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              JavaScript
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              React.js
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              Next.js
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              Redux
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("green.100", "gray.800")}
              fontWeight={"400"}
            >
              TypeScript
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Link
              href={
                "https://drive.google.com/file/d/18wXitz8_BBiXIaVl7kbHnaPaGxHstyXr/view?usp=sharing"
              }
              isExternal
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Resume
              </Button>
            </Link>
            <Link href={details.html_url} isExternal>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Follow
              </Button>
            </Link>
          </Stack>
        </Box>
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
        {/* <Grid>
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
        </Grid> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  let resp = await fetch(`https://api.github.com/users/arun24hrs`);
  let allData = await resp.json();

  let res = await fetch(`https://api.github.com/search/repositories?q=user:arun24hrs+fork:true&sort=updated&per_page=10&type=Repositories`);
  let data = await res.json();

  return {
    props: {
      details: data,
      allDetails: allData,
    },
  };
}