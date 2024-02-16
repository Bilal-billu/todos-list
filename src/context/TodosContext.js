import { createContext, useContext } from "react";

export const TodosContext=createContext({
    todoListArray:
    [
        {
            serial: 123,
            title: "abc",
            description: "xyz",
            additional: []
        } 
    ],
    addToDoItem: (title, desc, arr)=>{},
    deleteTodoItem: (serial)=>{}
})

export const useTodo = () => {
    return useContext(TodosContext);
}

export const ProviderTodo = TodosContext.Provider;