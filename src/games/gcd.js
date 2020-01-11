import runGameEngine from '..';
import { getRandom, cons } from '../utils';

const gameConditions = 'Find the greatest common divisor of given numbers.';

export const getGreaterDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreaterDivisor(b, a % b);
};

const getGameData = () => {
  const num1 = getRandom(2, 101);
  const num2 = getRandom(2, 101);

  const question = `${num1} ${num2}`;
  const answer = String(getGreaterDivisor(num1, num2));

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};
