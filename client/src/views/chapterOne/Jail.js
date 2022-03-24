import React from 'react';
import {Paper, Typography} from '@mui/material';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';



export default function Jail() {

    const [openGo, setOpenGo] = React.useState(false);
    const [openStay, setOpenStay] = React.useState(false);
    

    const handleClickOpenGo = () => {
      setOpenGo(true);
    };
  
    const handleCloseGo = () => {
      setOpenGo(false);
    };

    const handleClickOpenStay = () => {
        setOpenStay(true);
      };
    
      const handleCloseStay = () => {
        setOpenStay(false);
      };
  

  return (
    <>
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>

    <br/>
        <Typography color='text.secondary'>
           You wake up to an aching back and a throbbing head. You push yourself up off the ground into a sitting position
            against a cold stone wall with a small splash as your hand hits the wet stone floor. 
            It's dark but you can see the stone walls around you
            and the unmistakable iron bars making up one wall. You're in a jail cell. With the recent rain you're hoping the
            stone floor is wet with water and not something else. 
        </Typography>   
        <br/>
        <Typography color='text.secondary'>
           A flash of purple light and a puff of smoke erupts from the center of the jail cell. You squint and half look away, 
           but as the smoke dissipates a trap door is revealed with the hatch opening up away from you. You lean over to look
           inside to see someone is coming out of it!
        </Typography>   
        <br/>
        <Typography color='text.secondary'>
           "Come with me, hurry!" a familiar voice says. 
        </Typography>   
        <br/>
<Box sx={{ flexGrow: 1 }} container spacing={12}>
    <Grid container justifyContent="center" spacing={{ sm: 4, md: 6 }} columns={{md:4}} >
    <Grid item>
        <Box textAlign='center'>
                    <Button  onClick={handleClickOpenGo}>
        Go
      </Button>
      <Dialog
        open={openGo}
        onClose={handleCloseGo}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle textAlign='center' id="crystal-ball-title">
          {"The Sewers"}
        </DialogTitle>
        <DialogContent >
        <DialogContentText id="alert-dialog-description">
            <Typography color='text.secondary'>
            You climb down the ladder in the dark. The air feels cold and stale. Your feet hit the ground with a deep
            splash, the water is past your ankles. You trudge through the water trying to keep up with her. She suddenly stops
            and turns around to face you, the light from a grate above revealing her face. It's Alyna!
            </Typography>
            <br/>
            <Typography color='text.secondary'>
            "Sorry for that little trick at the gate," she says. "We have to keep this secret, I fear some guards may be
            followers of the Templars. I need you to go to Sharakh Forest, find the Sepulcher of the Forest Guardian, that's
            where the Archbishop went."
            </Typography>
            <br/>
            <Typography color='text.secondary'>
            With another flash of purple light and puff of smoke, Alyna disappeared. 
            </Typography>

          </DialogContentText>
        </DialogContent>        
      </Dialog>
      </Box>   
      </Grid>
      <Grid item>
      <Box textAlign='center'>
                    <Button  onClick={handleClickOpenStay}>
        Hesitate
      </Button>
      <Dialog
        open={openStay}
        onClose={handleCloseStay}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle textAlign='center' id="crystal-ball-title">
          {"Hesitate"}
        </DialogTitle>
        <DialogContent >
        <DialogContentText id="alert-dialog-description">
            "Do not hesitate," the voice says "If you stay you will surely be executed"
          </DialogContentText>
        </DialogContent>        
      </Dialog>
      </Box>   
      </Grid>
      </Grid>

            </Box>
      <br/>


        

    <br/><br/>
            <Box sx={{ flexGrow: 1 }} container spacing={12}>
                <Grid container justifyContent="center" spacing={{ sm: 4, md: 6 }} columns={{md:4}} >
                    <Grid item>
                        <Link to='/c1-church' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> to The Church </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/c1-sharakh-forest-entrance' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> to Sharakh Forest </Button>
                        </Link>
                    </Grid>
                    

                </Grid>

            </Box>
    </Paper>  
      
      
      </>
    )
  
}