// Primitive Types

// In JavaScript everything is an object - it's false. There is kind of a joke, because object is not 'false'.
// There is reasons, because some developer say that, but it's not correct
// Most of JS types can BEHAVE like an object, but it didn't makes them object.

// In specification in 6.1 ECMAScript Languages Types written that we have Primitive Types in JS:

// 1. undefined
// 2. string
// 3. number
// 4. boolean
// 5. symbol
// 6. bigint

// undeclared? - is that a type?
// null? - JavaSript calles it as type, but I don't nut it to the list, because it's a hystorical bug.
// function? - JavaScript didn't list functions as a type. It's a subtype of objects (callable objects)
// arrays? - Again, it's a subtype of object. Special kind of object with indexing items
// bigint? - was added to the language as another primitive type, so it's a number 6 in our list.

// In JavaScript, variables don't have types. They have values, that have types.


// TYPEOF OPERATOR

var v;
typeof v; // "undefined"

v = '1';
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "boolean"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"

typeof doesntExist; // "undefined"

let a = null;
typeof a; // "object" OOPS! - historical bug

a = function() {};
typeof a; // "function" ??? - it's not a official type, but it has it's own value in that method

a = [1,2,3];
typeof a; // "object" ??? - but array doesn't have it's own value in this method. So you just need to learn it
// To check array you can use another method - a.isArray - it will tell you, is it array or not

let b = 42n;
// or: BigInt(42)
typeof b; // "bigint"

