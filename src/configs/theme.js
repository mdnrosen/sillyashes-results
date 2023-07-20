import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        text: {
            primary: 'green'
        }
    }
})

theme.typography.h3 = {
    fontSize: '0.8rem',
    '@media (min-width:900px)': {
        fontSize: '1rem',
        paddingTop: '0.155rem'
    },
    fontFamily: ['Inter','sans-serif'].join(','),
    fontWeight: 'normal'
}

theme.typography.h6 = {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
        fontSize: '1.25rem',
    },
    fontFamily: ['Inter','sans-serif'].join(','),
    fontWeight: 'normal'
}

export default theme