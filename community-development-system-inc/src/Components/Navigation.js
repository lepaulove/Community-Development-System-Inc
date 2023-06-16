import React from 'react'
import { motion } from "framer-motion"
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { colorPalette } from '../App'

function Navigation() {
    const NavItemsStyle = {
        color:'#326078',
        fontWeight:'600',
        fontSize:20,
        cursor:'pointer',
        border:'none',
        backgroundColor:'transparent',
        '&:hover':{color:colorPalette.callToAction}
    }
  return (
    <Grid item container xs={8} sx={{display:{md:'flex', xs:'none'}, width:'100%', justifyContent:'space-around'}}>
        <motion.div style={NavItemsStyle}><Link to='/'><Button sx={NavItemsStyle}>HOME</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/about'><Button sx={NavItemsStyle}>ABOUT</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/services'><Button sx={NavItemsStyle}>SERVICES</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/resources'><Button sx={NavItemsStyle}>RESOURCES</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/contact'><Button sx={NavItemsStyle}>CONTACT</Button></Link></motion.div>
    </Grid>
  )
}

export default Navigation