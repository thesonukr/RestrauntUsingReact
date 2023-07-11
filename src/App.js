import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
import "./index.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;