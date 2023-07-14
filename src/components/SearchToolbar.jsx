import * as React from 'react'

import data from '../assets/dummyData.json'

import { AppBar, Autocomplete, IconButton, Stack, TextField, Toolbar } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"


export const SearchToolbar = () => {
    // AppBar position can very easily be changed to 'sticky'
    // - would need a bit of formatting if so: without a shadow/non-transparent bg it looks v odd 
    return (
        <AppBar position='static' width={'100%'} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar display={'flex'} sx={{ width: { xs: '100%', md: 'auto' }, justifyContent: 'center' }}>
                <Stack width={{ xs: 1, md: '50%' }} maxWidth={'370px'}>
                    <Autocomplete
                        id="user-search"
                        freeSolo
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
                <IconButton type='submit' aria-label='search'>
                    <SearchIcon style={{ fill: "green" }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
