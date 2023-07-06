// import React from 'react'
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import { Box } from '@mui/material';
// // import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';
// import Navbar from './components/Navbar';
// import Feed from './components/Feed';
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';

// const App=()=>{
//   <BrowserRouter>
//   <Box sx={{backgroundColor:'#000'}}>
//     <Navbar/>
//     <Routes>
//         <Route path="/" exact element={<Feed />}/>
//         <Route path="/video/:id" element={<VideoDetail/>}/>
//         <Route path="/channel/:id" element={<ChannelDetail/>}/>
//         <Route path="/search/:searchTerm" element={<SearchFeed/>}/>

//     </Routes>
//   </Box>

//   </BrowserRouter>
// };
// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;