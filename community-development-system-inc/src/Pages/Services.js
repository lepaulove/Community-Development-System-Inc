import React from 'react'
import { colorPalette } from '../App'
import { Box, CardMedia, Divider, Grid, List, ListItem, Typography } from '@mui/material'
import ServiceCard from '../Components/ServiceCard'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import insruance2 from '../Media/insurancewpeople.png'
import insruance3 from '../Media/insurancewpeople2.png'
import image1 from '../Media/service-about1.png'
import image2 from '../Media/service-about2.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AppointmentModal from '../Components/AppointmentModal'

function Services() {

  const { ref: freeConsultationSectionRef, inView: freeConsultationSectionInView } = useInView({
      threshold: 0.3,
      triggerOnce: true
  })

  const { ref: weAcceptInsuranceSectionRef, inView: weAcceptInsuranceSectionInView } = useInView({
    threshold: 0.8,
    triggerOnce: true
})

const { ref: testingSectionRef, inView: testingSectionInView } = useInView({
  threshold: 0.3,
  triggerOnce: true
})

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



  const variants = {
    hidden: {
      opacity: 0, 
      y:150,
    },
    visible: {
      opacity: 1, 
      y:0,
      transition:{
        delay:1,
        duration:1
      }
    }
  }

  const weAcceptInsuranceSection = {
    hidden: {
      scale:0,
    opacity: .5,
    },
    visible: {
        scale:1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
      },
    }
  }

  const testingSection = {
    hidden1: {
      scale:0,
    opacity: .5,
    },
    hidden2: {
      x:'100vw',
    },
    visible1: {
        scale:1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
      },
    },
    visible2: {
        scale:1,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
    visible3: {
        x:0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    }
  }


  return (
    <Box sx={{}}>
        <Grid container columnSpacing={5} mb={10}>
            <Grid item container sx={{position:'relative'}}>
                <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>SERVICES WE OFFER</Typography></Grid>
                <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
            </Grid>
              <Grid item xs={12}><motion.div variants={variants} initial='hidden' animate='visible'><Typography fontSize={{md:35, xs:25}} fontWeight={600} lineHeight={1} color={colorPalette.secondary}>Explore Our Comprehensive Mental Helth Services</Typography></motion.div></Grid>
              <Grid item xs={12}><motion.div variants={variants} initial='hidden' animate='visible'><Typography fontSize={{md:25, xs:18}} fontWeight={600} lineHeight={1} color={colorPalette.primary}>Supporting Your Journey to Wellness</Typography></motion.div></Grid>
              <Grid item pt={6}><motion.div variants={variants} initial='hidden' animate='visible'><Typography  fontSize={{md:18}} fontWeight={600}>Explore a wide range of specialized mental health services designed to meet your unique needs. From individual therapy and family counseling to psychiatric treatment and group sessions, we're dedicated to providing comprehensive care that empowers you on your journey to emotional well-being and personal growth.</Typography></motion.div></Grid>
              <Grid item xs={12} py={4}><motion.div variants={variants} initial='hidden' animate='visible'><AppointmentModal><Typography sx={{ display:'flex', alignItems:'center', border:'3px solid #326078', color:'#C43932', backgroundColor:'#FFF', borderRadius:100, cursor:'pointer', padding:1, fontSize:15, fontWeight:600}}><CalendarMonthIcon sx={{paddingRight:1}}/>Book Your Appointment Today!</Typography></AppointmentModal></motion.div></Grid>
            <Grid item container direction='row' xs={12} md={12} columnSpacing={4} rowSpacing={4} position='relative' pb={10}>
                <ServiceCard props={{sourceURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlX4BENvr8gk2SSlgssZDFYbm0pGnYKviIZw&usqp=CAU', label:'PSYCHOLOGICAL TESTING', description:'Uncover valuable insights and gain a deeper understanding of your psychological well-being through our comprehensive psychological testing services. Our team of experienced professionals utilizes a range of assessment tools and techniques to evaluate cognitive abilities, personality traits, and emotional functioning. With the results, we provide personalized recommendations and tailored interventions to support your mental health journey and help you achieve your full potential.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/3995921/pexels-photo-3995921.jpeg?auto=compress&cs=tinysrgb&w=600', label:'SUPERVISED VISITATION', description:'Ensure the safety and well-being of your child with our trusted supervised visitation services. Our trained professionals provide a secure environment where parent-child interactions can take place under careful observation. With a focus on the child\'s best interests, we strive to create a supportive and structured visitation experience that promotes healthy relationships and fosters a sense of security.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/9706190/pexels-photo-9706190.jpeg?auto=compress&cs=tinysrgb&w=1600', label:'FAMILY THERAPY', description:'Strengthen your family bonds and foster harmonious relationships through our transformative family therapy services. Our skilled therapists create a nurturing environment where open communication, understanding, and healing can flourish. Together, we\'ll navigate challenges, enhance connection, and empower your family to thrive, creating a solid foundation for lasting happiness and well-being.'}}/>
                <ServiceCard props={{sourceURL:'https://careersinpsychology.org/wp-content/uploads/2012/06/Social-Worker-with-Family.jpg', label:'INTENSIVE CASE MANAGEMENT', description:'Experience comprehensive support and personalized care with our Intensive Case Management services. Our dedicated team of experts provides individualized assistance, coordination, and advocacy, ensuring you receive the right resources and care for your complex mental health needs. Let us guide you towards recovery, empower you to overcome challenges, and help you navigate the path to long-term well-being and success.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1600', label:'INDIVIDUAL THERAPY', description:'Unlock your full potential and discover a path to personal growth and healing through individual therapy. Our compassionate and skilled therapists provide a safe and confidential space, guiding you on a journey of self-exploration, emotional well-being, and positive change. Gain invaluable insights, develop coping strategies, and experience the transformative power of one-on-one therapy tailored to your unique needs and goals.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1600', label:'DIAGNOSTIC ASSESSMENT', description:'Get the clarity you need with our diagnostic assessment services. Our experienced professionals utilize a thorough evaluation process to identify and understand your mental health concerns. Through comprehensive assessment tools and compassionate guidance, we provide accurate diagnoses and personalized treatment recommendations, empowering you to take the first step towards healing and a brighter future.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/7447261/pexels-photo-7447261.jpeg?auto=compress&cs=tinysrgb&w=1600', label:'FAMILY COUNSELING', description:'Discover the power of togetherness with our transformative family counseling services. Our dedicated team of therapists specializes in helping families navigate challenges, improve communication, and build stronger bonds. Through compassionate guidance and evidence-based techniques, we create a safe space where healing and growth can flourish, fostering harmony, resilience, and lasting connections within your family unit.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/7468213/pexels-photo-7468213.jpeg?auto=compress&cs=tinysrgb&w=1600', label:'GROUP COUNSELING', description:'Experience the power of shared support and connection through our group counseling services. Our expert facilitators create a welcoming and inclusive environment where individuals can come together to explore common challenges, gain insights, and offer mutual encouragement. With the guidance of our skilled professionals and the support of fellow group members, you\'ll find solace, growth, and a renewed sense of belonging on your journey towards emotional well-being and personal transformation.'}}/>
                <ServiceCard props={{sourceURL:'https://media.istockphoto.com/id/953262972/photo/consulting-patient-at-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=yDLohRT1D0rF0NiBzZHleAYjVbCmGQy5mFGIGYFonss=', label:'INDIVIDUAL COUNSELING', description:'Embark on a personalized journey of self-discovery and growth with our individual counseling services. Our compassionate therapists provide a confidential and supportive space to explore your unique concerns, develop coping strategies, and foster positive change. Through one-on-one sessions tailored to your specific needs, you\'ll gain valuable insights, enhance your emotional well-being, and unlock the tools to navigate life\'s challenges with resilience and empowerment.'}}/>
                <ServiceCard props={{sourceURL:'https://www.shutterstock.com/image-photo/mens-health-exam-doctor-psychiatrist-260nw-1489440323.jpg', label:'PSYCHIATRIC TREATMENT', description:'Experience comprehensive psychiatric treatment tailored to your unique needs and well-being. Our team of skilled psychiatrists combines expertise with compassionate care to provide personalized diagnosis, medication management, and therapeutic interventions. With our holistic approach, we aim to empower you on your mental health journey, promoting stability, resilience, and improved overall quality of life.'}}/>
                <ServiceCard props={{sourceURL:'https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=1600', label:'MEDICATION MANAGEMENT', description:'Optimize your mental health with our expert medication management services. Our experienced professionals, including psychiatrists and medical practitioners, work closely with you to develop a personalized treatment plan. Through careful evaluation, monitoring, and adjustment of medications, we strive to achieve the optimal balance to support your mental well-being and enhance your overall quality of life. Trust our team to provide the guidance and support you need on your path to wellness.'}}/>
                <ServiceCard props={{sourceURL:'https://media.istockphoto.com/id/1316738511/photo/shot-of-an-attractive-young-nurse-sitting-and-bonding-with-her-senior-patient-in-his-kitchen.jpg?b=1&s=612x612&w=0&k=20&c=5cE8npE_t-Zf3Men3pUV66-KvOG5Vf-862C9Qsw3ZYY=', label:'NURSING HEALTH SERVICES', description:'Elevate your mental health care with our exceptional nursing health services. Our dedicated team of registered nurses combines expertise with compassion to provide comprehensive support and personalized care. From medication administration and monitoring to health education and advocacy, we ensure your well-being is prioritized every step of the way, promoting a holistic approach to mental wellness and empowering you on your path to recovery.'}}/>
                <motion.div ref={weAcceptInsuranceSectionRef} variants={weAcceptInsuranceSection} initial='hidden' animate={ weAcceptInsuranceSectionInView ? 'visible' : 'hidden'} style={{width:'99%'}}>
                <Grid item container xs={11} md={11.8} alignItems='center' justifyContent='center' ml={4} mt={4} px={{xs:1, md:0}} borderRadius={4} sx={{background:{md:`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${insruance2})`, xs:`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${insruance3})`}, width:'100%', minHeight:450, backgroundSize:'cover', backgroundRepeat:'no-repeat',}}>         
                    <Grid item container md={6} flexDirection='column' alignItems='flex-start'>
                      <Grid item display='flex' justifyContent='center'><Typography color='#F3AE2D' fontSize={{md:15, xs:20}}>WE PROUDLY ACCEPT INSURANCE!</Typography></Grid>
                      <Grid item display='flex'>
                        <Typography fontSize={22} fontWeight={700} color='#FFF' textAlign={{}}>We accept Medicaid and participating Care Management Organization (CMO) that support Medicaid</Typography>
                      </Grid>
                        <Grid item>
                          <List>
                            <ListItem alignItems='flex-start'><ArrowRightIcon sx={{color:'#FFF'}}/><Typography color='#FFF'>Caresource Peachstate</Typography></ListItem>
                            <ListItem alignItems='flex-start'><ArrowRightIcon sx={{color:'#FFF',}}/><Typography color='#FFF'>Amerigroup</Typography></ListItem>
                            <ListItem alignItems='flex-start'><ArrowRightIcon sx={{color:'#FFF'}}/><Typography color='#FFF'>FFS (for our Intensive Family Intervention (IFI) service only)</Typography></ListItem>
                          </List>
                      </Grid>
                    </Grid>
                  
                </Grid>
                </motion.div>
            </Grid>
            <Grid item container xs={12} justifyContent='center'>
              <Grid item container md={6} xs={12} columnSpacing={2}>
                <Grid ref={testingSectionRef} item xs={6}>
                  <motion.div variants={testingSection} initial='hidden1' animate={testingSectionInView ? 'visible1' : 'hidden1'} style={{height:'100%'}}><CardMedia component='img' image={image1} sx={{height:'100%', objectFit:'cover', borderRadius:2}}/></motion.div>
                </Grid>
                <Grid item xs={6}>
                  <motion.div variants={testingSection} initial='hidden1' animate={testingSectionInView ? 'visible2' : 'hidden1'} style={{height:'100%'}}><CardMedia component='img' image={image2} sx={{height:'100%', objectFit:'cover', borderRadius:2}}/></motion.div>
                </Grid>
              </Grid>
              <Grid ref={testingSectionRef} item container md={6} xs={12} direction='column' justifyContent='center' pl={{md:9.8}} mt={{md:0, xs:2}} rowSpacing={{md:1.7, xs:2}}>
                  <motion.div variants={testingSection} initial='hidden2' animate={testingSectionInView ? 'visible3' : 'hidden2'}>
                  <Grid item>
                    <Typography fontSize={{md:15}} fontWeight={600} color={colorPalette.callToAction}>PSYCHOLOGICAL TESTING</Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={{md:35, xs:25}} fontWeight={600} lineHeight={1} color={colorPalette.secondary}>Uncover valuable insights and <span><Typography fontSize={{md:35, xs:25}} fontWeight={600} color={colorPalette.primary}>gain a deeper understanding</Typography></span></Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={{md:18}} fontWeight={500}>Our expert clinicians utilize state-of-the-art evaluation tools and techniques to help you gain a clear understanding of your strengths, challenges, and personalized treatment recommendations, empowering you to embark on a path towards positive change and growth.</Typography>
                  </Grid>
                  <Grid item xs={12} py={4}><motion.div variants={variants} initial='hidden' animate='visible'><AppointmentModal><Typography sx={{ display:'flex', alignItems:'center', border:'3px solid #326078', color:'#C43932', backgroundColor:'#FFF', borderRadius:100, cursor:'pointer', padding:1, fontSize:15, fontWeight:600}}><CalendarMonthIcon sx={{paddingRight:1}}/>Book Your Appointment Today!</Typography></AppointmentModal></motion.div></Grid>
                </motion.div>
              </Grid>
              
            </Grid>
            <motion.div ref={freeConsultationSectionRef} initial={freeConsultationSection.hidden} animate={freeConsultationSectionInView ? freeConsultationSection.visible : freeConsultationSection.hidden}>
        </motion.div>
        </Grid>
    </Box>
  )
}

export default Services