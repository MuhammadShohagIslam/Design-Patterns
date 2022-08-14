import React, { Component } from "react";
import PresentationLayer from "./PresentationLayer";

/*
    *** Container Components ***
        => container components are responsible for the state and data of the application.
        => Main work is to pass data to the presentation components, which they contain.
        => They do not render anything themselves, they usally do not contain any styling.
        => We can do all application logic here like fetch API.

*/
class ContainerComponent extends Component {
    constructor() {
        super();
        this.state = {
            dog: [],
        };
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breed/labrador/images/random/6")
            .then((res) => res.json())
            .then((data) => this.setState({ dog: data }))
            .catch((error) => {
                console.log("Something Wrong!");
            });
    }

    render() {
        return <PresentationLayer dogImages={this.state.dog} />;
    }
}

export default ContainerComponent;
