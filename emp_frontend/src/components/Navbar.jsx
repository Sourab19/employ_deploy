import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"#990000"}}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"left" }}>
            EmpApp User
          </Typography>
          <Button color="inherit" onClick={() => {
          sessionStorage.removeItem("token2");
          navigate("/");
        }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
