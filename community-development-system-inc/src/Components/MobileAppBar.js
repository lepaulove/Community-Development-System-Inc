import React, { useState } from 'react'
import { Box, Divider, IconButton, List, ListItem, ListItemButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import CallIcon from '@mui/icons-material/Call'
import Diversity1Icon from '@mui/icons-material/Diversity1'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function MobileAppBar() {

    const [drawerState, setDrawerState] = useState(false)

    const toggleDrawer = () => {
        setDrawerState(!drawerState)
    }

    const animationVariants = {
        hidden: {
          x:'-100vw'
        },
        visible: {
          x: 1,
        },
      }

  return (
    <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer}
            color="inherit"
            sx={{ml:-3}}>
                <MenuIcon />
                <SwipeableDrawer 
                open={drawerState}
                onOpen={toggleDrawer}
                onClose={toggleDrawer}
                sx={{                            
                    width: 245,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor:'#FFF', color:'#2F3345' },
                }}>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', pt:4, color:'inherit'}}>
                        <Typography variant='h3' color='inherit' fontWeight='bold'>MENU</Typography>
                    </Box>
                    <Divider sx={{backgroundColor:'#565657'}} variant='middle'/>
                    <List>
                        <motion.div initial={animationVariants.hidden} animate={drawerState ? animationVariants.visible : animationVariants.hidden} transition={{duration: 0.5, delay: 0.0}}>
                            <ListItem>
                                <Link to='' style={{textDecoration:'none', color:'#2F3345', width:'100%'}}>
                                    <ListItemButton>
                                        <HomeIcon sx={{pr:1.5}}/><Typography>HOME</Typography>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </motion.div>
                        <motion.div initial={animationVariants.hidden} animate={drawerState ? animationVariants.visible : animationVariants.hidden} transition={{duraton: 0.5, delay: 0.2}}>
                            <ListItem>
                                <Link to='/about' style={{textDecoration:'none', color:'#2F3345', width:'100%'}}>
                                    <ListItemButton>
                                        <InfoIcon sx={{pr:1.5}}/><Typography>ABOUT</Typography>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </motion.div>
                        <motion.div initial={animationVariants.hidden} animate={drawerState ? animationVariants.visible : animationVariants.hidden} transition={{duraton: 0.5, delay: 0.3}}>
                            <ListItem>
                                <Link to='/services' style={{textDecoration:'none', color:'#2F3345', width:'100%'}}>
                                    <ListItemButton>
                                        <MedicalInformationIcon sx={{pr:1.5}}/><Typography>SERVICES</Typography>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </motion.div>
                        <motion.div initial={animationVariants.hidden} animate={drawerState ? animationVariants.visible : animationVariants.hidden} transition={{duraton: 0.5, delay: 0.4}}>
                            <ListItem>
                                <Link to='/resources' style={{textDecoration:'none', color:'#2F3345', width:'100%'}}>
                                    <ListItemButton>
                                        <Diversity1Icon sx={{pr:1.5}}/><Typography>RESOURCES</Typography>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </motion.div>
                        <motion.div initial={animationVariants.hidden} animate={drawerState ? animationVariants.visible : animationVariants.hidden} transition={{duraton: 0.5, delay: 0.5}}>
                            <ListItem>
                                <Link to='/contact' style={{textDecoration:'none', color:'#2F3345', width:'100%'}}>
                                    <ListItemButton>
                                        <CallIcon sx={{pr:1.5}}/><Typography>CONTACT</Typography>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </motion.div>
                    </List>
                </SwipeableDrawer>
        </IconButton>
    </Box>
  )
}

export default MobileAppBar