import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

import data from '../assets/dummyData.json'
import dump from '../assets/dump.json'
import { SearchToolbar } from '../components/SearchToolbar'
import markAll from '../utils/marking'
import { posSfx } from '../utils/helpers'
import { PeopleContext } from '../App'


export const Home = () => {

    const players = useContext(PeopleContext)

    const [search, setSearch] = useState('')


    const filterPlayers = () => {
        const regexp = new RegExp(search, 'i')
        return players.filter(player => regexp.test(player.name))
    }

    const searchChangeHandler = textAreaInput => {
        setSearch(textAreaInput)
    }

    if (!players.length) {
        return <p>Loading...</p>
    }

    return (
        <Box sx={{ height: '100%', width: '100%' }}>

            <SearchToolbar searchChangeHandler={searchChangeHandler} />

            <h3>Silly Ashes - The results</h3>

            {filterPlayers().map(player => (
                <Link to={`/${player.id}`} key={player.id}>
                    <Box
                        boxShadow={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2,
                            m: 2,
                            border: '1px solid #ccc',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Box sx={{ width: '100%', maxWidth: '600px', display: 'inherit', justifyContent: 'space-between', alignItems: 'inherit' }}>
                            <h4>{posSfx(player.position)}</h4>
                            <h4>{player.name}</h4>
                            <p>{player.totalScore}</p>
                            <p>{player.percent}%</p>
                        </Box>
                    </Box>
                </Link>
            ))}

        </Box>
    )
}
