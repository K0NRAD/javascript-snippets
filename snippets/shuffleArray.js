// Shuffle array  
// Usage: shuffleArray([1, 2, 3, 4, 5]);
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)