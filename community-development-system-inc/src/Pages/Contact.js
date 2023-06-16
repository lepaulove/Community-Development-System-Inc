import React, { useState } from 'react'
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import computerLady from '../Media/Picture2.png'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded'
import OfflinePinIcon from '@mui/icons-material/OfflinePin'
import PeopleIcon from '@mui/icons-material/People'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import { colorPalette } from '../App'

function Contact() {
    
    const { ref: freeConsultationSectionRef, inView: freeConsultationSectionInView } = useInView({
        threshold: .3,
        triggerOnce: true
    })

    const { ref: howTherapyWorkSectionRef, inView: howTherapyWorkSectionInView } = useInView({
        threshold:.1,
        triggerOnce: true
    })

    const [ firstName, setFirstName ] = useState()
    const [ firstNameError, setFirstNameError ] = useState()
    const [ lastName, setLastName ] = useState()
    const [ lastNameError, setLastNameError ] = useState()
    const [ email, setEmail ] = useState()
    const [ emailError, setEmailError ] = useState()
    const [ phone, setPhone ] = useState()
    const [ phoneError, setPhoneError ] = useState()
    const [ message, setMessage ] = useState()

    const freeConsultationSection = {
      hidden: {
        rotateX:180,
      },
      visible: {
        rotateX: 0,
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

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if(!firstName || !lastName || !email || !phone ){
            if(!firstName) setFirstNameError('First Name is Required')
            if(!lastName) setLastNameError('Last Name is Required')
            if(!email) setEmailError('Email is Required')
            if(!phone) setPhoneError('Phone Number is Required')
        }else{
            console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`)
            
        }
    }

    const textFieldStyle = {'& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#800020',
          color:'darkgray',
          border:'2px solid #282D40'
        },
        '&:hover fieldset': {
          borderColor: '#800040',
          color:'#800020'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#800020',
          color:'#800020'
        },
        '&.Mui-focused': {
          color: '#800020',
        },
        backgroundColor: '#FFF',
        color:'#800020',
      }}

  return (
    <Box sx={{minHeight:'100vh', }}>
        <Grid container alignItems='center' columnSpacing={5} mb={10}>
            <Grid item container sx={{position:'relative'}}>
                <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>CONTACT US</Typography></Grid>
                <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
            </Grid>
            <Grid item container xs={12} md={6} alignItems='center' bgcolor='#F7F8FC' justifyContent='center' py={2} mt={{md:0, xs:4}}>
              <Grid item mb={3}><Typography fontSize={{md:20}} fontWeight={700} py={0} color={colorPalette.primary}>Prioritize your mental well-being and take the first step towards a happier, healthier you by booking an appointment with our expert mental health professionals today.</Typography></Grid>
              <Grid item container md={12} xs={12} direction='column'  rowGap={4}>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={0}>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container sx={{borderLeft:`4px solid ${colorPalette.callToAction}`, pl:3, py:2}}>
                                <PhoneForwardedIcon sx={{pr:1, color:colorPalette.primary}}/><Typography color={colorPalette.callToAction} fontSize={{md:18}} fontWeight='bold'>Call us to schedule an appointment</Typography>
                                <Typography color={colorPalette.secondary}>We will ask you some questions about your mental health concerns and schedule an appointment that is convenient for you.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={0}>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container sx={{borderLeft:`4px solid ${colorPalette.callToAction}`, pl:3, py:2}}>
                                <OfflinePinIcon sx={{pr:1, color:colorPalette.primary}}/><Typography color={colorPalette.callToAction} fontSize={{md:18}} fontWeight='bold'>Come to your appointment prepared</Typography>
                                <Typography color={colorPalette.secondary}>Bring a list of your symptoms, any medications you are taking, and any questions you have.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' justifyContent='center' rowGap={0}>
                        <motion.div ref={howTherapyWorkSectionRef} initial={howTherapyWorkSection.hidden} animate={howTherapyWorkSectionInView ? howTherapyWorkSection.visible : howTherapyWorkSection.hidden}>
                            <Grid item container sx={{borderLeft:`4px solid ${colorPalette.callToAction}`, pl:3, py:2}}>
                                <PeopleIcon sx={{pr:1, color:colorPalette.primary}}/><Typography color={colorPalette.callToAction} fontSize={{md:18}} fontWeight='bold'>Meet with your therapist.</Typography>
                                <Typography color={colorPalette.secondary}>Your therapist will get to know you and your concerns. They will work with you to develop a treatment plan that is right for you.</Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item container xs={12} md={6} alignItems='center' justifyContent='center' mt={{md:0, xs:4}}>
                <motion.div ref={imageRef} initial={imageAnimate.hidden} animate={imageInView ? imageAnimate.visible : imageAnimate.hidden} style={{position:'relative'}}>
                    <Grid item pl={2} display={{md:'flex', xs:'none'}}>
                        <img src={doctor} style={{objectFit:'cover', aspectRatio:'4/5', width:'60%', height:'70%', borderRadius:8}}/>
                    </Grid>
                    <Grid item pl={2} display={{md:'none', xs:'flex'}}>
                        <img src={doctor} style={{objectFit:'cover', aspectRatio:'2/3', width:'60%', height:'10%', borderRadius:8}}/>
                    </Grid>
                    <Grid item container justifyContent='space-between' columnGap={{md:0, xs:1}} alignItems='center' bgcolor='#F4F7FE' zIndex={2} py={{md:2.5, xs:1}} px={{md:4, xs:2}} bottom={{md:70, xs:-250}} right={{md:130, xs:10}} width={{md:500, xs:'fit-content'}} borderRadius={2.5}>
                        <Grid item md={2} pr={{md:0, xs:1}}>
                            <img src={phoneIcon} style={{borderRadius:4}}/>
                        </Grid>
                        <Grid item md={7}>
                            <Typography color='#0D0C54' fontSize={{md:16, xs:10}} fontWeight='bold'>Phone</Typography>
                            <Typography color='#575757' fontSize={{md:16, xs:10}}>Call us today for more information</Typography>
                        </Grid>
                        <Grid item md={3}><Typography color='#0D0C54' fontSize={{md:16, xs:10}} fontWeight='bold'>478-743-8333</Typography></Grid>
                    </Grid>
                </motion.div>
            </Grid> */}
            <Grid item xs={12} md={5}>
                <motion.form initial={{x:'20vw'}} animate={{x:0}} transition={{duration:2}} onSubmit={(e) => formSubmitHandler(e)}>
                    <Grid item container rowGap={3}>
                      <Grid item><Typography fontSize={{md:20}} fontWeight='bold' color={colorPalette.callToAction}>We'll Contact You!</Typography></Grid>
                      <Grid itemxs={12} mt={-3}><Typography fontSize={{md:20}} fontWeight='bold' color={colorPalette.primary}>Fill out the form below and one of our care specialists will reach out to you.</Typography></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={firstNameError} error={firstNameError} label='First Name' value={firstName} onChange={(e) => {setFirstNameError(); setFirstName(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={lastNameError} error={lastNameError} label='Last Name'  value={lastName}  onChange={(e) => {setLastNameError(); setLastName(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='email'   helperText={emailError} error={emailError} label='Email'      value={email}     onChange={(e) => {setEmailError(); setEmail(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='number'  helperText={phoneError} error={phoneError} label='Phone'      value={phone}     onChange={(e) => {setPhoneError(); setPhone(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={null} error={null} label='Message(OPTIONAL)'    value={message}   onChange={(e) => {setMessage(e.target.value)}} multiline minRows={3} maxRows={6} /></Grid>
                        <Grid item xs={12}><Button type='submit' variant='contained' sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:2, py:1, px:5, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40', color:'#FFF', backgroundColor:colorPalette.callToAction}}}>SUBMIT</Button></Grid>
                    </Grid>
                </motion.form>
            </Grid>
        </Grid>
        <motion.div ref={freeConsultationSectionRef} initial={freeConsultationSection.hidden} animate={freeConsultationSectionInView ? freeConsultationSection.visible : freeConsultationSection.hidden}>
            <Grid container xs={12} justifyContent='center' sx={{backgroundColor:'#E0E6FB', borderRadius:6, pr:1}}>
                <Grid container md={6} direction='column' justifyContent='center' rowGap={6} sx={{p:{md:12, xs:5}}}>
                  <Grid container direction='column' justifyContent='flex-start'>
                    <Grid item sx={{}}><Typography sx={{fontWeight:'bold', fontSize:{md:30, xs:25}, fontFamily:'serif'}}>Community</Typography></Grid>
                    <Grid item sx={{mt:{md:-2, xs:-1.5}}}><Typography sx={{fontWeight:'bold', fontSize:{md:17, xs:13}, fontFamily:'serif'}}>Development System</Typography></Grid>
                  </Grid>
                  <Grid item container direction='column'>
                    <Grid item ><Typography><LocalPhoneIcon /> 478-743-8333</Typography></Grid>
                    <Grid item ><Typography><EmailIcon /> ADMINISTRATOR@CDSGA.ORG</Typography></Grid>
                    <Grid item ><Typography><PlaceIcon /> 577 MULBERRY ST STE 900, MACON, GEORGIA 31201</Typography></Grid>
                  </Grid>
                  <Grid item container direction='column'>
                    <Grid item ><Typography fontSize={20} fontWeight='bold' color={colorPalette.callToAction}>Hours of Operation</Typography></Grid>
                    <Grid item ><Typography>Monday - Friday</Typography></Grid>
                    <Grid item ><Typography>8:30am - 5:30pm</Typography></Grid>
                  </Grid>
                    <Grid item><Button sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:100, p:2, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40'}}}>Get Free Consultation</Button></Grid>
                </Grid>
                <Grid item md={5} xs={12} display='flex' alignItems='center' justifyContent='center'><img src={computerLady} style={{width:'100%', borderRadius:6}}/></Grid>
            </Grid>
        </motion.div>
        {/* <motion.div ref={freeConsultationSectionRef} initial={freeConsultationSection.hidden} animate={freeConsultationSectionInView ? freeConsultationSection.visible : freeConsultationSection.hidden}>
            <Grid container md={12} justifyContent='center' sx={{backgroundColor:'#E0E6FB', borderRadius:6, pr:1}}>
                <Grid container md={7} direction='column' justifyContent='center' rowGap={6} sx={{p:{md:12, xs:5}}}>
                    <Grid item alignSelf='center'><Typography color='#202332' fontSize={{md:40, xs:20}} fontWeight='bold'>Don't Let Your Mental Health Hold You Back</Typography></Grid>
                    <Grid item><Button sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:100, p:2, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40'}}}>Get Free Consultation</Button></Grid>
                </Grid>
                <Grid item md={5} xs={12}><img src={computerLady} style={{width:'100%', borderRadius:6}}/></Grid>
            </Grid>
        </motion.div> */}
    </Box>
  )
}

export default Contact