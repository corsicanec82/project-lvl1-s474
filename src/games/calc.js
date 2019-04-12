import * as GameEngine from '..';
import getRandom from '../utils';

const gameConditions = 'What is the result of the expression?\n';

const operations = '+-*';

const setAnswerQuestion = () => {
  const num1 = getRandom(1, 25);
  const num2 = getRandom(1, 25);
  const operationNum = getRandom(0, operations.length);
  const question = `${num1} ${operations[operationNum]} ${num2}`;

  let answer;
  switch (operations[operationNum]) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
  }

  return GameEngine.cons(question, String(answer));
};

export default () => {
  GameEngine.run(gameConditions, setAnswerQuestion);
};
