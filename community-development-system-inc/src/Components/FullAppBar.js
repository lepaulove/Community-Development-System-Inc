import React from 'react'
import Navigation from './Navigation'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { AppBar, Box, Button, Grid, createTheme, ThemeProvider, Typography, Container, Toolbar } from '@mui/material'

function FullAppBar() {
  return (
    <Grid container style={{display:{md:'flex', xs:'none'}, alignItems:'center', justifyContent:'space-between', width:'100%', marginBottom:0}}>
        <Grid container sx={{display:'flex', flexDirection:'column', lineHeight:0, width:'fit-content'}}>
            <Grid item sx={{}}><Typography sx={{fontWeight:'bold', fontSize:{md:30, xs:25}, fontFamily:'serif'}}>Community</Typography></Grid>
            <Grid item sx={{mt:-1}}><Typography sx={{fontWeight:'bold', fontSize:{md:17, xs:13}, fontFamily:'serif'}}>Development System</Typography></Grid>
        </Grid>
        <Navigation />
        <Button sx={{ display:{md:'flex', xs:'none'}, border:'3px solid #2F3345', color:'#2F3345', backgroundColor:'transparent', borderRadius:100, cursor:'pointer', padding:1, fontSize:15, alignItems:'center'}}><CalendarMonthIcon sx={{paddingRight:1}}/>Book an Appointment</Button>
    </Grid>
  )
}

export default FullAppBar