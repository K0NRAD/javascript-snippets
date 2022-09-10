// Get random number
// Usage: getRandomNumber(1, 10); // Random number between 1 and 10
// ~~ (double tilde operator) is used instead of using 'Math.floor()'
const getRandomNumber = (min, max) => ~~(Math.random() * (max - min + 1)) + min