import React from 'react'
import { Box, Typography } from '@mui/material'


export const HomeHeading = () => {


    return (
        <Box padding={1}>
                <Typography
                    textAlign={'center'}
                    variant={ {xs: 'h4', sm: 'h3', md: 'h2'}}  // getting an error here
                                                                // is it because MUI won't accept breakpoints object for the variant prop?
                                                                // my workaround before was to use @media query in theme to resize font at the usual breakpoints
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
        </Box>
    )
}
