import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { HomeHeading } from './HomeHeading'


export const Header = () => {
    return (
        <Box sx={{
            py: { md: 2},

            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: { xs: 'left', md: 'space-between' },
            alignItems: 'center'
        }}>
            <HomeHeading text="SILLYASHES"/>
            <HomeHeading text="THE RESULTS"/>
        </Box >
    )
}