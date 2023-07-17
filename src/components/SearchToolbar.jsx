import React, { useState } from 'react'
import { AppBar, Box, TextField } from '@mui/material'


export const SearchToolbar = props => {

    return (
        <AppBar position='static' width={'100%'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Box sx={{ maxWidth: '370px', flex: 1 }}>
                <TextField
                    fullWidth
                    label="Filter by name"
                    color='success'
                    onChange={e => props.searchChangeHandler(e.target.value)}
                />
            </Box>
        </AppBar>
    )
}
