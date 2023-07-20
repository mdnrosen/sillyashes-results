import React from 'react'

import { Box, Typography } from '@mui/material'

import './percentage.css'

export const Percentage = props => {

    const percentageFull = props.percent

    return (
        <Box position={'relative'} width={{ xs: '15%', sm: '12.5%', md: '15%' }}>
            <svg viewBox="0 0 36 36" className='circular-chart'>
                <path
                    className='circle'
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="1"
                    strokeDasharray={`${percentageFull}, 100`}
                />
            </svg>
            <Box sx={{ position: 'absolute', height: '100%', width: '100%', top: 0, display: 'table', textAlign: 'center' }}>
                <Typography
                    sx={{
                        fontSize: 'smaller',
                        display: 'table-cell',
                        verticalAlign: 'middle'
                    }}
                >{percentageFull}%</Typography>
            </Box>
        </Box>
    )
}
