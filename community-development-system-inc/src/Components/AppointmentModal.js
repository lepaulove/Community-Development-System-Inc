import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, TextField, Typography }from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
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
  maxHeight:'80vh',
  my:1
}

const style2 = {
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
  maxHeight:'80vh',
  my:1
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

export default function AppointmentModal(props) {

    const [openTime, setOpenTime] = useState(false)
    const handleCloseTime = () => setOpenTime(false)

    const [open, setOpen] = useState(false)
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
    const [selectedDate, setSelectedDate] = useState(null)
    const [ time, setTime ] = useState(null)

    const handleDateChange = (date) => {
      setSelectedDate(date)
      setOpenTime(true)
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

    useEffect(() => {
      console.log(time)
    }, [time])

    return (
        <div>
        
        <Button onClick={handleOpen} sx={{}}>{props.children}</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}><SelectTimeModal props={{openTime, setOpenTime, handleCloseTime, setTime, selectedDate, setSelectedDate}}/>
              <Grid container xs={12} justifyContent='flex-end'>
                <Button onClick={handleClose}><CloseIcon fontSize='large' sx={{color:'#800020'}}/></Button>
              </Grid>
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

const SelectTimeModal = ({props}) => {

  const { openTime, setOpenTime, setTime, selectedDate, setSelectedDate } = props

  const handleCloseTime =  () => {
    setOpenTime(false)
  }

  return(
    <Modal open={openTime} onClose={handleCloseTime}>
      <Box sx={style2}>
        <Grid container justifyContent='flex-end'>
          <Button onClick={handleCloseTime}><CloseIcon color='#800020' fontSize='large'/></Button>
        </Grid>
        <Typography>Select a Time...</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => {setSelectedDate(dayjs(new Date(selectedDate).setHours(12, 30))); handleCloseTime()}}><Typography>8:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>9:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>9:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>10:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>10:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>11:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>11:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>12:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>12:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>1:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>1:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>2:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>2:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>3:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>3:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>4:00</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>4:30</Typography></Button></Grid>
          <Grid item xs={4}><Button fullWidth variant='contained' onClick={() => setTime()}><Typography>5:00</Typography></Button></Grid>
        </Grid>
      </Box>
    </Modal>
    
  )
}