/**
 * var, let, and const in JavaScript
 * 
 * In JavaScript, we have three different ways to declare variables: var, let, and const.
 */

/**
 * What are the differences between const, let, and var?
 
1. Scope:
var is function-scoped, which means its visibility is limited to the function in which it's declared, or it's globally scoped if declared outside of a function.
let and const are block-scoped, so their visibility is limited to the block (like inside an if statement or a loop) in which they are declared.

2. Hoisting:

All three (var, let, and const) are hoisted, but they behave differently.
var declarations are hoisted and automatically initialized with a value of undefined.
let and const declarations are hoisted but are not initialized. They enter a "temporal dead zone" until the line where they are actually defined.

3. Reassignment:
var and let allow for reassignment of their values.
const doesn't allow reassignment once initialized. It's important to note, however, that if a const is assigned an object or array, the properties or elements within can be modified; only the reference itself is constant.

**/

/**
 * 1. var
 * 
 * - Function-scoped (or globally-scoped if declared outside any function).
 * - Can be redeclared and updated.
 * - Hoisted to the top of its scope, and initialized with undefined.
 */
function exampleVar() {
    console.log(a); // undefined, due to hoisting
    var a = 5;
    console.log(a); // 5
  }
  
  exampleVar();
  
  
/**
 * 2. let
 * 
 * - Block-scoped.
 * - Can be updated but not redeclared within the same scope.
 * - Not initialized until the code runs to the declaration.
 */
function exampleLet() {
if (true) {
    let b = 10;
    console.log(b); // 10
}
// console.log(b); // ReferenceError: b is not defined, due to block scope
}

exampleLet();


/**
 * 3. const
 * 
 * - Block-scoped.
 * - Cannot be updated or redeclared.
 * - Must be initialized at the time of declaration.
 */
function exampleConst() {
const c = 20;
console.log(c); // 20
// c = 30; // TypeError: Assignment to constant variable.
}

exampleConst();


// Hoisting and scope 

function exampleFunction() {
    console.log(a); // Outputs: undefined because of hoisting
  
    if (true) {
      var a = 10;
    }
  
    console.log(a); // Outputs: 10
  }

// When the function exampleFunction is invoked:

// Due to hoisting, the declaration var a; is conceptually moved to the top of the function scope, and it's initialized with undefined.
// The first console.log(a) will output undefined.
// Inside the if statement, a is assigned the value 10.
// The second console.log(a) will output 10 because a is now assigned and the entire function has access to it, thanks to var having function scope.


  // Additional Resources

// - [Scrimaba](https://scrimba.com/learn/frontend/const-vs-let-vs-var-cZyMn2tv)