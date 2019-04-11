import runGameEngine from '..';
import getRandom from '../utils';

const getGameConditions = () => 'Find the greatest common divisor of given numbers.\n';

// calculates GCD
const getGreaterDivisor = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  const greaterNum = a > b ? a : b;
  const lowerNum = a + b - greaterNum;
  return getGreaterDivisor(greaterNum % lowerNum, lowerNum);
};

const getQuestion = () => {
  const num1 = getRandom(2, 100);
  const num2 = getRandom(2, 100);

  // returns two random numbers with GCD greater than 1
  return getGreaterDivisor(num1, num2) !== 1 ? `${num1} ${num2}` : getQuestion();
};

const getCorrectAnswer = (expression) => {
  const elements = expression.split(' ');
  const num1 = Number(elements[0]);
  const num2 = Number(elements[1]);

  return String(getGreaterDivisor(num1, num2));
};

export default () => {
  runGameEngine(getGameConditions, getQuestion, getCorrectAnswer);
};
