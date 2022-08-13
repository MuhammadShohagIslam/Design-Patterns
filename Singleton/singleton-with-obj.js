/*
    *** Create a singleton  with JS Object ***
 */

let counter = 0;

const singletonCounterObject = {
    increment() {
        return ++counter;
    },
    decrement() {
        return --counter;
    },
};

Object.freeze(singletonCounterObject);
console.log(singletonCounterObject.increment());
console.log(singletonCounterObject.decrement());

module.exports = singletonCounterObject;
