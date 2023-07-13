import { useState, useRef, useEffect } from 'react'

import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { Player } from './pages/Player'

// TODO - change Navbar component from AppBar based to Box, remove containerWidth

function App() {

  return (
    <Container id='app-container' maxWidth='md'>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Player />} />
        </Routes>

      </BrowserRouter>
    </Container>
  )
}

export default App


// JSON op
