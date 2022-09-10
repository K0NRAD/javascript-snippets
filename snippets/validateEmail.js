// Validate e-mail address
// Usage: validateEmail("john.doe@gmail.com");
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
