import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'


export const Navbar = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, width: '100vw' }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: "white" }}>
                        <Box
                            component="img"
                            sx={{ maxHeight: { xs: 50, md: 60 }, margin: '10px', marginLeft: { xs: '10px', md: '24px'} }}
                            alt="ECB logo. Dark blue: three lions passant under the crown"
                            src="src/assets/ecbLogo.png"
                        />
                        <Box
                            component="img"
                            sx={{ maxHeight: { xs: 25, md: 40 }, margin: '10px' }}
                            alt="Silly Ashes logo. Mid green icon of ball hitting stumps next to 'Silly Ashes'."
                            src="src/assets/sillashesLogo.png"
                        />
                        <Box
                            component="img"
                            sx={{ maxHeight: { xs: 50, md: 60 }, margin: '10px', marginRight: { xs: '10px', md: '24px'} }}
                            alt="Cricket Austraila emblem. Mid green shield with silver stars and a sun rising over the shadow of stumps."
                            src="src/assets/ausLogo.png"
                        />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}