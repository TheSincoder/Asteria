import React, {useState} from 'react';
import {Paper, Typography} from '@mui/material';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function RiftbourgIntro() {

    const [open, setOpen] = React.useState(false);
    const [openVal, setOpenVal] = React.useState(false);
    const [openBall, setOpenBall] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickValOpen = () => {
        setOpenVal(true);
      };
    
      const handleValClose = () => {
        setOpenVal(false);
      };

      const handleClickBallOpen = () => {
        setOpenBall(true);
      };
    
      const handleBallClose = () => {
        setOpenBall(false);
      };
        
    

  

  return (
    <>


    <Paper sx={{m:5, p:5, justifyContent:"center"}}>

    <br/>
        <Typography color='text.secondary'>
           As you round the corner you see the church in the distance. An uninspired building, it looks to be made of previously
           used bricks like an old barn. The rectangular building top with a gable style roof and the steeple built above the entrance. 
           The steeples lantern glows a white-yellow, but you note it does not appear to be lit with a fire like an oil lamp. The
           spire is topped with an old almost trident like symbol made of white marble. Small stained glass windows line the sides of the 
           church, but it's hard to make out what they depict. 
        </Typography>   
        <br/>
        <Typography color='text.secondary'>
           As you approach the white painted wooden doors you're filled with a warmth that made you realize you were cold before. 
           You open the doors with a creak that echoes inside the empty church. It's well lit and the stained glass windows fill the 
           church with bright colors, as if it was mid-day just outside and not the summer's night you just walked out of. The church
           walls are lined with paintings and appear to tell a story as they make their way towards the pulpit on both sides. 
        </Typography>   
        <br/>
        <Typography color='text.secondary'>
           As you walk around the church starting on the left side of where you walked in, you see a giant painting of a demon holding
           a skull. 
        </Typography>           
    <br/>        
                             
        <Box textAlign='center'>
                    <Button  onClick={handleClickOpen}>
        View Painting
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle textAlign='center' id="demon-title">
          {"Demon Lord"}
        </DialogTitle>
        <DialogContent >
        <img
        src={`https://i.ibb.co/JHz8HvS/demon-painting-crop.jpg`}        
        alt={'Demon Painting'}
        width="500"
        loading="lazy"
      />
        </DialogContent>        
      </Dialog>
      </Box>
      <br/>
        <Typography color='text.secondary'>
           The scene depicted in the paintings seems to show a world ruled by demons. Violence increases with each painting as 
           people from various races are shown tortured, killed and enslaved by demons with cities burning in the background
           filling the skyline with black smoke. You walk back to the door to view the right side of churches paintings. This
           side starts with a faceless angel like being with the same trident style symbol from the steeple as the top of its head. Above it 
           the sign reads "Valkyrie."
        </Typography> 
        <br/>        
                             
        <Box textAlign='center'>
                    <Button  onClick={handleClickValOpen}>
        View Painting
      </Button>
      <Dialog
        open={openVal}
        onClose={handleValClose}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle textAlign='center' id="valkyrie-title">
          {"Valkyrie"}
        </DialogTitle>
        <DialogContent >
        <img
        src={`https://i.ibb.co/C0kF2my/valkyrie-painting-5.jpg`}        
        alt={'Valkyrie'}
        width="500"
        loading="lazy"
      />
        </DialogContent>        
      </Dialog>
      </Box>   
      <br/>
      <Typography color='text.secondary'>
           These paintings tell a story almost the opposite. The Valkyrie appears in a shroud of light in the midst of fire and destruction. 
           As the paintings go on the violence dwindles to a final painting depicting the peaceful scene of an army of Valkyrie looking over
           a large group of people as they kneel. 
        </Typography> 
        <br/>
        <Typography color='text.secondary'>
           Going to the pulpit, you step up and behind the podium. Under a white silk cloth sits a crystal ball.
        </Typography> 
        <br/>
        <Box textAlign='center'>
                    <Button  onClick={handleClickBallOpen}>
        Uncover and Look
      </Button>
      <Dialog
        open={openBall}
        onClose={handleBallClose}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle textAlign='center' id="crystal-ball-title">
          {"Crystal Ball"}
        </DialogTitle>
        <DialogContent >
        <DialogContentText id="alert-dialog-description">
            Immediately you hear screams of a dozen people crying for help. Through fast moving shadows you see men, women,
            and children of various races shackled together on the dirt floor of a dunegon. Standing over them is Human in a black
            hooded robe. On his chest is a yellow symbol that looks like a 'T' sitting inside of a 'V' within an upsidedown triangle, in his hand is a curved
            knife. He drags one of the prisoners down a hall of the dungeon. 
          </DialogContentText>
        </DialogContent>        
      </Dialog>
      </Box>   
      <br/>
        <Typography color='text.secondary'>
           You leave the church, looking around to make sure no one saw you inside or outside.
        </Typography> 
                

            
            <br/><br/>
            <Box sx={{ flexGrow: 1 }} container spacing={12}>
                <Grid container justifyContent="center" spacing={{ sm: 4, md: 6 }} columns={{md:4}} >
                   
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