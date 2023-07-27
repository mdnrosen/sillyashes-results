import React from 'react'
import { AppBar, Box, TextField } from '@mui/material'


export const SearchToolbar = ({ searchChangeHandler }) => {

    return (
        <AppBar
            position='static'
            width={'100%'}
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none' }}
        >
            <Box sx={{ maxWidth: '600px', flex: 1, mx: 1 }}>
                <TextField
                    fullWidth
                    label="Filter by name"
                    color='success'
                    onChange={e => searchChangeHandler(e.target.value)}
                />
            </Box>
        </AppBar>
    )
}
