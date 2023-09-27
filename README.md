# JSInterviewPrep

A curated list of JavaScript interview questions with explanations, solutions, and valuable resources.

## Table of Contents

1. [Falsy Values in JavaScript](#falsy-values-in-javascript)
2. [const vs let vs var](#const-vs-let-vs-var)
3. [== vs ===](#==-vs-===)
4. [undefined vs null](#undefined-vs-null)


## Falsy Values in JavaScript

1. [What are the falsy values in JavaScript?](./falsyValues.js) - Understand the values in JavaScript that evaluate to false.

A: "A set of unique values that evaluate to false."

```javascript
const falsyValues = [false, 0, "", null, undefined, NaN, -0];
```
   - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)


## const vs let vs var

2. [What are the differences between const, let, and var?](constLetVar.js) - Understand the differences between the three variable declarations.

In JavaScript, `var`, `let`, and `const` are used to declare variables. However, they have different scopes and behaviors:
- **var**: Declared variables are function-scoped and are hoisted to the top of the function (or the global scope if declared outside any function). They can be redeclared and updated.
- **let**: Declared variables are block-scoped and can be updated but not redeclared within the same scope.
- **const**: Declared variables are block-scoped but cannot be updated or redeclared.

   - [freeCodeCamp](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)


## == vs ===

3. [What's the difference between == and === in JavaScript?](==Vs===.js) - Understand the distinction between loose equality (==) and strict equality (===).

In JavaScript, == and === are both equality comparison operators, but they differ in how they compare values:
 - == (Loose Equality): Compares two values after performing type coercion if necessary. This means it tries to convert operands to the same type before making the comparison.
 - === (Strict Equality): Compares both value and type, which means no type coercion is done.

    - [MDN Guide on Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
    

## undefined vs null

4. [What is the difference between `undefined` and `null` in JavaScript?](./undefinedVsNull.js) - Dive into the distinct meanings and use cases of `undefined` and `null`.

In JavaScript, both `undefined` and `null` are special values that represent the absence of a value. However, they are used in slightly different contexts:
- **undefined**: Indicates that a variable has been declared but has not been assigned a value. It also appears when accessing an object property or array index that doesn't exist.
- **null**: Represents an intentional absence of any value or object. It's often used to represent "no value" or "no object."

   - [MDN Web Docs on null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
   - [MDN Web Docs on undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)


## Resources

- [Scrimba's Frontend Career Path](https://scrimba.com/playlist/pMvNwAD) - Comprehensive course covering a wide range of frontend topics and interview questions.
