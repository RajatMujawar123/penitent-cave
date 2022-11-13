import {Box,Center,Grid, Stack,Image,Divider} from "@chakra-ui/react" 
import {Link} from "react-router-dom"

function BigBrands (){
    return(
        <>
      
        <Box  width="90%" margin="auto" marginTop={20} >
            <Box display="flex" p={2}>
            <h1 style={{fontSize:"30px",paddingBottom:"10px"}}>Big Brands. Big Discounts</h1>
            </Box>
       
       <Stack direction='row' >
        <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(2,1fr)' width="100%" gap={4}>
    <Box cursor="pointer">         
  <Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-19Oct2022.png'
    alt='Dan Abramov'
  />
  <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
 </Box>
 <Box cursor="pointer">
  <Link to="newarrivals"><Image
   
    objectFit='cover'
    src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-02Sep2022.jpg'
    alt='Dan Abramov'
  />
  </Link>
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 70% Off</p>
  </Box>
  
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-02Sep2022.jpg' 
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
    </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-31Aug2022.jpg'
    alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
   </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-31Aug2022.jpg'
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 20% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-31Aug2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner7-men-Desktop-16Sep2022.png' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 30% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner8-men-Desktop-16Sep2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 60% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner9-men-Desktop-16Sep2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 55% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner10-men-Desktop-16Sep2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner11-men-Desktop-23Sep2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 40% Off</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner12-men-Desktop-16Sep2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
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
export default BigBrands