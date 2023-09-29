/*
Question:
What do the spread and rest operators do in JavaScript?

Explanation:
In JavaScript, the '...' operator can be utilized in two different contexts: as a spread operator and as a rest operator.

Spread Operator:
Takes items out of an array or properties out of an object and uses them as standalone items or properties.

Rest Operator:
Gathers multiple items into a single array or multiple properties into one object.

Examples:
*/

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];  // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Rest Operator
function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4);  // Returns 10

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);  // [2, 3, 4, 5]

/*
In interviews, you could articulate it as:

"In JavaScript, the '...' operator can serve two main purposes. As a spread operator, it spreads the elements of an iterable into individual components. 
As a rest operator, it collects multiple elements into a single array, typically used in function parameters or destructuring."

Additional Resources:
    - [...spread operator and rest operator - Beau teaches JavaScript](https://www.youtube.com/watch?v=iLx4ma8ZqvQ)
    - [A Guide to Spread and Rest in JavaScript](https://dmitripavlutin.com/object-rest-spread-properties-javascript/)
    - [JavaScript Spread Operator and Rest Parameter](https://javascript.info/rest-parameters-spread) 
*/

