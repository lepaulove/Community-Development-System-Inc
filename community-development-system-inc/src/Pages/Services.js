import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'

function Services() {
  return (
    <Box sx={{minHeight:'100vh', }}>
        <Grid container columnSpacing={5} mb={10}>
            <Grid item container sx={{position:'relative'}}>
                <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>SERVICES WE OFFER</Typography></Grid>
                <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
            </Grid>
            <Grid item>Insurance We Accept:
We accept Medicaid and partiicipating Care Management Organiztaion (CMO) that support Medicaid (Caresource Peachstate, Amerigroup and FFS (for our IFI service only).</Grid>
        </Grid>
    </Box>
  )
}

export default Services