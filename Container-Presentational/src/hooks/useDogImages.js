import React, { useEffect, useState } from "react";

/*
    The introduction of useHooks made it easy for developer to add 
    statefullness without needing a container component to provide that
    state.
    => Hooks make it easy to sepetate logic and view in a component, just
    like the Container/Presentational pattern.
*/

export default function useDogImages() {
    const [dog, setDog] = useState();

    useEffect(() => {
        fetch("https://dog.ceo/api/breed/labrador/images/random/6")
            .then((res) => res.json())
            .then((data) => setDog(data))
            .catch((error) => {
                console.log("Something Wrong!");
            });
    }, []);

    return dog;
}
