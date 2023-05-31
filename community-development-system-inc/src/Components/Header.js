import React from 'react'
import Navigation from './Navigation'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { AppBar, Box, Container, Grid, createTheme, ThemeProvider, Toolbar , Typography } from '@mui/material'
import FullAppBar from './FullAppBar'
import MobileAppBar from './MobileAppBar'

function Header() {
    const theme = createTheme({
        palette:{
            primary:{
                main:'#FFF'
            }
        }
    })

  return (
    <ThemeProvider theme={theme}>
        <AppBar position='static' sx={{ alignItems:'center', justifyContent:'space-between', width:'100%', marginBottom:{md:10, xs:5}, boxShadow:{md: '5px 5px 0px -1px #FFF', xs:'0px 0px 0px -1px #800020'}}}>
            <Container maxWidth='xxl'>
                <Toolbar disableGutters>
                    <FullAppBar />
                    <MobileAppBar />
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
    // <Box style={{display:{md:'flex', xs:'none'}, alignItems:'center', justifyContent:'space-between', width:'100%', marginBottom:60}}>
    //     <Grid container sx={{display:'flex', flexDirection:'column', lineHeight:0, width:'fit-content'}}>
    //         <Grid item sx={{}}><Typography sx={{fontWeight:'bold', fontSize:{md:30, xs:25}, fontFamily:'serif'}}>Community</Typography></Grid>
    //         <Grid item sx={{mt:-1}}><Typography sx={{fontWeight:'bold', fontSize:{md:17, xs:13}, fontFamily:'serif'}}>Development System</Typography></Grid>
    //     </Grid>
    //     <Navigation />
    //     <button style={{border:'3px solid #2F3345', backgroundColor:'transparent', borderRadius:100, cursor:'pointer', padding:10, fontSize:15, display:'flex', alignItems:'center'}}><CalendarMonthIcon style={{paddingRight:10}}/>Book an Appointment</button>
    // </Box>
  )
}

export default Header