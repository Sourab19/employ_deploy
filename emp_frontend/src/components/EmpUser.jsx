import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInterceptor2';


const EmpUser = () => {
    const [data,setData] =useState([]);

 useEffect(()=>{
  axiosInstance.get("https://employ-app-server.vercel.app/get").then((res)=>{
    setData(res.data);
  }).catch((err)=>{
    console.log(err);
  })
 },[])
  return (
    <Box sx={{ flexGrow: 1, }} >
    <Grid container spacing={2} style={{marginTop:'3%', marginLeft:"30px"}}>
      {data.map((item)=>(
      <Grid size={4}>
      
  <Card sx={{ maxWidth: 345 ,border: "2px solid #990000",
              borderRadius: 2,
              boxShadow: 3,}}>
  <CardMedia
    sx={{ height: 140 }}
    image={item.image}
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {item.name}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    {item.position}
    </Typography>

  </CardContent>
  
</Card>
</Grid>
))}
</Grid>
</Box>
  )
}

export default EmpUser
