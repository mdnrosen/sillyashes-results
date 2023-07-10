import React from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'

export const Navbar = () => {
    return (
            <AppBar position="static" sx={{ boxShadow: 'none', bgcolor: 'rgb(0 0 0 / 0%)' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: "white" }}>
                    <Box
                        component="img"
                        sx={{ maxHeight: { xs: 25, md: 40 }, margin: '10px' }}
                        alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
                        src="src/assets/sillashesLogo.png"
                    />
                </Toolbar>
            </AppBar>
    )
}