// Convert number to word    
// Usage: numToWord(1000000); // "1 Mio."        
const numToWord = (number) => number.toLocaleString("de-DE", { notation: "compact" });
