import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, ThemeProvider, Typography } from '@mui/material'

import data from '../assets/dummyData.json'
import dump from '../assets/dump.json'
import { SearchToolbar } from '../components/SearchToolbar'
import markAll from '../utils/marking'
import { posSfx } from '../utils/helpers'
import { PeopleContext } from '../App'
import theme from '../configs/theme'


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
                            <ThemeProvider theme={theme}>
                                <Typography variant='h6' color={'textPrimary'} sx={{ width: '25%', textAlign: 'left'}}>{posSfx(player.position)}</Typography>
                                <Typography variant='h6' color={'textPrimary'} sx={{ width: '40%', textAlign: 'left'}}>{player.name}</Typography>
                                <Typography variant='h5' color={'textPrimary'} sx={{ width: '10%', textAlign: 'left'}}>{player.totalScore}</Typography>
                                <Typography sx={{ width: '25%', textAlign: 'right'}}>{player.percent}%</Typography>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Link>
            ))}

        </Box>
    )
}
