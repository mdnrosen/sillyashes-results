import React from 'react';
import Logo from '../assets/'
import { AppBar, Box,  Container, Toolbar } from '@mui/material'

export const Tutorial = () => {
  return (
    <Container maxWidth="md" sx={{ m:1, mx: 'auto',  p: { xs: 0, sm: 2 }, borderRight: 5, borderRightColor: '#00843D', borderLeft: 5, borderLeftColor: '#15295e' }}>
        <Toolbar>
            <Box onClick={() => navigate('/')} component="img" src={Logo} height={40} />
        </Toolbar>
    </Container>

  )
}
