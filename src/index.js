import readlineSync from 'readline-sync';
import * as GameEven from './games/even';
import * as GameCalc from './games/calc';
import * as GameDefault from './games/default';

const chooseGame = (gameName) => {
  switch (gameName) {
    case 'calc':
      return GameCalc;
    case 'even':
      return GameEven;
    default:
      return GameDefault;
  }
};

export default (gameName = '') => {
  const Game = chooseGame(gameName);

  console.log('Welcome to the Brain Games!');
  console.log(Game.getGameConditions());
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (gameName === '') {
    return;
  }

  const numberOfQuestions = 3;
  let question;
  let answer;
  let correctAnswer;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    question = Game.getQuestion();
    correctAnswer = Game.getCorrectAnswer(question);

    console.log(`\nQuestion: ${question}`);
    answer = readlineSync.question('Your answer: ');

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
