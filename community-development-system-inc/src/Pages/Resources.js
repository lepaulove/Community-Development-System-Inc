import React, { useState, useEffect } from 'react'
import { Box, Button, createTheme, Divider, FormControl, Grid, InputLabel, MenuItem, Select, ThemeProvider, Typography } from '@mui/material'
import AddResourceModal from '../Components/AddResourceModal'
import ResourceCard from '../Components/ResourceCard'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { firestore } from '../Firebase/utils'
import { useCollection } from 'react-firebase-hooks/firestore'

const theme = createTheme({
    palette:{
        primary:{
            main:'#000'
        }
    }
})

function Resources() {

    // const [resources, setResources] = useState([])
    const [category, setCategory] = useState('Show All')
    const [AddResourceModalOpen, setAddResourceModalOpen] = useState(false)
    const categories = ['Show All', 'Crisis & Warm Support', 'Covid-19', 'Domestic Violence', 'Sexual Assault', 'LGBTQ+', 'Substance Abuse', 'Veterans', 'Families', 'EDOs', 'Necessities', 'Other']
    const resourcesRef = firestore.collection('communityResources/')
    const [ resources ] = useCollection(resourcesRef)

    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    
    const handleAddResourceModalClose = () => {
        setAddResourceModalOpen(false)
    }

    const db = getFirestore()

    const fetchAllResources = async () => {
        
    }

    useEffect(() => {
        
        return
    }, [resources]) 

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{minHeight:'100vh', }}>
                <Grid container columnSpacing={5} mb={10}>
                    <Grid item container sx={{position:'relative'}}>
                        <Grid item bgcolor='#FFF' xs={{}} pb={{md:5, xs:5}}><Typography fontSize={{md:50, xs:20}} fontWeight={{md:0, xs:'bold'}} pr={2} ml={3} color='#2F3345' sx={{zIndex:2, position:'relative', lineHeight:0}}>RESOURCES</Typography></Grid>
                        <Grid item sx={{ml:3}}><Divider  variant='middle' sx={{position:'absolute', backgroundColor:'#2F3345', width:{md:'70vw', xs:'90vw'}, height:'3px', top:'0%', left:0, right:0, zIndex:-1}}/></Grid>
                        <Grid item><Button variant='contained' onClick={() => {setAddResourceModalOpen(true)}}>Add Resource</Button></Grid>
                        <AddResourceModal 
                        open={AddResourceModalOpen}
                        onClose={handleAddResourceModalClose}
                        />
                    </Grid>
                    <Grid item xs={11.5} mb={3} sx={{width:'100%'}}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label" sx={{color: '#36BAFE', width:'100%', '&.Mui-focused': {color:'#36BAFE'} }}>CATEGORY</InputLabel>
                            <Select
                            fullWidth
                            labelId="select-label"
                            id="select"
                            value={category}
                            label="CATEGORY"
                            onChange={handleChange}
                            size='large'
                            sx={{textAlign:'center',
                            color: "#36BAFE",
                            '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#36BAFE',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#36BAFE',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#36BAFE',
                            },
                            '.MuiSvgIcon-root ': {
                            fill: "#36BAFE !important",
                            }
                            }}
                            >
                            {categories.map((item, index) => {
                            return (<MenuItem key={index} value={`${item}`}>{item}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={11.5} item container justifyContent='space-around' spacing={4}>
                    {resources?.docs.filter( i => {return category === 'Show All' ? i?.data() : i?.data().category === category}).map((item, index) => {
                    // if( userProfileData){
                    //     return(
                    //     <ResourceCard key={index} title={item.data().focus} description={item.data().details} contactList={item.data().contacts} admin={userProfileData.userRoles[0] === 'admin'} item={item.id}/>
                    //     )
                    // }
                    return(
                        <ResourceCard key={index} title={item?.data().focus} description={item?.data().details} contactList={item?.data().contacts} admin={false} item={item.id}/>
                    )

                    })}
                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    )
    }

export default Resources