import React from 'react'
import Navigation from './Navigation'
import {  Card, CardMedia, Grid } from '@mui/material'
import logo from '../Media/Picture2.png'

function FullAppBar() {

  return (
        <Grid container style={{display:{md:'flex', xs:'none'}, alignItems:'center', justifyContent:'space-between', width:'100%', marginBottom:0}}>
            <Grid item container xs={4} sx={{display:'flex', flexDirection:'column', lineHeight:0, width:'fit-content'}}>
              <Grid item container md={12}>
                <Grid item xs={12}><Card elevation={0} sx={{display:'flex', justifyContent:'flex-start'}}><CardMedia component='img' image={logo} sx={{width:{md:120, xs:95}, objectFit:'contain'}}/></Card></Grid>
              </Grid>
              
            </Grid>
            <Navigation />
            
            <Grid item display={{md:'flex', xs:'none'}}></Grid>
        </Grid>
    
  )
}

export default FullAppBar