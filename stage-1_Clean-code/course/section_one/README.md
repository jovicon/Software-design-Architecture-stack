# Section 1: Getting Started

## What is "clean code"?

* it's code easy to read and understand
* it's not just about code works
* should have meaning
* reduce cognitive load
* should be concise
* should follow common best practices
* should be fun to write and maintain

because a vast majority of time we spend time reading and understanding code.

That it's not one way to write clean code, we can dive and choose different styles and rules (FP, SP or OOP).

**Typescript Code examples:**
```typescript
------------------------------------------------------
Not Clean Code Course Example:
------------------------------------------------------
function create(m, n) {
  if (m === 'Max') {
    return (value) => value < number;
  } 
  else if (m === 'Min') {
    return (value) => value > number;
  } 
}

const max = create('Max', 31);

console.log(isBellowMax(15))
console.log(isBellowMax(32))
```

```typescript
------------------------------------------------------
Clean Code Course Example:
------------------------------------------------------
function createValidator(mode: 'Max' | 'Min', number: number) {
  if (mode === 'Max') {
    return (value: number) => value < number;
  } 
  else if (mode === 'Min') {
    return (value: number) => value > number;
  } 
}

const isBellowMax = createValidator('Max', 31);

console.log(isBellowMax(15))
console.log(isBellowMax(32))
```

```typescript
------------------------------------------------------
My Clean Code Example Refactor:
------------------------------------------------------
type validationModes = 'Greater' | 'Smaller';

const createValidator = (mode: validationModes, pivotNumber: number) => {
  return mode === 'Greater'
    ? (numberToCompare: number) => numberToCompare > pivotNumber
    : (numberToCompare: number) => numberToCompare < pivotNumber;
}

const maxNumber = 31;
const isGreaterThanMax = createValidatorFunction('Greater', maxNumber);

console.log(isGreaterThanMax(15));
console.log(isGreaterThanMax(32));
```

## Key Pain Points & How To Write Clean Code

* Names
  * Variables
  * Functions
  * Classes

* Structure & Comments
  * Code Formatting
  * Good & Bad comments

* Functions
  * Length
  * Parameters

* Conditionals & Error Handling
  * Deep Nesting
  * Missing Error Handling

* Classes & Data Structures
  * Missing Distinction
  * Bloated Classes

* Solutions:
  * Rules & Concepts
  * Patterns & Principles
  * Test-Driven Development


##  Clean Code & Strongly Typed Languages
* Clean code Doesn't require Strong typing
  * Types can help preventing errors and can improve readability
  * But code can also be 100% readable and meaningful without types

**Code example**


##  Clean Code, Principles & Patterns & Clean Architecture
* Clean Code:
  * Write code which is readable & easy to understand
  * Focus on single problems/file

* Pattern & Principles
  * Write code which is maintainable and extensible

* Clean Architecture
    * Where to write which code
    * Focus on the project as whole


## Clean Code vs Quick Code

* You will always find ways of improving your code.
* As your project evolves and changes your code will need to change.
* Always question old code and refactor a lot.
* Constant Refactor is the key.

**Refactor today is work you save tomorrow**
**A code base can only survive and stay maintainable if it's continuously improved and refactored**

### PROTIP
**Whenever you add something new, try to improve existing code along the way.**
