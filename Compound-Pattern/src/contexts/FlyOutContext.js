import React, { useState, useContext } from "react";

const FlyOutContext = React.createContext();

// export function FlyOut(props) {
//     const [open, toggle] = useState(false);
//     const providerValue = { open, toggle };
//     return (
//         <FlyOutContext.Provider value={providerValue}>
//             {props.children}
//         </FlyOutContext.Provider>
//     );
// }

export function FlyOut(props) {
    const [open, toggle] = useState(false);
    return (
        <>
            {React.Children.map(props.children, child =>
                React.cloneElement(child, { open, toggle })
            )}
        </>
    );
}

function Toggle() {
    const { open, toggle } = useContext(FlyOutContext);

    return (
        <div onClick={() => toggle(!open)}>
            <h2>Open Hoe</h2>
        </div>
    );
}

function List({ children }) {
    const { open } = useContext(FlyOutContext);
    return open && <ul>{children}</ul>;
}

function Item({ children }) {
    return <li>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
