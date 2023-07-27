import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Typography, ListItem, ListItemText, ListItemAvatar } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { trophyDisplay, posSfx, getRoundPercentage, getPerc } from '../utils/helpers'

import { PercentageSimple } from './PercentageSimple';

export const PlayerCard = ({ player }) => {

  return (
    <Link to={`/${player.id}`} key={player.id}>
        <Box
            boxShadow={2}
            sx={{
                display: 'flex',
                justifyContent: 'spaceBetween',
                alignItems: 'center',
                p: { xs: 1, md: 2},
                m: { xs: 1, md: 2},
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
                            {player.name.toUpperCase()}
                        </Typography>}
                    secondary={
                        <Typography variant="overline" color="text.primary">
                            {`${player.totalScore} pts`}
                        </Typography>
                    }
                />

            </ListItem>
            <PercentageSimple value={getPerc(player.totalScore, 262)} />
        </Box>
    </Link>
  )
}
