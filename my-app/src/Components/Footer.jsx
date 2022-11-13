import {Box,Grid, Stack,Center,Divider} from "@chakra-ui/react" 



function Footer (){
    return(
        <>
      
        <Box   width="90%" margin="auto" marginTop={10} height="500px">
           
       <Stack direction='row'  >
        <Grid templateColumns='repeat(5, 1fr)' width="100%" gap={4} >

    <Box cursor="pointer" textAlign="left">         
  <p style={{fontWeight:"bolder"}}>Women</p>
  <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Tops</p>
        <p>Ethnicwear</p>
        <p >Bottoms</p>
        <p >Dresses & Jumpssuits</p>
        <p>Winterwear</p>
        <p >Lingerie</p>
        <p >Nightwear</p>
        <p >Sportwear</p>
        <p >Beauty</p>
        <p >Watches & Sunglasses</p>
        </Box>
 </Box>

 <Box  textAlign="left" cursor="pointer">
    <p style={{fontWeight:"bolder", paddingTop:"8px"}}>Mens</p>
    <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Tops</p>
        <p>Bottoms</p>
        <p >Ethnicwear</p>
        <p>Winterwear</p>
        <p >Grooming</p>
        <p >Nightwear</p>
        <p >Sportwear</p>
        <p >Watches</p>
        <p> Sunglasses</p>
        </Box>
  </Box>
  
   <Box cursor="pointer"  textAlign="left">
    <p style={{fontWeight:"bolder", paddingTop:"8px"}}>Kids</p>
    <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Girls Clothing</p>
        <p>Boys Clothing</p>
        <p >Infants Girls</p>
        <p >Infants Boys</p>
        <p>Winterwear</p>
        <p >Add ons</p>
        <p >The Teen Shop</p>
        </Box>
    </Box>

   <Box cursor="pointer"  textAlign="left" >
     <p style={{fontWeight:"bolder", paddingTop:"8px"}}>Bag & Shoes</p>
     <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Women</p>
        <p>Men</p>
        <p >Boys</p>
        <p >Girls</p>
        <p>Women Accessories</p>
        <p >Men Accessories</p>
        <p >Essential</p>
        </Box>
   </Box>

   <Box cursor="pointer"  textAlign="left">
    <p style={{fontWeight:"bolder", paddingTop:"8px"}}>Beauty</p>
    <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Makeup Eyes</p>
        <p >Makeup Face</p>
        <p >Makeup Lips</p>
        <p >Makeup Nails</p>
        <p >Perfumes</p>
        </Box>
   </Box>

   <Box cursor="pointer"  textAlign="left" >
     <p style={{fontWeight:"bolder", paddingTop:"8px"}}>Explore</p>
     <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Online Offer</p>
        <p>Store Offer</p>
        <p >Online Gift Card</p>
        <p >Store Gift Card</p>
        <p>Stores Nearby</p>
        <p >EDGE Membership</p>
        <p >Shop on WhatsApp</p>
        </Box>
   </Box>

   <Box cursor="pointer"   textAlign="left" >
     <p style={{fontWeight:"bolder", paddingTop:"8px"}}>About</p>
     <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >About Us</p>
        <p>Careers</p>
        <p >Take a Tour</p>
        <p >Blog</p>
        <p>Winterwear</p>
        <p >Store Locator</p>
        <p >Landmark Cares</p>
        </Box>
   </Box>

   <Box cursor="pointer"   textAlign="left">
     <p style={{fontWeight:"bolder", paddingTop:"8px"}}>Help</p>
     <Box color="grey" fontSize="14px" lineHeight={1.8}>
        <p >Contact Us</p>
        <p>Shipping</p>
        <p >Returns Process</p>
        <p >Return Policy</p>
        <p>Help Center</p>
        </Box>
   </Box> 
  </Grid>
</Stack>
      
        </Box>
        <Center>
    <Divider orientation='horizontal' p={8} width="87%"  color="black"/>
    </Center>

   
        </>
    )
}
export default Footer