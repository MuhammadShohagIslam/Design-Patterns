const singletonCounter = require("./singleton")

const clickBlueButtonForIncrement = () => {
    return singletonCounter.increment();
}

const clickRedButtonForDecrement = () => {
    return singletonCounter.decrement();
}

module.exports = {
    clickBlueButtonForIncrement,
    clickRedButtonForDecrement
}