import React from 'react'

import { Box, TextField } from '@mui/material'

export default function Search() {
  return (
    <Box sx={{ position: 'sticky', top: '5%' }}>
        <Box sx={{ display: 'table-cell', float: 'right', backgroundColor: 'white', padding: '5px', borderRadius: '5%' }} boxShadow={5}>
            <TextField id="outlined-basic" label="Username search" variant='outlined' sx={{ display: 'table-row' }}/>
        </Box>
    </Box>
  )
}
