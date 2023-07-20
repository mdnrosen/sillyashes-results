


export const setPosition = (all) => {
    const sorted = sortByPoints(all)
    return sorted.map((player, i) => {
        player.position = i + 1
        return player
    })
}

export const sortByPoints = (all) => {
    return all.sort((a, b) => {
        return b.totalScore - a.totalScore
    })
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

// ? rather than hard-coded values, could scale based on percentile within scores?
export const setCircleStrokeColour = percentage => {
    let hexCode
    switch (true){
        case (percentage > 50):
            hexCode = '#69B34C'
            break
        case (percentage > 45):
            hexCode = '#ACB334'
            break
        case (percentage > 40):
            hexCode = '#FAB733'
            break
        case (percentage > 35):
            hexCode = '#FF8E15'
            break
        case (percentage  > 30):
            hexCode = '#FF4E11'
            break
        default:
            hexCode = '#FF0D0D'
    }
    return hexCode
}