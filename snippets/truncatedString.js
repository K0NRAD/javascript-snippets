// Truncating a String
// Usage: let truncatedString = truncateString("This is a very long text", 10);
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
