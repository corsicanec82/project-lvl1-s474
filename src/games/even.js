import runGameEngine from '..';
import { getRandom, cons } from '../utils';

export const isEven = number => number % 2 === 0;

const gameConditions = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const question = getRandom(10, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};
