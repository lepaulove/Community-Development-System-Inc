import React from 'react'
import { Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material'
import { firestore } from '../Firebase/utils'
import { colorPalette } from '../App'

function ResourceCard(props) {

    const { title, description, contactList, admin, item} = props

    

  return (
    <Grid item xs={12}>
        <Card sx={{ height:'100%', opacity:.9, border:'2px solid darkgrey', backgroundColor:'#FFF', color:'white', p:0 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" color={colorPalette.callToAction} fontWeight='bold' fontSize={20} sx={{textDecoration:'underline'}}>
                    {title}
                </Typography>
                <Typography variant="body3" color={colorPalette.secondary} fontWeight={500}>
                    {description}
                </Typography>
                        {contactList.map((item, index) => {
                            return(
                            <Grid key={index} container direction='column' pt={2}>
                                <Typography variant="body3" fontWeight='bold' color={colorPalette.callToAction}>
                                    {item.contactType}
                                </Typography>
                                {!['Chat', 'Website', 'Online Support Groups', 'Online Forum'].includes(item.contactType) ? <Typography variant="body3" fontWeight='bold' color='#2f3345'>
                                    {item.contactInfo}
                                </Typography> : <Typography color={colorPalette.secondary}><a style={{color:'inherit'}} href={item.contactInfo}>{item.contactInfo}</a></Typography>}
                            </Grid>)})}
            </CardContent>
            {admin && <CardActions>
                <Button onClick={() => { firestore.collection('communityResources').doc(item).delete() }} variant='contained' sx={{backgroundColor:'#F00', color:'#000', fontWeight:'bold'}}>
                    Delete
                </Button>
            </CardActions>}
        </Card>
    </Grid>
  )
}

export default ResourceCard