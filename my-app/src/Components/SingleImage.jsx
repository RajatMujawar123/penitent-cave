import React from  "react";
import { Image,Box, Divider, Center } from '@chakra-ui/react'

function SingleImage({image}){
    return(
        <>
       
    <Box width="90%" cursor="pointer" margin="auto" marginTop="90px" >
        <Image src={image} alt="error"/>
    </Box>
        <Center>
    <Divider orientation='horizontal' p={6} width="87%"  color="black"/>
    </Center>
    </>
    )
}

export default SingleImage