import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const AddEmp = () => {
  const[form,setForm]=useState({
    name:'',
    position:'',
    image:''
  })
  
  const navigate=useNavigate();
  //   function subVal(){
  //   axios.post('http://localhost:3000/emp/add',form).then((res)=>{
  //     alert(res.data)
  //     navigate('/admin');
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }

  const location=useLocation();
    useEffect(()=>{
      if(location.state!=null){
        setForm({...form,name:location.state.val.name,
          position:location.state.val.position,
          image:location.state.val.image

        })
      }else{
          setForm({...form,name:'',
            position:'',
            image:''

          })
      }
    },[])
    function subVal(){
      if (location.state!=null) {
        axiosInstance.put('https://employ-app-server.vercel.app/update/'+location.state.val._id,form).then((res)=>{
          alert('Updated Successfully')
          navigate('/admin');
  
        }).catch((error)=>{
          console.log(error);
        })
      }
      else{
        axiosInstance.post('https://employ-app-server.vercel.app/add',form).then((res)=>{
          alert('Added Successfully')
          navigate('/admin');
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={2} style={{marginTop:'5%',marginLeft:'25%', width:'50%'}}>
    <Grid size={12}>
        <Typography  variant='h4' style={{color:'#003366'}}>  Add / Edit Employee </Typography>
      </Grid>
      <Grid size={12} style={{marginTop:'2%'}}>
        <TextField  variant='outlined' name='blogName' label='Name' value={form.name} onChange={(e)=>{
          setForm({...form,name:e.target.value})
          }} ></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined' name='blogDescription' label='Position' value={form.position}onChange={(e)=>{
          setForm({...form,position:e.target.value})
          }}></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined' name='blogImage' label='Image Url' value={form.image} onChange={(e)=>{
          setForm({...form,image:e.target.value})}}></TextField>
      </Grid>
      <Grid size={6}>
        <Button  variant='contained' onClick={subVal} style={{marginLeft:'85%', backgroundColor:"#003366"}} >Submit</Button>
        </Grid>
    </Grid>
    </Box>
    </div>
  )
}

export default AddEmp
