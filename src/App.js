import React from 'react';
import './styles/App.css';
import AppBar from './components/AppBar';
import Anime from './components/Anime';

function App() {
  return (
    <div className="App">
      <AppBar unauth={true}/>
      <Anime/>
    </div>
  );
}

export default App;
