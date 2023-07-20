import React, { useEffect, useState, createContext } from 'react'
import { Container, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from '../src/configs/theme'
import './App.css'
import theme from './configs/theme'
import dump from './assets/dump'
import markAll from './utils/marking'
import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Player } from './pages/Player'
import { setPosition } from './utils/helpers'

export const PeopleContext = createContext([])

function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {

    // 1. Mark everone and return the big list
    const allMarked = dump.map(p => markAll(p))

    // 2. Order the list by position and add a 'position' field
    const ordered = setPosition(allMarked)
    setPeople(ordered)
  }, [])

  return (
    <Container id='app-container' maxWidth='md' disableGutters>
      <ThemeProvider theme={theme}>
      <PeopleContext.Provider value={people}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<Player />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </PeopleContext.Provider>
      </ThemeProvider>

    </Container>
  )
}

export default App


// JSON op
