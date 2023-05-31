import React, { useState } from 'react'
import Navigation from './Navigation'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { AppBar, Box, Button, Grid, createTheme, ThemeProvider, Typography, Container, Toolbar } from '@mui/material'
import { motion } from 'framer-motion'
import BasicModal from './AppointmentModal'

function FullAppBar() {

    const [ openAppointmentModal, setOpenAppointmentModel ] = useState(false)

  return (
    // <motion.div initial={{ y:'-100vh' }}
    // animate={{ y:0 }}
    // transition={{ duration: 1.0}} style={{display:{md:'flex', xs:'none'}, alignItems:'center', justifyContent:'space-between', width:'100%', marginBottom:0}}>
        <Grid container style={{display:{md:'flex', xs:'none'}, alignItems:'center', justifyContent:'space-between', width:'100%', marginBottom:0}}>
            <Grid container sx={{display:'flex', flexDirection:'column', lineHeight:0, width:'fit-content'}}>
                <Grid item sx={{}}><Typography sx={{fontWeight:'bold', fontSize:{md:30, xs:25}, fontFamily:'serif'}}>Community</Typography></Grid>
                <Grid item sx={{mt:-1}}><Typography sx={{fontWeight:'bold', fontSize:{md:17, xs:13}, fontFamily:'serif'}}>Development System</Typography></Grid>
            </Grid>
            <Navigation />
            
            <BasicModal />
        </Grid>
    // </motion.div>
    
  )
}

export default FullAppBar