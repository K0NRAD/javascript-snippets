// Loop a function n times
// Usage: loop(10, () => console.log("Hello World!"));
const loop = (n, fn) => [...Array(n)].forEach(fn)
