import React from "react";

export default function Kelvin({ input = 0 }) {
    return <div className="temp">{input + 273.15}K</div>;
}
