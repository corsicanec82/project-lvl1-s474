import runGameEngine from '..';
import { getRandom, cons } from '../utils';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameData = () => {
  const question = getRandom(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, gameData);
};
