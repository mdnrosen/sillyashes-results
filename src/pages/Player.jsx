import React, { useEffect, useState, useContext } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Toolbar, Typography, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useParams } from 'react-router-dom'
import { PeopleContext } from '../App'
import { Percentage } from '../components/Percentage'
import { posSfx } from '../utils/helpers'

import { ExpandMore } from '@mui/icons-material'



export const Player = () => {
    const people = useContext(PeopleContext)
    const params = useParams()
    const [ player, setPlayer ] = useState(null)

    useEffect(() => {
        setPlayer(people.find(p => p.id === params.id))
    },[people])

  return (
    player ? (
    <Box key={player.id}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {player.name}
        </Typography>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {player.totalScore} points
        </Typography>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        {posSfx(player.position)}
        </Typography>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Percentage
            percentageFull={player.percentage}
            percentile={player.positionPercentile}
          />
        </Typography>
      </Toolbar>
      <Accordion>
        <AccordionSummary
        >
          <Toolbar>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">
                  #1
                </Typography>
              </ListItemAvatar>
              <ListItemText 
                primary={
                  <Typography variant="h6">Head to Head</Typography>
                }
                secondary={
                  <Typography variant="body1">15/30</Typography>
                }
              />
            </ListItem>
          </Toolbar>

        </AccordionSummary>
        </Accordion>
    </Box>
    ) : (
      <Box>
        <h1>Loading...</h1>

      </Box>
    )
    
  )
}
