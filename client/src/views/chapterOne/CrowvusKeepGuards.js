import React from 'react';
import {Paper, Typography} from '@mui/material';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



export default function CrowvusKeepGuards() {

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
           Walking down the cobblestone pathway you see the lights start to flicker off from the various store windows as 
           shopkeepers close for the night. With each light the pathway becomes darker, lit only by the dim street lamps with 
           hopefully enough oil to keep the burning until dawn. Only the pubs and the towns two Inns are open now and they are
           getting further away with each step. 
        </Typography>   
        <br/>
        <Typography color='text.secondary'>
           Lord Crowvus, the people's appointed Lord of Riftbourg lives in a keep on a hill at the edge of town. Lord Crowvus
           and a few dozen others built the city as Asteria's first, and still only, town welcome to all. Not stifled in the trivial
           prejudices of race. A town where Elves, Dwarves, Humans, Orcs and even the indigenous Rusyon and Ervakt live together. 
           The Lord built a Keep on the edge towards the mountains to keep watch over the city and be the first guard if any armies
           or monsters from the Sharakh Forest were to attack. 
           
        </Typography>  
        <br/>
        <Typography color='text.secondary'>
           Built in a canyon over a river, Riftbourg has many layers to it, each connected to the other side by bridges built with
           ropes and planks of wood. Whole logs pressed up to the side of the canyon keep the cobblestone streets in place and the 
           buildings stand on mountains rock. As you approach the end of the town you turn around to marvel at the Riftbourg, 
           lanterns strung across the bottoms of bridges to light the way for late travellers and all-nighters. A town 
           split by a river but connected through bridges and oil-lit lamps.
        </Typography>  
        <br/>
        <Typography color='text.secondary'>
           Turning back around you approach the black iron gate in a stone arch with an ornamental crest of a crow on a shield in the center. 
           
        </Typography>  
        <br/>
        <Box textAlign='center'>
                    <Button  onClick={handleClickOpen}>
        View Crest
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle textAlign='center' id="valkyrie-title">
          {"Crowvus Crest"}
        </DialogTitle>
        <DialogContent >
        <img
        src={`https://i.ibb.co/yndf6Q5/Picsart-22-03-22-20-09-57-567.jpg`}        
        alt={'Crowvus Crest'}
        width="350"
        loading="lazy"
      />
        </DialogContent>        
      </Dialog>
      </Box>  
        <br/>
        <Typography color='text.secondary'>
           
        Oil lit torches sitting in the stone next to the gate keep the area lit. The
           keep itself stands at the end of the entrance courtyard, a tall building made of perfectly cut stone, 
           carved by Arcane Mages. The river runs right beneath the keep, held a top with a giant stone bridge and connecting  
           the two sides of the city. Two guards, an Orc and a Dwarf, approach from beyond the gate.
        </Typography>
        <br/>
        <Typography color='text.secondary'>
           "Lord Crowvus is not taking visitors at this time," the Orc says in a gruff voice.
        </Typography>
        <br/>
        <Typography color='text.secondary'>
           A hooded figure approaches from behind them, and with a wave of their hand the two guards leave. They remove 
           their hood with both hands and step into the torch lit light revealing her face. An Elf, with long blonde hair 
           and two pointed ears. She picks up her mage's staff and leans against it. 
        </Typography>
        <br/>
        <Typography color='text.secondary'>
           "I see if you've read the letter," she says. "I am Alyna, Lord Crowvus's Magus Imperator. I need you to.."
        </Typography>
        <Typography color='text.secondary'>
           She's abrupty cut off by the sound of an arrow piercing the night air and sinking itself in the side of her neck. 
           She clutches at the wound and gasps for air, then collapses to the ground. The Guards turn to see the end of the 
           assassination. They look at her and look at you.
        </Typography>
        <br/>
        <Typography color='text.secondary'>
           "Open the Gate!", the Dwarf yells. "And get a Medic! Hurry!"
        </Typography>
        <br/>
        <Typography color='text.secondary'>
           "You're going to pay for this," the Orc says as he approaches the opening gate.
        </Typography>

    <br/><br/>
            <Box sx={{ flexGrow: 1 }} container spacing={12}>
                <Grid container justifyContent="center" spacing={{ sm: 4, md: 6 }} columns={{md:4}} >
                <Grid item>
                        <Link to='/c1-jail' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> Stay and be Arrested </Button>
                        </Link>
                    </Grid>    
                    <Grid item>
                        <Link to='/c1-church' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> To The Church </Button>
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