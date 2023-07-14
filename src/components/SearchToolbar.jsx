import { AppBar, TextField, Toolbar } from '@mui/material'
import React from 'react'


export const SearchToolbar = () => {
    // AppBar position can very easily be changed to 'sticky'
        // - would need a bit of formatting if so: without a shadow/non-transparent bg it looks v odd 
    return (
        <AppBar position='static' width={'100%'} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}> 
            <Toolbar display={'flex'} sx={{ width: { xs: '100%', md: 'auto' }, justifyContent: 'center' }}>
                <TextField
                    id="user-search"
                    label="Search by name"
                    placeholder='Jason Objects'
                    type='search'
                    variant='outlined'
                    size='small'
                    color='success'
                    sx={{ backgroundColor: 'white' }}
                />
            </Toolbar>
        </AppBar>
    )
}
