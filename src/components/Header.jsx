import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { HomeHeading } from './HomeHeading'


export const Header = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: { xs: 'left', md: 'space-between' },
            alignItems: 'center'
        }}>
            <Box display={'flex'} justifyContent={'center'}>
                <Link to={'/'}>
                    <Box
                        component="img"
                        sx={{ maxHeight: { xs: 25, md: 40 }, margin: '10px' }}
                        alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
                        src="src/assets/sillashesLogo.png"
                    />
                </Link>
            </Box>
            <HomeHeading />
        </Box >
    )
}