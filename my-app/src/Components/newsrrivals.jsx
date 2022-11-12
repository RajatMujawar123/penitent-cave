import React from 'react'
import axios from "axios"
import {useEffect,useState,useContext} from "react"
// import styles from "../user login/signup.module.css"
import Pagination from "./pagination" 
import Container from "./container"
import {Grid,Button,Skeleton,Stack} from "@chakra-ui/react"
import { CartContext } from './cartprovider'
import { addToCart } from './action'


const fetch=({page,limit,sort,order})=>{
return axios.get(" http://localhost:4000/clothing?",{
    params:{
       _page:page,
       _limit:limit,
       _sort:sort,
       _order:order
    }
})
}
const itemAlreadyExists = (id,cartItems) =>{
    if(cartItems.find((item) => item.id === id)){
      return true;
    }
    return false;
    };



const Newarrivals = () => {
const [data, setData]=useState([])
const [page, setPage]=useState(1)
const[loading,setLoading] = useState(false);
const [sorting,setSorting]=useState("Mens")
const [sortinggender,setSortinggender]=useState("desc")
const {state,dispatch} = useContext(CartContext);

useEffect(()=>{
    setLoading(true)
    fetch({page:page,limit:8,sort:sorting,order:sortinggender}).then((res)=>setData(res.data)) 
    setLoading(false)
},[page,sorting,sortinggender])

if(loading){
    return(
      <Stack my={20}>
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      </Stack>
  
    )
  }
  


  return (
     <>
     <div  style={{margin:"auto",width:"90%",alignItems:"center",justifyItems:"center"} }>
     <div style={{border:"solid blue 1px"}}>
        <div style={{margin:"auto"}}>
            <img  style={{margin:"auto"}} src="https://www.yoox.com/images/yoox80/banners/6764_1_NuoviArrivi_TOP_K_eu.jpg?634485886869569819" alt="1" />
        </div>
        <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"600"}}>CLOTHING NEW ARRIVALS</h1>
        </div>
        <div style={{border:"solid blue 1px"}}> 
        <div style={{textAlign:"left",marginTop:'10px',display:"flex",gap:"10px",}}>
            <Button onClick={()=>setSortinggender("asc")}>Low To High</Button>
            <Button onClick={()=>setSortinggender("desc")}>High To Low</Button>
            <Button onClick={()=>setSorting("Mens")}>Mens</Button>
            <Button onClick={()=>setSorting("Womens")}>Women</Button>
        </div>
        </div>

        <div style={{display:"grid" ,border:"solid teal 0px",marginTop:"20px"}}>
            <div>
            {/* container */}
            <div>
            <div>
            <Grid gridTemplateColumns={"repeat(4,1fr)"} gap="25px" >
                {
                  data?.map((el)=>(
                        <>
                        <div>  
                            <div style={{borderRadius:'8px',cursor:"pointer",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>   
                        <div style={{border:'0px solid pink',display:'gird',alignContent:"center",alignItems:"center",justifyContent:"center" }}>
                        <Container key={el.id}
                            image={el.images[0]}
                            category={el.category}
                            title={el.title}
                            price={el.strike_price}
                            rating={el.rating}
                            discount={el.discount}
                        />
                        </div>
                        <Button style={{marginBottom:"20px",background:"rgb(250,173,49)",color:"white"}}
                            disabled={itemAlreadyExists(el.id,state)}
                            onClick={()=>dispatch(addToCart(el))}>Add To Cart</Button>
                        </div>
                        </div>
                         </>
                  ))  
                }
            </Grid>
            </div>
            <div style={{marginTop:"25px"}}>
            <Pagination total={data?.length} current={page} onChange={(page) => setPage(page)}/>
            </div>
            </div>

        </div>
     </div>
</div>




     

    </>
  )
}

export default Newarrivals



// box-shadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";

//mr={20} mt={6} align="center" justify="center" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)" }} templateRows={{base:"repeat(1,1fr)",md:"repeat(3,1fr)",lg:"repeat(3,1fr)" }} gap={10}