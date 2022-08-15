import React from "react";
import Input from "./InputTodo";
import Button from "./CustomeButton";

function InputRow({ addTodo, handleInput, input }) {
    return (
        <form>
            <Input
                value={input}
                onChange={(e) => handleInput(e.target.value)}
            />
            <Button onClick={addTodo} color="primary" variant="outlined">
                Add Item
            </Button>
        </form>
    );
}
export default InputRow;
