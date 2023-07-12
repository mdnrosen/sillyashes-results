import React from 'react'
import { Box } from '@mui/material'

export const Navbar = () => {
    return (
        <Box
            component="img"
            sx={{ maxHeight: { xs: 32, md: 40 }, margin: { xs: '8px', md: '10px' }, maxWidth: '50%' }}
            alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
            src="src/assets/sillashesLogo.png"
        />
    )
}