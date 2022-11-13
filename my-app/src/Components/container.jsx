import React from 'react'
import { Box,Badge,Image  } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"
 
const Container = ({rating,price,image,title,category,discount,reviewCount}) => {

  return (
    <>
    <div > 
        <div  style={{textAlign:"center"}}>
                <Box  maxW='sm'  borderRadius='lg' overflow='hidden' textAlign="center" justify="center">
                <Image src={image} alt="" w="100%" h="290px" />

                <Box p='6'>
                  <Box display='flex' >
                    <Badge borderRadius='full' px='2' colorScheme='teal' margin="auto">
                      {category}
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      {/* {} beds &bull; {} baths */}
                    </Box>
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {title}
                  </Box>

                  <Box>
                  ${price} 
                    <Box as='span' color='gray.600' fontSize='sm'>
                      {discount}
                    </Box>
                  </Box>

                  <Box  mt='2' margin={"auto"}>
                    {Array(5)
                      .fill('')
                      .map((_,i) => (
                        <StarIcon
                          key={i.toString()}
                          color={i < {rating} ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm' >
                      {reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
        </div>
        </div>

    </>
  )
}

export default Container