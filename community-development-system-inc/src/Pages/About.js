import React from 'react'
import { Box, Divider, Grid, Typography, Card, CardMedia, CardHeader, CardContent } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import accredited from '../Media/aspire-seal-removebg-preview.png'

function About() {

    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    })

    const counties = [ 'Baldwin', 'Bibb', 'Crawford', 'Dooly', 'Houston', 'Jasper', 'Jones', 'Lamar', 'Macon', 'Monroe', 'Peach', 'Putnam', 'Twiggs', 'Wilkinson', 'Harris', 'Muscogee', 'Talbot', 'Marion' ]
    const coreServices = [ 'Diagnostic Assessment', 'Family Counseling/Training', 'Group Counseling/Training', 'Individual Counseling', 'Psychiatric Treatment', 'Psychological Testing', 'Medication Management', 'Service Plan Development', 'Nursing Assessment/Health Services' ]
    const assesments = [ 'Anger Management', 'Domestic Violence', 'Parenting', 'Sexual Assault',' Substance Abuse', 'Behavioral Health', 'Diagnostic' ]

    const animationVariants = {
        hidden: {
          opacity: 0,
          scale:0,
          y: 20,
        },
        visible: {
          opacity: 1,
          scale:1,
          y: 0,
          transition: {
            duration: 1,
          },
        },
      }

  return (
    <Box sx={{minHeight:'100vh', }}>
        <Grid container columnSpacing={5} mb={10}>
            <Grid item container sx={{position:'relative'}}>
                <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>ABOUT OUR PRACTICE</Typography></Grid>
                <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
            </Grid>
            <Grid item container justifyContent='space-around' alignItems='stretch' rowGap={2} md={12}>
                <Grid item md={3}>
                    <Card sx={{display:'flex', flexDirection:'column', minHeight:'100%'}}>
                        {/* <CardHeader title='WHO ARE WE?' sx={{alignSelf:'center', fontWeight:'bold'}}></CardHeader> */}
                        <Typography variant='h5' color='#2F3345' fontWeight='bold' alignSelf='center' py={{xs:2}}>Who we are</Typography>
                        <Divider variant='middle' sx={{backgroundColor:'#800020', height:2}}/>
                        <CardContent><Typography>Established in 2001, Community Development System, Inc. aims to enhance community well-being in emotional, mental, and behavioral health. Our diverse team of medical and mental health professionals, including doctors, nurses, counselors, therapists, social workers, and paraprofessionals, is well trained in the Cognitive Behavioral Therapy (CBT) treatment model.</Typography></CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card sx={{display:'flex', flexDirection:'column', minHeight:'100%'}}>
                        {/* <CardHeader title='WHO ARE WE?' sx={{alignSelf:'center', fontWeight:'bold'}}></CardHeader> */}
                        <Typography variant='h5' color='#2F3345' fontWeight='bold' alignSelf='center' py={{xs:2}}>Communities We Serve</Typography>
                        <Divider variant='middle' sx={{backgroundColor:'#800020', height:2}}/>
                        <CardContent>
                            <Typography>Community Development System, Inc. serves several counties throughout the State of Georgia.</Typography>
                            <Grid container mt={4}>
                                {counties.map((item, index) => {
                                    return(
                                    <Grid item xs={3} key={index}>
                                        <Typography fontWeight={700}>{item}</Typography>
                                    </Grid>)
                                })}
                            </Grid>   
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card sx={{display:'flex', flexDirection:'column', minHeight:'100%'}}>
                        {/* <CardHeader title='WHO ARE WE?' sx={{alignSelf:'center', fontWeight:'bold'}}></CardHeader> */}
                        <Typography variant='h5' color='#2F3345' fontWeight='bold' alignSelf='center' py={{xs:2}}>Our Mission</Typography>
                        <Divider variant='middle' sx={{backgroundColor:'#800020', height:2}}/>
                        <CardContent><Typography>We truly believe that there is good in every individual as well as unrealized potential. We are dedicated to the development of the whole person. We will strive to provide services that will promote change and encourage the development of each individual’s full potential thus fostering the highest level of functioning self-actualization.</Typography></CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item container xs={12} alignItems='center' justifyContent='center' mt={{md:0, xs:4}}>
                <Card ref={ref} elevation={12} sx={{backgroundColor:'#FFF', opacity:.9, border:'2px solid darkgrey', height:{xs:'100%'}, justifyContent:'flex-start', mt:8, alignItems:'center', width:'100%', py:{md:2, xs:1}}}>
                    <Grid item container borderRadius={2} sx={{backgroundColor:'#FFF', height:{md:300, xs:'100%'}, justifyContent:'space-around', alignItems:'flex-start'}}>
                        <Grid item container direction='column' alignItems={{xs:'center', md:'flex-start'}} justifyContent='flex-start' md={3} xs={12}>
                            <Grid item alignSelf='center'><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} sx={{textDecoration:'underline'}} >Core Services</Typography></Grid>
                            {coreServices.map((item, index) => {
                                return(
                                    <Grid item key={index} pt={2}><Typography color='inherit'>{item}</Typography></Grid>
                                )
                            })}
                        </Grid>
                        <Divider sx={{backgroundColor:'#800020', mr:1, my:'auto', width:{md:2, xs:'75%'}, height:{md:'75%', xs:2}}}/>
                        <Grid item container direction='column' alignItems='center' md={3} xs={12}>
                            <Grid item><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} sx={{textDecoration:'underline'}}>Accredited</Typography></Grid>
                                <Grid item justifySelf='center' py={{md:'15%'}}><CardMedia component='img' height='100%' width='100%' image={accredited} /></Grid>
                        </Grid>
                        <Divider sx={{backgroundColor:'#800020', mr:1, my:'auto', width:{md:2, xs:'75%'}, height:{md:'75%', xs:2}}}/>
                        <Grid item container direction='column' alignItems={{xs:'center', md:'flex-start'}}  md={3} xs={12}>
                            <Grid item alignSelf='center'><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} sx={{textDecoration:'underline'}}>Assessments</Typography></Grid>
                            {assesments.map((item, index) => {
                                return(
                                    <Grid item key={index} pt={2}><Typography color='inherit'>{item}</Typography></Grid>
                                )
                            })}
                        </Grid>
                        {/* <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><MoneyOffIcon fontSize='large' color='inherit'/> 100+</Typography><Typography color='inherit'>H PRO-BONO</Typography></motion.div></Grid> */}
                    </Grid>
                </Card>
            </Grid>
            {/* <Grid item container xs={12} alignItems='center' justifyContent='center' mt={{md:0, xs:4}}>
                <Card ref={ref} sx={{backgroundColor:'#EEF1FC', height:300, justifyContent:'space-around', mt:8, alignItems:'center', width:'100%'}}>
                    <Grid  item container borderRadius={2} sx={{backgroundColor:'#EEF1FC', height:300, justifyContent:'space-around', alignItems:'center'}}>
                        <Grid item md={3} xs={6}><motion.div ref={ref} initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><GroupsIcon fontSize='large' color='inherit'/> 250+</Typography><Typography color='inherit'>PATIENTS</Typography></motion.div></Grid>
                        <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><AccessTimeIcon fontSize='large' color='inherit'/> 5k+</Typography><Typography color='inherit'>HOURS INVESTED</Typography></motion.div></Grid>
                        <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><VolunteerActivismIcon fontSize='large' color='inherit'/> 40+</Typography><Typography color='inherit'>HEALED HEARTS</Typography></motion.div></Grid>
                        <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><MoneyOffIcon fontSize='large' color='inherit'/> 100+</Typography><Typography color='inherit'>H PRO-BONO</Typography></motion.div></Grid>
                    </Grid>
                </Card>
            </Grid> */}
        </Grid>
    </Box>
  )
}

export default About