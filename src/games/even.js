// returns a random number between min inclusive and max not inclusive
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// returns true if the number is even
const isEven = number => number % 2 === 0;

export const getGameConditions = () => 'Answer "yes" if number even otherwise answer "no".\n';

export const getQuestion = () => getRandom(10, 99);

export const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');
