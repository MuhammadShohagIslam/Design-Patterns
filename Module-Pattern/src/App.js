import { React, useState } from "react";
import TodoList from "./components/TodoList";
import InputRow from "./components/InputRow";

/*
    * When building applications with React, we often have to deal with a large amount of components.
    Instead of writing all of these components in one file, we can seperate the components in their own
     files, essentailly creating a module for each component.
*/

function App() {
    const [todoLists, setTodoLists] = useState([])
    const [input, setInput] = useState("");

    const handleInput = (value) => {
        setInput(value);
    }
    const addTodo = () => {
        setTodoLists([...todoLists, input])
        setInput("")
    }
    const removeTodoItem = (todo) => {
        todoLists.splice(todo, 1)
        setTodoLists([...todoLists])
    }

    return (
        <div className="App" align="center">
            <h2>Todo List</h2>
            <InputRow addTodo={addTodo} handleInput={handleInput} input ={input}/>
            <TodoList todoLists={todoLists} removeTodoItem={removeTodoItem}/>
        </div>
    );
}

export default App;
