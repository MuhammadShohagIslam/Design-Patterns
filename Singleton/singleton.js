/*
    *** Singleton Pattern ***
        => Singletons are classses which can be instantiated once, and we can be accessed globally.
        => Single instance can be shared throughout our application, which makes Singletons great for
        managing global state in an application.
*/

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the Singleton");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    showMessage: function () {
      console.log("Hello World!");
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

/*
   The Singleton module has a private variable called instance that holds the 
   single instance of the class. The createInstance() function creates a new instance of the 
   class if one does not already exist, and the getInstance() method returns the existing 
   instance or creates a new one if it does not exist.

   When we call getInstance() twice, we get the same instance of the Singleton class, 
   because the class ensures that there is only one instance created.

*/
// let counter = 0;

class Counter {
    // getInstance method that returns the value of the instance
    getInstance() {
        return this;
    }
    // getCount method that returns the current value of the counter
    getCount() {
        return counter;
    }
    // increment method that increments the value of the counter by one
    increment() {
        return ++counter;
    }
    // decrement method that decrement the value of the counter by one;
    decrement() {
        return --counter;
    }
}

// const instance = new Counter();
// const instance1 = new Counter();
// console.log(instance);
// console.log(instance1);
// console.log(instance.getInstance() === instance1.getInstance());
/* 
   Above class does not meet the criteria for a singleton!. becuase a Singleton should only be able to get instantiated once. 
   currently, we can create multiple instance of the Counter class
*/

// to creare one instance, creating a varible called instance;
let instance;
let counter = 0;

// Solve the problem and create the Singleton Class //
class SingletonCounter{
   constructor(){
      // we are not able to create multiple instance anymore.
      if(instance){
         throw new Error("You can only create one instance!")
      }
       instance = this;
      
   }
   // getInstance method that returns the value of the instance
    getInstance(){
        return this
    }
   // getCount method that returns the current value of the counter
   getCount(){
      return counter;
   }
   // increment method that increments the value of the counter by one
   increment(){
      return ++counter;
   }
   // decrement method that decrement the value of the counter by one;
   decrement(){
      return --counter;
   }
}

/*
   // we are not able to create multiple instance

   const singletonCounter = new SingletonCounter();
   const singletonCounter1 = new SingletonCounter(); 
   Error: You can only create one instance!
*/

// to reduces the risk of accidentally overwritting the values on the Singleton, we can do freeze the instance as well
const singletonCounter = Object.freeze(new SingletonCounter());


/*
    *** Disadvantages ***
    => Unit testing is more difficult, beacuse it introduces a global state into an application.
*/
module.exports = singletonCounter;

