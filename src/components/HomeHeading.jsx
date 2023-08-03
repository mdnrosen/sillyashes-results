import React from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import theme from '../configs/theme'


export const HomeHeading = ({ text }) => {


    return (
        <Box padding={1}>
            <ThemeProvider theme={theme}>
                <Typography
                    textAlign={'center'}
                    variant="h6"
                    gutterBottom
                    sx={{
                        background: '-webkit-linear-gradient(right, #95ce39, #5fa92b, #337636, #4aa227)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: { xs: 0, sm: '0.25px', md: '0.33px'}
                    }}
                >
                    {text}
                </Typography>
            </ThemeProvider>
        </Box>
    )
}
