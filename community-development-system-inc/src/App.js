import { useRef, useEffect } from 'react'

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
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

  return (
    <div style={{overflowX:'hidden'}}><BrowserRouter>
      <ScrollToTop />
      <Box sx={{display:{md:'flex', xs:'none'}}}>
        <WaveLine />
      </Box>
      <Box sx={{display:{md:'none', xs:'flex'}}}>
        <WaveLineMobile />
      </Box>
      <Box sx={{py:{md:5, xs:2}, mx:{md:'175px', xs:1.5}, minHeight:'100vh'}}>
        <Header />
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/resources' element={<Resources />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter></div>
  );
}

export default App;

export const colorPalette = {
  primary: '#326078',
  secondary: '#2F3345',
  callToAction:'#C43932',
  accent: '#F3AE2D',
  white: '#FFF',
  black: '#000',

}
