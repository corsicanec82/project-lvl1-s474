import runGameEngine from '..';
import { getRandom, cons } from '../utils';

const isEven = number => number % 2 === 0;

const gameConditions = 'Answer "yes" if number even otherwise answer "no".\n';

const gameData = () => {
  const question = getRandom(10, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, gameData);
};
