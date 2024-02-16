import React from "react";
import TodoCard from "./TodoCard";
import { useTodo } from "../../context/TodosContext";


function TodoList() {
    const {deleteTodoItem, todoListArray} = useTodo();

    return (
        <div
            className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-start p-2">

            {todoListArray.map((item) => {
                return (
                    <TodoCard key={item.serial}
                        serial={item.serial}
                        title={item.title}
                        description={item.description}
                        additional={item.additional}
                        onDelete={deleteTodoItem} />
                )
            })}
        </div>
    )
}

export default TodoList