import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function ServiceCard({props}) {
    const { sourceURL } = props
    const [ showFront, setShowFront ] = useState(true)
    const [ showBack, setShowBack ] = useState(null)
    
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true
    })

    

    return (
            <Grid ref={ref} item xs={12} md={4}>
                {showFront ? <CardFront props={{...props, showFront, setShowFront, showBack, setShowBack, inView}} key={sourceURL}/> : <CardBack props={{...props, showFront, setShowFront, showBack, setShowBack}} key={sourceURL}/> }
            </Grid>
            
    )
}

export default ServiceCard

const CardFront = ({props}) => {

    const { setShowFront, setShowBack, sourceURL, label, description } = props

    useEffect(() => {
        return () => {
            setShowBack(true)
        }
    }, [])

    return(
            <Card onClick={() => {setShowFront(false)}} sx={{position:'relative'}}>
                <Box width='100%'>
                    <CardMedia component='img' image={sourceURL} sx={{height:{md:335, xs:313}, '&:hover':{cursor:'pointer'}}}/>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(0deg, rgba(4, 12, 48, 0.8) 0%, rgba(255, 255, 255, 0) 100%)', color: 'white', padding: '10px'}}>
                    <motion.div initial={{scale:0}} transition={{duration:1}} animate={{scale:1}}>
                    <Typography letterSpacing={5} fontWeight={700}>{label}</Typography>
                    <Typography letterSpacing={0} noWrap color='#C43932'>{description.split('.')[0]}</Typography>
                    <Button onClick={() => {}} sx={{flexGrow:1, alignSelf:'flex-start', mt:'auto', fontWeight:600}}>Read More <ArrowForwardIcon /></Button></motion.div>
                </Box>
            </Card>
    )
}

const CardBack = ({props}) => {

    const { setShowFront, sourceURL, label, description } = props

    return(
            <Card onClick={() => {setShowFront(true)}} sx={{position:'relative', '&:hover':{cursor:'pointer'}}}>
                <Box width='100%'>
                    <CardMedia component='img' image={sourceURL} sx={{height:{md:335, xs:313}, filter: 'blur(8px)', '&:hover':{cursor:'pointer'}}}/>
                </Box>
                <Box sx={{position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(0deg, rgba(4, 12, 48, 0.8) 0%, rgba(255, 255, 255, 0) 100%)', color: 'white', padding: '10px'}}>
                    <motion.div onTap={() => { setShowFront(true) }} initial={{scale:0}} transition={{duration:1}} animate={{scale:1}} exit={{scale:0}}>
                        <Typography align='start' letterSpacing={5} fontWeight={700} color='#C43932' sx={{}}>{label}</Typography>
                        <Typography letterSpacing={0} height='100%'>{description}</Typography>
                        </motion.div>
                </Box>
            </Card>
    )
}