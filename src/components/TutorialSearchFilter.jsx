import React, { useEffect, useState } from 'react'
import { Box, TextField, Toolbar } from '@mui/material'

import data from '../assets/dummyData.json'
import { Link } from 'react-router-dom'


export const TutorialSearchFilter = () => {

    const [ players, setPlayers ] = useState(null)
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        setPlayers(data)
    },[])


    const filterPlayers = () => {
        const regexp = new RegExp(search, 'i')
        return players.filter(player => regexp.test(player.name))
    }


    if (!players) {
        return <p>Loading...</p>
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <h3>Silly Ashes - The results</h3>
        <Toolbar>
            <TextField
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
                label="Search" 
                variant="outlined" 
            />
        </Toolbar>
        {filterPlayers().map(player => (
            <Link to={`/${player.id}`} key={player.id}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', p: 2, m: 2, border: '1px solid #ccc' }}>
                <h4>{player.name}</h4>
                <p>{player.score}</p>
                <p>{(Math.round(player.score / 150 * 100))}%</p>
            </Box>
            </Link>
        ))}
    </Box>
  )
}


export default TutorialSearchFilter