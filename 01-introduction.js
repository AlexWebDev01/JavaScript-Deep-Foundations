// We have a great ++ operator

let x = 40;

x++; // 40
x; // 41

++x; //42
x; // 42

// Most of developer think than x++ = x + 1. And we need to dive deep in JavaScript, that it's not.

let a = '5';
a = a + 1; // '51' because of type coersion

let b = '5';
b++; // 5
b; // 6

// When the bugs happens, we blaim the language. But most of bugs is just of not knowing JS.
// Did that bugs happens also in C++ or Java? Yeah, but developers didn't blame the language, they dive deep and find the reason.
// But because JS has so low-level entry, all freshers think that it is so automatically and intuitive understandable, that they
// didn't even knowing deep how their's language works. That's a big mistake.

// Have you ever read any part of the JS specification?
// Just try: https://262.ecma-international.org/9.0/#Title
// So if you have some questions, the specification is the authoritority. And if the specification said that 
// JS works in your case right, than bug is in your head - you just didn't understand the language principles.
// Reading the specification is not easy, but it's a must.
// Do you know any profession, where workers are professional 'quessers'?
// But JavaScript developers are! We just write some code and test, what we'll get.
// Can you imagine some architect that say: okey, I don't know what we'll get, let's just build and test it.

// Ofcourse, you can use MDN, but MND is not always right! I fix bugs on MDN on the regular daily basis.
// The bugs appearce when your thinking model doesn't match the computer thinking model


// COURSE OVERVIEW

// TYPES
// - Primitive Types
// - Abstract Operations
// - Coercion
// - Equality
// - TypeScript, Flow, etc.

// SCOPE
// - Nested Scope
// - Hoisting
// - Closure
// - Modules

// OBJECTS (Oriented)
// - this
// - class { }
// - Prototypes
// OO vs. OLOO

// 