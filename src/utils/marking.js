
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
            const { answer, questionName, questionNum, round, questionTitle, options, question } = ans
            const correct = guesses[questionName].includes(answer)

            return {
                roundNumber: round.number,
                roundName: round.name,
                questionNumber: questionNum,
                questionName,
                questionTitle,
                question,
                guessed: guesses[questionName],
                correctAnswer: answer,
                points: correct ? 5 : 0,
                correct,
                options
            }
        })
        return result
    }


    const marking_pickem = (answers) => {
        const { guesses } = person;
        const result = answers.map(ans => {
            let points = 0
            const { answer, questionName, questionNum, round, questionTitle,question } = ans
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
                    question,
                    guessed, guessed,
                    correctAnswer: answer,
                    points,
                    questionTitle,
                    correct,
                    wrong,
                    missed
                }
            } else if (questionName === 'quack') {

                const matches = guesses[questionName].filter(g => answer.includes(g))
                // HANDLE QUACK

                const points = matches.length * 3
                return {
                    roundNumber: round.number,
                    roundName: round.name,
                    questionNumber: questionNum,
                    question,
                    questionName,
                    questionTitle,
                    guessed,
                    correctAnswer: answer,
                    points,
          
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
                    questionName,
                    question,
                    questionTitle,
                    guessed: picks,
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
            let accuracy = 'Not close enough'
            const { answer, questionName, questionNum, round, questionTitle, question } = ans

            const guessed = parseInt(guesses[questionName])
            if (between(guessed, minusPerc(answer, 0.15), addPerc(answer, 0.15))) {
                points = 1
                accuracy = 'Within 15%'
            }
            if (between(guessed, minusPerc(answer, 0.1), addPerc(answer, 0.1))) {
                points = 3
                accuracy = 'Within 10%'
            }
            if (between(guessed, minusPerc(answer, 0.05), addPerc(answer, 0.05))) {
                points = 5
                accuracy = 'Within 5%'
            }


            return {
                roundNumber: round.number,
                roundName: round.name,
                questionNumber: questionNum,
                question,
                questionName,
                questionTitle,
                accuracy,
                guessed: guesses[questionName],
                correctAnswer: answer,
                points
            }
        })
        return result
    }

    const marked = [
        ...marking_simple(answers.filter(a => a.round.number === 1), person),
        ...marking_pickem(answers.filter(a => a.round.number === 2), person),
        ...marking_numbers(answers.filter(a => a.round.number === 3), person),
        ...marking_simple(answers.filter(a => a.round.number === 4), person),
        ...marking_simple(answers.filter(a => a.round.number === 5), person),
    ]
    const totalScore = marked.reduce((a, { points }) => a + points, 0)

    return {
        id: person.id,
        name: person.name,
        percent: ((totalScore / 247) * 100).toFixed(0), // arbitary number for now
        results: marked,
        totalScore
    }
}




export default markAll
