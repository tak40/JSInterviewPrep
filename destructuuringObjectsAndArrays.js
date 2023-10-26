
/* 
---------------
Destructuring Objects and Arrays in JavaScript

What is and why might you destructure an object or array?

Destructuring is a feature in JavaScript that allows you to unpack values from objects or arrays directly into distinct variables. 
It simplifies the process of accessing the properties of an object or the elements of an array.
---------------
*/ 
    
Examples:

// Array Destructuring
const dob = [10, 25, 1987];
const [day, month, year] = dob;
console.log(day, month, year);  // Outputs: 10 25 1987

// Object Destructuring
const user = {
    f: 'Dylan',
    l: 'Israel'
};
const {f: firstName, l: lastName } = user;
console.log(firstName, lastName);  // Outputs: Dylan Israel

/* Benefits

1. Simplifies Code: Helps in writing cleaner, more readable code.
2. Efficient: Extract multiple properties in one statement.
3. Flexible: You can pick only the properties you need.

Additional Resources

- [MDN Web Docs on Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript Destructuring - Beau teaches JavaScript](https://www.youtube.com/watch?v=NIq3qLaHCIs)

*/