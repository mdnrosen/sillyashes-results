import React from 'react'
import { AppBar, Box, TextField, Toolbar } from '@mui/material'


export const Navbar = props => {

    const calculatedWidth = props.containerWidth.width - 10 // 10 is the border

    console.log(calculatedWidth);

    return (
            <AppBar position="fixed" sx={{ left: '50%', transform: 'translateX(-50%)', width: calculatedWidth }} >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: "white" }}>
                    <Box
                        component="img"
                        sx={{ maxHeight: { xs: 25, md: 40 }, margin: '10px' }}
                        alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
                        src="src/assets/sillashesLogo.png"
                    />
                    <Box>
                        <TextField id="user-search" label="Search for name" type='search' variant='outlined' size='small' color='' sx={{ backgroundColor: 'white' }}/>
                    </Box>
                </Toolbar>
            </AppBar>
    )
}