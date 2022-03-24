import React from 'react';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import Button from '../components/Button';
import {Link} from 'react-router-dom';


export default function CharacterCreation() {
  const theme=useTheme()

  return (
      <>
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography color='primary' variant="h4"><strong>Shadows of Holy Light:</strong></Typography>
        <br/>
        <Link to='/chapter-1' style={{color: 'inherit', textDecoration:"none"}}>
        <Button>Chapter 1</Button>
        </Link>
    </Paper>
    
    </>
  )
}