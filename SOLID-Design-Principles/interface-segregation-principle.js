/*
    *** Interface-Segregation-Principle ***
        => In the field of software engineering, the Interface-Segregation-Principle (ISP) states that no code should be forced to depend on methods it does not use.
        => Through ISP splits interfaces that are very large into
        smaller and more specific ones so that clients will only have to know about methods that are of interest to them.

        => 'Client' should not be 'forced' to depend on methods 'they do
        not use'.
            Clinet => Service, The Client of Interface.
            Forced=> Which one defined method into the interface, where we are forced for implement

            They Do not Use => Which one do not need for client, we do not use
        
            Note: Client should be use this kind of interface, which one need for client or expose another people.

        *** One fat interface need to be split to many smaller and
        relevant interfaces so that clients can know about the 
        interfaces that are relavant to them ***

    Credit by TechTong(Youtube), wikipedia.com

*/

class Document {}

// create machine class
class Machine {
    constructor() {
        if (this.constructor.name === "Machine") {
            throw new Error("Machine is abstract!");
        }
    }
    print(doc) {
        console.log(`Print ${doc} File!`);
    }
    fax(doc) {
        console.log(`Fax ${doc} File!`);
    }
    scan(doc) {
        console.log(`Scan ${doc} File!`);
    }
}

// create MultiFunctionPointer extend Machine Class Method
class MultiFunctionPointer extends Machine {
    print(doc) {
        // get print method from Machine Class
        super.print(doc);
    }
    fax(doc) {
        // get fax method from Machine Class
        super.fax(doc);
    }
    scan(doc) {
        // get scan method from Machine Class
        super.scan(doc);
    }
}

// create custome error class
class NotImplementError extends Error {
    constructor(name) {
        let msg = `${name} is not implemented!`;
        super(msg);
        // maintain proper stack trace
        // specific to extending the error class
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementError);
        }
    }
}

// Client need OldFashionPrinter, so create OldFashionPrinter class
class OldFashionPrinter extends Machine {
    print(doc) {
        super.print(doc); // it is ok.
    }
    // ommitting this is the same as no-op impl
    // it is work for old fashion printer
    fax(doc) {
        super.fax(doc);
    }
    /*
        Above one principle violate like 'Least Surprise'
            => What this principle basically states is that when
            people use your API, they should not be surprised.
            They should not be seeing some magic behaviour or lack of behaviour. 
            We do not want them surprise, we want them to get predictable results so that they are happy 
            if they are gretting some weired data.
            => above code we are going to throw error, if we do not want to broken least surprice principles
    */
    // we are going to throw error, if we do not want to broken least surprice principles
    scan(doc) {
        // throw new Error("Not Implemented!");
        throw new NotImplementError("OldFashionPrinter.scan");
    }
}

/*
    *** Solution Above Problem ***
        Problem:
            => the reason why it is user is beacuse by defining this 
            interface to be too full of stuff we do not need, 
            => We are forcing the clients to either leave methods blank
            or throw errors out of those methods And neither approach 
            is a particulary good approach.

        Solution: 
        *** That is why the 'interface aggregation principle' comes in.
            => it means we have to segregate or split up interfaces into
            different parts so that people do not implement more than 
            what they need
*/

// split up interface
class Printer {
    constructor() {
        if (this.constructor.name === "Printer") {
            throw new Error("Printer is Abstract!");
        }
    }
    // this Printer class work as a printer
    print() {}
}

class Scaner {
    constructor() {
        if (this.constructor.name === "Scaner") {
            throw new Error("Scaner is Abstract!");
        }
    }
    // this Scaner class work as a scan doc
    scan() {}
}

/*
    Above class we can extend any class if we want to use or need
*/

/*
    Problem is that this only works for single inheritance 
    what if for PhotoCopies, we have to use multiple inheritance for javascript
*/
// we can not do multiple inheritance
// class PhotoCopies extends Printer, Scaner{
//
//
// }
// we have to do this way
class PhotoCopies {
    print() {}
    scan() {}
}
// another solution
const aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor(...arg) {
            super(...arg);
            mixins.forEach((mixin) => {
                copyProps(this, new mixin());
            });
        }
    }
    // this function copies all properties and symbols, filtering out some special ones.
    let copyProps = (target, source) => {
        Object.hasOwnPropertyNames(source)
            .concat(Object.hasOwnPropertySymbols(source))
            .forEach((prop) => {
                if (
                    !prop.match(
                        /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
                    )
                ) {
                    Object.defineProperty(
                        target,
                        prop,
                        bject.getOwnPropertyDescriptor(source, prop)
                    );
                }
            });
    };
    // outside constructor() to allow aggregation (A,B,C).staticFunction() to be called etc.
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

/* 
    we can do right now multiple inheritance, but it do not get any 
    benefits from it, we cetainly will not be able to generate the methods
    by using whatever ID we are using. 
*/
class PhotoCopies extends aggregation(Printer, Scaner) {
    print() {
        // IDP will not work
    }
    scan() {
        //
    }
}

// we do not allow this
// let m = new Machine();

let printer = new OldFashionPrinter();
printer.fax(); // nothing happens
// printer.scan()
