import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>

 <nav className="NavBar">
          

          <Button color="inherit" component={NavLink} to="/home">Home</Button>

          <Button color="inherit" component={NavLink} to="/about">About</Button>

          <Button color="inherit" component={NavLink} to="/login">Login</Button>

          <Button color="inherit" component={NavLink} to="/longer">Longer</Button>

          <Button color="inherit" component={NavLink} to="/mediumlength">Medium Length</Button>

          <Button color="inherit" component={NavLink} to="/pyramid">Pyramid</Button>

          <Button color="inherit" component={NavLink} to="/shortandfast">Short and Fast</Button>

          <Button color="inherit" component={NavLink} to="/unstructured">Unstructured</Button>

          <Button color="inherit" component={NavLink} to="/yasso">Yasso</Button>

          <Button color="inherit" component={NavLink} to="/hill">Hill Repeats</Button>






          
</nav>
 )



        </Toolbar>
      </AppBar>
    </Box>
  );
}