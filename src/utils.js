// returns a random integer number between min inclusive and max not inclusive
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default getRandom;
