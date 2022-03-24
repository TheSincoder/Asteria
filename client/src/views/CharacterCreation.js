import React from 'react';
import CharacterCreationForm from '../forms/CharacterCreationForm';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';


export default function CharacterCreation() {
  const theme=useTheme()

  return (
      <>
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography color='primary' variant="h4"><strong>Create Character</strong></Typography>
        <CharacterCreationForm/>
    </Paper>
    
    </>
  )
}