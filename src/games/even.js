import runGameEngine from '..';
import getRandom from '../utils';

const isEven = number => number % 2 === 0;

const getGameConditions = () => 'Answer "yes" if number even otherwise answer "no".\n';

const getQuestion = () => getRandom(10, 99);

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

export default () => {
  runGameEngine(getGameConditions, getQuestion, getCorrectAnswer);
};
