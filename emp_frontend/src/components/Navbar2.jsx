import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#003366" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              EmpApp Admin
            </Typography>
            <Link to={'/admin'} style={{color:'white'}}><Button color="inherit">Home</Button></Link>
            <Link to={'/add'} style={{color:'white'}}><Button color="inherit">Add Employee</Button></Link>
            <Button color="inherit" onClick={()=>
            {sessionStorage.removeItem('token')
              navigate("/");
            }}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar2;
