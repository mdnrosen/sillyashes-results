import React from 'react'

import { setCircleStrokeColour } from '../utils/helpers'
import { CircularProgress, Box, Typography } from '@mui/material'
export const PercentageSimple = ({ value }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress variant="determinate" value={value} color="success"/>
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1
      }}
    >
      <Typography variant="caption" component="div" color="text.secondary">
        {`${value}%`}
      </Typography>
    </Box>
  </Box>
  )
}
