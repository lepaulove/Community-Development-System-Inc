import React, { useEffect } from 'react'
import { colorPalette } from '../App'
import AppointmentModal from '../Components/AppointmentModal'
import { Button, Card, Divider, Grid, Typography } from '@mui/material'
import familyHug from '../Media/family-hug.JPG'
import diverseTherapy from '../Media/diverse-therapy2.JPG'
import individual from '../Media/indv-ther.PNG'
import group from '../Media/group-ther.PNG'
import family from '../Media/fam-ther.PNG'
import medMan from '../Media/med-man.PNG'
import computerLady from '../Media/ComputerLady-removebg-preview.png'
import { motion } from 'framer-motion'
import GroupsIcon from '@mui/icons-material/Groups'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded'
import OfflinePinIcon from '@mui/icons-material/OfflinePin'
import PeopleIcon from '@mui/icons-material/People'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CarfHomeSection from '../Components/CarfHomeSection'


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
            scale:0,
          rotateX:180,
        },
        visible: {
            scale:1,
          rotateX: 0,
          transition: {
            duration: 1,
          },
        }
      }

    useEffect(() => {
        
    }, [])
    

  return (
    <div>
        <Grid container justifyContent='space-between'>
            <Grid container item md={8} xs={11}>
                <Grid item ><motion.div initial={{x:'-70vw'}} animate={{x:0, opacity:1}} transition={{duration:2}}><Typography fontSize={{md:90, xs:30}} lineHeight={1.1} color={colorPalette.primary}>Your Mental Health is Our Priority</Typography></motion.div></Grid>
                <Grid item md={8} xs={12} mt={{md:-15, xs:8}}>
                <Grid item display={{xs:'flex', mb:{xs:5}}}><motion.div initial={{x:'-70vw'}} animate={{x:0, opacity:1}} transition={{duration:2}}><AppointmentModal><Typography sx={{ display:'flex', alignItems:'center', border:'3px solid #326078', color:'#C43932', backgroundColor:'#FFF', borderRadius:100, cursor:'pointer', padding:1, fontSize:15}}><CalendarMonthIcon sx={{paddingRight:1}}/>Book Your Appointment Today!</Typography></AppointmentModal></motion.div></Grid>
                <motion.div style={{width:'100%'}} initial={{width:0}} animate={{width:'100%'}} transition={{duration:2}}>
                    <Divider textAlign='center' sx={{height:'3px', width:'100%', backgroundColor:colorPalette.callToAction, opacity:.70, mt:10}} />
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:3.5}} style={{backgroundColor:'rgba(255,255,255,.7)', boxShadow:'10px 10px 10px -10px #FFF', opacity:.9, width:'100%'}}>
                    <Typography fontSize={{md:25}} fontWeight={{xs:400}} mt={{md:0, xs:4}} color='#2F3345'>Community Development System, Inc. offers a variety of mental health services to meet your individual needs, including individual therapy, group therapy, and family therapy.</Typography>
                </motion.div>
                </Grid>
            </Grid>
            <Grid container item justifyContent='center' md={4} xs={12} sx={{mt:{xs:8, md:15}, mb:{xs:8, md:5}}}>
                <motion.img 
                initial={{scale: 0.00}}
                animate={{scale: 1.0}}
                transition={{duration: 2}}
                src={familyHug} style={{objectFit:'cover', width:'100%', minHeight:'100%', borderRadius:10, padding:3}}/>
            </Grid>
        </Grid>
        <Grid container sx={{mt:{md:16, xs:0}}}>
            <motion.div style={{width:'100%'}} initial={{width:0}} animate={{width:'100%'}} transition={{duration:2}}>
                <Divider textAlign='center' sx={{height:'3px', width:'100%', backgroundColor:'#326078', opacity:.70}} /></motion.div>
                <Card ref={ref} sx={{backgroundColor:'#EEF1FC', height:300, justifyContent:'space-around', mt:8, alignItems:'center', width:'100%'}}>
                    <Grid ref={ref}  item container borderRadius={2} sx={{backgroundColor:'#EEF1FC', height:300, justifyContent:'space-around', alignItems:'center'}}>
                        <Grid item md={2} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:colorPalette.callToAction}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><ThumbUpIcon fontSize='large' color='inherit' sx={{pl:2}}/> 93% <Typography color='inherit'>Patient Satisfaction</Typography></Typography></motion.div></Grid>
                        <Divider orientation='vertical' sx={{display:{md:'flex', xs:'none'}, width:2, height:'35%', backgroundColor:colorPalette.primary}}/>
                        <Grid item md={2} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:colorPalette.callToAction}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><DoneAllIcon fontSize='large' color='inherit'/> 83%</Typography><Typography color='inherit'>Treatment Success Rate</Typography></motion.div></Grid>
                        <Divider orientation='vertical' sx={{display:{md:'flex', xs:'none'}, width:2, height:'35%', backgroundColor:colorPalette.primary}}/>
                        <Grid item md={2} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:colorPalette.callToAction}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><GroupsIcon fontSize='large' color='inherit'/> 30:1</Typography><Typography color='inherit'>Patient-to-Therapist ratio</Typography></motion.div></Grid>
                        <Divider orientation='vertical' sx={{display:{md:'flex', xs:'none'}, width:2, height:'35%', backgroundColor:colorPalette.primary}}/>
                        <Grid item md={2} xs={6}><motion.div initial={animationVariants.hidden} animate={inView ? animationVariants.visible : animationVariants.hidden} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', color:colorPalette.callToAction}}><Typography fontSize={{md:30, xs:20}} color={'inherit'} fontWeight={'bold'} lineHeight={1}><VolunteerActivismIcon fontSize='large' color='inherit'/> 40+</Typography><Typography color='inherit'>HEALED HEARTS</Typography></motion.div></Grid>
                        <Grid item xs={12} mt={{md:-10}} pl={{md:10, xs:2}}><Typography color={colorPalette.callToAction} fontSize={{md:16, xs:10}}>- CARF INTERNATIONAL SURVEY REPORT 2022</Typography></Grid>
                    </Grid>
                </Card>
        </Grid>
        <Grid container flexDirection='column' alignItems='center' mt={{xs:5, md:15}}>
            <Grid item>
                <motion.div ref={ourPracticeSectionRef} initial={ourPracticeSection.hidden} animate={ourPracticeSectionInView ? ourPracticeSection.visible : ourPracticeSection.hidden}><Typography color={colorPalette.callToAction} fontWeight='bold'>OUR PRACTICE</Typography></motion.div>
            </Grid>
            <Grid item container direction='column' alignItems='center' sx={{backgroundImage:'url()'}}>
                <Grid item mt={{xs:4, md:7}}>
                    <motion.div ref={ourPracticeSectionRef} initial={ourPracticeSection.hidden} animate={ourPracticeSectionInView ? ourPracticeSection.visible : ourPracticeSection.hidden}><Typography color={colorPalette.primary} fontSize={{md:30, xs:20}} fontWeight='bold'>A  Better  Tomorrow  Starts  Here</Typography></motion.div>
                </Grid>
                <Grid item mt={{xs:4, md:10}} px={{md:50}}>
                    <motion.div ref={ourPracticeSectionRef} initial={ourPracticeSection.hidden} animate={ourPracticeSectionInView ? ourPracticeSection.visible : ourPracticeSection.hidden}><Typography color={colorPalette.secondary} fontSize={{xs:20}}>Community Development System, Inc. is a private practice that provides mental health services to individuals, families, and groups. We ofrer a variety of evidence-based therapies, including CBT (Cognitive Behavioral therapy), to help you achieve your mental health goals.</Typography></motion.div>
                </Grid>
            </Grid>
        </Grid>
        <Grid container sx={{mt:{md:8, xs:5}}} justifyContent='center'>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:10}, py:5}}>
                <motion.div initial={servicesSection.hidden1} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden1}>
                    <Grid item><img src={individual} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold' color={colorPalette.primary}>INDIVIDUAL THERAPY</Typography></Grid>
                    <Grid item><Typography>Experience transformative individual therapy with compassionate therapists who guide you towards self-exploration, emotional well-being, and positive change, helping you gain insights, develop coping strategies, and reach your unique goals.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:10}, py:5}}>
                <motion.div ref={servicesSectionRef} initial={servicesSection.hidden2} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden2}>
                    <Grid item><img src={group} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold' color={colorPalette.primary}>GROUP COUNSELING</Typography></Grid>
                    <Grid item><Typography>Discover the power of shared support and growth in our inclusive group counseling sessions, where expert facilitators guide you through common challenges, foster mutual encouragement, and create a sense of belonging for your emotional well-being and personal transformation.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='start' sx={{px:{md:10}, py:5}}>
                <motion.div initial={servicesSection.hidden1} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden1}>
                    <Grid item><img src={family} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold' color={colorPalette.primary}>FAMILY THERAPY</Typography></Grid>
                    <Grid item><Typography>Build stronger family bonds and navigate challenges together with our transformative family therapy services, creating a solid foundation for lasting happiness and well-being.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item container md={6} xs={12} direction='column' alignItems='center' justifyContent='center' sx={{px:{md:10}, py:5}}>
                <motion.div initial={servicesSection.hidden2} animate={servicesSectionInView ? servicesSection.visible : servicesSection.hidden2}>
                    <Grid item><img src={medMan} /></Grid>
                    <Grid item><Typography fontSize={20} fontWeight='bold' color={colorPalette.primary}>PSYCHIATRIC TREATMENT</Typography></Grid>
                    <Grid item><Typography>Receive personalized, comprehensive psychiatric treatment from our skilled team of experts who combine compassionate care, personalized diagnosis, medication management, and therapeutic interventions to empower your mental health journey and enhance overall well-being.</Typography></Grid>
                </motion.div>
            </Grid>
            <Grid item><Button onClick={() => navigate('/services')} sx={{color:colorPalette.callToAction, border:`2px solid ${colorPalette.primary}`, borderRadius:100, fontWeight:'bold'}}>OTHER SERVICES</Button></Grid>
        </Grid>
        <Grid container direction='column' alignItems='center' sx={{backgroundColor:'#F7F8FC', py:{md:8, xs:4}, px:{md:8, xs:2}, mt:{md:15, xs:15}}}>
            <Grid item sx={{mb:{md:5, xs:3}}}><Typography fontSize={{md:20}} fontWeight='bold' color={colorPalette.secondary} sx={{textDecoration:'underline'}}>HOW THERAPY WORKS</Typography></Grid>
            <Grid item sx={{mb:{md:5, xs:3}}}><Typography fontSize={{md:40}} fontWeight='bold' color={colorPalette.primary}><span style={{color:colorPalette.callToAction}}>Clinically designed</span> therapy for you</Typography></Grid>
            <Grid item container>
                <Grid item container md={4} xs={12} direction='column'  rowGap={4}>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={3}>
                        <Divider orientation='vertical' sx={{backgroundColor:colorPalette.callToAction, mr:1, width:2}}/>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container>
                                <PhoneForwardedIcon sx={{pr:1, color:colorPalette.primary}}/><Typography color={colorPalette.callToAction} fontSize={{md:18}} fontWeight='bold'>Call us to schedule an appointment</Typography>
                                <Typography color={colorPalette.secondary}>We will ask you some questions about your mental health concerns and schedule an appointment that is convenient for you.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={3}>
                        <Divider orientation='vertical' sx={{backgroundColor:colorPalette.callToAction, mr:1, width:2}}/>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container>
                                <OfflinePinIcon sx={{pr:1, color:colorPalette.primary}}/><Typography color={colorPalette.callToAction} fontSize={{md:18}} fontWeight='bold'>Come to your appointment prepared</Typography>
                                <Typography color={colorPalette.secondary}>Bring a list of your symptoms, any medications you are taking, and any questions you have.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={3}>
                        <Divider orientation='vertical' sx={{backgroundColor:colorPalette.callToAction, mr:1, width:2}}/>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container>
                                <PeopleIcon sx={{pr:1, color:colorPalette.primary}}/><Typography color={colorPalette.callToAction} fontSize={{md:18}} fontWeight='bold'>Meet with your therapist.</Typography>
                                <Typography color={colorPalette.secondary}>Your therapist will get to know you and your concerns. They will work with you to develop a treatment plan that is right for you.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} justifyContent='center' alignItems='center' mt={{md:0, xs:7}} ml={{md:10}}>
                    <motion.img initial={howTherapyWorkSection.imgHidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.imgVisible : howTherapyWorkSection.imgHidden} src={diverseTherapy} style={{borderRadius:6, width:'100%'}}/>
                </Grid>
            </Grid>
        </Grid>
        <CarfHomeSection />
        <motion.div ref={freeConsultationSectionRef} initial={freeConsultationSection.hidden} animate={freeConsultationSectionInView ? freeConsultationSection.visible : freeConsultationSection.hidden}>
            <Grid container md={12} justifyContent='center' sx={{backgroundColor:'#E0E6FB', borderRadius:6}}>
                <Grid container md={7} direction='column' justifyContent='center' rowGap={6} sx={{p:{md:12, xs:5}}}>
                    <Grid item alignSelf='center'><Typography color='#202332' fontSize={{md:40, xs:20}} fontWeight='bold'>Don't Let Your Mental Health Hold You Back</Typography></Grid>
                    <Grid item><Button onClick={() => navigate('/contact')} sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:100, p:2, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40'}}}>Get Free Consultation</Button></Grid>
                </Grid>
                <Grid item md={5} xs={12}><img src={computerLady} style={{width:'100%'}}/></Grid>
            </Grid>
        </motion.div>
    </div>
)
}

export default Home