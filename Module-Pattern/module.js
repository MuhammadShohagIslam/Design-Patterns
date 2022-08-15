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

/*
    *** Defference between default export vs export ***
        => we can effectively changing the way we have to import the value

    => With default export, we can import the value without the brackets.
    => we can give the imported default value another name than the name we exported it with.
*/
// import add, { multiply, subtract, square } from "./math.js";

// import addingValue, { multiply, subtract, square } from "./math.js";

// if we want to imports all exported values into module we can use *
// without default and export, we can not pass outside data from the module.
// import * as math from './math'

/*
    *** Dynamic Import Module ***
    => With a dynamic import, we can import modules on demand
    => we can reduce page load time
*/
const button = document.getElementById("button");

button.addEventListener("click", () => {
    import("./math").then((module) => {
        console.log("adding", module.add(1, 3));
    });
    button.innerText = "Click the console";
});

/*************************** */
/**** Or with async/await ****/
/*************************** */

button.addEventListener("click", async () => {
    const module = await import("./math");
    console.log("adding", module.add(1, 3));
    button.innerText = "Click the console";
});
