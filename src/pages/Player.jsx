import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import data from '../assets/dummyData.json'

export const Player = () => {
    const params = useParams()
    const [ player, setPlayer ] = useState(null)

    useEffect(() => {
        setPlayer(data.find(player => player.id === params.id))
    },[])

    if (!player) {
        return <h1>Loading...</h1>

    }

  return (
    <Box key={player.id}>
        <h2>{player.name}</h2>
        <p>{player.score}</p>
        <Link to={'/'}>
          <p>back to home</p> {/* TODO - style when working on Player pages */}
        </Link>
    </Box>
  )
}
