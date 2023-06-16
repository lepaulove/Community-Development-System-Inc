import React, { useEffect } from 'react'
import { Box, Divider, Grid, Typography, Card, CardMedia, CardHeader, CardContent } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import { animate, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import accredited from '../Media/aspire-seal-removebg-preview.png'
import main from '../Media/about-us-main-image.png'
import second from '../Media/about-2-image.jpeg'
import AboutCard from '../Components/AboutCard'
import { colorPalette } from '../App'

function About() {

    const { ref: initialTitleMessageSectionRef, inView: initialTitleMessageSectionInView } = useInView({
        threshold: .1, 
        triggerOnce: true
    })

    

    const { ref: aboutUsSectionRef, inView: aboutUsSectionInView } = useInView({
        threshold:.5,
        triggerOnce: true
    })

    const { ref: locationSectionRef, inView: locationSectionInView } = useInView({
        threshold:.5,
        triggerOnce: true
    })

    useEffect(() => {
        console.log(aboutUsSectionInView)
    }, [aboutUsSectionInView])

    const counties = [ 'Baldwin', 'Bibb', 'Crawford', 'Dooly', 'Houston', 'Jasper', 'Jones', 'Lamar', 'Macon', 'Monroe', 'Peach', 'Putnam', 'Twiggs', 'Wilkinson', 'Harris', 'Muscogee', 'Talbot', 'Marion' ]
    const coreServices = [ 'Diagnostic Assessment', 'Family Counseling/Training', 'Group Counseling/Training', 'Individual Counseling', 'Psychiatric Treatment', 'Psychological Testing', 'Medication Management', 'Service Plan Development', 'Nursing Assessment/Health Services' ]
    const assesments = [ 'Anger Management', 'Domestic Violence', 'Parenting', 'Sexual Assault',' Substance Abuse', 'Behavioral Health', 'Diagnostic' ]

      const intialTitleMessageSection = {
        hidden:{
            scale:0
        },
        animate1:{
            scale:1,
            transition: {
                duration: 3,
                type:'spring',
                bounce:0.20
              },
        },
        animate2:{
            scale:1,
            transition: {
                delay:.2,
                duration: 3,
                type:'spring',
                bounce:0.20
          },
        },
        animate3:{
            scale:1,
            transition: {
                delay:.5,
                duration: 3,
                type:'spring',
                bounce:0.20
          },
        },
        animate4:{
            scale:1,
            transition: {
                duration: 3,
                type:'spring',
                bounce:0.20
          },
        }
      }

      const aboutUsSection = {
        hidden1:{
            x:'-100vw'
        }, 
        hidden2:{
            x:'-150vw'
        },
        animate1:{
            x:0,
            transition:{
                duration:4,
                type:'spring',
                bounce:0.25
            }
        }, 
        animate2:{
            x: 0,
            transition:{
                duration:4,
                type:'spring',
                bounce:0.12
            }
        }
      }

      const locationSection = {
        hidden1:{
            y:-300,
            opacity:0
        }, 
        hidden2:{
            scale:0
        },
        animate1:{
            y:0,
            opacity:1,
            transition:{
                duration:4,
                type:'spring',
                bounce:0.25
            }
        }, 
        animate2:{
            scale: 1,
            transition:{
                duration:4,
                type:'spring',
                bounce:0.12
            }
        }
      }

  return (
    <Box sx={{minHeight:'100vh', }}>
        <Grid container columnSpacing={5} mb={10}>
            <Grid item container sx={{position:'relative'}}>
                <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} mb={{md:10}} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>ABOUT OUR PRACTICE</Typography></Grid>
                <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
            </Grid>
            <Grid item xs={12} sx={{}}><CardMedia component='img' image={main}  sx={{width:'100%', objectFit:'contain', display:{xs:'flex', md:'none'}}}/></Grid>
            <Grid ref={initialTitleMessageSectionRef} item container xs={12} alignItems='center' justifyContent='center' bgcolor='rgba(255,255,255,.8)' mt={{md:0, xs:4}} mb={8}>
                <motion.div initial={intialTitleMessageSection.hidden} animate={initialTitleMessageSectionInView ? intialTitleMessageSection.animate1 : intialTitleMessageSection.hidden} style={{width:'100%'}}><Grid item xs={12} display='flex' justifyContent='center'><Typography fontSize={{md:15}} fontWeight={600} color='#202C5C'>About Our Practice</Typography></Grid></motion.div>
                <motion.div initial={intialTitleMessageSection.hidden} animate={initialTitleMessageSectionInView ? intialTitleMessageSection.animate2 : intialTitleMessageSection.hidden} style={{width:'100%'}}><Grid item xs={12} display='flex' justifyContent='center'><Typography fontSize={{md:35, xs:20}} fontWeight={600} color='#202C5C'>Uncover valuble insights and </Typography></Grid></motion.div>
                <motion.div initial={intialTitleMessageSection.hidden} animate={initialTitleMessageSectionInView ? intialTitleMessageSection.animate3 : intialTitleMessageSection.hidden} style={{width:'100%'}}><Grid item xs={12} display='flex' justifyContent='center'><Typography fontSize={{md:35, xs:20}} fontWeight={600} color='#326078'>gain deeper knowledge</Typography></Grid></motion.div>
                <motion.div initial={intialTitleMessageSection.hidden} animate={initialTitleMessageSectionInView ? intialTitleMessageSection.animate4 : intialTitleMessageSection.hidden} style={{width:'100%', display:'flex', justifyContent:'center'}}><Grid item p={3} md={8} xs={12}><Typography fontWeight='bold'>CDS, inc. has offered exceptional care and support tailored to the unique needs of individuals since 2001. With a dedicated team of skilled professionals, evidence-based treatments, and a compassionate approach, we provide a safe space for healing and growth. Experience personalized treatment plans, a nurturing environment, and a commitment to your well-being, empowering you to thrive on your mental health journey.</Typography></Grid></motion.div>
            </Grid>
            <Grid ref={aboutUsSectionRef} item container md={6} alignItems='center'>
                <motion.div variants={aboutUsSection} initial='hidden1' animate={aboutUsSectionInView ? 'animate1' : 'hidden1'} >
                    <Grid item xs={12} mb={{xs:1, md:2}}><Typography fontSize={{md:15}} fontWeight={600} color={colorPalette.callToAction}>ABOUT US</Typography></Grid>
                    <Grid item  mb={{xs:1, md:2}}><Typography fontSize={{md:35, xs:31.5}} fontWeight={600} lineHeight={1}  color='#202C5C'>At CDS Inc., expect a personalized and holistic approach to your mental health journey.</Typography></Grid>
                    <Grid item  mb={{xs:1, md:2}}>Our team of expert clinicians and therapists will provide compassionate care, evidence-based treatments, and a safe, non-judgmental environment. With our comprehensive services, tailored to your unique needs, you can expect transformative healing, growth, and support every step of the way.</Grid>
                </motion.div>
            </Grid>
            <Grid ref={aboutUsSectionRef} item container md={6}>
                <motion.div variants={aboutUsSection} initial='hidden2' animate={aboutUsSectionInView ? 'animate2' : 'hidden2'} >
                    <Grid item xs={12} mt={{xs:4, md:0}} display='flex' alignItems='center'>
                        <CardMedia component='img' image={second} sx={{height:'75%', borderRadius:2}}/>
                    </Grid>
                </motion.div>
            </Grid>
            <Grid item container justifyContent='space-around' alignItems='stretch' rowSpacing={2} columnSpacing={2} md={12}>
                <AboutCard props={{sourceURL:accredited, title:'Accreditation and Quality Assurance', details:'We are proud to be accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF). This prestigious accreditation is a testament to our commitment to meeting and exceeding industry standards of excellence. You can trust that our clinic adheres to rigorous quality measures, ensuring the highest level of care and professionalism.'}}/>
                <AboutCard props={{sourceURL:'https://media.istockphoto.com/id/998313080/photo/smiling-medical-team-standing-together-outside-a-hospital.jpg?b=1&s=612x612&w=0&k=20&c=7p6e-Qm7u2ohNvqwXTA3U1AEeKp68Fx3Ext-Q11Gx08=', title:'Expert Team of Professionals', details:' Our clinic is staffed with a compassionate and highly skilled team of mental health professionals. From licensed therapists to board-certified psychiatrists, our experts are dedicated to providing the highest standard of care. With their extensive experience and expertise, you can feel confident that you\'re in capable hands.'}}/>
                <AboutCard props={{sourceURL:'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600', title:'Personalized Treatment Approach', details:'We understand that mental health needs vary from person to person. That\'s why we offer a personalized treatment approach tailored to your specific needs and goals. Our team will work closely with you to develop an individualized plan that addresses your unique challenges and promotes your overall well-being.'}}/>
                <AboutCard props={{sourceURL:'https://media.istockphoto.com/id/1227064104/photo/hand-choosing-green-happy-smiley-face-paper-cut-product-user-service-feedback-rating-and.jpg?b=1&s=612x612&w=0&k=20&c=y2IuEsU3yoNSHpy-8TdI3lrhG92-ySTGllz8ihmevw8=', title:'Comprehensive Range of Services', details:'Our clinic provides a comprehensive range of mental health services to address a wide spectrum of needs. Whether you require individual therapy, family counseling, group sessions, or medication management, we have the expertise and resources to meet your specific requirements.'}}/>
                <AboutCard props={{sourceURL:'https://images.pexels.com/photos/4101162/pexels-photo-4101162.jpeg?auto=compress&cs=tinysrgb&w=1600', title:'Warm and Supportive Environment', details:' We believe that a warm and supportive environment is essential for effective mental health treatment. When you choose our clinic, you\'ll be welcomed into a safe and non-judgmental space where you can freely express yourself. Our compassionate team will provide the support and guidance you need on your healing journey.'}}/>
                <AboutCard props={{sourceURL:'https://media.istockphoto.com/id/1252926473/photo/african-counsellor-sitting-in-front-of-patient-listens-his-complaints.jpg?b=1&s=612x612&w=0&k=20&c=WEYC1bMrbov67AkpA-vaxLs0UlfBbP_DgMGFjzZ5H0c=', title:'Focus on Continuity of Care', details:'At our clinic, we emphasize the importance of continuity of care. We are dedicated to building a long-term therapeutic relationship with you, offering ongoing support and follow-up care as needed. Your well-being is our priority even beyond the treatment sessions.'}}/>
            </Grid>
            <Grid item container xs={12} justifyContent='center' alignItems='center' mt={{md:8, xs:4}} columnSpacing={4} rowSpacing={4}>
                <Grid ref={locationSectionRef} item container xs={12} md={6} direction='column' rowSpacing={2} sx={{overFlowY:'hidden', maxHeight:'100%', zIndex:-10}}>
                    <motion.div variants={locationSection} initial='hidden1' animate={locationSectionInView ? 'animate1' : 'hidden1'} style={{overFlowY:'hidden'}}>
                        <Grid item><Typography fontSize={{md:15}} fontWeight={600} lineHeight={1} color={colorPalette.callToAction}>Find a Location Near You</Typography></Grid>
                        <Grid item mb={-1}><Typography fontSize={{md:35, xs:22}} fontWeight={600} color={colorPalette.secondary}>Conveniently located clinics for</Typography></Grid>
                        <Grid item><Typography fontSize={{md:35, xs:22}} fontWeight={600} color={colorPalette.primary}> accessible mental health Care</Typography></Grid>
                        <Grid item><Divider orientation='vertical' sx={{width:'90%', height:4, backgroundColor:colorPalette.callToAction}}/></Grid>
                        <Grid item><Typography fontSize={{md:18}} fontWeight={500} color={colorPalette.secondary}>Discover our conveniently located mental health clinics designed to provide accessible and quality care. With multiple locations throughout the city, our clinics offer a welcoming and comfortable environment where you can access our comprehensive range of mental health services. Whether you're in the downtown area or the suburbs, our clinics are strategically situated to ensure that you can easily access the support you need, right in your community.</Typography></Grid>
                    </motion.div>
                </Grid>
                <Grid item container xs={12} md={6}>
                    <motion.iframe variants={locationSection} initial='hidden2' animate={locationSectionInView ? 'animate2' : 'hidden2'} src="https://www.google.com/maps/d/u/0/embed?mid=105IOvxOtwAzKtqMHEzYGHnxh-KQxrSk&ehbc=2E312F" width='100%' height={500}></motion.iframe>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default About