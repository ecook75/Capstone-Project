import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Intervals from '../components/RunningStyleItem';
import axios from 'axios';

export default function GridRunning(){


const[runningData, setRunningData]=useState([]);
const [error, setError] = useState(null);

useEffect(()=>{
axios
      .get('http://localhost:3000/runningMethods')
      .then(res => {
        setRunningData(res.data);
        //console.log(res.data)
      })
      .catch(err => {
        console.log(err),
      setError('Failed to load.')
});
}, []);

  
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '64px' 
      }}
    >
      <Grid container spacing={3}>
        {/* map */}
        {runningData.map((running) => (
          <Grid item xs={12} sm={6} md={4} key={running.id}>
            <Intervals
              id={running.id}
              title={running.title}
              description={running.description}
              origin={running.origin}
              fitness_level={running.fitness_level}
            />
    </Grid>
    
        ))}
</Grid>
    </Box>
  );
}


