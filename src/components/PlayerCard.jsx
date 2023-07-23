import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Typography, ListItem, ListItemText, ListItemAvatar } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { trophyDisplay, posSfx } from '../utils/helpers'

import { Percentage } from './Percentage'

export const PlayerCard = ({ player }) => {

  return (
    <Link to={`/${player.id}`} key={player.id}>
        <Box
            boxShadow={2}
            sx={{
                display: 'flex',
                justifyContent: 'spaceBetween',
                alignItems: 'center',
                p: 2,
                m: 2,
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <ListItem>
                <ListItemAvatar>
                    <Typography
                        variant='body1'
                        color="text.primary"
                        sx={{ width: '25%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                    >
                        <Typography
                            display={trophyDisplay(player.position).display}
                            color={trophyDisplay(player.position).color}
                        >
                            <EmojiEventsIcon />
                        </Typography>
                        {posSfx(player.position)}
                    </Typography>
                </ListItemAvatar> 
                <ListItemText 
                    primary={
                        <Typography variant="h6" color="text.primary">
                            {player.name}
                        </Typography>}
                    secondary={
                        <Typography variant="body1" color="text.primary">
                            {`${player.totalScore} pts`}
                        </Typography>
                    }
                />

            </ListItem>
            <Percentage width={{ xs: '20%', sm: '15%', md: '12.5%' }} percent={player.percent} percentile={player.positionPercentile} />
        </Box>
    </Link>
  )
}
