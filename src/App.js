import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import ImageFetch from './components/ImageFetch';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <ImageFetch/>
    </div>
  );
}

export default App;
