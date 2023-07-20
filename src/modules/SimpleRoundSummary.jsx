import React from 'react'

import { Chip, Accordion, AccordionDetails, AccordionSummary, Box, Typography, Toolbar, ListItem, ListItemAvatar, ListItemText, CircularProgress, Stack,   } from '@mui/material'
import { ExpandMore, Check, Close } from '@mui/icons-material'




export const SimpleRoundSummary = ({ questions }) => {

    const score = questions.reduce((a, b) => a + b.points, 0)
    console.log(`${score}/${questions.length * 5}`) 
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Toolbar disableGutters>
          <ListItem>
            <ListItemAvatar>
              <Typography variant="h6">
                %%
              </Typography>
            </ListItemAvatar>
            <ListItemText 
              primary={
                <Typography variant="h6">Round 1 - Head to Head</Typography>
              }
              secondary={
                <Typography variant="overline">{score}/{questions.length * 5}</Typography>
              }
            />
          </ListItem>
        </Toolbar>

      </AccordionSummary>
      <AccordionDetails>
        {questions.map(q => (
            <Box key={q.questionName}>
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
                                <Typography variant="body2">{q.question}</Typography>
                                : null
                            }
                        />
                    </ListItem>
                </Toolbar>
                <Toolbar>
                    <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ p: 1 }}>
                        {q.options.map(opt => 
                            <Chip 
                                label={opt} 
                                variant={q.guessed === opt ? 'contained' : 'outlined'}
                                color={q.correctAnswer.includes(opt) ? 'success' : 'error'}
                            />
                        )}
                    </Stack>
                </Toolbar>
            </Box>

        ))}

      </AccordionDetails>
      </Accordion>
  )
}
