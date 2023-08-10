import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {Sidebar,Videos} from '../import';
import { fetchFromApi } from '../utils/fetchFromAPI';
function Feed() {
  const [selectedCatagory,setSelectedCatagory]= useState('New');
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCatagory}`).then((data)=>{setVideos(data.items)})
  },[selectedCatagory])
  return (
    <Stack sx={{flexDirection:{sx:'column',md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'} ,borderRight:'1px solid #3d3d3d',pd:{sx:0,md:2}}}>
        <Sidebar selectedCatagory = {selectedCatagory} setSelectedCatagory={setSelectedCatagory}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>
    <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
      {selectedCatagory}
        <span style={{color:'#FC5103'}}> videos</span>
      </Typography>
      <Videos videos ={videos}/>
    </Box>
    </Stack>
  )
}

export default Feed