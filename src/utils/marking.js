
import people from '../assets/dump.json'
import answers from '../assets/answers.json'
const person = people[2]


// The 'SIMPLE' rounds are:
// 1 (Head to Head)
// 4 Multis
// 5 True / false


const between = (x, min, max) => x >= min && x <= max
const addPerc = (x, perc) => x * (1 + perc)
const minusPerc = (x, perc) => x * (1 - perc)

const markAll = () => {
const marking_simple = (answers, person) => {
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


const marking_numbers = (answers, person) => {
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
    ...marking_numbers(answers.filter(a => a.round.number === 3), person),
    ...marking_simple(answers.filter(a => a.round.number === 4), person),
    ...marking_simple(answers.filter(a => a.round.number === 5), person),
]

    return results;

}


export default markAll

