import React from  "react";
import { Image,Box, Divider, Center } from '@chakra-ui/react'
import {Link} from "react-router-dom";


function SingleImage({image}){
    return(
        <>
       
    <Box width="90%" cursor="pointer" margin="auto" marginTop="90px" >
        <Link to="/newarrivals">
        <Image  src={image} alt="error"/>
        </Link>
    </Box>
        <Center>
    <Divider orientation='horizontal' p={6} width="87%"  color="black"/>
    </Center>
    </>
    )
}

export default SingleImage