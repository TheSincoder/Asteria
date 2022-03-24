import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useTheme} from '@mui/material/styles';

export default function Races() {
  const theme=useTheme()

  return (
      <>
      <Paper sx={{pb: 2, justifyContent:"center", backgroundColor: theme.palette.background.default, backgroundImage:theme.palette.background.paper}}>
      <Grid container  spacing={3} directions="column" alignItems="center" justifyContent='center' sx={{m:1, pr:2, display: 'flex'}}>
        <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        height="400"
        image="https://i.ibb.co/tZrbhv5/humans.jpg"
        alt="Humans"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="primary.main" component="div">
          Humans
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Due to a mutli-plane war, there are fewer Humans than any other race on Asteria. They are nomadic in nature, often work as travelling
          merchants, guards or take other odd jobs. There is one Human city on Asteria, Hollow Bay, which remains neutral in conflicts and focuses on trade 
          Humans have a natural affinity with Charisma getting +1 to the stat.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="400"
      image="https://i.ibb.co/8xjFLBS/elves.jpg"
      alt="Elves"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Elves
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Elves reside in the forests and jungles on Asteria, building great cities in the tree tops. If you were
        to travel through a forest, you would like miss the cities hidden in vines and crowns of great trees. 
        Elvish culture is centered around the Arcane Wells which their cities are built to protect. Having a natural affinity
        to Magic, Elvish Mages are often the most powerful and get a +1 to Wisdom. 
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="400"
      image="https://i.ibb.co/X5TdRXP/dwaves.jpg"
      alt="Dwarves"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Dwarves
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Historical wars with the Elves have left the Dwarves distanced from Arcane affinity. 
        Instead, they focus on technological advancements to keep up with neighboring socities. 
        Dwarven cities are often hidden in the mountains and use thermoelectric power to sustain
        their cities. Technological advancement and tinkering is the staple of Dwarven culture. 
        Dwarves get a +1 to Intelligence.
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="400"
      image="https://i.ibb.co/q0srZ1W/Orc.jpg"
      alt="Orcs"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Orcs
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Orcs are not the simple minded people the Elves and Dwarves believe them to be. 
        They are by far the strongest, but have built great cities in the plains of Asteria,
        rivaling those of other socities. Some Orcs have trained with Elven Mages and some 
        have learned technology from the Dwarves. This combined with their strength have made
        the Orcs the center for international relations between the races of Asteria. Orcs get
        a +1 to Strength. 
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="400"
      image="https://i.ibb.co/hRJsG49/rusyon.jpg"
      alt="Rusyon"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Rusyon
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Rusyon are the only race indigenous to Asteria. They are weary of the newcomers
        and their lack of respect for the planes natural resources. To defend themselves
        from the newcomers pilgrimage and the monsters of Asteria, Rusyon have learned 
        to be skilled with almost any weapon. Rusyon have a +1 to Dexterity. 
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="400"
      image="https://i.ibb.co/jzk9pbJ/ervakts.jpg"
      alt="Ervakt"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Ervakt
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Machines made by technology or arcane, no one knows for sure. Some theorize 
        that the Rusyon built them millennia ago but that history is lost. Ervakt 
        themselves argue amongst each other about what they are and where they came from. 
        Their metal structures make them tougher than any other fleshy people, giving them
        a +1 to Constitution.
      </Typography>
    </CardContent>
  </Card>
  </Grid>

  </Grid>
  </Paper>
  </>
  );
}
