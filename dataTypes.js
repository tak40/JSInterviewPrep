/*
Question:
What are some JavaScript data types?

Explanation:
JavaScript provides various data types to hold different types of values. 
These data types are broadly classified into two categories: primitive and non-primitive (or reference) data types.

Primitive Data Types:
Primitive data types are the basic data types in JavaScript that represent single values. They can't be further broken down into simpler data types. 
These values are immutable, meaning they cannot be changed. However, variables holding these values can be reassigned. Examples of primitive data types are:
    - Number
    - String
    - Boolean
    - undefined
    - BigInt (for large integers)
    - Symbol (unique and immutable primitive)
    - null (though it's a bit special, often considered primitive)

Non-primitive (or Reference) Data Types:
Non-primitive data types, also called reference data types, are more complex and can hold collections of data or functions to perform operations. 
Unlike primitive data types, reference data types are mutable, meaning their content can be changed. Examples include:
    - Object (which also encompasses specialized forms like Array and Function)

Reference:
    - [MDN Web Docs on Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
*/

// Examples:

// Primitive Data Types
const num = 42;  // Number
const greeting = 'Hello, World!';  // String
const isValid = false;  // Boolean
const bigIntExample = 1234567890123456789012345678901234567890n; // BigInt
const uniqueSymbol = Symbol('description');  // Symbol

// Special Case: null (often considered a primitive)
const nothingHere = null;

// Non-primitive (or Reference) Data Types
const person = { name: 'Alice', age: 30 };  // Object
const fruits = ['apple', 'banana', 'cherry'];  // Array as a specialized form of Object
function greet(name) {  // Function, also a reference type
    return 'Hello, ' + name;
}

/*
In interviews, you might summarize as:

"In JavaScript, we classify data types into primitive and non-primitive. Primitive types are basic values that can't be further broken down and are immutable. 
On the other hand, non-primitive types, like Objects, Arrays, and Functions, can hold multiple values or operations and can be modified."

Additional Resources:
    - [JavaScript Data Types: A Comprehensive Guide](https://www.javascripttutorial.net/javascript-data-types/)
    - [Understanding JavaScript Data Types](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)
*/

