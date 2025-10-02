import React, { useEffect, useState } from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import MyAccount from '../components/MyAccountItem';
import axios from 'axios';

export default function ProfileUser(){


const[userData, setUserData]=useState([]);
const [error, setError] = useState(null);

useEffect(()=>{
axios
      .get('http://localhost:3000/users')
      .then(res => {
        setUserData(res.data);
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
        justifyContent: 'left',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '64px'
        
      }}
    >
      <Box container spacing={3}>
        {/* map */}
          <Box item xs={12} sm={6} md={4} key={user.id}>
            <MyAccount
              id={user.id}
              runnerId={user.runnerid}
              firstName={user.firstname}
              lastName={user.lastname}
              emailId={user.emailid}
              password={user.password}
            />
    </Box>
    
</Box>
    </Box>
  );
}


