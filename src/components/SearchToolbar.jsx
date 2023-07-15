import React, { useState } from 'react'

import data from '../assets/dummyData.json'

import { AppBar, Autocomplete, IconButton, Stack, TextField, Toolbar } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"


export const SearchToolbar = () => {

    const [playerSelected, setPlayerSelected] = useState({})

    const submitHandler = e => {
        e.preventDefault()
        console.log('SUBMITTED:', playerSelected)
    }

    return (
        <AppBar position='static' width={'100%'} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar display={'flex'} sx={{ width: { xs: '100%', md: 'auto' }, justifyContent: 'center' }}>
                <form style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Stack width={{ xs: 1, md: '50%' }} maxWidth={'370px'}>
                        <Autocomplete
                            onChange={(e, value) => setPlayerSelected(value)}
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
