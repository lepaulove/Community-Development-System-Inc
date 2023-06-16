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
    )
}

export default Header