import { Box, Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { Player } from './pages/Player'
import Search from './components/Search'


function App() {

  return (
    <Container className='app-container' maxWidth='md' sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <BrowserRouter>
         <Search />
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
