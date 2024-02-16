import TodoList from "./TodoList";
import AddTodoItem from "./AddTodoItem";
import About from "./About"
import { useEffect, useState } from "react";
import { ProviderTodo } from "../../context/TodosContext"
import { useMainContent } from "../../context/DisplayContentContext";

function Main() {
    var [todoListArray, setTodoListArray] = useState([])
    var [counter, setCounter] = useState(1);

    const {listAndAdd} = useMainContent();
    const add=listAndAdd.add;
    const list=listAndAdd.list;
    const about=listAndAdd.about;

    function deleteTodoItem(s_no) {
        setTodoListArray(todoListArray.filter((item) => {
            return (item.serial !== s_no)
        }))
    }

    function addToDoItem(todoTitle, todoDescription, objArr) {
        setCounter((prev) => { return (prev + 1) });
        const tempTodo = {
            serial: counter,
            title: todoTitle,
            description: todoDescription,
            additional: objArr
        }
        setTodoListArray([...todoListArray, tempTodo])
    }

    useEffect(() => {
        const tempTodo = JSON.parse(localStorage.getItem("todos"))
        if (tempTodo && tempTodo.length > 0) {
            setTodoListArray(tempTodo);
            setCounter(tempTodo[tempTodo.length - 1].serial + 1);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoListArray))
    })
    
    function divDisplay(){
        if(add&&!list){
            return "30rem";
        }
        if((list&&!add)&&(todoListArray.length<3&&todoListArray.length>0)){
            return "20rem"
        }
        if((!add&&list)&&(todoListArray.length==0)){
            return "22rem"
        }
        return "0rem"
    }

    return (
        <ProviderTodo value={{ todoListArray, addToDoItem, deleteTodoItem }}>
            <main>
                
                {add&&<AddTodoItem />}
                {list?
                todoListArray.length != 0 ?
                    <TodoList />
                    : <h1 style={{height:"30rem"}}>No list to display.</h1>
                :<div></div>}
                {about&&<About />}
                <div style={{height:divDisplay()}}></div>
            </main>
        </ProviderTodo>
    )
}

export default Main;