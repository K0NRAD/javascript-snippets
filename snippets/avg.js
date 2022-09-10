// Calculate average of numbers    
// Usage: avg(1, 2, 3, 4, 5);
const avg = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
