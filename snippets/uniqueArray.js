// Make items in an array unique
// Usage: uniqueArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
const uniqueArray = (array) => [...new Set(array)]
