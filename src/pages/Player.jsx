import React, { useEffect, useState, useContext } from 'react'
import { Box } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import data from '../assets/dummyData.json'
import { PeopleContext } from '../App'

export const Player = () => {
  const people = useContext(PeopleContext)
    const params = useParams()
    const [ player, setPlayer ] = useState(null)

    useEffect(() => {
        setPlayer(people.find(p => p.id === params.id))
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
