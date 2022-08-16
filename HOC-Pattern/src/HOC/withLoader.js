import { useState, useEffect } from "react";

function withLoader(Element, url) {
    return (props) => {
        const [dogs, setDogs] = useState(null);
        // fetching data from passing endpoint url
        useEffect(() => {
            async function fetchDogs() {
                const response = await fetch(url);
                const dogs = await response.json();
                setDogs(dogs);
            }
            fetchDogs();
        }, []);
        // if there is no data fetch, return loading 
        if (!dogs) {
            return <h2>Loading...</h2>;
        }
        // return new component with pass the data from API endpoint to the component that we pass
        return <Element {...props} dogs={dogs} />;
    };
}
export default withLoader;
