import React ,{useState,useEffect}from 'react';
import{Box ,Stack,Button,Typography,TextField, Icon} from '@mui/material';

import gym from'../assets/icons/gym.png';
import { excerciseOptions, fetchData } from '../utils/fetchData';
import Horizontalscrollbar from './Horizontalscrollbar';

const SearchExcercises = (setExcercises,
    bodyPart,setBodyPart) => {
   const [search, setSearch] = useState('');

   const [bodyParts, setBodyParts] = useState([])

   useEffect(()=>{
    const fetchExcercisesData = async ()=>{
        const bodyPartsData = await fetchData('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercise',excerciseOptions);

        setBodyParts(['all' , ...bodyPartsData]);
    }
    fetchExcercisesData();
   },[])


   const handleSearch = async ()=>{
    if(search){
         const excercisesData = await fetchData(
            'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercise',
            excerciseOptions
         );
         const searchedExcercises = excercisesData.filter(
        (item)=>item.name.includes(search)
         || item.target.includes(search)
         ||  item.equipment.includes(search)
         ||  item.bodypart.includes(search)

         ); 
         setSearch('');
         setExcercises(searchedExcercises);
         
    }
    console.log(excerciseOptions);
  

   }
  return (
    <Stack alignItems="center" mt="37px"  justifyContent="center" p="20px">
        <Typography
         fontWeight={700} 
         sx={{
            fontSize:{lg:'44px' , xs:'30px'}
            }}
            mb="50px" textAlign="center"
        >
            Awesome Excercise You <br/>Should Follow
        </Typography>

        <Box position="relative" mb="72px">
            <TextField 
                    height="76px"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search Excercises"
                    type="text"
            sx={{

                input:{fontWeight:'700' , border:'none' , borderRadius:'10px'},
                width:{lg:'800px', xs:'350px'},
                backgroundColor:'white',
                borderRadius:'4px',
                border:'none'
            }}

            />
            <Button className='search-btn'
            sx={{
                bgcolor:'#FF2625',color:'white',textTransform:'none',
                width:{lg:'175px' , xs:'80px'},
                fontSize:{lg:'20px' , xs:'14px'},
                height:'56px',
                position:'absolute',
                right:'0'
            }}
            onClick={handleSearch}
            >Search</Button>

        </Box>


        <Box
        sx={{position:'realtive',width:'100%', p:'20px'}}
        >
            <Horizontalscrollbar data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
           <img src={gym}/>
        
        </Box>

    </Stack>
  )
}

export default SearchExcercises