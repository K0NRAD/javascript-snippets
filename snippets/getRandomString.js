// Get random string of lowercase letters
// Usage: getRandomString(10);
const getRandomString = (length) =>
    [...Array(length)]
        .map(() => String.fromCharCode(~~(Math.random() * 26) + 97))
        .join('')
