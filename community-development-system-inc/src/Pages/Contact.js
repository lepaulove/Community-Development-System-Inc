import React, { useState } from 'react'
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import computerLady from '../Media/ComputerLady-removebg-preview.png'
import doctor from '../Media/doctor-in-labcoat.png'
import phoneIcon from '../Media/green-phone-icon-removebg-preview.png'

function Contact() {
    
    const { ref: freeConsultationSectionRef, inView: freeConsultationSectionInView } = useInView({
        threshold: .3,
        triggerOnce: true
    })

    const { ref: imageRef, inView: imageInView } = useInView({
        threshold:1,
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

    const imageAnimate = {
      hidden: {
          scale:0,
      //   opacity: .5,
      //   rotateY: 180,
        // rotateX:180,
      },
      visible: {
          scale:1,
      //   opacity: 1,
      //   rotateY: 0,
        // rotateX: 0,
        transition: {
          duration: 2,
        },
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
        <Grid container columnSpacing={5} mb={10}>
            <Grid item container sx={{position:'relative'}}>
                <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>CONTACT US</Typography></Grid>
                <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <motion.form initial={{x:'-100vw'}} animate={{x:1}} transition={{duration:2}} onSubmit={(e) => formSubmitHandler(e)}>
                    <Grid item container rowGap={3}>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={firstNameError} error={firstNameError} label='First Name' value={firstName} onChange={(e) => {setFirstNameError(); setFirstName(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={lastNameError} error={lastNameError} label='Last Name'  value={lastName}  onChange={(e) => {setLastNameError(); setLastName(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='email'   helperText={emailError} error={emailError} label='Email'      value={email}     onChange={(e) => {setEmailError(); setEmail(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='number'  helperText={phoneError} error={phoneError} label='Phone'      value={phone}     onChange={(e) => {setPhoneError(); setPhone(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={null} error={null} label='Message(OPTIONAL)'    value={message}   onChange={(e) => {setMessage(e.target.value)}} multiline minRows={3} maxRows={6} /></Grid>
                        <Grid item xs={12}><Button type='submit' variant='contained' sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:2, py:1, px:5, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40', color:'#FFF', backgroundColor:'#800020'}}}>SUBMIT</Button></Grid>
                    </Grid>
                </motion.form>
            </Grid>
            <Grid item container xs={12} md={6} alignItems='center' justifyContent='center' mt={{md:0, xs:4}}>
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
            </Grid>
        </Grid>
        <motion.div ref={freeConsultationSectionRef} initial={freeConsultationSection.hidden} animate={freeConsultationSectionInView ? freeConsultationSection.visible : freeConsultationSection.hidden}>
            <Grid container md={12} justifyContent='center' sx={{backgroundColor:'#E0E6FB', borderRadius:6, pr:1}}>
                <Grid container md={7} direction='column' justifyContent='center' rowGap={6} sx={{p:{md:12, xs:5}}}>
                    <Grid item alignSelf='center'><Typography color='#202332' fontSize={{md:40, xs:20}} fontWeight='bold'>Don't Let Your Mental Health Hold You Back</Typography></Grid>
                    <Grid item><Button sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:100, p:2, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40'}}}>Get Free Consultation</Button></Grid>
                </Grid>
                <Grid item md={5} xs={12}><img src={computerLady} style={{width:'100%', borderRadius:6}}/></Grid>
            </Grid>
        </motion.div>
    </Box>
  )
}

export default Contact