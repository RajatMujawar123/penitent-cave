import {
    Box,
    Image,
    Flex,
    HStack,
    Input,
    Text,
    Tooltip
  } from "@chakra-ui/react";
  import { Spacer } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  
  
  
  function Navbar() {
    return (
      <>
        <Flex
          border="solid red 1px"
          minWidth="full"
          alignitem="center"
          py={1}
          px={12}
          bg="black"
          color="white"
          justifyContent="center"
        >
          <Box p={1}>
            <HStack spacing={10}>
              <Tooltip
                bg="white"
                color="black"
                p={3}
                fontSize="12px"
                label="On All Orders Above 799"
              >
                <Text gap="10px" fontWeight={600} fontSize="13px">
                  Free Shipping
                </Text>
              </Tooltip>
  
              <Tooltip
                bg="white"
                color="black"
                width="180px"
                p={3}
                fontSize="12px"
                label="Order Online and collect at a Store of your choice for free"
              >
                <Text fontWeight={600} fontSize="13px">
                  Click & Collect
                </Text>
              </Tooltip>
  
              <Tooltip
                bg="white"
                color="black"
                p={3}
                fontSize="12px"
                label="Return to your nearest Store"
              >
                <Text fontWeight={600} fontSize="13px">
                  Return To Store
                </Text>
              </Tooltip>
            </HStack>
          </Box>
          <Spacer />
  
          <Box p={1}>
            <HStack spacing={5}>
              <Link to="/">
                <Text fontWeight={600} fontSize="13px">
                  Download Our App
                </Text>
              </Link>
              <Box>|</Box>
              <Link to="/login">
                <Text fontWeight={600} fontSize="13px">
                  Store Locator
                </Text>
              </Link>
              <Box>|</Box>
              <Link to="/cart">
                <Text fontWeight={600} fontSize="13px">
                  Help
                </Text>
              </Link>
            </HStack>
          </Box>
        </Flex>
  
        <Box height="70px">
        <Flex alignContent="center" alignitem="center" p={1} justifyContent="space-evenly"  border="solid teal 1px" height="70px">
          <Box fontWeight={500} fontSize="15px" width="500px" p={1} >
            <HStack spacing={2}>
            
              <Image width="35%" height="50px" src="https://blog.lifestylestores.com/wp-content/uploads/2021/02/Lifestyle-Logo-640x245-1.webp" alt="err"/>
            
              <Text >Women</Text>
              <Text >Men</Text>
              <Text>Kids</Text>
              <Text>Shoes & Bags</Text>
              <Text>Beauty</Text>
            </HStack>
          </Box>
  
          <Box p={1}  display="grid" lignContent="center" alignitem="center" >
            <HStack spacing={2}>
              <Input width="400px" placeholder="What are you looking for?" />
            </HStack>
          </Box>
          <Flex lignContent="center" alignitem="center">
          <Box p={2} fontWeight={500} fontSize="15px" display="grid" lignContent="center" alignitem="center" >
            <HStack marginLeft="6px" spacing={2}>
              <Text>More</Text>
              <Box>|</Box>
              <Text>sign Up/sign In</Text>
              <Text>Beauty</Text>
              <Text>Beauty</Text>
            </HStack>
          </Box>
          </Flex>
        </Flex>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="40px"
          bg="rgb(250,166,25)"
          color="white"
        >
          <h2 fontWeight={600}>Lingerie & Nightwear From ₹ 299. </h2>
        </Box>
      </>
    );
  }
  
  export default Navbar;
  