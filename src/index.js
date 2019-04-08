import readlineSync from 'readline-sync';

const sayHello = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default sayHello;
