import React from 'react'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { colorPalette } from '../App'

function Footer() {
  return(
    <Grid container direction='column'>
      <Grid container direction={{md:'row', xs:'column'}} sx={{backgroundColor: colorPalette.primary, color:'#FFF', pt:2, pb:.7, px:1}}>
        <Grid item container direction='column' xs={4}>
          <Grid item ><Typography fontSize={{md:15, xs:10}}><LocalPhoneIcon /> 478-743-8333</Typography></Grid>
          <Grid item ><Typography fontSize={{md:15, xs:10}}><EmailIcon /> ADMINISTRATOR@CDSGA.ORG</Typography></Grid>
          <Grid item ><Typography fontSize={{md:15, xs:10}}><PlaceIcon /> 577 MULBERRY ST STE 900, MACON, GEORGIA 31201</Typography></Grid>
        </Grid>
        <Grid item container direction='column' xs={4}>
          <Grid item ><Typography fontSize={{md:20, xs:15}} fontWeight='bold' color={colorPalette.callToAction}>Hours of Operation</Typography></Grid>
          <Grid item ><Typography fontSize={{md:15, xs:12}}>Monday - Friday</Typography></Grid>
          <Grid item ><Typography fontSize={{md:15, xs:12}}>8:30am - 5:30pm</Typography></Grid>
        </Grid>
        <Grid item container direction='row' alignItems={{md:'flex-end'}} justifyContent={{md:'flex-start'}} xs={4} columnSpacing={4} pt={1}>
          <Grid item ><Button><Typography fontSize={20} fontWeight='bold' color={colorPalette.callToAction}><FacebookIcon /></Typography></Button></Grid>
          <Grid item ><Button><Typography fontSize={20} fontWeight='bold' color={colorPalette.callToAction}><TwitterIcon /></Typography></Button></Grid>
          <Grid item ><Button><Typography fontSize={20} fontWeight='bold' color={colorPalette.callToAction}><InstagramIcon /></Typography></Button></Grid>
        </Grid>
      </Grid>
      <Box justifyContent={'space-between'} alignItems={'center'} display='flex' direction='column' sx={{backgroundColor:colorPalette.primary, color: colorPalette.callToAction, fontWeight:{md:'bold'}, height:40, pt:.5, pb:.7, px:1}}>
        <Typography variant='p' fontSize={{xs:10, md:15}} >Copyright© Community Development System, Inc</Typography>
        <Divider orientation='vertical' variant='middle' sx={{height:'60%', backgroundColor:'#FFF', display:{md:'none'}}}/>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='p' fontSize={{xs:10, md:15}} >Developed by Viper Digital</Typography>
          <Typography alignSelf={'flex-end'} fontSize={{xs:10, md:15}} ><a href='https://www.viperdigitaltech.com/' target='_blank' style={{textDecoration:'underline', color:'inherit'}}>www.viperdigitaltech.com</a></Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Footer