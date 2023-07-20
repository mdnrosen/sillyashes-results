import React from 'react'

import { Box, Typography } from '@mui/material'

import { setCircleStrokeColour } from '../utils/helpers'

import './percentage.css'

export const Percentage = props => {

    const percentageFull = props.percent

    const percentile = props.percentile

    const circleColour = setCircleStrokeColour(percentile)

    return (
        <Box position={'relative'} width={{ xs: '20%', sm: '15%', md: '12.5%' }}>
            <svg viewBox="0 0 36 36" className='circular-chart'>
                <path
                    className='circle'
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={circleColour}
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
