import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Promo1 from './assets/Promo 1.png';

export function App () {
 return (
  <>
    <Box sx={{ height: '75vh', width: '98.9vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'black' }}>
      <Typography sx={{textAlign: "center"}} variant="h2" gutterBottom>
        BS-Free React Development.
      </Typography>
      <Typography variant="h5">
        Build and prototype low-code React apps with blazing efficiency.
      </Typography>
      <Button sx={{marginTop: 2}} variant="contained" color="primary" size="large">
        Join
      </Button>
    </Box>

    <Box sx={{ height: '75vh', width: '98.9vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '242424' }}>
      <Typography variant="h5">
        Back to the basics.
      </Typography>
      <Typography variant="p" sx={{marginBottom: 2}}>
        Get to building right away with a simple component management system.
      </Typography>
      <img style={{width: '30vw'}} className='promo' src={Promo1} alt='Oh no...'/>
    </Box>
    </>
 );
};
