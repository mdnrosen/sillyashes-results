import React from 'react'
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'


export const HomeHeading = () => {

    const theme = createTheme()

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '2.4rem',
        },
        fontFamily: 'sans-serif',
        fontWeight: 'normal'
    }


    return (
        <Box padding={2}>
            <ThemeProvider theme={theme}>
                <Typography
                    textAlign={'center'}
                    marginTop={1}
                    variant='h3'
                    sx={{
                        background: '-webkit-linear-gradient(right, #95ce39, #5fa92b, #337636, #4aa227)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    SILLY ASHES - THE RESULTS
                </Typography>
            </ThemeProvider>
        </Box>
    )
}
