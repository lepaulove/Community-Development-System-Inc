import React from 'react'
import { Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material'
import { firestore } from '../Firebase/utils'

function ResourceCard(props) {

    const { title, description, contactList, admin, item} = props

    

  return (
    <Grid item xs={12}>
        <Card sx={{ height:'100%', backgroundColor:'#262A34', color:'white', p:0 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight='bold' fontSize={20} component="div">
                    {title}
                </Typography>
                <Typography variant="body3">
                    {description}
                </Typography>
                        {contactList.map((item, index) => {
                            return(
                            <Grid key={index} container direction='column' pt={2}>
                                <Typography variant="body3" fontWeight='bold' color='#36BAFE'>
                                    {item.contactType}
                                </Typography>
                                {!['Chat', 'Website', 'Online Support Groups', 'Online Forum'].includes(item.contactType) ? <Typography variant="body3" fontWeight='bold'>
                                    {item.contactInfo}
                                </Typography> : <Typography color={'#FFF'}><a style={{color:'inherit'}} href={item.contactInfo}>{item.contactInfo}</a></Typography>}
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