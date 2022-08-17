/*
    *** Factory Pattern ***
        => A function is a factory function when it returns a new 
        object without the use of the 'new' keyword.
        => If we need to create a many objects, we will want to combine the power of literals and factory functions.
        => Use a factory function to create objects.

    *** Pros **
        => The factory pattern is useful when we have to create multiple
        smaller objects that share the same properties.
        => A Factory function can easily return a custome object depending 
        on the current enviroment, our user-specific configaration.

    *** Cons ***
        => In many cases it may be memory efficient to create new instances instead of new objects each time.

*/
// create a factory function
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
});

// we can now easily create multiple users by invoking the createUser function.
const user = createUser({
    firstName: "A",
    lastName: "B",
    email: "ab@gmail.com",
});
const user1 = createUser({
    firstName: "C",
    lastName: "D",
    email: "cd@gmail.com",
});
// console.log(user)
// console.log(user1)

/*
   *** Returning Objects ***
   => If we want to use an implicit return for an object literal,
   we will need to disambiguate by wrapping the obejct literal in parentheses.

*/
// const fullName = () => {firstName: "A"; lastName: "B"};
/* 
    => return udefined beacuse firstName, lastName is interpreted as a label and "A", "B" 
    are interpreted as an expression that does not get assigned or returned.
*/

const fullName = () => ({ firstName: "A", lastName: "B" });
console.log(fullName());
/* 
    return { firstName: 'A', lastName: 'B' } beacuse the parentheses force the braces to be interpreted 
    as an expression to be evaluated, rather than a function body block
*/

/*
    => With the factory pattern , we can easily create new 
    objects that contain the custome keys and values.
*/
const createObjectFromArray = ([key, value]) => ({
    [key]: value,
});

const userName = createObjectFromArray(["name", "Abc"]);
console.log(userName);

// Default Parameters;
const defaultParameters = ({name, email}= {}) => ({ // = {} is a default parameter, when we do not pass anything, it return empty object
    name,
    email
})
const test = defaultParameters();
console.log(test)