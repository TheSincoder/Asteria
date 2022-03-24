import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Play from './views/Play';
import CrowvusLetter from './views/chapterOne/CrowvusLetterOne';
import RiftbourgIntro from './views/chapterOne/RiftbourgIntro';
import Jail from './views/chapterOne/Jail';
import SharakhForestEntrance from './views/chapterOne/SharakhForestEntrance';
import CrowvusKeepGuards from './views/chapterOne/CrowvusKeepGuards';
import RiftbourgChurch from './views/chapterOne/RiftbourgChurch';
import EndChapterOne from './views/chapterOne/EndChapterOne';
import Races from './views/Races';
import Classes from './views/Classes';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';
import CharacterCreation from './views/CharacterCreation';
import { ThemeProvider } from '@mui/material/styles';
import shadowTheme from './themes/shadowTheme';
import NavBar from './components/NavBar';


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

function App() {
  return (
    <>
    <ThemeProvider theme={shadowTheme}>
    <NavBar/> 
  
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/play" element={<Play/>}/>
        {/* Chapter One */}
        <Route path="/chapter-1" element={<CrowvusLetter/>}/>
        <Route path="/c1a" element={<RiftbourgIntro/>}/>
        <Route path="/c1-jail" element={<Jail/>}/>
        <Route path="/c1-crowvus-keep" element={<CrowvusKeepGuards/>}/>
        <Route path="/c1-church" element={<RiftbourgChurch/>}/>
        <Route path="/c1-sharakh-forest-entrance" element={<SharakhForestEntrance/>}/>
        <Route path="/c1-end" element={<EndChapterOne/>}/>
        <Route path="/races" element={<Races/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/create_character" element={<CharacterCreation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
