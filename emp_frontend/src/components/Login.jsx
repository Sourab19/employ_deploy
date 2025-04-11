import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [adminForm, setAdminForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function capValue() {
    axios
      .post("https://employ-app-server.vercel.app/user/login", userForm)
      .then((res) => {
        alert(res.data.message);
        if (res.data.token) {
          sessionStorage.setItem("token2", res.data.token);
          navigate("/user");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
      });
  }
  function adminVal() {
    axios
      .post("https://employ-app-server.vercel.app/admin/login", adminForm)
      .then((res) => {
        alert(res.data.message);
        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
      });
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            component="form"
            sx={{
              width: { xs: "200px", md: "400px" },
              padding: 4,
              border: "2px solid #990000",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#fff",
              textAlign: "center",
              marginTop: { xs: "20px", md: "150px" },
              marginLeft: { xs: "22%", md: "220px" }, // left margin only on md
              marginRight: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#990000", mb: 3, fontWeight: "bold" }}
            >
              User Login
            </Typography>

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setUserForm({ ...userForm, email: e.target.value });
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setUserForm({ ...userForm, password: e.target.value });
              }}
            />
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#990000",
                color: "#fff",
                "&:hover": { backgroundColor: "#cc0000" },
                fontWeight: "bold",
              }}
              onClick={capValue}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            component="form"
            sx={{
              width: { xs: "200px", md: "400px" },
              padding: 4,
              border: "2px solid #003366",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#fff",
              textAlign: "center",
              marginTop: { xs: "20px", md: "150px" },
              marginLeft: { xs: "22%", md: 0 },
              marginRight: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#003366", mb: 3, fontWeight: "bold" }}
            >
              Admin Login
            </Typography>

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setAdminForm({ ...adminForm, email: e.target.value });
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setAdminForm({ ...adminForm, password: e.target.value });
              }}
            />
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#003366" }}
              onClick={adminVal}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
