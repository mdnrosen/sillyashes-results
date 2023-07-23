import React from 'react'

import { Chip, Accordion, AccordionDetails, AccordionSummary, Box, Typography, Toolbar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import { ExpandMore, Check, Close } from '@mui/icons-material'
import { Percentage } from '../components/Percentage'
import { PercentageSimple } from '../components/PercentageSimple'


export const SimpleRoundSummary = ({ questions, player }) => {

    const score = questions.reduce((a, b) => a + b.points, 0)
  return (
    <Accordion sx={{ m: 2}}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Toolbar disableGutters>
          <ListItem>
            <ListItemAvatar >
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
        {questions.map((q, i) => (
            <Box key={q.questionName + i}>
                <Toolbar disableGutters sx={{ p: 1, borderTop: '1px solid grey'}}>
                    <ListItem
                        secondaryAction={
                            <Box sx={{ display: 'flex', alignItems: 'center'}}>

                                {q.correct ?
                                <Stack direction="row" alignItems="center" sx={{ color: 'success'}}>
                                    <Check color="success"/>
                                    <Typography sx={{ ml: 1, color: 'green' }}variant="body1">+5</Typography>
                                </Stack>
                                :
                                <Stack direction="row" alignItems="center" sx={{ color: 'red'}}>
                                    <Close color="red"/>
                                    <Typography sx={{ ml: 1 }}variant="body1">0</Typography>
                                </Stack>  
                        }
                            </Box>                      
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
                <Toolbar
                sx={{ p: 1,  display: 'flex', flexWrap: 'wrap' }}   >
                          {q.options.map((opt, i) => 
                            <Chip 
                              key={i}
                                sx={{ m: 1}}
                                label={opt} 
                                variant={q.guessed === opt ? 'contained' : 'outlined'}
                                color={q.correctAnswer.includes(opt) ? 'success' : 'error'}
                            />
                        )}
                </Toolbar>
            </Box>

        ))}

      </AccordionDetails>
      </Accordion>
  )
}
