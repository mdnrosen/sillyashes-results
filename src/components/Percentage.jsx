import React from 'react'

import { Box } from '@mui/material'

import './percentage.css'

export const Percentage = props => {

    const percentageFull = props.percent

    return (
        <Box width={'10%'}>
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
        </Box>
    )
}
