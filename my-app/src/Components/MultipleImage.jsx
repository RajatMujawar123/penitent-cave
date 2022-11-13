import {Box,Center,Grid, Stack,Image,Divider} from "@chakra-ui/react" 


function MultipleImage (){
    return(
        <>
      
        <Box  width="90%" margin="auto" marginTop={10} >
            <Box display="flex" p={2}>
            <h1 style={{fontSize:"30px",paddingBottom:"10px"}}>Value Picks</h1>
            </Box>
       
       <Stack direction='row' >
        <Grid templateColumns='repeat(6, 1fr)' width="100%" gap={4}>
    <Box cursor="pointer">         
  <Image
   
 
    src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner1-11Oct2022.jpg'
    alt='Dan Abramov'
  />
  <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
 </Box>
 <Box cursor="pointer">
  <Image
   
    
    src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner2-11Oct2022.jpg'
    alt='Dan Abramov'
  />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
  </Box>
  
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner3-27Oct2022.jpg' 
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
    </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner4-27Oct2022.jpg'
    alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Upto 50% Off</p>
   </Box>
   <Box cursor="pointer">
    <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner5-11Oct2022.jpg'
    alt='Dan Abramov' />
    <p style={{fontWeight:"bold", paddingTop:"8px"}}>Under ₹3999</p>
   </Box>
   <Box cursor="pointer">
     <Image  src='https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner6-11Oct2022.jpg' alt='Dan Abramov' />
     <p style={{fontWeight:"bold", paddingTop:"8px"}}>Under ₹2999</p>
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
export default MultipleImage