import React from 'react'
import { Box } from '@mui/material'


export const Header = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box display={'flex'} justifyContent={'center'}>
                <Box
                    component="img"
                    sx={{ maxHeight: { xs: 25, md: 40 }, margin: '10px' }}
                    alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
                    src="src/assets/sillashesLogo.png"
                />
            </Box>
        </Box >
    )
}