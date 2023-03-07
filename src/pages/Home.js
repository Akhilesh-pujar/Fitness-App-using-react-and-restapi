import React,{useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Excercises from '../components/Excercises';
import SearchExcercises from '../components/SearchExcercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [excercises, setExcercises] = useState([]);
  return (
    <Box>
       <HeroBanner/>
       <SearchExcercises 
       setExcercises={setExcercises}
       bodyPart={bodyPart}
       setBodyPart={setBodyPart}
       />
       <Excercises
          setExcercises={setExcercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
    </Box>
  )
}

export default Home