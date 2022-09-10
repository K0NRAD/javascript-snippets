// Copy to clipboard  
// Usage: copyToClipboard("Hello World!");
const copyToClipboard = (text) => navigator?.clipboard?.writeText(text) ?? false
