import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import img1 from '../Media/carf-img-1.JPG'
import img2 from '../Media/carf-img-2.JPG'
import img3 from '../Media/carf-img-3.JPG'
import accredited from '../Media/aspire-seal-removebg-preview.png'
import { colorPalette } from '../App'

function CarfHomeSection() {

    const navigate = useNavigate()
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    })

    const animation = {
        hidden:{
            rotateY:180
        },
        visible:{
            rotateY:0,
            transition:{
                duration:.8
            }
        },
    }


  return (
    <Grid ref={ref} container position='relative' justifyContent='center' pl={{md:5}} mt={4} pt={4} ml={{md:0, xs:1}} pb={4} mb={6} sx={{borderTop:`2px ${colorPalette.callToAction} solid`}}>
            <Grid item container alignItems='center' justifyContent='space-between' sx={{}}>
                <Grid item ><Typography fontSize={{md:35, xs:25}} color={colorPalette.primary}>WE ARE CARF ACCREDITED</Typography></Grid>
                <Grid item ><Button onClick={() => navigate('about')}><Typography>LEARN MORE</Typography><ArrowForwardIcon /></Button></Grid>
                <Grid item xs={12}><Typography color={colorPalette.secondary}>"CDS LEADERSHIP HAS A GOOD UNDERSTANDING AND HAS DEMONSTRATED ITS COMMITMENT TO STAYING IN CONFORMANCE WITH ITS ACCREDITING BODY STANDARDS."</Typography></Grid>
                <Grid item ><Typography fontSize={12} color={colorPalette.callToAction}>- CARF INTERNATIONAL SURVEY REPORT 2022 </Typography></Grid>
            </Grid>
            <Grid item container justifyContent='space-between' mt={{md:2, xs:4}} bgcolor={{md:'transparent', xs:'#3A498C'}} columnSpacing={2} rowSpacing={4} pb={{md:6, xs:4}}>
                <Grid item md={4} xs={12}>
                    <motion.div initial={animation.hidden} animate={inView ? animation.visible : animation.hidden}>
                        <Card elevation={10} sx={{width:{md:'90%', xs:'90%'}, height:{md:500, xs:'100%'}, border:'0px #3A498C solid'}}>
                            <CardMedia component='img' image={img1} sx={{width:80, objectFit:'contain', px:4, pt:4}}/>
                            <Typography fontSize={{md:20, xs:18}} fontWeight={600} px={4}>Facility and Environment</Typography>
                            <Typography fontSize={15} p={4} flexGrow={1}>"THE ORGANIZATIONS PHYSICAL PLANT PROMOTES THE SELF-ESTEEM OF THE PERSON’S SERVED AND STAFF MEMBERS. THE ENVIRONMENT ALLOWS FOR A RELAXED AND OPEN ATTITUDE TO HELP THE PERSON SERVED AND THERAPIST BOND AND ALLOWS FOR A SPEEDIER AND SUSTAINABLE RECOVERY."</Typography>
                            <Button onClick={() => navigate('about')}  sx={{flexGrow:1, alignSelf:'flex-start', mt:'auto', pl:4,}}>Learn More <ArrowForwardIcon /></Button>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <motion.div initial={animation.hidden} animate={inView ? animation.visible : animation.hidden}>
                        <Card elevation={10} sx={{width:{md:'90%', xs:'90%'}, height:{md:500, xs:'100%'}, border:'0px #3A498C solid'}}>
                            <CardMedia component='img' image={img2} sx={{width:80, objectFit:'contain', px:4, pt:4}}/>
                            <Typography fontSize={{md:20, xs:18}} fontWeight={600} px={4}>Impact and Services</Typography>
                            <Typography fontSize={15} p={4} flexGrow={1}>"CDS SERVES A POPULATION IN GEORGIA THAT IS THE YOUNGEST AND MOST VULNERABLE IN THE STATE. THE SERVICES RENDERED ARE PROVIDING A VITAL SERVICE TO FAMILIES AND APPEAR TO BE MAKING SCHOOLS AND COMMUNITIES SAFER AND MORE PROSPEROUS."</Typography>
                            <Button onClick={() => navigate('about')}  sx={{flexGrow:1, alignSelf:'flex-start', mt:'auto', pl:4,}}>Learn More <ArrowForwardIcon /></Button>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <motion.div initial={animation.hidden} animate={inView ? animation.visible : animation.hidden}>
                        <Card elevation={10} sx={{display:'flex', flexDirection:'column', width:{md:'90%', xs:'90%'}, height:{md:500, xs:'100%'},  border:'0px #3A498C solid'}}>
                            <CardMedia component='img' image={img3} sx={{width:80, objectFit:'contain', px:4, pt:4, alignSelf:'flex-start'}}/>
                            <Typography fontSize={{md:20, xs:18}} fontWeight={600} px={4}>Positive Feedback from Families</Typography>
                            <Typography fontSize={15} p={4} flexGrow={1}>"CONSISTENT POSITIVE FEEDBACK REVEALED FAMILIES FELT THEIR CHILD WAS DOING BETTER AFTER RECEIVING SERVICES FROM CDS."</Typography>
                            <Button onClick={() => navigate('about')} sx={{flexGrow:1, alignSelf:'flex-start', mt:'auto', pl:4,}}>Learn More <ArrowForwardIcon /></Button>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <Box
          minHeight={{md:'50%', xs:'80%'}}
          minWidth='100%'
          bgcolor='#3A498C'
          position='absolute'
          display={{md:'flex', xs:'none'}}
          bottom={0}
          left={0}
          zIndex={-1}
          sx={{borderRadius:5}}
        ></Box>
        <Box
        position='absolute'
        bottom={{md:45, xs:200}}
        right={{md:20, xs:10}}
        display={{md:'flex', xs:'none'}}
        >
            <Grid item justifySelf='center' py={{md:'15%'}}><CardMedia component='img' height='100%' width='100%' image={accredited} sx={{width:225, objectFit:'contain'}}/></Grid>
        </Box>
            </Grid>
        </Grid>
  )
}

export default CarfHomeSection