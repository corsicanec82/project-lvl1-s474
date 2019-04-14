export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const cons = (x, y) => f => f(x, y);

export const car = pair => pair(x => x);

export const cdr = pair => pair((x, y) => y);
