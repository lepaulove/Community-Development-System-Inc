import React from 'react'
import { motion } from "framer-motion"
import { Box, Button, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
    const NavItemsStyle = {
        // marginInline:15,
        color:'#2F3345',
        fontWeight:'600',
        fontSize:20,
        cursor:'pointer',
        border:'none',
        backgroundColor:'transparent',
        '&:hover':{color:'#800020'}
    }
  return (
    <Grid item container sx={{display:{md:'flex', xs:'none'}, width:'60%', justifyContent:'space-around'}}>
        <motion.div style={NavItemsStyle}><Link to='/'><Button sx={NavItemsStyle}>HOME</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/about'><Button sx={NavItemsStyle}>ABOUT</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/contact'><Button sx={NavItemsStyle}>CONTACT</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/services'><Button sx={NavItemsStyle}>SERVICES</Button></Link></motion.div>
        <motion.div style={NavItemsStyle}><Link to='/resources'><Button sx={NavItemsStyle}>RESOURCES</Button></Link></motion.div>
    </Grid>
  )
}

export default Navigation