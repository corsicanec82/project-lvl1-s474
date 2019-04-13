import runGameEngine from '..';
import { getRandom, cons } from '../utils';

const gameConditions = 'Find the greatest common divisor of given numbers.';

export const getGreaterDivisor = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  const greaterNum = a > b ? a : b;
  const lowerNum = a + b - greaterNum;
  return getGreaterDivisor(greaterNum % lowerNum, lowerNum);
};

const getGameData = () => {
  const num1 = getRandom(2, 101);
  const num2 = getRandom(2, 101);
  const gcd = getGreaterDivisor(num1, num2);

  const question = `${num1} ${num2}`;
  const answer = String(gcd);

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};
