// able to use export file, we have import them file that needs to reference them

const { add, substract, square, multiple } = require("./math");

console.log(add(10, 20));
console.log(substract(10, 20));
console.log(square(10));
console.log(multiple(10, 20));

// the name of the exports could collide with local values
// it is not possible again declare with same name exporting, it is naming collision.
function add(...arg) {
    return arg.reduce((acc, cur) => acc + cur);
}
// Identifier 'add' has already been declared

function multiple(...arg) {
    return arg.reduce((acc, cur) => acc + cur);
}

// we can solve above problem using by as keyword
// import {add as addingValue, substract as subValue } from './math';
console.log(addingValue(10, 20));
console.log(subValue(10, 20));
