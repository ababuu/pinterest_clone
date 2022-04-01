import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import ImageFetch from './components/ImageFetch';
import Anime from './components/Anime'

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Anime/>
    </div>
  );
}
export default App;
