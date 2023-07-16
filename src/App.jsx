import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import results from './utils/marking'

import { Header } from './components/Header'
import { SearchToolbar } from './components/SearchToolbar'

import { Home } from './pages/Home'
import { Player } from './pages/Player'


function App() {
  console.log(results)
  return (
    <Container id='app-container' maxWidth='md'>
      <BrowserRouter>

        <Header />
        <SearchToolbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:id' element={<Player />} />
        </Routes>

      </BrowserRouter>
    </Container>
  )
}

export default App


// JSON op
