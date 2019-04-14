import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const numberOfQuestions = 3;

export default (gameConditions, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameConditions);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const answerAndQuestion = getGameData();
    const question = car(answerAndQuestion);
    const correctAnswer = cdr(answerAndQuestion);

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
