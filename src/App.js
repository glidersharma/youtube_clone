import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box, backdropClasses} from '@mui/material'
import {Navbar, Feed,VideoDetail,ChannelDetail,SearchFeed} from './import'
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Feed/>}/>
    <Route path='/video/:id' exact element={<VideoDetail/>}/>
    <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
    <Route path='/Search/:SearchItem' exact element={<SearchFeed/>}/>
    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App