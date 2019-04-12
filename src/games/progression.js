import * as GameEngine from '..';
import getRandom from '../utils';

const gameConditions = 'What number is missing in the progression?\n';

const lengthProgression = 10;

// returns an arithmetic progression with a step [2..15] with hidden element
const setAnswerQuestion = () => {
  const indexHiddenNumber = getRandom(0, lengthProgression - 1);
  const stepProgression = getRandom(2, 16);
  const firstElement = getRandom(1, 25);

  let progression = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    progression += i === indexHiddenNumber ? '.. ' : `${firstElement + i * stepProgression} `;
  }

  return GameEngine.cons(progression, String(firstElement + indexHiddenNumber * stepProgression));
};

export default () => {
  GameEngine.run(gameConditions, setAnswerQuestion);
};
