


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
export const posSfx = (position) => {
    // HARRY DO THIS
    // The positions are just number values, but UI needs to add '-st' or '-2nd' etc
    // Write this helper that takes just the number
    // eg takes 3 and returns 3rd
    // eg takes 22 and returns 22nd
}

