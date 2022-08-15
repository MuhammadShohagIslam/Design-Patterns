/*
    *** Observer Pattern ***
        => Use observables to notify subcribers when an event occurs.
        => With the observer pattern, we can subsribe cetain objects, the observers, to another object, called the observable.

    *** Observable object usually contain 3 important parts:
        => Observers: an array of observers import Observable from './observer-pattern';
that will get notified whenever a specific event occurs.
        => Subscriber: a method through which we can add observers to the observers list.
        => Unscriber: a method through which we can remove observers from the observer list.
        => Notify(): a method to notify all observers whenever a specific event occurs.

*/

// let's create an observable
class Observable{
    constructor(){
        // create a array of observers
        this.observers = [];
    }
    // create a subscriber to add observers to the observers list
    subscriber(func){
        this.observers.push(func)
    }

    // remove the observers with the unscriber method
    unsubscriber(func){
        this.observers = this.observers.filter(observer => observer !== func)
    }

    // to call/invoke all subscribers with the notify method
    notify(data){
       this.observers.forEach(observer => observer(data));
    }
}

const observable = new Observable()
export default observable;