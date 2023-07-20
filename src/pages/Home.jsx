import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { posSfx, trophyDisplay } from '../utils/helpers'
import data from '../assets/dummyData.json'
import dump from '../assets/dump.json'
import { Percentage } from '../components/Percentage'
import { SearchToolbar } from '../components/SearchToolbar'
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
        return <Typography>Loading...</Typography>
    }

    return (
        <Box sx={{ height: '100%', width: '100%' }}>

            <SearchToolbar searchChangeHandler={searchChangeHandler} />

            {filterPlayers().map(player => (
                <PlayerCard key={player.id} player={player} />
            ))}

        </Box>
    )
}
