import React from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import theme from '../configs/theme'


export const HomeHeading = () => {


    return (
        <Box padding={1}>
            <ThemeProvider theme={theme}>
                <Typography
                    textAlign={'center'}
                    variant='h3'
                    gutterBottom
                    sx={{
                        background: '-webkit-linear-gradient(right, #95ce39, #5fa92b, #337636, #4aa227)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: { xs: 'blur(0.15px)', sm: '0.25px', md: '0.33px'}
                    }}
                >
                    THE RESULTS
                </Typography>
            </ThemeProvider>
        </Box>
    )
}
