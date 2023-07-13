import { useState, useRef, useEffect } from 'react'

import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Header } from './components/Header'
import { SearchToolbar } from './components/SearchToolbar'

import { Home } from './pages/Home'
import { Player } from './pages/Player'


function App() {

  return (
    <Container id='app-container' maxWidth='md'>
      <BrowserRouter>

        <Header />
        <SearchToolbar />
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
