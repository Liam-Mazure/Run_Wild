import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Story from './components/story';
import Games from './components/games';
import Films from './components/films';
import Contact from './components/contact';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Navbar/>
        <div classname = "container">
          <Routes>
            <Route path = '/home' element = {<Home/>} />
            <Route path = '/story' element = {<Story/>} />
            <Route path = '/games' element = {<Games/>} />
            <Route path = '/films' element = {<Films/>} />
            <Route path = '/contact' element = {<Contact/>} />
          </Routes>
        </div>
    </>
  )
}

export default App
