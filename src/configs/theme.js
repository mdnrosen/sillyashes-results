import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        main : {
            veryHigh: '#69B34C',
            high: '#ACB334',
            mid: '#FAB733',
            low: '#FF8E15',
            awful: '#FF4E11'
        }

    },
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