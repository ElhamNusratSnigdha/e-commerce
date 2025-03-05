import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starfield from './Components/Starfield/Starfield';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Starfield />
      </BrowserRouter>
    </div>
  );
}

export default App;