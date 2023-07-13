import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { Player } from './pages/Player'
import { useState, useRef, useEffect } from 'react'

function App() {

  const containerRef = useRef()
  const [containerWidth, setContainerWidth] = useState({ width: 0 })

  const recalculateContainerWidth = () => {
    if(containerRef.current) {
      setContainerWidth({ width: containerRef.current.offsetWidth})
    }
  }

  useEffect(() => {
    window.addEventListener('resize', recalculateContainerWidth)
    recalculateContainerWidth()
  }, [])


  return (
    <Container className='app-container' id='app-container-id' ref={ containerRef } maxWidth='md' sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingTop: { xs: '54px', md: '64px' } }}>
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
