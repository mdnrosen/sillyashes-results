import React from 'react'
import { Container, Chip, Accordion, AccordionDetails, AccordionSummary, Box, Typography, Toolbar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import { ExpandMore, Check, Close } from '@mui/icons-material'
import { Percentage } from '../components/Percentage'
import { getRoundPercentage } from '../utils/helpers'


export const PickRoundSummary = ({ questions, player }) => {
    const score = questions.reduce((a, b) => a + b.points, 0)

    const percentage = getRoundPercentage(score, questions)

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
                        <Toolbar  disableGutters sx={{ display: 'flex', flexWrap: 'wrap'}}>
                            {q.correct.map(c => <Chip key={c} label={c} sx={{m: 1}} color="success" />)}
                        </Toolbar>
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
                        <Toolbar  disableGutters sx={{ display: 'flex', flexWrap: 'wrap'}}>
                            {q.wrong.map(c => <Chip key={c} label={c} sx={{m: 1}} color="error" />)}
                        </Toolbar>
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
                        <Toolbar  disableGutters sx={{ display: 'flex', flexWrap: 'wrap'}}>
                            {q.correct.map(c => <Chip key={c} label={c} sx={{m: 1}} variant="outlined" color="error" />)}
                        </Toolbar>
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
    <Accordion sx={{ m: 2 }}>
        <AccordionSummary
            expandIcon={<ExpandMore />}
        >
            <Toolbar disableGutters>
                <ListItem>
                <ListItemAvatar>
                    {/* I'm not sure a percentage score works for Pick Round Summaries...? */}
                    {/* Top/bottom scores result in values like 208% or -80% */}
                    {/* Would a different, points gained, points lost work better? */}
                    {/* e.g.: +45 / -30 */}
                    <Percentage 
                      percent={percentage} 
                      percentile={percentage + 10} /* +10 is to provide greener colour for relatively lower scores */ 
                    /> 
                </ListItemAvatar>
                <ListItemText 
                    primary={
                    <Typography variant="h6">
                        Round {questions[0].roundNumber} - {questions[0].roundName}
                    </Typography>
                    }
                    secondary={
                    // see above: does score / number of questions work? You see values like 51/25 or -20/25...
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
