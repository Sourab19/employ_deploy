import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const EmpAdmin = () => {
    const [data,setData] =useState([]);
    const navigate= useNavigate();
    console.log("Token from sessionStorage:", sessionStorage.getItem('token'));


    useEffect(()=>{
      axiosInstance.get("https://employ-app-server.vercel.app/emp").then((res)=>{
       setData(res.data);
     }).catch((err)=>{
       console.log(err);
     })
    },[])
    function update_val(val){
      navigate('/add',{state:{val}});
    }
    function delVal(val){
      axiosInstance.delete(`https://employ-app-server.vercel.app/delete/${val._id}`).then((res)=>{
      alert("Deleted Successfully")
      setData(data.filter(item => item._id !== val._id)); 
      navigate('/admin');
    }).catch((err)=>{
      console.log(err);
    }) 
    }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} style={{marginTop:'3%',marginLeft:"60px"}}>
        {data.map((item)=>(
        <Grid item xs={12} key={item._id}>
        
    <Card sx={{ maxWidth: 345 ,border: "2px solid #003366",
              borderRadius: 2,
              boxShadow: 3,
              
              }}>
    <CardMedia
      sx={{ height: 240 }}
      image={item.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom:'10%' }}>
      {item.position}
      </Typography>
      
      <Button  variant='contained' color='warning' onClick={()=>{
        update_val(item);
        }} >Update</Button>
      <Button  variant='contained' color='error' style={{marginLeft:'10%',marginTop:'8%',marginRight:'10%'}} onClick={()=>{
        delVal(item);
      }}>Delete</Button>
      </CardContent>
    
    </Card>
    </Grid>
    ))}
    </Grid>
    </Box>
  )
}

export default EmpAdmin
