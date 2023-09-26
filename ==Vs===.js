/*
Question:
    What's the difference between == and === in JavaScript?

Explanation:
    In JavaScript, both == and === are equality operators, used to compare values. The main difference lies in how they handle type coercion:

    1. == (Loose Equality): Allows type coercion. If the types of the two operands are different, it tries to convert one (or both) operands to a common type and then makes a comparison.
    2. === (Strict Equality): No type coercion. Compares both the value and the type of the operands. If the types differ, it immediately returns false.

Reference:
    - [MDN Guide on Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
*/

// ----- Examples of == vs === ----- //

// == (Loose Equality) Examples
console.log(3 == '3');  // true, because '3' is type coerced to the number 3
console.log(true == 1); // true, because true is type coerced to the number 1
console.log(null == undefined); // true, because both are considered equivalent in loose comparison

/* Rules for type coercion with `==`:
1. If either operand is a string, and the other is a number, the string is converted to a number for comparison.
2. If either operand is a boolean, it will be converted to a number (`true` becomes 1 and `false` becomes 0).
3. If one operand is an object and the other is a primitive value, the object will be converted to a primitive. It will first try the `valueOf` method, and if that doesn't return a primitive, it'll use the `toString` method.
4. If one of the operands is `null` or `undefined`, the other must also be `null` or `undefined` for the comparison to return true. Otherwise, it returns false.
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
