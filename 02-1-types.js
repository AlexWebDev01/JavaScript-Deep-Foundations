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


// undefined vs undeclared

// it's ofter confused, because developers think about it as an synonyms, but in programming it's different
// undefined - it's a variable, but at the moment it doesn't have a value
// undeclared - it's never been created in any scope we have access to

// but there is also uninitialized (aka TDZ)


// SPECIAL VALUES
// NaN & isNaN

// NaN - it's not a Not A Number, it is INVALID number

let myAge = Number("0o46"); //38
let myNextAge = Number("39"); //39
let myCatsAge = Number("n/a"); //NaN
myAge - 'my son`s age'; // NaN

myCatsAge = myCatsAge; // false OOPS!) because NaN !== NaN / NaN is the only value that is not equal to itself

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true OOPS!)

Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false

// Why did isNaN of "my sons's age" return TRUE, but Number.isNaN("my son's age") return false?
// Well, because isNaN util makes type coersion BEFORE it checkes. But in new Number.isNaN it doesn't make type coersion, it check the value.

// The type if NaN is Number, but invalid.
// NaN: Invalid Number

// NEGATIVE ZERO
// It doesn't exist in math, but definitely exist in programming


let trendRate = -0;
trendRate === -0; // true

trendRate.toString(); // "0"  OOOPS!
trendRate === 0; // true OOOPS!
trndRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false

Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0 WFT?
Math.sign(0); // 0 WTF?

// "fix" Math.sign(..)
function sign(v) {
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); // -1
sign(3); // 1
sign(-0); // -1
sign(0); // 1


// This function is useful to track something. Like car direction when it stops. Or character direction in games.
function formatTrend(trendRate) {
    let direction = 
        (trendRate < 0 || Object.is(trendRate, -0)) ? "->" : "<-";
    return `${direction} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // "-> 3"
formatTrend(3); // "<- 3"
formatTrend(-0); // "-> 0"
formatTrend(0); // "<- 0"

