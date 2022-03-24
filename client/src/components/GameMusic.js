import { useState } from "react";
// import useSound from 'use-sound';
import music from '../static/shadows.mp3';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
// import {Howl} from 'howler';

export default function Sound(){
    
    const [isPlaying, setIsPlaying] = useState(false);
    const {Howl, Howler} = require('howler')
    const gameMusic = new Howl({
        src: music,
        loop: true
    })
    // const [play, {stop}] = useSound(gameMusic);


  function playSong(){
      setIsPlaying(true);
      gameMusic.play()      
       
  };

  function stopSong() {
      setIsPlaying(false);
      Howler.stop()
  }

// if music not playing then show music off logo
//if music playing then show music on
return(
    <>
    {console.log(isPlaying, 'hello')}
        {isPlaying ?
            <MusicOffIcon onClick={()=>stopSong()}/>
        :
            <MusicNoteIcon onClick={()=>playSong()}/>
        }
    </>
    )
};



