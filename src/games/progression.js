import runGameEngine from '..';
import { getRandom, cons } from '../utils';

const gameConditions = 'What number is missing in the progression?';

const lengthProgression = 10;

const getGameData = () => {
  const indexHiddenNumber = getRandom(0, lengthProgression - 1);
  const stepProgression = getRandom(2, 16);
  const firstElement = getRandom(1, 25);

  let progression = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    const nexElement = i === indexHiddenNumber ? '.. ' : `${firstElement + i * stepProgression} `;
    progression = `${progression}${nexElement}`;
  }

  const question = progression;
  const answer = String(firstElement + indexHiddenNumber * stepProgression);

  return cons(question, answer);
};

export default () => {
  runGameEngine(gameConditions, getGameData);
};
