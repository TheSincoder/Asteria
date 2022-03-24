import React from 'react';
import {Paper, Typography} from '@mui/material';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function riftbourgIntro() {
  

  return (
    <>
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
        <Typography color='primary' variant="h4"><strong>Riftbourg</strong></Typography>
        <br/>
        <Typography color='text.secondary'>
            The hooded figure who gave you the letter seems to have disappeared. As your focus shifts away from the letter, the noise of bar
            patrons trying to be heard comes back to full volume. No one seems to have noticed the hooded figure, the letter or even you.
            Your glass is empty and as you motion to the bar maid to pay your tab she says
        </Typography>
        <br/>
        <Typography color='text.secondary'>
            "All paid hun"
        </Typography>
        <br/>
        <Typography color='text.secondary'>
            You look around the pub one more time looking for...something. Any answers to your questions. Who gave you the letter,
            who paid your tab and what are you going to do about the letter?
        </Typography>
        <br/>
        <Typography color='text.secondary'>
            You shake it off and step outside. The petrichor from the recent rain lingers and fills your lungs instantly, a contrast from
            the stuffy and mostly beer soaked sweat and dirt smell of the pub. The wet cobblestone streets reflect the moonlight and the glow of 
            nearby street lamps. As you look up you see the clouds are breaking and revealing a near full moon. 
        </Typography>
        <br/>
        <Typography color='text.secondary'>
            'Three Options', you think to yourself, almost saying them outloud. 'I can visit the church first and look for something to tell me what I'm looking for,
            I can try and meet with Lord Crowvus for more information or I can head straight to the forest.'
        </Typography>   
            <br/><br/>
            <Box sx={{ flexGrow: 1 }} container spacing={12}>
                <Grid container justifyContent="center" spacing={{ sm: 4, md: 6 }} columns={{md:4}} >
                    <Grid item>
                        <Link to='/c1-church' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> To The Church </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/c1-crowvus-keep' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> To Lord Crowvus </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/c1-sharakh-forest-entrance' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> To Sharakh Forest </Button>
                        </Link>
                    </Grid>

                </Grid>

            </Box>
    </Paper>  
      
      
      </>
    )
  
}