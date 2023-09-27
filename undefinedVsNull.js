/*
Question:
    What is the difference between `undefined` and `null` in JavaScript?

Explanation:
    undefined is the default value of a declared variable that hasn't been assigned a value. 
    null is an intentional assignment indicating the absence of any value. 
    They are different in JavaScript, with typeof undefined being "undefined" and typeof null being "object". 
    They are loosely equal but not strictly equal.

    - `undefined`: This value is automatically assigned to variables that are declared but not initialized. 
                   It's also the default value of function parameters that aren't provided, and the value you get when you query 
                   the value of an object property or array index that doesn't exist. 
                   In essence, it means "this hasn't been given a value yet."

    - `null`: This is a value that represents no value or no object. It needs to be assigned. 
              In contexts where an object is expected but there isn't one to provide, 
              or where you want to indicate the intentional absence of a value, `null` is used. 
              It effectively means "this has been set to no value."

Examples:
*/

let uninitializedVariable;
console.log(uninitializedVariable); // undefined

let emptySlot = null;
console.log(emptySlot); // null

// Accessing a non-existent property returns undefined
const obj = { a: 100 };
console.log(obj.b); // undefined

// A function that doesn't return anything, by default returns undefined
function noReturn() {}
console.log(noReturn()); // undefined

// null is often used in contexts where we want to indicate the absence of an object
function getPerson(id) {
    if (id < 0) {
        return null; // indicates absence of a person object
    }
    // ... rest of the function
}

/*
Notes:
    In practice, `undefined` and `null` are often used somewhat interchangeably. However, understanding their distinct meanings is essential for clearer, more intentional code. 
    When checking for either `undefined` or `null`, it's common to use the loose equality `==` since `undefined == null` will evaluate to `true`.

Additional Resources:
    - [Null vs Undefined in JavaScript](https://medium.com/@adnanaslam27j/null-vs-undefined-in-javascript-100-asked-at-the-time-of-interview-743eae3393d6)
    - [Null vs Undefined - Beau teaches JavaScript](https://www.youtube.com/watch?v=VwaqJy_clnc)
    - [Null Vs Undefined - Wev Dev Simplified](https://blog.webdevsimplified.com/2021-01/null-vs-undefined/)
*/
