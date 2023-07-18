import React, { useEffect, useState, createContext } from 'react'
import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import dump from './assets/dump'
import markAll from './utils/marking'
import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Player } from './pages/Player'


export const PeopleContext = createContext([])

function App() {



  const [ people, setPeople ] = useState([])

  useEffect(() => {
    setPeople(dump.map(p => markAll(p)))
  },[])

  return (
    <Container id='app-container' maxWidth='md'>
      <PeopleContext.Provider value={people}>
        <BrowserRouter>

          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Player />} />
          </Routes>

        </BrowserRouter>
      </PeopleContext.Provider>
    </Container>
  )
}

export default App


// JSON op
