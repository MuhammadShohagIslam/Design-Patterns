import React from "react";
import useDogImages from "./../hooks/useDogImages";
/*
    *** Presentation Layer ***
      => Presentational components can be pure functions which are responsible for the UI, 
      => A presentation layer component receives its data through props.
      => It's primary function is to simply display the data it receives
       the way we want them to, including styles, withour modifying that data

      => Presentation component are usally stateless
      => they do not contain their own react state, unless they need state for UI purpose.
      => Presentation components recieve their data from container component.

*/
/* Presentation Layer  */
// export default function PresentationLayer({ dogImages }) {
//     return dogImages.map((dogImage, index) => (
//         <img src={dogImage} key={index} alt="Dog" />
//     ));
// }

/* Use of useHook */

export default function PresentationLayer() {
    const dogImages = useDogImages();

    return dogImages.map((dogImage, index) => (
        <img src={dogImage} key={index} alt="Dog" />
    ));
}
