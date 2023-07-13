import React from 'react'
import { Box, TextField, Toolbar } from '@mui/material'


export const Navbar = () => {

    return (
        <Box boxShadow={3} sx={{ width: '100%', borderRadius: '9px', maxHeight: { xs: '100px', md: '64px' }, padding: '10px' }}>
            <Toolbar sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                bgcolor: "white",
                borderRadius: '8px'
            }}>
                <Box
                    component="img"
                    sx={{ maxHeight: { xs: 25, md: 40 }, margin: '10px' }}
                    alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
                    src="src/assets/sillashesLogo.png"
                />
                <Box display={'flex'} sx={{ width: { xs: '100%', md: 'auto' }, justifyContent: 'center' }}>
                    <TextField
                        id="user-search"
                        label="Search for name"
                        type='search'
                        variant='outlined'
                        size='small'
                        sx={{ backgroundColor: 'white', width: { xs: '100%', sm: '70%', md: '100%' } }}
                    />
                </Box>
            </Toolbar>
        </Box>
    )
}