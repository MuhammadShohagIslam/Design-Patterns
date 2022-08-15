/*
    *** Mixin Pattern ***
        => Add functionality to object or class without inheritance by injecting functionality into object's
        prototype
        => A mixin is an object that we can use in order to
        add reusable functionality to another object or class

        => Modifing object's prototype is seen as bad practice,
        it can lead to prototype pollution and a level of uncertainty 
        regarding the origin of out functionality.
*/

// create a class just name property
class Dog {
    constructor(name) {
        this.name = name;
    }
}

// create a mixin object
// const dogFunctionality = {
//     bark: () => console.log("Woof!"),
//     wagTail: () => console.log("Wagging my tail!"),
//     play: () => console.log("Playing!"),
// }

// through Object.assign(), we can add mixin object to the class without using inheritance
// Object.assign(Dog.prototype, dogFunctionality);

// create a instance of Dog Class
// const dog = new Dog("Daisy");
// console.log(dog.bark())
// console.log(dog.wagTail())
// console.log(dog.play())

/*
 *** Mixin themselves can use inheritance! ***
 */
// let's create a another mixin
const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
};

// create a mixin object
const dogFunctionality = {
    __proto__: animalFunctionality,
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    // come from animalfunctionality mixin object
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep();
    },
};



// add above mixin to the dogFunctionality prototyep
// Object.assign(dogFunctionality, animalFunctionality);

// through Object.assign(), we can add mixin object to the class without using inheritance
Object.assign(Dog.prototype, dogFunctionality);

// create a instance of Dog Class
const dog = new Dog("Daisy");
console.log(dog.bark());
console.log(dog.wagTail());
console.log(dog.play());
console.log(dog.sleep());
console.log(dog.walk());

/*
    *** React in Mixin ***
        => React encoursge use mixin beacuse it's making 
        application more complexity.
        => We can use HOC or Hooks for in this case
*/
