import React, { useEffect, useState, useContext } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, CircularProgress, Grid, Toolbar, Typography, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useParams } from 'react-router-dom'
import { PeopleContext } from '../App'
import { PercentageSimple } from '../components/PercentageSimple'
import { posSfx, getPerc } from '../utils/helpers'

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
      <Grid container spacing={2}>
        <Grid item xs={6} lg={3} alignItems="center">
          <ListItem sx={{ textAlign: 'center'}}>
            <ListItemText 
              primary={
                <Typography variant="overline">Name</Typography>
              }
              secondary={
                <Typography variant="h5">{player.name}</Typography>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={6} lg={3}>
        <ListItem sx={{ textAlign: 'center'}}>
            <ListItemText 
              primary={
                <Typography variant="overline">Score</Typography>
              }
              secondary={
                <Typography variant="h5">{player.totalScore} points</Typography>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={6} lg={3}>
        <ListItem sx={{ textAlign: 'center'}}>
            <ListItemText 
              primary={
                <Typography variant="overline">Place</Typography>
              }
              secondary={
                <Typography variant="h6">{posSfx(player.position)}</Typography>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={6} lg={3}>
        <ListItem sx={{ textAlign: 'center'}}>
            <ListItemText 
              primary={
                <Typography variant="overline">Percentage</Typography>
              }
              secondary={
                <PercentageSimple value={getPerc(player.totalScore, 280)}/>
              }
            />
          </ListItem>
        </Grid>
      </Grid>      
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
