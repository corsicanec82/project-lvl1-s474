/** returns a random integer number between min inclusive and max not inclusive */
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const cons = (x, y) => f => f(x, y);

export const car = pair => pair(x => x);

export const cdr = pair => pair((x, y) => y);
