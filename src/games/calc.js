import runGameEngine from '..';
import getRandom from '../utils';

const getGameConditions = () => 'What is the result of the expression?\n';

const operations = '+-*';

const getQuestion = () => {
  const num1 = getRandom(1, 25);
  const num2 = getRandom(1, 25);
  const operationNum = getRandom(0, operations.length);

  return `${num1} ${operations[operationNum]} ${num2}`;
};

const getCorrectAnswer = (expression) => {
  const elements = expression.split(' ');
  const num1 = Number(elements[0]);
  const num2 = Number(elements[2]);
  const operation = elements[1];

  let result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }

  return String(result);
};

export default () => {
  runGameEngine(getGameConditions, getQuestion, getCorrectAnswer);
};
