import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useTheme} from '@mui/material/styles';

export default function Classes() {
  const theme=useTheme()

  return (
      <>
      <Paper sx={{pb: 2, justifyContent:"center", backgroundColor: theme.palette.background.default, backgroundImage:theme.palette.background.paper}}>
      <Grid container  spacing={3} directions="column" alignItems="center" justifyContent='center' sx={{m:1, pr:2, display: 'flex'}}>
        <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        height="auto"
        image="https://i.ibb.co/kJT5kxg/cleric.jpg"
        alt="Humans"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="primary.main" component="div">
          Cleric
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Cleric uses the power of the deity they serve to do damage, heal and imbue objects and people with
          the devine blessings of their deity. Clerics are as diverse as the deities they serve. 
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="auto"
      image="https://i.ibb.co/wr5FCxC/ranger.jpg"
      alt="Ranger"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Ranger
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Rangers are experts of the land. Knowing how to traverse the dangerous landscape, hide from, hunt
        and tame wild beasts and living off the land away from modern amenities. Rangers can make
        traps, take on pet beasts, and use both ranged and melee weapons.
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="auto"
      image="https://i.ibb.co/r7dxskZ/rogue.jpg"
      alt="Rogue"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Rogue
      </Typography>
      <Typography variant="body2" color="text.secondary">
        A Rogue often works in the shadows of society, operating outside of the law. 
        Usually Assassins, pick-pockets or pirates Rogues specialize in quick moves and
         attacks. Rogues must be constantly aware of their surroundings and understand the
          limitations of their abilities or they can find themselves in too deep to survive.
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="auto"
      image="https://i.ibb.co/SxdNk24/mage.jpg"
      alt="Mage"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Mage
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Mages don't just have an affinity of Arcane, they are able to bend it to their will. 
        Using Arcane to advance society by creating lights, running water, clothes and even 
        vehicles, Mages are a staple among societies. Mages can use Arcane to cast powerful
        Spells to destroy or mame their enemies as well as heal allies.
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="auto"
      image="https://i.ibb.co/MVZPNtd/monk.jpg"
      alt="Monk"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Monk
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Often viewed as pacifists, monks swear off the use of weapons and use their
        fists and feet to fight. Often seen meditating, monks keep incredible focus to
        land critical punches and kicks with speed often viewed as unnatural.
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  <Grid item xl={4} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 400}}>
    <CardMedia
      component="img"
      height="auto"
      image="https://i.ibb.co/bvZb7BY/warrior.jpg"
      alt="Warrior"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary.main" component="div">
        Warrior
      </Typography>
      <Typography variant="body2" color="text.secondary">
        A Warriors life line is their weapon. If war is their religion, than battle
        is their prayer. Not always the brutes made out to be, Warriors understand
        the tactics and strategies of battle to gain victory of their enemies. Warriors
        have a saying: "Understanding ones weapon means survival, understanding ones enemy means Victory."
      </Typography>
    </CardContent>
  </Card>
  </Grid>

  </Grid>
  </Paper>
  </>
  );
}