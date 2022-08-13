const {clickRedButtonForDecrement} = require("./redButton");
const {clickBlueButtonForIncrement} = require("./blueButton");

/*
    * When we invoke the increment method in either redButton.js or blueButton.js,
    the value of the counter property on the Singlecounter instance updates in both files.
    * It does not matter whether we click on the red or blue button.
    * Same value is shared among all instances.
*/

console.log(clickBlueButtonForIncrement());
console.log(clickBlueButtonForIncrement());
console.log(clickBlueButtonForIncrement());
console.log(clickRedButtonForDecrement());