/*
Question:
What's the difference between == and === in JavaScript?

Explanation:
In JavaScript, == and === are both used to compare values, but they do so in slightly different ways due to type coercion.

== (often called Loose Equality) allows for type coercion. This means that if the two values being compared have different types, JavaScript will try to convert one or both of the values so that they have a common type and then compares them.
=== (often called Strict Equality) doesn't allow type coercion. It checks if the values being compared have the same type and if they do, then it compares the values. If they don't have the same type, it immediately considers them not equal.

Reference:
    - [MDN Guide on Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
*/

// ----- Examples of == vs === ----- //

// == (Loose Equality) Examples
console.log(3 == '3');  // true, because '3' is type coerced to the number 3
console.log(true == 1); // true, because true is type coerced to the number 1
console.log(null == undefined); // true, because both are considered equivalent in loose comparison

/*
Some rules to remember about type coercion with ==:

If one value is a string and the other is a number, JavaScript tries to convert the string to a number and then compares them.
If one value is a boolean, JavaScript converts it to a number. Specifically, true becomes 1 and false becomes 0.
If one value is an object and the other is a primitive (like a number or a string), JavaScript tries to convert the object to a primitive for comparison.
When comparing a value to null or undefined using ==, they are considered equal. But, if you compare any other value to null or undefined, it will return false.
*/

// === (Strict Equality) Examples
console.log(3 === '3');  // false, because the types are different
console.log(true === 1); // false, because the types are different
console.log(null === undefined); // false, as null and undefined are distinct types


// Examples demonstrating the difference:

const num = 23; // Number
const strNum = '23'; // String representation of the number 23

console.log(num == strNum);  // true, because of type coercion
console.log(num === strNum); // false, because no type coercion is performed and their types are different

const boolTrue = true;  // Boolean true
const one = 1;  // Number 1

console.log(boolTrue == one);  // true, because true is type-coerced to the number 1
console.log(boolTrue === one); // false, because they are of different types

/*
In interviews, a simple and conversational way to explain the difference might be:

"== checks if two values are equal, but it's not strict about types. It'll try to convert values to see if they can be made equal. 
On the other hand, === checks both value and type, ensuring that what you're comparing is truly identical."

For accurate comparisons and to avoid unexpected results, many developers prefer using === over == in most situations.

Additional Resources:
    - [freeCodeCamp's Guide to JavaScript Equality](https://www.freecodecamp.org/news/loose-vs-strict-equality-in-javascript/)
    - [Understanding Loose vs. Strict Equality in JavaScript](https://www.youtube.com/watch?v=kVOmc7NK1M0)
*/
