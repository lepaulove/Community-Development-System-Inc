import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <Box justifyContent={'space-between'} alignItems={'center'} display='flex' direction='column' sx={{backgroundColor:'#171921', height:40, pt:.5, pb:.7, px:1}}>
        <Typography variant='p' fontSize={{xs:10, md:15}} color='#FFF'>Copyright© Community Development System, Inc</Typography>
        <Divider orientation='vertical' variant='middle' sx={{height:'60%', backgroundColor:'#FFF', display:{md:'none'}}}/>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='p' fontSize={{xs:10, md:15}} color='#FFF'>Developed by Viper Digital, LLC</Typography>
          <Typography alignSelf={'flex-end'} fontSize={{xs:10, md:15}} color='#FFF'><a href='https://www.viperdigitaltech.com/' target='_blank' style={{textDecoration:'underline', color:'inherit'}}>www.viperdigitaltech.com</a></Typography>
        </Box>
    </Box>
  )
}

export default Footer