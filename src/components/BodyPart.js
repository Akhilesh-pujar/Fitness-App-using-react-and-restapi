import React from 'react';
import { Stack,Typography } from '@mui/system';

import Icon from'../assets/icons/gym.png';

const BodyPart = () => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    >
        <img src={Icon} alt="icon" 
        styles={{width:'40px',
         height:'40px'
        }}
        />
    </Stack>
  )
}

export default BodyPart