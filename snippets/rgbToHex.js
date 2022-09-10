// RGB to HEX
// Usage: rgbToHex(255, 0, 255); // #ff00ff
const rgbToHex = (r, g, b) =>
    "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
