/*
    *** Proxy Pattern ***
        => A proxy means a stand-in for someone else.
        => Example: Instead of speaking to the person directly, you will speak to the proxy person 
            who will represent the person you were trying to reach.
        => A proxy can determine the behaviour whenever we are interecting with the object.
        => Same happens in JavaScript: instead if interacting with the target object directly, 
            we will interact with the Proxy Object.

        => Proxies are a powerful way to add control over the behaviour of an object.
        => It has various use-case: it can help with validation, formatting, notifications, or debugging.

        Note: overusing, heavy operation, which can affect performance of our application.
*/
// let's create a person object, which represent the a person
const person = {
    name: "Abc",
    age: 25,
    nationality: "Bangladesh",
};

// create a proxy through which we can interact with proxy objecct
const personProxy = new Proxy(person, {
    // access a property
    get: (object, prop) => {
        console.log(`The value of ${prop} is ${object[prop]}`);
        return object[prop];
    },
    // to modify a property
    set: (object, prop, value) => {
        console.log(`Change ${prop} from ${object[prop]} to ${value}`);
        object[prop] = value;
    },
});
// {} -> means handler object which we can define specific behaviour based on the type of interaction.
personProxy.age = 26;
personProxy.name;

/*
    *** Proxy can be useful to add validation ***
        => which help us keep our data pure!
 */

const personValidationProxy = new Proxy(person, {
    get: (object, prop) => {
        // checking if there is not property on the object, return message
        if (!object[prop]) {
            throw new Error(
                "Oh, Sorry, please provide valid property beacuse this property does not seem to exist on the target object"
            );
        } else {
            console.log(`The value of ${prop} is ${object[prop]}`);
            object[prop];
        }
    },
    set: (object, prop, value) => {
        if (prop === "age" && typeof prop !== "number") {
            throw new Error(
                "Sorry, you can only pass numeric value for age property"
            );
        } else if (prop === "name" && value.length <= 0) {
            throw new Error("You need to provide a valid name.");
        } else {
            console.log(`Change ${prop} from ${object[prop]} to ${value}`);
            object[prop] = value;
        }
    },
});
const a = personValidationProxy.name;
console.log(a);
personValidationProxy.name = "Abcdef";

/*
    *** Reflect ***
        => a build in object, which makes it easier for us 
            to manipulate the target object when working with proxies.
*/
const personReflectProxy = new Proxy(person, {
    // access a property
    get: (object, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(object, prop)}`);
        // object[prop]
        return Reflect.get(object, prop);
    },
    // to modify a property
    set: (object, prop, value) => {
        console.log(`Change ${prop} from ${object[prop]} to ${value}`);
        // object[prop] = value;
        Reflect.set(object, prop, value);
    },
});

personReflectProxy.age = 20;
console.log(personReflectProxy.name);
