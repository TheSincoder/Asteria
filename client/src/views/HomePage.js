import React from 'react';
import {useTheme} from '@mui/material/styles';
import {Paper, Typography} from '@mui/material';
// import Letter from '../components/Letter';

export default function HomePage() {
    const theme=useTheme()

    return(
        <>       
            <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper}}>
            <Typography color='primary' variant="h4"><strong>Welcome to Asteria</strong></Typography>
            <br/>
            <Typography>
                A text based RPG centered around a newly discovered Plane, Asteria. Almost 100 years ago the Elves, 
                Dwarves, Orcs and Humans found their way here in an effort to replenish resources and expand their nations.  
                With new colonies come new challenges as Asteria is steeped in Arcane power unseen in their history. 
                The Rusyon and Ervakt are indigenous to this Plane but are skeptical of the newcomers. </Typography>  
                <br/> 
            <Typography>
                As the complexities of colonies unfold, life for the average citizen can be dull at best and cruel at worst. 
                Technology, Arcane and Blessings from Deities are used for comfort and protection, but the horrors of unknown lands,
                beasts and powers loom large over society. Adventurers often find that greed and promise of power make people bigger 
                monsters than the beasts they encounter.
                </Typography>   
                <br/> 
                <Typography>
                Create a Character and traverse through the chapters. But be weary of the light Adventurer, as the shadows
                are darkest behind Holy Light on Asteria. 
                </Typography>   
            </Paper>
        </>
    );
};