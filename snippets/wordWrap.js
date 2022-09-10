// Wraps a string to a given number of characters using a string break character.
// Usage: wordWrap(
//      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus.',
//      32
//  );
// 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nFusce tempus.'
const wordWrap = (str, max, br = '\n') => str.replace(
    new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'), '$1' + br
);