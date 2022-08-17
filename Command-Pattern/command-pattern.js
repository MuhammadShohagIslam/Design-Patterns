/*
    *** Command Pattern ***
        => The command pattern, we can decouple objects that execute a 
        certain task from the object that calls the method.
        => Decouple methods that execute tasks by sending commands to a commander.
        => It gives us more control if we are dealing with commands that 
        have a certain lifespan, or commands that should be queued and
        executed at specific times.
*/
// create a class through which users can place, track, and cancel orders.
class OrderManager {
    constructor() {
        this.orders = [];
    }

    placeOrder(order, id) {
        this.orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id) {
        return `Your order ${id} will arrive in 20 minutes`;
    }

    cancelOrder(id) {
        this.orders = this.orders.filter((order) => order.id !== id);
        return `you have canceled your order ${id}`;
    }
}

// make a manager instance
const manager = new OrderManager();
manager.placeOrder("Eggs", "111");
manager.trackOrder("111");
manager.cancelOrder("111");

/*
    => There are downsides to invoking the methods directly on the
     'manager' instance. It could happen that we decide to rename 
     certain methods later on, or the functionality of the methods change.

    => Instead, we want to decouple the methods from the 'manager' object,
    and create separate command functions for each command!.
*/
// lets' implemented command pattern
class OrderManagerWithCommandPatter {
    constructor() {
        this.orders = [];
    }

    execute(command, ...arg) {
        return command.execute(this.orders, ...arg);
    }
}

// create command class
class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

// create a three commands for the order manager
function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    });
}

function TrackOrderCommand(id) {
    return new Command(() => {
        return `Your order ${id} will arrive in 20 minutes`;
    });
}

function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        return `you have canceled your order ${id}`;
    });
}
// make a manager command instance
const managerCommand = new OrderManagerWithCommandPatter();
managerCommand.execute(new PlaceOrderCommand("Eggs", "111"));
managerCommand.execute(new TrackOrderCommand("111"));
managerCommand.execute(new CancelOrderCommand("111"));
