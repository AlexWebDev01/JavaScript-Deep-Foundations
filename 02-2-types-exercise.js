// Polyfill for `Object.is(..)

// In this exercise you will de define a polyfill for `Object.is(..)`,
// No cheating and looking it up online!

// Instructions
// 1. `Object.is(..)` should take two parameters.
// 2. It should return `true` if the passed in parameters are exactly the same value (not just `===` -- see below!), or `false` otherwise.
// 3. For `NaN` testing, you can use `Number.iSNaN(..)`, but first see if you can find a way to test without usage of any utility?
// 4. For `-0` testing, no built-in utility exists, but here's a hint: `-Infinity`.
// 5. If the parameters are any other values, just test them for strict equality.
// 6. You cannot use the buil-in `Object.is(..) -- that's cheating!

// Polyfill Pattern
if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        let xNegativeZero = isNegativeZero(x);
        let yNegativeZero = isNegativeZero(y);

        if (xNegativeZero || yNegativeZero) {
            return xNegativeZero && yNegativeZero;
        } else if (isItNaN(x) && isItNaN(y)) {
            return true;
        } else {
            return x === y;
        }


        // Negative Zero check
        function isNegativeZero(v) {
            return v == 0 && (1/-Infinity) == v;
        }

        // NaN & NaN check
        function isItNaN(v) {
            return v !== v;
        }
    }
}




// TODO: define polyfill for `Object.is(..)`



// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
