import { React } from "react";
import observable from "./observers/observer-pattern";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";

/*
    *** Observer Pattern ***
        => Use observables to notify subcribers when an event occurs.
        => With the observer pattern, we can subsribe certain objects, the observers, to another object, called the observable.

    *** Observable object usually contain 3 important parts:
        => Observers: an array of observers that will get notified whenever a specific event occurs.
        => Subscriber: a method through which we can add observers to the observers list.
        => Unscriber: a method through which we can remove observers from the observer list.
        => Notify(): a method to notify all observers whenever a specific event occurs.

    *** Use Case **
        => It's very useful when working with asynchronous, event-based data.
        => Maybe when we want to certain components to get notified whenever certain data has finised downloading, or 
        => whenever users sent new messages to a message board and all other
        members should get notified.

*/
function logger(data) {
    console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
    toast(data);
}

// subscribe for getting observable notifing
observable.subscriber(logger);
observable.subscriber(toastify);

function App() {
    function handleButtonClick() {
        console.log(observable.notify())
        observable.notify("User click the button!");
    }

    function handleToggle() {
        observable.notify("User toggle switch!");
    }
    return (
        <div className="App">
            <Button variant="contained" onClick={handleButtonClick}>
                Click Me!
            </Button>
            <FormControlLabel
                name=""
                control={<Switch onChange={handleToggle} />}
                label="Toggle Me!"
            />
            <ToastContainer />
        </div>
    );
}

export default App;
