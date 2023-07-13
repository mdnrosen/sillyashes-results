const answers = require('../../assets/answers.json')

console.log(answers);

export const mark = (guess) => {
    const question = answers.find(ans => ans.question.name === q)
    return question

}


