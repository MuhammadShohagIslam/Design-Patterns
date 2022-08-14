/*
    *** Prototype Pattern ***
        => Share properties among many object of the same type.
        => Whenever we try to access a property on an object that does not 
        exits on the object directly, JavaScript will go down the 
        prototype chain to see if the property is available within the prototype chain.

        => When we try to access a property that's not direclty
         avaibale on the object, JavaScript recursively walks
        down all the objects that __proto__ points to until it
        finds the property.

        *** __proto__ vs prototype ***

        => __proto__ is an object in very class instance that points to the prototype it was created from.
        => Dog.prototype provides a blueprint for building an Dog,
        dog1.__proto__ affirs that the Dog has indeed been built according to that specific bluprint.

        *** Advantages ***
            => The prototype pattern allows us to easily let objects access and inherit properties from other objects.

            => through which we can avoid duplication of methods and properties, thus reducing the amount of memory used.
*/

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return "Woof!";
    }
}

const dog1 = new Dog("Daisy");
// const dog2 = new Dog("Daisy");
// const dog3 = new Dog("Daisy");

/*
    => The value of __proto__ on any instance of the constructor,
    is a direct reference to the constructor's prototype.

*/

// through prototype, we can access prototype property on a constructor
console.log(Dog.prototype);
// same way, through the __proto__ property on any instance
console.log(dog1.__proto__);

/*
    => The prototype patterns is very powerful when working with
    object that should have access to the same properties. Instead
    of creating a duplicate of the property each time, we can simply
    add the property to the prototype,since 'all instances have access 
    to the prototype object'.

*/
// Dog.prototype.play = () => console.log("Playing Now!");
// dog1.__proto__.play = () => console.log("Playing Now!");

// Prototype themeselves also have a __proto__ object!
class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }
    fly() {
        return "Flying!";
    }
}
const dog4 = new SuperDog("Daisyhe");
dog4.bark();
dog4.fly();

// The value of __proto__ on the prototype of SuperDog points to the Dog.prototype object!.
console.log(dog4.__proto__);

// to create a new object, we can use Object.create method
const dog = {
    bark() {
        console.log("Woof!");
    },
};

const pet1 = Object.create(dog);
console.log(pet1.bark());
