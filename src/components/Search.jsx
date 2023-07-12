import React from 'react'

import { Box, TextField } from '@mui/material'

export default function Search() {
  return (
    <Box sx={{ zIndex: '2000', flexGrow: '1', position: 'fixed', left: { xs: '42.5%', md: '70%', lg: '60%' } }}>
        <Box sx={{ display: 'flex', backgroundColor: 'white', padding: { xs: '2.5%', md: '1.5%'} }} boxShadow={5}>
            <TextField id="user-search" label="Search for player" type='search' variant='outlined' size='small' sx={{ backgroundColor: 'white' }}/>
        </Box>
    </Box>
  )
}
