import React, { useEffect, useState, useContext } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, CircularProgress, Toolbar, Typography, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useParams } from 'react-router-dom'
import { PeopleContext } from '../App'
import { Percentage } from '../components/Percentage'
import { posSfx } from '../utils/helpers'

import { ExpandMore } from '@mui/icons-material'
import { SimpleRoundSummary } from '../modules/SimpleRoundSummary'

import { PickRoundSummary } from '../modules/PickRoundSummary'
import { NumberRoundSummary } from '../modules/NumberRoundSummary'

export const Player = () => {
    const people = useContext(PeopleContext)
    const params = useParams()
    const [ player, setPlayer ] = useState(null)

    useEffect(() => {
        setPlayer(people.find(p => p.id === params.id))
    },[people])


    
  return (
    player ? (
    <Box key={player.id} sx={{ width: '100%' }}>
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
          <Percentage
            width={{ xs: '20%', sm: '15%', md: '12.5%' }}
            percent={player.percent}
            percentile={player.positionPercentile}
          />
      </Toolbar>

      
      <SimpleRoundSummary 
        player={player}
        questions={player.results.filter(p => p.roundNumber === 1)}
      />

      <PickRoundSummary 
        player={player}
        questions={player.results.filter(p => p.roundNumber === 2)}
      />
      <NumberRoundSummary 
        player={player}
        questions={player.results.filter(p => p.roundNumber === 3)}
      />
      <SimpleRoundSummary 
        player={player}
        questions={player.results.filter(p => p.roundNumber === 4)}
      />
      <SimpleRoundSummary 
        player={player}
        questions={player.results.filter(p => p.roundNumber === 5)}
      />
    </Box>
    ) : (
      <Box>
        <h1>Loading...</h1>

      </Box>
    )
    
  )
}
