// create a math module

// function add(x, y) {
//     return x + y;
// }

// function multiple(x, y) {
//     return x * y;
// }

// function substract(x, y) {
//     return x - y;
// }

// function square(x) {
//     return x * x;
// }

// exporting to show available to the files, it's gona be publically expose
// it's pass just reference

export function add(x, y) {
    return x + y;
}

export function multiple(x, y) {
    return x * y;
}

export function substract(x, y) {
    return x - y;
}

export function square(x) {
    return x * x;
}

// if do not export, it will not expose outside of the module

/*
    => by keeping the value private to the module, there is a reduced risk of accidentally polluting the global scope,
*/
const privateValue = "This is a private value!"