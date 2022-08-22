/*
    *** Dependency Inversion Principle ***
        => 'High-level' modules should not depend on 'low-level' modules.
        Both should depend on abstraction.

            High-Level: dependency which one i am working on.
            Low-level: which one we use on the work time.

                        *** Example ***

                    broken DIP(should not depend on each other)
    STORE(High-Level)    ------------------->  Stripe-API(Low-Level)

                            Abstraction
    STORE(High-Level) ---- Payment Processor  ----->  Stripe-API(Low-Level)

*/

// create a Strore Class which one is High-Level
// it is bad way
class Store{
    constructor(user){
        // this.stripe = new Stripe(user);
        this.user = user
        this.paypal = new PayPal();

    }

    // this way we have to change every connection when we decided to change payment system
    purchaseBike(quantity){
        this.paypal.makePayment(this.user, 200 * quantity * 100);
        // this.stripe.makePayment(200 * quantity * 100)
    }
    // this way we have to change every connection when we decided to change payment system
    purchaseHelmet(quantity){
        this.paypal.makePayment(this.user, 15 * quantity * 100)
        // this.stripe.makePayment(25 * quantity * 100)
    }
}

// create a Stripe class which one low-level
class Stripe{
    constructor(user){
        this.user = user
    }

    makePayment(amountInCent){
        console.log(`${this.user} make payment of ${amountInCent / 100} with Stripe`)
    }
}

// create a PayPal class which one low-level
class PayPal{
    makePayment(user, amountInDollar){
        console.log(`${user} make payment of ${amountInDollar / 100} with PayPal`)
    }
}

const store = new Store("A");
store.purchaseBike(2);
store.purchaseHelmet(3)


/*
    *** Solution Above Code ***
*/
// create Store class with different name, which one Hihg-Level
class StoreWithDIP{
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }
    purchaseBike(quantity){
        this.paymentProcessor.pay(200 * quantity * 100);
    }
    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15 * quantity * 100);
    }
}

// create abstraction(it has the exact same function, same method, the same interface so in our StoreWithDIP we never change of our store)
class PaymentProcessor{
    constructor(user){
        // this.stripe = new Stripe(user)
        this.user = user;
        this.paypal = new PayPalWithModify();
    }
    // for stripe
    // pay(amountInCent){
    //     this.stripe.makePayment(amountInCent)
    // }
    // for paypal
    pay(amountInDollar){
        this.paypal.makePayment(this.user, amountInDollar)
    }
}

class StripeWithModify{
    constructor(user){
        this.user = user
    }

    makePayment(amountInCent){
        console.log(`${this.user} make payment of ${amountInCent / 100} with Stripe`)
    }
}

class PayPalWithModify{
    makePayment(user, amountInDollar){
        console.log(`${user} make payment of ${amountInDollar / 100} with PayPal`)
    }
}

const storeWithDIP = new StoreWithDIP(new PaymentProcessor("A"));
storeWithDIP.purchaseBike(2);
storeWithDIP.purchaseHelmet(3)