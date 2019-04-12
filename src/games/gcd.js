import * as GameEngine from '..';
import getRandom from '../utils';

const gameConditions = 'Find the greatest common divisor of given numbers.\n';

// calculates GCD
const getGreaterDivisor = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  const greaterNum = a > b ? a : b;
  const lowerNum = a + b - greaterNum;
  return getGreaterDivisor(greaterNum % lowerNum, lowerNum);
};

const setAnswerQuestion = () => {
  const num1 = getRandom(2, 101);
  const num2 = getRandom(2, 101);

  // returns two random numbers with GCD greater than 1
  const gcd = getGreaterDivisor(num1, num2);
  return gcd !== 1 ? GameEngine.cons(`${num1} ${num2}`, String(gcd)) : setAnswerQuestion();
};

export default () => {
  GameEngine.run(gameConditions, setAnswerQuestion);
};
