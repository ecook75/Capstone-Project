import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

export default function Intervals({
  title = 'Interval Type',
  description = 'Brief description',
  origin = 'Background',
  fitness_level = 'Any level',
  image= 'https://plus.unsplash.com/premium_photo-1666539896896-4f9d0e78c500?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})
  {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            alt="path"
            image={'https://plus.unsplash.com/premium_photo-1666539896896-4f9d0e78c500?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">{description}
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">{origin}
              {origin}
            </Typography>
            <Typography variant="body2" color="text.secondary">{fitness_level}
              {fitness_level}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">{buttonText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}


