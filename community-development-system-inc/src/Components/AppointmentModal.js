import React, { useState } from 'react'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, TextField, Typography }from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md:400, xs:'80%'},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:'auto',
  maxHeight:'80vh'
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

  const DateTimePickerExample = ({props}) => {
    
    const [dateValue, setDateValue] = React.useState(dayjs(null))
    const [ dateValueError, setDateValueError ] = useState(false)
    const { setSelectedDate, selectedDate } = props
  
    const handleDateChange = (date) => {
      setSelectedDate(date)
    }
  
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Box sx={{display:{xs:'none', md:'flex'}}}><DesktopDatePicker
            label="Date"
            inputFormat="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField fullWidth InputLabelProps={{style : {color : '#282D40'} }} id='desktop-date-picker' {...params} sx={textFieldStyle}/>}
            /></Box>
            <Box sx={{ flexGrow: 1, display: {xs:'flex',md:'none'}}}><MobileDatePicker
            label="DATE"
            inputFormat="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField fullWidth InputLabelProps={{style : {color : 'darkgray'} }} id='mobile-date-picker' {...params} sx={textFieldStyle}/>}
            /></Box>
    </LocalizationProvider>
    )
  }

export default function BasicModal() {
    const [open, setOpen] = useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [ firstName, setFirstName ] = useState()
    const [ firstNameError, setFirstNameError ] = useState()
    const [ lastName, setLastName ] = useState()
    const [ lastNameError, setLastNameError ] = useState()
    const [ email, setEmail ] = useState()
    const [ emailError, setEmailError ] = useState()
    const [ phone, setPhone ] = useState()
    const [ phoneError, setPhoneError ] = useState()
    const [ message, setMessage ] = useState()
    const [ appointmentReason, setAppointmentReason ] = useState('I am going through a difficult time')
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date)
    };

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if(!firstName || !lastName || !email || !phone ){
            if(!firstName) setFirstNameError('First Name is Required')
            if(!lastName) setLastNameError('Last Name is Required')
            if(!email) setEmailError('Email is Required')
            if(!phone) setPhoneError('Phone Number is Required')
        }else{
            alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nReason: ${appointmentReason}\nSelected Date: ${selectedDate}\nMessage: ${message}`)
            
        }
    }

    return (
        <div>
        <Button onClick={handleOpen} sx={{ display:{md:'flex', xs:'none'}, border:'3px solid #2F3345', color:'#2F3345', backgroundColor:'transparent', borderRadius:100, cursor:'pointer', padding:1, fontSize:15, alignItems:'center'}}><CalendarMonthIcon sx={{paddingRight:1}}/>Book an Appointment</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography fontSize={25} fontWeight={600} mb={3}>Book an Appointment</Typography>
            <Grid item xs={12} md={12}>
                <motion.form initial={{x:'-100vw'}} animate={{x:1}} transition={{duration:2}} onSubmit={(e) => formSubmitHandler(e)}>
                    <Grid item container rowGap={2} columnSpacing={2}>
                        <Grid item xs={6}><TextField   fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={firstNameError} error={firstNameError} label='First Name' value={firstName} onChange={(e) => {setFirstNameError(); setFirstName(e.target.value)}}/></Grid>
                        <Grid item xs={6}><TextField   fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='text'    helperText={lastNameError} error={lastNameError} label='Last Name'  value={lastName}  onChange={(e) => {setLastNameError(); setLastName(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='email'   helperText={emailError} error={emailError} label='Email'      value={email}     onChange={(e) => {setEmailError(); setEmail(e.target.value)}}/></Grid>
                        <Grid item xs={12}><TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={textFieldStyle} type='number'  helperText={phoneError} error={phoneError} label='Phone'      value={phone}     onChange={(e) => {setPhoneError(); setPhone(e.target.value)}}/></Grid>
                        <Grid item xs={12}><LocalizationProvider dateAdapter={AdapterDayjs} >
            <Box sx={{display:{xs:'none', md:'flex'}}}><DesktopDatePicker
            slotProps={{ textField: { fullWidth: true } }}
            label="Date"
            inputFormat="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            sx={{...textFieldStyle}}
            // renderInput={(params) => <TextField fullWidth InputLabelProps={{style : {color : '#282D40'} }} id='desktop-date-picker' {...params} />}
            /></Box>
            <Box sx={{ flexGrow: 1, display: {xs:'flex',md:'none'}}}><MobileDatePicker
            slotProps={{ textField: { fullWidth: true } }}
            label="DATE"
            inputFormat="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            sx={{...textFieldStyle}}
            renderInput={(params) => <TextField fullWidth InputLabelProps={{style : {color : 'darkgray'} }} id='mobile-date-picker' {...params} sx={textFieldStyle}/>}
            /></Box>
    </LocalizationProvider></Grid>
                    </Grid>
                    <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><Typography color='#282D40' fontWeight='bold' pt={3}>Tell us more about your need...</Typography></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={appointmentReason}
                            onChange={(e) => { setAppointmentReason(e.target.value) }}
                        >
                            <FormControlLabel value="I am going through a difficult time" control={<Radio sx={{'&.Mui-checked':{color:'#800020'}}}/>} label="I am going through a difficult time" />
                            <FormControlLabel value="I suffer from depression" control={<Radio sx={{'&.Mui-checked':{color:'#800020'}}}/>} label="I suffer from depression" />
                            <FormControlLabel value="I want to learn about myself" control={<Radio sx={{'&.Mui-checked':{color:'#800020'}}}/>} label="I want to learn about myself" />
                            <FormControlLabel value="I need couples therapy" control={<Radio sx={{'&.Mui-checked':{color:'#800020'}}}/>} label="I need couples therapy" />
                            <FormControlLabel value="I need help for my child" control={<Radio sx={{'&.Mui-checked':{color:'#800020'}}}/>} label="I need help for my child" />
                        </RadioGroup>
                </FormControl>
                <TextField  fullWidth InputLabelProps={{style : {color : '#282D40'} }} sx={{...textFieldStyle, my:2, }} type='text'    helperText={null} error={null} label='Message(OPTIONAL)'    value={message}   onChange={(e) => {setMessage(e.target.value)}} multiline minRows={3} maxRows={6} />
                <Grid item xs={12}><Button type='submit' variant='contained' sx={{backgroundColor:'#282D40', fontWeight:'bold', color:'#FFF', borderRadius:2, py:1, px:5, border:'1px solid #282D40', '&:hover':{color:'#282D40', border:'1px solid #282D40', color:'#FFF', backgroundColor:'#800020'}}}>SUBMIT</Button></Grid>
                
                </motion.form>
            </Grid>
            </Box>
            
        </Modal>
        </div>
    );
}