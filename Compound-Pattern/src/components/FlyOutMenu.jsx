import React from "react";
import { FlyOut } from "../contexts/FlyOutContext";

/*
    => We just created an entire FlyOut component without adding any state in the FlyOutMenu itself!.
    => Compound components manage their own internal state, which they share among the several child components.
    => When importing a compound component, we do not have to explicity import the child components 
    that are avaiable on that component.
*/
export default function FlyOutMenu() {
    return (
        <FlyOut>
            <FlyOut.Toggle />
            <FlyOut.List>
                <FlyOut.Item>Edit</FlyOut.Item>
                <FlyOut.Item>De;ete</FlyOut.Item>
            </FlyOut.List>
        </FlyOut>
    );
}
