import * as GameEngine from '..';
import getRandom from '../utils';

const isEven = number => number % 2 === 0;

const gameConditions = 'Answer "yes" if number even otherwise answer "no".\n';

const setAnswerQuestion = () => {
  const number = getRandom(10, 100);
  return GameEngine.cons(number, isEven(number) ? 'yes' : 'no');
};

export default () => {
  GameEngine.run(gameConditions, setAnswerQuestion);
};
