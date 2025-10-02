import React, { useEffect, useState } from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import MyAccount from '../components/MyAccountItem';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';

export default function ProfileUser(){

  const { currentUser, handleUpdateUser } = useUserContext();

const[userData, setUserData]=useState([]);
const [error, setError] = useState(null);

useEffect(()=>{
  console.log(currentUser.email)
axios
      .get('http://localhost:8081/api/users')
      .then(res => {
        // setUserData(res.data);
        setUserData(res.data.data.find(user=>user.emailId==currentUser.email))
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
          <Box item xs={12} sm={6} md={4}>
           { userData?.id ? <MyAccount
              id={userData?.id}
              runnerId={userData?.runnerid}
              firstName={userData?.firstname}
              lastName={userData?.lastname}
              emailId={userData?.emailid}
              password={userData?.password}
            />:null}
    </Box>
    
</Box>
    </Box>
  );
}


