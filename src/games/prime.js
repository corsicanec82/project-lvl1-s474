import * as GameEngine from '..';
import getRandom from '../utils';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const setAnswerQuestion = () => {
  const num = getRandom(2, 100);

  return GameEngine.cons(`${num}`, isPrime(num) ? 'yes' : 'no');
};

export default () => {
  GameEngine.run(gameConditions, setAnswerQuestion);
};
