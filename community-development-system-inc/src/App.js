import { useRef } from 'react'

import logo from './logo.svg'
import './App.css'
import { useInView } from 'react-intersection-observer'
import TestRefThingy from './TestRefThingy'
import Header from './Components/Header'
import WaveLine, { WaveLineMobile } from './Components/WaveLine'
import Home from './Pages/Home.js'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Resources from './Pages/Resources'
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {

  
  // const { ref: myRef, inView, entry } = useInView()

  return (
    <div style={{overflowX:'hidden', minHeight:'100vh'}}><BrowserRouter>
      <Box sx={{display:{md:'flex', xs:'none'}}}>
        <WaveLine />
      </Box>
      <Box sx={{display:{md:'none', xs:'flex'}}}>
        <WaveLineMobile />
      </Box>
      <Box sx={{py:{md:5, xs:2}, mx:{md:10, xs:2.5}}}>
        <Header />
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/resources' element={<Resources />} />
        </Routes>
        
        
        {/* <Home /> */}
      </Box>
      <Footer />
    </BrowserRouter></div>
  );
}

export default App;
