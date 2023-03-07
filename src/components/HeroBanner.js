import React from 'react';
import{Box ,Stack,Button,Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
import { display } from '@mui/system';


const HeroBanner = () => {
  return (
    <Box 
     sx={{
        mt: {lg:'212px', xs:'70px'},
        ml: {sm : '50px'}
        }}position="realtive" p="20px"
    >
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px"
        >
            Fitness Club
        </Typography>

        <Typography fontWeight={700}
         sx={{ fontSize:{lg:'44px' , xs:'40px'}
            }}
            mb="23px" mt="30px"
        >
            Sweat,Smile <br/>and Reapeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px"
        mb={4}>
           Checkout the best workout plan that suits you.
        </Typography>

        <Button variant='contained'
        color='error'
        href='#exercises'
        sx={{backgroundColor:'#ff2625' ,padding:'10px'}}
        >Explore Excercises</Button>


        <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
            opacity:0.1,
            display:{lg:'block' ,xs:'none'}
        }}
        fontSize="200px"
        >
            Excercise
        </Typography>

        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner