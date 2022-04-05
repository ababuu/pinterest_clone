import React from 'react';
import './styles/App.css';
import AppBar from './components/AppBar';

import Anime from './components/Anime'
import Home from './components/HomePage';

function App() {
  return (
    <div className="App">
      {/* <AppBar unauth={true}/>
      <Anime/> */}
      <Home/>
    </div>
  );
}
export default App;
