import { ExpandMore } from '@mui/icons-material'
import { Chip, Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography, Toolbar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import React from 'react'
import { scoreColor } from '../utils/helpers'
import { getRoundPercentage } from '../utils/helpers'
import { PercentageSimple } from '../components/PercentageSimple'
export const NumberRoundSummary = ({ questions }) => {


    const score = questions.reduce((a, b) => a + b.points, 0)
    const percentage = getRoundPercentage(score, questions)
  
  return (
    <Box
        boxShadow={2}
        sx={{
            display: 'flex',
            justifyContent: 'spaceBetween',
            alignItems: 'center',
            m: { xs: 1, md: 2},
            py: { xs: 1, md: 2},
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'inherit'
        }}
    >
        <Accordion sx={{ border: 0, boxShadow: 0, width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >  
                <Toolbar disableGutters>
                    <ListItem>
                        <ListItemAvatar sx={{ mr: 2}}>
                        <PercentageSimple value={percentage} />
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
                {questions.map((q, i) => (
                    <Box key={q.questionName + i}>
                        <Toolbar disableGutters sx={{ p: 1, borderTop: '1px solid grey' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>

                                <ListItem
                                    secondaryAction={
                                        <Stack direction="row" alignItems="center" sx={{ color: 'success'}}>
                                            <Typography sx={{ ml: 1, color: scoreColor(q.points)}} variant="h5">{q.points}</Typography>
                                        </Stack> 
                                    }
                                >
                                <ListItemText 
                                    primary={
                                        <Typography variant="overline">{`Q${q.questionNumber} - ${q.questionTitle}`}</Typography>
                                    }
                                    secondary={
                                        q.question ?
                                        <Typography variant="body2">{q.question}</Typography>
                                        : null
                                    }
                                />
                                </ListItem>
                                <ListItem>
                                    <ListItemText 
                                        primary={
                                            <Typography variant="overline">Answer:</Typography>
                                        }
                                        secondary={
                                            <Chip label={q.correctAnswer} color="primary" />

                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText 
                                        primary={
                                            <Typography variant="overline">Your guess:</Typography>
                                        }
                                        secondary={
                                            <Toolbar disableGutters>
                                                <Chip label={q.guessed} color={q.points ? 'success' : 'error'} sx={{ mr: 2}} />
                                                <Typography variant="body2">{q.accuracy}</Typography>
                                            </Toolbar>
                                        }
                                        
            
                                />
                                </ListItem>
                            </Box>
                        </Toolbar>  
                    </Box>
                ))}
            </AccordionDetails>
        </Accordion>


    </Box>
  )
}
