


export const setPosition = (all) => {
    const sorted = sortByPoints(all)
    return sorted.map((player, i) => {
        player.position = i + 1
        player.positionPercentile = getPercentile(i)  // put this in here to avoid sorting, mapping and using index twice
        return player
    })
}

export const sortByPoints = (all) => {
    return all.sort((a, b) => {
        return b.totalScore - a.totalScore
    })
}

export const getPercentile = i => {
    const numPlayers = 28 // could use all.length but can be hardcoded: simpler and number of entries will not change
    const percentile = Math.round((numPlayers - i) / numPlayers * 100)
    return percentile
}

// Leaving this here incase anything gets muddled
export const sortByPosition = (all) => all.sort((a, b) => a.position - b.position)


// deliberately sort func name as it will go inline in the JSX
export const posSfx = position => {
    const x = position % 10, y = position % 100;
    if (x == 1 && y != 11) {
        return position + "st"
    }
    if (x == 2 && y != 12) {
        return position + "nd"
    }
    if (x == 3 && y != 13) {
        return position + "rd"
    }
    return position + "th"
}

export const setCircleStrokeColour = percentile => {
    let hexCode
    switch (true) {
        case (percentile > 90):
            hexCode = '#69B34C'
            break
        case (percentile > 70):
            hexCode = '#ACB334'
            break
        case (percentile > 50):
            hexCode = '#FAB733'
            break
        case (percentile > 30):
            hexCode = '#FF8E15'
            break
        case (percentile > 10):
            hexCode = '#FF4E11'
            break
        default:
            hexCode = '#FF0D0D'
    }
    return hexCode
}

export const trophyDisplay = position => {
    const trophy = { display: 'none', color: null }
    if (position > 3) {
        return trophy
    } else if (position === 3) {
        trophy.color = '#cc6633'
    } else if (position === 2) {
        trophy.color = '#c0c0c0'
    } else {
        trophy.color = '#d4af37' 
    }
    trophy.display = true
    return trophy
}