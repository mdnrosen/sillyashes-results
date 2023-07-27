import React from 'react'

import { Chip, Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography, Toolbar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import { ExpandMore, Check, Close } from '@mui/icons-material'
import { PercentageSimple } from '../components/PercentageSimple'
import { capitalFirst, getRoundPercentage } from '../utils/helpers'

export const SimpleRoundSummary = ({ questions, player }) => {

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
                <Toolbar disableGutters sx={{ p: 1, borderTop: '1px solid grey'}}>
                    <ListItem
                        secondaryAction={
                            <Box sx={{ display: 'flex', alignItems: 'center'}}>

                                {q.correct ?
                                <Stack direction="row" alignItems="center" sx={{ color: 'success'}}>
                                    <Check color="success"/>
                                    <Typography sx={{ color: 'green' }}variant="body1">+5</Typography>
                                </Stack>
                                :
                                <Stack direction="row" alignItems="center" sx={{ color: 'red'}}>
                                    <Close color="red"/>
                                    <Typography variant="body1">0</Typography>
                                </Stack>  
                        }
                            </Box>                      
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
                </Toolbar>
                <Toolbar
                sx={{ p: 1,  display: 'flex', flexWrap: 'wrap' }}   >
                          {q.options.map((opt, i) => 
                            <Chip 
                              key={i}
                                sx={{ m: 1}}
                                label={capitalFirst(opt)} 
                                variant={q.guessed === opt ? 'contained' : 'outlined'}
                                color={q.correctAnswer.includes(opt) ? 'success' : 'error'}
                            />
                        )}
                </Toolbar>
            </Box>

        ))}

      </AccordionDetails>
      </Accordion>
      </Box>
  )
}
