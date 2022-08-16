import React from "react";
import withLoader from "../HOC/withLoader";
// import withHovering from "./../HOC/withHovering";
import useHover from "./../hooks/useHover";

function DogsImages(props) {
    /*
        => Adding a Hook to the component directly, no longer wrap component, 
        which reducer nesting component tree.
    
    */
    const [hover, hoverRef] = useHover();

    const message = props.dogs.message;
    console.log(hoverRef, hover);
    return (
        <div {...props} ref={hoverRef}>
            {hover && <div id="hover">Hovering!</div>}
            <div id="list">
                {message.map((dog, i) => (
                    <img key={i} src={dog} alt="Dog" />
                ))}
            </div>
        </div>
    );
}

export default withLoader(
    DogsImages,
    "https://dog.ceo/api/breed/labrador/images/random/6"
);
/*
    => Generally speaking, React Hooks do not replace the HOC Pattern.
    => In the most case, Hooks will be sufficient and can help reduce nesting in your tree.
*/
// decompose, inside one HOC pass another HOC.
// export default withHovering(
//     withLoader(DogsImages, "https://dog.ceo/api/breed/labrador/images/random/6")
// );
