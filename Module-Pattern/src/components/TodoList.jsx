import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "./CustomeButton";

export default function TodoList({ todoLists, removeTodoItem }) {
    return (
        <>
            <List>
                {todoLists.length > 0 ? (
                    todoLists.map((todoList, i) => (
                        <ListItem key={`${todoList}-${i}`}>
                            <ListItemText>{todoList}</ListItemText>
                            <Button
                                color="secondary"
                                onClick={() => removeTodoItem(i)}
                            >
                                Remove
                            </Button>
                        </ListItem>
                    ))
                ) : (
                    <li>There is no Todo list</li>
                )}
            </List>
        </>
    );
}
