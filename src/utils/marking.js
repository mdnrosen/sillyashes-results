
import people from '../assets/dump.json'
import answers from '../assets/answers.json'
import sixes from '../assets/sixesData.json'
import fullStraight from '../assets/fullStraightData.json'



const between = (x, min, max) => x >= min && x <= max
const addPerc = (x, perc) => x * (1 + perc)
const minusPerc = (x, perc) => x * (1 - perc)

const markAll = (person) => {
    const marking_simple = (answers) => {
        const { guesses } = person;
        const result = answers.map(ans => {
            const { answer, questionName, questionNum, round } = ans
            const correct = guesses[questionName].includes(answer)

            return {
                roundNumber: round.number,
                roundName: round.name,
                questionNumber: questionNum,
                questionName: questionName,
                guessed: guesses[questionName],
                correctAnswer: answer,
                points: correct ? 5 : 0,
                correct
            }
        })
        return result
    }


    const marking_pickem = (answers) => {
        const { guesses } = person;
        const result = answers.map(ans => {
            let points = 0
            const { answer, questionName, questionNum, round } = ans
            const guessed = guesses[questionName]
            if (questionName === 'tons' || questionName === '5fers') {

                const correct = guesses[questionName].filter(g => answer.includes(g))
                points+= correct.length * 5

                const wrong = guesses[questionName].filter(g => !answer.includes(g))
                points-= wrong.length * 3

                const missed = answer.filter(a => !guesses[questionName].includes(a))
                points-= missed.length * 3
                
    
                return {
                    roundNumber: round.number,
                    roundName: round.name,
                    questionNumber: questionNum,
                    questionName: questionName,
                    guessed, guessed,
                    correctAnswer: answer,
                    points,
                    correct,
                    wrong,
                    missed
                }
            } else if (questionName === 'quack') {

                const matches = guesses[questionName].filter(g => answer.includes(g))
                // HANDLE QUACK
                return {
                    roundNumber: round.number,
                    roundName: round.name,
                    questionNumber: questionNum,
                    questionName: questionName,
                    guessed,
                    correctAnswer: answer,
                    points: matches.length * 3,
          
                }
            } else {

                let data = questionName === 'bigHitters' ? sixes : fullStraight
                const vals = Object.values(guessed)
                const picks = data.filter(d => vals.includes(d.player))

                let points = 0
                picks.forEach(p => {
                    points+= p.num * 2
                })

                return {
                    roundNumber: round.number,
                    roundName: round.name,
                    questionNumber: questionNum,
                    questionName: questionName,
                    guessed: picks,
                    correctAnswer: answer,
                    points
                }
            }
        })
        return result
    }



const marking_numbers = (answers) => {
    const { guesses } = person;
    const result = answers.map(ans => {
        let points = 0
        const { answer, questionName, questionNum, round } = ans

        const guessed = parseInt(guesses[questionName])
        if (between(guessed, minusPerc(answer, 0.15), addPerc(answer, 0.15))) {
            points = 1
        }
        if (between(guessed, minusPerc(answer, 0.1), addPerc(answer, 0.1))) {
            points = 3
        }
        if (between(guessed, minusPerc(answer, 0.05), addPerc(answer, 0.05))) {
            points = 5
        }

        return {
            roundNumber: round.number,
            roundName: round.name,
            questionNumber: questionNum,
            questionName: questionName,
            guessed: guesses[questionName],
            correctAnswer: answer,
            points
        }
    })
    return result
}






const results = [
    ...marking_simple(answers.filter(a => a.round.number === 1), person),
    ...marking_pickem(answers.filter(a => a.round.number === 2), person),
    ...marking_numbers(answers.filter(a => a.round.number === 3), person),
    ...marking_simple(answers.filter(a => a.round.number === 4), person),
    ...marking_simple(answers.filter(a => a.round.number === 5), person),
]

return results;

}


const marked = markAll(people[22])

console.log(marked)
setTimeout(() => {
    const finalScore = marked.reduce((a, { points }) => a + points)
    console.log(person[22], '-->', finalScore)

},1000)


export default markAll

