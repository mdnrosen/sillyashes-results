import { createTheme } from "@mui/material"

const theme = createTheme()

theme.typography.h3 = {
    fontSize: '0.85rem',
    '@media (min-width:900px)': {
        fontSize: '2rem',
    },
    fontFamily: ['Inter','sans-serif'].join(','),
    fontWeight: 'normal'
}

export default theme