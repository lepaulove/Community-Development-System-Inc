import React, { useEffect } from 'react'
import WaveLine from '../Components/WaveLine'
import { Box, Button, Card, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import accredited from '../Media/aspire-seal-removebg-preview.png'
import startImage from '../Media/start.jpg'
import familyHug from '../Media/family-hug.JPG'
import diverseTherapy from '../Media/diverse-therapy2.JPG'
import individual from '../Media/indv-ther.PNG'
import group from '../Media/group-ther.PNG'
import family from '../Media/fam-ther.PNG'
import medMan from '../Media/med-man.PNG'
import computerLady from '../Media/ComputerLady-removebg-preview.png'
import { motion } from 'framer-motion'
import GroupsIcon from '@mui/icons-material/Groups'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded'
import OfflinePinIcon from '@mui/icons-material/OfflinePin'
import PeopleIcon from '@mui/icons-material/People'
import { useInView } from 'react-intersection-observer'
// import { useInView } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import ParallaxEffect from '../Components/ParallaxEffect'
import { useNavigate } from 'react-router-dom'


function Home() {

    const animation = useAnimation()
    const navigate = useNavigate()

    const { ref, inView } = useInView({
        threshold:1,
        triggerOnce: true
    })

    const { ref: ourPracticeSectionRef, inView: ourPracticeSectionInView } = useInView({
        threshold: .2,
        triggerOnce: true
    })
    const { ref: servicesSectionRef, inView: servicesSectionInView } = useInView({
        threshold: .2,
        triggerOnce: true
    })

    const { ref: howTherapyWorkSectionRef, inView: howTherapyWorkSectionInView } = useInView({
        threshold:.5,
        triggerOnce: true
    })

    const { ref: freeConsultationSectionRef, inView: freeConsultationSectionInView } = useInView({
        threshold: .3,
        triggerOnce: true
    })

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

      const ourPracticeSection = {
        hidden: {
          opacity: .5,
          rotateY: 180,
        },
        visible: {
          opacity: 1,
          rotateY: 0,
          transition: {
            duration: 1.5,
          },
        }
      }

      const servicesSection = {
        hidden1: {
          x: '-30vw',
          opacity:0
        },
        hidden2: {
            x:'30vw',
            opacity:0
          },
        visible: {
          x:1,
          opacity:1,
          transition: {
            duration: 1.5,
          },
        }
      }

      const howTherapyWorkSection = {
        hidden:{
            x:'-20vw', 
            opacity:0
        }, 
        visible:{
            x:0, 
            opacity:1, 
            transition:{
                duration:2
            }
        },
        imgHidden:{
            x:'40vw',
            opacity: 0
        },
        imgVisible:{
            x:0,
            opacity:1,
            transition:{
                duration:2
            }
        }
      }

      const freeConsultationSection = {
        hidden: {
            // scale:0,
        //   opacity: .5,
        //   rotateY: 180,
          rotateX:180,
        },
        visible: {
            // scale:1,
        //   opacity: 1,
        //   rotateY: 0,
          rotateX: 0,
          transition: {
            duration: 1.5,
          },
        }
      }

    useEffect(() => {
        // alert('!')
    }, [servicesSectionInView])
    

  return (
    <div>
        <Grid container justifyContent='space-between'>
            <Grid item md={6} xs={9}>
                <motion.div initial={{x:'-70vw'}} animate={{x:0, opacity:1}} transition={{duration:2}}><Typography fontSize={{md:80, xs:30}} lineHeight={1.1}>Your Mental Health is Our Priority</Typography></motion.div>
            </Grid>
            <Grid item md={3} xs={4} sx={{display:{md:'flex', xs:'none'}}}><img src={accredited} style={{objectFit:'cover', width:'100%', height:'100%'}}/></Grid>
            <Grid item md={3} xs={3} sx={{display:{md:'none', xs:'xs'}}}><img src={accredited} style={{objectFit:'cover', aspectRatio:1, width:'100%', height:'100%'}}/></Grid>
        </Grid>
        {/* <WaveLine /> */}
        <Grid container sx={{mt:{md:16, xs:0}}}>
                <Grid item md={6} xs={12}>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:3.5}}>
                    <Typography fontSize={{md:20}} fontWeight={{xs:'bold'}} mt={{md:0, xs:4}}>Community Development System, Inc. offers a variety of mental health services to meet your individual needs, including individual therapy, group therapy, and family therapy.</Typography>
                </motion.div>
                    <Paper component='form' sx={{ p:1, display:{md:'flex', xs:'none'}, alignItems: 'center', width: 400, border:'3px solid #2F3345', borderRadius:2, mt:6 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter Email to Continue..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px', backgroundColor:'#2F3345', color:'#FFF', borderRadius:0 }} aria-label="search">
                            <Typography>Booking Schedule</Typography>
                        </IconButton>
                        {/* <input type='text' placeholder='Enter Email to Continue...' style={{border:'none', fontSize:15}}></input> */}
                        {/* <button style={{padding:8, fontSize:15, fontWeight:'bold', color:'white', backgroundColor:'#2F3345', cursor:'pointer'}}>Booking Schedule</button> */}
                    </Paper>
                </Grid>
            <Grid container item justifyContent='center' md={6} xs={12} sx={{mt:{xs:8, md:0}, mb:{xs:8, md:5}}}>
                <motion.img 
                initial={{scale: 0.00}}
                animate={{scale: 1.0}}
                transition={{duration: 2}}
                src={familyHug} style={{objectFit:'cover', width:'50%', minHeight:'50%', borderRadius:10, backgroundColor:'#2F3345', padding:3}}/>
            </Grid>
            <motion.div style={{width:'100%'}} initial={{width:0}} animate={{width:'100%'}} transition={{duration:2}}><Divider textAlign='center' sx={{height:'3px', width:'100%', backgroundColor:'#800020', opacity:.70}} /></motion.div>
            <Card ref={ref} sx={{backgroundColor:'#EEF1FC', height:300, justifyContent:'space-around', mt:8, alignItems:'center', width:'100%'}}>
                    <Grid  item container borderRadius={2} sx={{backgroundColor:'#EEF1FC', height:300, justifyContent:'space-around', alignItems:'center'}}>
                        <Grid item md={3} xs={6}><motion.div ref={ref} initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><GroupsIcon fontSize='large' color='inherit'/> 250+</Typography><Typography color='inherit'>PATIENTS</Typography></motion.div></Grid>
                        <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><AccessTimeIcon fontSize='large' color='inherit'/> 5k+</Typography><Typography color='inherit'>HOURS INVESTED</Typography></motion.div></Grid>
                        <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><VolunteerActivismIcon fontSize='large' color='inherit'/> 40+</Typography><Typography color='inherit'>HEALED HEARTS</Typography></motion.div></Grid>
                        <Grid item md={3} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:'#800020'}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><MoneyOffIcon fontSize='large' color='inherit'/> 100+</Typography><Typography color='inherit'>H PRO-BONO</Typography></motion.div></Grid>
                    </Grid>
                </Card>
        </Grid>
        <Grid container flexDirection='column' alignItems='center' mt={{xs:5, md:15}}>
            <Grid item>
                <motion.div ref={ourPracticeSectionRef} initial={ourPracticeSection.hidden} animate={ourPracticeSectionInView ? ourPracticeSection.visible : ourPracticeSection.hidden}><Typography color='#800020' fontWeight='bold'>OUR PRACTICE</Typography></motion.div>
            </Grid>
            <Grid item container direction='column' alignItems='center' sx={{backgroundImage:'url()'}}>
                <Grid item mt={{xs:4, md:7}}>
                    <motion.div ref={ourPracticeSectionRef} initial={ourPracticeSection.hidden} animate={ourPracticeSectionInView ? ourPracticeSection.visible : ourPracticeSection.hidden}><Typography color='#2F3345' fontSize={{md:30, xs:20}} fontWeight='bold'>A  Better  Tomorrow  Starts  Here</Typography></motion.div>
                </Grid>
                <Grid item mt={{xs:4, md:10}} px={{md:50}}>
                    <motion.div ref={ourPracticeSectionRef} initial={ourPracticeSection.hidden} animate={ourPracticeSectionInView ? ourPracticeSection.visible : ourPracticeSection.hidden}><Typography color='#2F3345' fontSize={{xs:20}}>Community Development System, Inc. is a private practice that provides mental health services to individuals, families, and groups. We ofer a variety of evidence-based therapies, including CBT (Cognitive Behavioral therapy), to help you achieve your mental health goals.</Typography></motion.div>
                </Grid>
            </Grid>
        </Grid>
        <Grid container sx={{mt:{md:8, xs:5}}} justifyContent='center'>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:20}, py:5}}>
                <motion.div initial={servicesSection.hidden1} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden1}>
                    <Grid item><img src={individual} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold'>Individual Therapy</Typography></Grid>
                    <Grid item><Typography>One-on-one counseling with a therapist to address specific mental health concerns.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:20}, py:5}}>
                <motion.div ref={servicesSectionRef} initial={servicesSection.hidden2} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden2}>
                    <Grid item><img src={group} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold'>Group Therapy</Typography></Grid>
                    <Grid item><Typography>A small group setting where participants can share experiences and learn from each other.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:20}, py:5}}>
                <motion.div initial={servicesSection.hidden1} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden1}>
                    <Grid item><img src={family} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold'>Family Therapy</Typography></Grid>
                    <Grid item><Typography>A type of therapy that involves the entire family to address issues that are affecting the family unit.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:20}, py:5}}>
                <motion.div initial={servicesSection.hidden2} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden2}>
                    <Grid item><img src={medMan} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold'>Intensive Family Intervention</Typography></Grid>
                    <Grid item><Typography>This therapy aims to  improve family functioning by clinically stabilizing the living arrangement, promoting reunification or preventing the utilization of out of home therapeutic venues for the individual consumer. </Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item><Button onClick={() => navigate('/services')} sx={{color: '#000', border:'2px solid #2F3345', borderRadius:100, fontWeight:'bold'}}>OTHER SERVICES</Button></Grid>
        </Grid>
        <Grid container direction='column' alignItems='center' sx={{backgroundColor:'#F7F8FC', py:{md:8, xs:4}, px:{md:12, xs:2}, mt:{md:15, xs:15}}}>
            <Grid item sx={{mb:{md:5, xs:3}}}><Typography fontSize={{md:20}} fontWeight='bold' color='#202332' sx={{textDecoration:'underline'}}>HOW THERAPY WORKS</Typography></Grid>
            <Grid item sx={{mb:{md:5, xs:3}}}><Typography fontSize={{md:40}} fontWeight='bold' color='#202332'><span style={{color:'#800020'}}>Clinically designed</span> therapy for you</Typography></Grid>
            <Grid item container>
                <Grid item container md={4} xs={12} direction='column'  rowGap={4}>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={3}>
                        <Divider orientation='vertical' sx={{backgroundColor:'#800020', mr:1, width:2}}/>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container>
                                <PhoneForwardedIcon sx={{pr:1}}/><Typography color='#202332' fontSize={{md:18}} fontWeight='bold'>Call us to schedule an appointment</Typography>
                                <Typography>We will ask you some questions about your mental health concerns and schedule an appointment that is convenient for you.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={3}>
                        <Divider orientation='vertical' sx={{backgroundColor:'#800020', mr:1, width:2}}/>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container>
                                <OfflinePinIcon sx={{pr:1}}/><Typography color='#202332' fontSize={{md:18}} fontWeight='bold'>Come to your appointment prepared</Typography>
                                <Typography>Bring a list of your symptoms, any medications you are taking, and any questions you have.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={3}>
                        <Divider orientation='vertical' sx={{backgroundColor:'#800020', mr:1, width:2}}/>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container>
                                <PeopleIcon sx={{pr:1}}/><Typography color='#202332' fontSize={{md:18}} fontWeight='bold'>Meet with your therapist.</Typography>
                                <Typography>Your therapist will get to know you and your concerns. They will work with you to develop a treatment plan that is right for you.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} justifyContent='center' alignItems='center' mt={{md:0, xs:7}} ml={{md:10}}>
                    {/* <Grid item > */}
                        <motion.img initial={howTherapyWorkSection.imgHidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.imgVisible : howTherapyWorkSection.imgHidden} src={diverseTherapy} style={{borderRadius:6, width:'100%'}}/>
                    {/* </Grid> */}
                    
                </Grid>
            </Grid>
        </Grid>
        <motion.div ref={freeConsultationSectionRef} initial={freeConsultationSection.hidden} animate={freeConsultationSectionInView ? freeConsultationSection.visible : freeConsultationSection.hidden}>
            <Grid container md={12} justifyContent='center' sx={{backgroundColor:'#E0E6FB', borderRadius:6}}>
                <Grid container md={7} direction='column' justifyContent='center' rowGap={6} sx={{p:{md:12, xs:5}}}>
                    <Grid item alignSelf='center'><Typography color='#202332' fontSize={{md:40, xs:20}} fontWeight='bold'>Don't Let Your Mental Health Hold You Back</Typography></Grid>
                    <Grid item><Button sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:100, p:2, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40'}}}>Get Free Consultation</Button></Grid>
                </Grid>
                <Grid item md={5} xs={12}><img src={computerLady} style={{width:'100%'}}/></Grid>
            </Grid>
        </motion.div>
    </div>
)
}

export default Home