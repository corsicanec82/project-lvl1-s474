import readlineSync from 'readline-sync';

// greets the user and returns his name
const greetUser = (gameConditions = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(gameConditions);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

// shows goodbye to the user
const byeUser = (userName) => {
  console.log(`\nCongratulations, ${userName}!`);
};

// asks a question to the user and returns the answer
const askQuestion = (question) => {
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// reports the result of the response to the user
const reportResult = (result, userName, answer, correctAnswer) => {
  if (result) {
    console.log('Correct!');
    return;
  }
  console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

// returns a random two-digit number
const getRandom = () => {
  const min = 10;
  const max = 99;
  return Math.floor(Math.random() * (max - min)) + min;
};

// returns true if the number is even
const isEven = number => number % 2 === 0;

// processes the result of the brain-even game
const getEvenResult = (number, answer, userName) => {
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const result = answer === correctAnswer;
  reportResult(result, userName, answer, correctAnswer);
  return result;
};

// run brain-games
export const runBrainGames = () => greetUser();

// run brain-even game
export const runBrainEven = () => {
  const userName = greetUser('Answer "yes" if number even otherwise answer "no".\n');

  const numberOfQuestions = 3;
  let randomNumber;
  let answer;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    randomNumber = getRandom();
    answer = askQuestion(randomNumber);
    if (!getEvenResult(randomNumber, answer, userName)) {
      return;
    }
  }

  byeUser(userName);
};
