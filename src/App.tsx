import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import CharactersPage from './components/CharactersPage';
import Episods from './components/EpisodPage';
import EpisodPage from './components/EpisodPage';
import MainPage from './components/MainPage';
import { store } from './configStore/store';
import { State } from './types/types';

function App() {
  const state = useSelector<State, State>(state => state)
  const[id,setId] = useState<string>('');
  const[season,setSeason]=useState<string>('');
  const[name,setName]=useState<string>('');
 
  return (
    
    <Routes>
      <Route path='/' element={<MainPage setId={setId} setSeason={setSeason}/>} />
      <Route path='/episodPage' element={<Episods id={id} season={season} setName={setName} />} />
      <Route path='/characters' element={<CharactersPage name={name}/>} />
    </Routes>
  
  );
}

export default App;


