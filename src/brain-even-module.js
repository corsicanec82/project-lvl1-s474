import readlineSync from 'readline-sync';

// returns a random two-digit number
const getRandom = () => {
  const min = 10;
  const max = 99;
  return Math.floor(Math.random() * (max - min)) + min;
};

// returns true if the number is even
const isEven = number => number % 2 === 0;

// returns true if the user answered correctly, else false and displays a message to the user
const getResult = (number, answer) => {
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const numberOfQuestions = 3;
  let randomNumber;
  let answer;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    randomNumber = getRandom();
    console.log(`\nQuestion: ${randomNumber}`);
    answer = readlineSync.question('Question: ');
    if (!getResult(randomNumber, answer)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!`);
};
