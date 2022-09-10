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
