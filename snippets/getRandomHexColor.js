// Get random hex color
// Usage: getRandomHexColor();
const getRandomHexColor = () =>
    '#' + ((Math.random() * 0xffffff) << 0).toString(16)
