// Detect if dark mode
// Usage: isDarkMode();
const isDarkMode = () =>
    globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches ?? false
