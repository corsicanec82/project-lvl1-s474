import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const numberOfQuestions = 3;

export default (gameConditions, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameConditions);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const AnswerQuestion = gameData();
    const question = car(AnswerQuestion);
    const correctAnswer = cdr(AnswerQuestion);

    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!`);
};
