/*
Question:
    What are the falsy values in JavaScript?

Explanation:
    In JavaScript, a falsy value is a value that translates to false when evaluated in a Boolean context. 
    
    （Falsy values are values that when converted to a boolean always become false.）


Reference:
    - [MDN Guide on Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
*/


// ----- 7 falsy values in JavaScript ----- //
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


// General Examples 

const num = 23 // <-- truthy
const bool = false // <-- falsy
const str = '' // <-- falsy
const empryArray = [] // <-- truthy
const emptyObj = {} // <-- truthy
const nullValue = null // <-- falsy
const filledString = "Hello World" // <-- truthy
const zero = 0 // <-- falsy

// Array Examples

if ([]) // <-- truthy
if ([1, 2, 3]) // <-- truthy
if ([null]) // <-- truthy
if([] == false) // <-- truthy
if([] == true) // <-- falsy
if (![]) // <-- falsy


/*
if([] == false) and if([] == true) are interesting ones to look at. 
== is called loose equality and it compares two values for equality, after performing any necessary type coercion. 
type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). 
What happens is, when you use ==, loose equality, you are letting JavaScript do type coercion when the types of two values are different.

Here is what happens step by step: 
1. The boolean "false" is converted to the number 0.
2. The empty array is converted to the empty string.
3. The empty string is converted to the number 0.

Further explanation on how the conversion happens:
1. When comparing an object (like an array) to a primitive using ==, the object gets converted to a primitive. 
In the case of an array, this involves turning the array into a string via its toString() method.
2. In your example, false (a boolean) gets coerced to its number representation, 0.
3. Now, the comparison involves the string "" and the number 0. Since they're still different types, further type coercion is performed. The empty string "" is converted to its number equivalent, which is 0.
4. The final comparison is 0 == 0, which evaluates to true.

You might be wondering, ok, why did the convertion from false to 0 happen first?
Just as there are rules of specificity in CSS, JavaScript's type coercion, especially in the context of the loose equality (==), follows a set of steps. 
These rules are defined in the ECMAScript specification, which is the governing standard for JavaScript.

1. Boolean Coercion:
If one of the values is a boolean, it will be converted to a number. true becomes 1 and false becomes 0.
2. Object to Primitive Conversion:
If one of the values is an object and the other is a primitive (number, string, or symbol), the object is converted to its primitive equivalent.
Objects attempt a valueOf() conversion first. If this doesn't provide a primitive, it then attempts a toString() conversion. Arrays, as a specific example of objects, effectively only use toString() for this, turning the array into a comma-separated string.
3. String to Number Conversion:
If one operand is a number and the other is a string, JavaScript will attempt to convert the string to a number and then compare.

*/


/*
Notes:
    Always be cautious when checking values in conditions due to these falsy values. Use strict equality (===) when necessary to avoid unexpected results.
    
Additional Resources:
    - [freeCodeCamp](https://www.freecodecamp.org/news/falsy-values-in-javascript/)
    - [Truthy vs Falsy Solution - JavaScript Basics](https://www.youtube.com/watch?v=AEQ7knLvJdw)
*/
