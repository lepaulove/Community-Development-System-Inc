import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


function AboutCard({props}) {

    const { sourceURL, title, details } = props
    const { ref, inView } = useInView({
        threshold:.6,
        triggerOnce: true
    })

    const animation = {
        hidden:{
            opacity:0,
            y:-60,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:3,
                type: 'spring',
                 bounce:.2
            }
        }
    }

  return (
            <Grid ref={ref} item md={4} xs={12} my={2}>
    <motion.div initial={animation.hidden} animate={inView ? animation.visible : animation.hidden}>
                <Card sx={{display:'flex', flexDirection:'column', minHeight:{md:546, xs:'100%'}, backgroundColor:'#C43932', pt:1}}>
                    <Grid container py={{md:2}}>
                        <Grid item display='flex' alignItems='center' justifyContent='center' xs={12}>
                            <CardMedia component='img' image={sourceURL} sx={{width:'70%', minHeight:186, objectFit:'contain', borderRadius:2, backgroundColor:'#FFF'}}/>
                        </Grid>
                        <Grid item xs={12} justifyContent='center' color='#FFF'>
                            <Typography variant='h5' fontWeight='bold' textAlign='center' py={{xs:2}} px={{md:4}}>{title}</Typography>
                            <CardContent sx={{display:'flex', direction:'column', flexGrow:1, justifyContent:'flex-end'}}>
                                <Typography alignSelf='flex-end'>{details}</Typography> 
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
   </motion.div>
            </Grid>
  )
}

export default AboutCard