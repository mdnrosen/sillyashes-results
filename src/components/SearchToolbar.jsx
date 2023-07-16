import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

// TODO remove once GET requests set up in App.jsx
import data from '../assets/dummyData.json' // for working version: will be replaced by prop as below

import { AppBar, Autocomplete, IconButton, Stack, TextField, Toolbar } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"


export const SearchToolbar = (/* prop from App.jsx */) => {

    const navigateTo = useNavigate()

    const [playerOptionSelected, setPlayerOptionSelected] = useState({})

    const submitHandler = e => {
        e.preventDefault()
        const playerSelected = data.filter(player => player.name === playerOptionSelected)[0]
        navigateTo(`/${playerSelected.id}`)
    }

    return (
        <AppBar position='static' width={'100%'} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar display={'flex'} sx={{ width: { xs: '100%', md: 'auto' }, justifyContent: 'center' }}>
                <form style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Stack width={{ xs: 1, md: '50%' }} maxWidth={'370px'}>
                        <Autocomplete
                            onChange={(e, value) => setPlayerOptionSelected(value)}
                            id="user-search"
                            options={data.map((option) => option.name)}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label="Search by name"
                                    placeholder='e.g. Jason Objects'
                                    color='success'
                                />
                            }
                        />
                    </Stack>
                    <IconButton type='submit' aria-label='search' onClick={submitHandler}>
                        <SearchIcon style={{ fill: "green" }} />
                    </IconButton>
                </form>
            </Toolbar>
        </AppBar>
    )
}
