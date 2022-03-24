import React from 'react';
import {Paper, Typography} from '@mui/material';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Journal from '../../components/Journal';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



export default function SharakhForestEntrance() {
  
    const [open, setOpen] = React.useState(false);
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>

    <br/>
        <Typography color='text.secondary'>
           As you're walking up the canyon a heavy fog sits in, the sunlight catches the fogs whisps which cast an eerie green 
           shadow along the dirt floor. Trees start to come into view, but you can't make out the crowns, as the fog gets heavier.
           It becomes dark and the eerie green shadows seemingly start to move from tree to tree. As the fog gets heavier it a cold 
           that chills you to your bones settles in. You start to hear what sounds like whispers in the distance, and although you 
           can't make out the words you feel as though they are calling you to leave.
           
        </Typography>   
        <br/>
        <Typography color='text.secondary'>
           You keep walking, looking for anything that could resemble a sepulcher. At the base of a tree you see the figure
           of a slumped over body leaning against it. Weary of your surroundings, you approach it slowly. As you get closer
           you can make out the black and red symbol of a crow on a shield crest stiched to the figures shoulders. It's difficult
           to make out what the person was before, as their blood appears to be fully drained from their body. Just a husk of skin,
           bone and clothes remains. Clutched in their hands is a journal and a necklace with a purple jade pendant.
        </Typography>   

        <br/>
        <Box textAlign='center'>
                    <Button  onClick={handleClickOpen}>
        Read Journal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle textAlign='center' id="valkyrie-title">
          {"Journal"}
        </DialogTitle>
        <DialogContent >
        <Journal/>
        </DialogContent>        
      </Dialog>
      </Box>  
        <br/>
        
        <Typography color='text.secondary'>
           You pick up the necklace and the pendant starts to faintly glow and point towards the center of the forest. You
           check the body for supplies and more clues but find nothing, not even an indication of how they died or how they're
           blood was drained. You start in the direction given by the necklace and as you get closer the pendant glows brighter. 
           You come upon the tree, and see that the ground foliage looks disturbed. From the Spy you found or from the Archbishop,
           impossible to tell. 
        </Typography> 
        <br/>
        <Typography color='text.secondary'>
           As you poke around the tree, moving the the ground cover around and checking the tree for clues, the tree starts to move.
           You step around a neighboring tree to hide and as you do a flash of yellow light fills the forest, removing the fog in the
           in the area surrounding the tree. The tree moves back revealing a staircase that goes under the ground and out of the staircase
           walks out a man in a black hooded robe with the gold 'T' inside of a 'V' within a triangle symbol. He looks around and you duck
           your behind the tree as to not be seen. You peer back out and he's walking away. The tree starts to move back and as you're running
           out of time you realize you have to make a quick decision.
        </Typography> 
        <br/>

    <br/><br/>
            <Box sx={{ flexGrow: 1 }} container spacing={12}>
                <Grid container justifyContent="center" spacing={{ sm: 4, md: 6 }} columns={{md:4}} >
                    <Grid item>
                        <Link to='/c1-end' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> Follow the Archbishop </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/c1-end' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> Go down the stairs </Button>
                        </Link>
                    </Grid>
                    

                </Grid>

            </Box>
    </Paper>  
      
      
      </>
    )
  
}