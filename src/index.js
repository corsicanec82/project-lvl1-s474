import readlineSync from 'readline-sync';

// game engine
export default (getGameConditions = false, getQuestion = false, getCorrectAnswer = false) => {
  console.log('Welcome to the Brain Games!');
  console.log(getGameConditions());
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (getQuestion === false || getCorrectAnswer === false) {
    return;
  }

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!`);
};
