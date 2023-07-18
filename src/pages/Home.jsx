import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

import data from '../assets/dummyData.json'
import dump from '../assets/dump.json'
import { SearchToolbar } from '../components/SearchToolbar'
import markAll from '../utils/marking'
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
