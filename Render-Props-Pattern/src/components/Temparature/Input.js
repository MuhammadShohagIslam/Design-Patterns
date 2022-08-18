import React from "react";

export default function Input(props) {
    const { children, input, setInput } = props;
    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Temp in °C"
            />
            {/* {render()} */}
            {children(input)}
        </div>
    );
}
