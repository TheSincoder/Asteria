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
        <Box textAlign="center">
        <Typography variant='h2' color='text.secondary'>
            Thank you for playing Chapter One
        </Typography>
        <br/>
        <Typography variant='h2' color='text.secondary'>
            Chapter Two coming soon...
        </Typography>
        </Box>
            <br/><br/>
            <Box sx={{ flexGrow: 1 }} container textAlign="center">
                
                        <Link to='/c1-church' style={{color: 'inherit', textDecoration:"none"}}>
                            <Button> Return to Home Page </Button>
                        </Link>
                    
                   

            </Box>
    </Paper>  
      
      
      </>
    )
  
}