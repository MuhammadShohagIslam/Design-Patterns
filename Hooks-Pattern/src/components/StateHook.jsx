/*

    *** Class Component ***

*/
// import React, { Component } from "react";

// export default class StateHook extends Component {
//     constructor() {
//         super();
//         this.state = {
//             input: "",
//         };
//         this.handleInput = this.handleInput.bind(this);
//     }

//     handleInput(e) {
//         this.setState({ input: e.target.value });
//     }
//     render() {
//         return (
//             <div>
//                 <input
//                     type="text"
//                     value={this.state.input}
//                     onChange={this.handleInput}
//                 />
//             </div>
//         );
//     }
// }

/*
    *** Code Refactor use of Functional Component ***

*/

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function StateHook() {
    /* 
        useState() => React provides a hook that manages state within a 
            functional component, called useState();

        Below useState explanation:
            1. the useState() method expects an argument: this is the initial value of the state, an empty string in this case.
            2. We can destructure two values from the useState method:
                => The current value of the state.
                => The method with which we can update the state.
    
    */
    const [input, setInput] = useState("");

    /*
        *** Effect Hook ***
            => With the useEffect hook, we can "hook into" a components 
            lifecycle. The useEffect hook effectively combines the 
            componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.

        ==============================================
            componentDidMount(){...}
            useEffect(() => {...}, [dependency array])
        ===============================================
            componentWillUnmount(){...}
            useEffecct(() => { return => {...}}, [])
        ===============================================
            componentDidUpdate(){...}
            useEffect(()=> {...})
        ===============================================

        Dependency Array: The dependency array is the second argument that
        the useEffect hook receives.

    */
    useEffect(() => {
        console.log(`The user typed ${input}`);
    }, [input]);

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}
