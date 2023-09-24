/*
Question:
    What are the falsy values in JavaScript?

Explanation:
    In JavaScript, a falsy value is a value that translates to false when evaluated in a Boolean context. 
    
    （Falsy values are values that when converted to a boolean always become false.）


Reference:
    - [MDN Guide on Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
*/

// 7 falsy values in JavaScript
const falsyValues = [false, 0, "", null, undefined, NaN, -0];

// These are examples of falsy values. Notice none of these conditions will execute because the values are falsy.
if(null) {
    // This won't execute
    console.log('null');
}

if(undefined) {
    // This won't execute
    console.log('undefined');
}

const arr = [];

if(arr.length > 0) {
    // This won't execute
    console.log('0');
}

const word = '';

if(word.length > 0) {
    // This won't execute
    console.log('empty');
}

if(false) {
    // This won't execute
    console.log('false');
}

if(NaN) {
    // This won't execute
    console.log('NaN');
}

/*
Notes:
    Always be cautious when checking values in conditions due to these falsy values. Use strict equality (===) when necessary to avoid unexpected results.
    
Additional Resources:
    - [freeCodeCamp](https://www.freecodecamp.org/news/falsy-values-in-javascript/)
    - [Truthy vs Falsy Solution - JavaScript Basics](https://www.youtube.com/watch?v=AEQ7knLvJdw)
*/
