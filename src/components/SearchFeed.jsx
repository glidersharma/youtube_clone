import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Typography} from '@mui/material'
import {Videos} from '../import';
import { fetchFromApi } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
function SearchFeed() {
  const [videos,setVideos] = useState([]);
  const {SearchItem} = useParams()
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${SearchItem}`).then((data)=>{setVideos(data.items)})
  },[SearchItem])
  return (
    <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
        Searched Result for: <span style={{color:'#FC5103'}}> {SearchItem}</span>
      </Typography>
      <Videos videos ={videos}/>
    </Box>
  )
}

export default SearchFeed