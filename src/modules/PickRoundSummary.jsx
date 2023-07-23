import React from 'react'
import { Chip, Accordion, AccordionDetails, AccordionSummary, Box, Typography, Toolbar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import { ExpandMore, Check, Close } from '@mui/icons-material'
import { Percentage } from '../components/Percentage'

export const PickRoundSummary = ({ questions, player }) => {
    const score = questions.reduce((a, b) => a + b.points, 0)


    const renderQuack = () => {

    }

    const renderTonFive = (q, i) => {
        return (
        <Box key={i}>
        <Toolbar disableGutters sx={{ p: 1, borderTop: '1px solid grey'}}>
            <ListItem
                secondaryAction={
                    <Stack direction="row" alignItems="center" sx={{ color: 'success'}}>
                        <Typography sx={{ ml: 1, color: 'success'}}variant="body1">{q.points}</Typography>
                    </Stack>
                }

            >
            <ListItemAvatar>
                <Typography variant="h6">
                    Q{q.questionNumber}
                </Typography>
            </ListItemAvatar>
                <ListItemText 
                primary={
                    <Typography variant="h6">{q.questionTitle}</Typography>
                }
                secondary={
                    q.question ?
                    <Typography variant="overline">{q.question}</Typography>
                    : null
                }
            />
            </ListItem>
        </Toolbar>
        <Toolbar>
            <ListItem
                secondaryAction={
                    <Typography variant="body1">{q.correct.length * 5}</Typography>
                }
            >
                <ListItemText 
                    primary={
                        <Typography variant="overline">CORRECT:</Typography>
                    }
                    secondary={
                        <Stack direction="row" spacing={1}>
                            {q.correct.map(c => <Chip key={c} label={c} color="success" />)}
                        </Stack>
                    }
                />
            </ListItem>
        </Toolbar>
        <Toolbar>
            <ListItem
                secondaryAction={
                    <Typography variant="body1">{q.wrong.length * -3}</Typography>
                }
            >
                <ListItemText 
                    primary={
                        <Typography variant="overline">WRONG:</Typography>
                    }
                    secondary={
                        <Stack direction="row" spacing={1}>
                            {q.wrong.map(c => <Chip key={c} label={c} color="error" />)}
                        </Stack>
                    }
                />
            </ListItem>
        </Toolbar>
        <Toolbar>
        <ListItem
                secondaryAction={
                    <Typography variant="body1">{q.missed.length * -3}</Typography>
                }
            >
                <ListItemText 
                    primary={
                        <Typography variant="overline">MISSED:</Typography>
                    }
                    secondary={
                        <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                            {q.missed.map(c => <Chip sx={{m: 1}} key={c} label={c} variant="outlined" color="error" />)}

                        </Box>

                    }
                />
            </ListItem>
        </Toolbar>
    </Box>
        )
    }


    const renderSixesFull = () => {

    }



  return (
    <Accordion sx={{ m: 2}}>
        <AccordionSummary
            expandIcon={<ExpandMore />}
        >
            <Toolbar disableGutters>
                <ListItem>
                <ListItemAvatar>
                    <Percentage percent={player.percent} percentile={player.positionPercentile} />
                </ListItemAvatar>
                <ListItemText 
                    primary={
                    <Typography variant="h6">
                        Round {questions[0].roundNumber} - {questions[0].roundName}
                    </Typography>
                    }
                    secondary={
                    <Typography variant="body1">{score}/{questions.length * 5}</Typography>
                    }
                />
                </ListItem>
            </Toolbar>    
        </AccordionSummary>
        <AccordionDetails>
            {questions.map((q, index) => {
                if (q.questionName === 'tons' || q.questionName === '5fers') {
                    return renderTonFive(q, index)
                }
            })}
        </AccordionDetails>
    </Accordion>
  )
}
