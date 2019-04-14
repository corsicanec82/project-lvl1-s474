import runGameEngine from '..';
import { getRandom, cons } from '../utils';

const gameConditions = 'What is the result of the expression?';

const operators = '+-*';

export const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return '';
  }
};

const getGameData = () => {
  const num1 = getRandom(1, 25);
  const num2 = getRandom(1, 25);
  const indexOperation = getRandom(0, operators.length - 1);
  const operator = operators[indexOperation];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};
