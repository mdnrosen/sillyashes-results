import { useState, useRef, useEffect } from 'react'

import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { Player } from './pages/Player'

function App() {

  const containerRef = useRef()
  const [containerWidth, setContainerWidth] = useState(0)

  const recalculateContainerWidth = () => {
    if(containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', recalculateContainerWidth)
    recalculateContainerWidth()
  }, [])


  return (
    <Container id='app-container' ref={ containerRef } maxWidth='md'>
      <BrowserRouter>

        <Navbar containerWidth={containerWidth}/>
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
