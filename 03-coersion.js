// Abstract Operations
// These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics
// of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification.

// Type Conversion (aka 'coersion')
// The ECMAScript language implicitly performs automatic type conversion as needed. To clarify the semantics of certain constructs it is useful
// to define a set of conversion abstract operations. The conversion abstract operations are polymorphic; they can accept a value of any 
// ECMAScript language type. But no other specification types are used with these operations.
_______________________________________

// ToPrimitive (hint)
// It takes type hints:

// hint "number"    hint: "string"
// valueOf()        toString()
// toString()       valueOf()
___________________________________


// ToString
// It takes any value and gives us the representation of that value in String form.

// null => "null"
// undefined => "undefined"
// true => "true"
// false => "false"
// 3.14159 => "3.14159"
// 0 => "0"
// -0 => "0" that's a little bit strange


// The type coersion flow:
// ToString(object)
// ToPrimitive(string)

// Array coersion results:
// [] => "" 
// [1,2,3] => "1,2,3"
// [null,undefined] => ","
// [[[], [], []], []] => ",,,"
// [,,,,,] => ",,,"

// Object coersion results:
// {} => "[object Object]"
// {a:2} => "[object Object]"
// { toString(){ return "X"};} => "X"

_________________________________________

// ToNumber

// "" => 0
// "0" => 0
// "-0" => -0
// "  009 " => 9
// "3.14159" => 3.14159
// "0." => 0
// ".0" => 0
// "." => NaN
// "Oxaf" => 175

// false => 0
// true => 1
// null => 0
// undefined => NaN

// ToNumber(object)
// ToPrimitive(number)

// [""] => 0
// ["0"] => 0
// ["-0"] => -0
// [null] => 0
// [undefined] => 0
// [1,2,3] => NaN
// [[[]]] => 0

// {..} =? NaN
// {valueOf() { return 3; }} => 3

__________________________________________

// ToBolean

// Falsy
//  ""
// 0, -0
// null
// NaN
// false
// undefined


// All other values will be Truthy, like: "foo", 23, { a: 1 }, [1,3], true, function() {...} e.t.c.

_________________________________________

// Cases of Coersion
// You claim to avoid coercion because it's evil, but...

let numStudents = 16;
console.log(`There are ${numStudents} students`);
// "There are 16 students"
// Here works coersion

// But what about that?

let msg1 = "There are ";
let numStudents2 = 16;
let msg2 = " students";
console.log(msg1 + numStudents + msg2);
// "There are 16 students"
// Here works operator overloading. If one of + sides is a string - JavaScript prefers String.

