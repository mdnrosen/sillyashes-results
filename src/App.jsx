import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import results from './utils/marking'
import { Home } from './pages/Home'
import { Player } from './pages/Player'
import { TutorialSearchFilter } from './components/TutorialSearchFilter'



function App() {
  return (
    <Container className='app-container' maxWidth='md'>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tutorialSearch' element={<TutorialSearchFilter />} />
          <Route path='/:id' element={<Player />} />
        </Routes>

      </BrowserRouter>
    </Container>
  )
}

export default App


// JSON op
