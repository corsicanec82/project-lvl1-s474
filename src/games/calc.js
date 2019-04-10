// returns a random number between min inclusive and max not inclusive
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGameConditions = () => 'What is the result of the expression?\n';

export const getQuestion = () => {
  const num1 = getRandom(1, 25);
  const num2 = getRandom(1, 25);
  const operations = '+-*';
  const opNum = getRandom(0, operations.length);

  return `${num1} ${operations[opNum]} ${num2}`;
};

export const getCorrectAnswer = (expression) => {
  const elements = expression.split(' ');
  const num1 = Number(elements[0]);
  const num2 = Number(elements[2]);
  const operation = elements[1];

  let result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }

  return String(result);
};
