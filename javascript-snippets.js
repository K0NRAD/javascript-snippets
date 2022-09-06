// Make items in an array unique
// Usage: uniqueArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
const uniqueArray = (array) => [...new Set(array)]

// Get random number
// Usage: getRandomNumber(1, 10); // Random number between 1 and 10
// ~~ (double tilde operator) is used instead of using 'Math.floor()'
const getRandomNumber = (min, max) => ~~(Math.random() * (max - min + 1)) + min

// RGB to HEX
// Usage: rgbToHex(255, 0, 255); // #ff00ff
const rgbToHex = (r, g, b) =>
	"#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

// Get random hex color
// Usage: getRandomHexColor();
const getRandomHexColor = () =>
  '#' + ((Math.random() * 0xffffff) << 0).toString(16)

// Shuffle array  
// Usage: shuffleArray([1, 2, 3, 4, 5]);
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

// Loop a function n times
// Usage: loop(10, () => console.log("Hello World!"));
const loop = (n, fn) => [...Array(n)].forEach(fn)

// Get random element from array
// Usage: getRandomElement([1, 2, 3, 4, 5]);
const getRandomElement = (array) => array[~~(Math.random() * array.length)]

// Get random string of lowercase letters
// Usage: getRandomString(10);
const getRandomString = (length) =>
  [...Array(length)]
    .map(() => String.fromCharCode(~~(Math.random() * 26) + 97))
    .join('')

// Get random boolean    
// Usage: getRandomBoolean();
const getRandomBoolean = () => Math.random() >= 0.5

// Detect if dark mode
// Usage: isDarkMode();
const isDarkMode = () =>
  globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches ?? false

// Copy to clipboard  
// Usage: copyToClipboard("Hello World!");
const copyToClipboard = (text) => navigator?.clipboard?.writeText(text) ?? false

// Get cookie
// Usage: getCookie("cookie-name");
const getCookie = (name) =>
  ('; ' + document.cookie).split(`; ${name}=`).pop().split(';')[0]

// Clear all cookies
// Usage: clearCookies();
const clearCookies = () =>
  document.cookie
    .split(';')
    .forEach((c) =>
                (document.cookie = c
                .replace(/^ +/, '')
                .replace(/=.*/, '=;expires=Thu, 01 Jan 1970 00:00:00 UTC')),
    )

// Calculate average of numbers    
// Usage: avg(1, 2, 3, 4, 5);
const avg = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;

// Validate e-mail address
// Usage: validateEmail("john.doe@gmail.com");
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Validate object with rules
// Usage:
//  const rules = {
//  	name: (name) => name.length > 0,
//  	email: (email) => validateEmail(email),
//  	password: (password) => password.length > 0,
//  };
//  validateWithRules({name: "John Doe", 
//                     email: "john.doe@gmail.com", 
//                     password: "1234567" }, rules); // true
const validateWithRules = (object, rules) =>
	Object.keys(rules).every((key) => rules[key](object[key]));


// Chunk array
// Usage: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
const chunkArray = (array, chunkSize) =>
	[...Array(Math.ceil(array.length / chunkSize))].map((_, index) =>
		array.slice(index * chunkSize, (index + 1) * chunkSize)
	);

// Compare two objects    
// Usage: compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 2 }); // true    
const compareTwoObjects = (obj1, obj2) => {
        const c = Object.keys(obj1), n = Object.keys(obj2);
        return c.length === n.length && c.every((c) => obj1[c] === obj2[c]);
    };

// Convert number to word    
// Usage: numToWord(1000000); // "1 Mio."        
const numToWord = (number) => number.toLocaleString("de-DE", { notation: "compact" });

// Count number of duplicates in array
// Usage: countDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1 }
const countDuplicates = (c) => {
    const t = {};
    return c.forEach((c) => (t[c] = (t[c] || 0) + 1)), t;
};

export {
    countDuplicates,
    numToWord,
    compareTwoObjects,
    chunkArray,
    uniqueArray,
    validateWithRules,
    validateEmail,
    avg,
    clearCookies,
    getCookie,
    copyToClipboard,
    isDarkMode,
    getRandomBoolean,
    getRandomNumber,
    getRandomString,
    getRandomElement,
    getRandomHexColor,
    loop,
    shuffleArray,
    rgbToHex,
};

