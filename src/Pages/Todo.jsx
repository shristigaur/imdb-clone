import { useEffect, useState} from "react";
import { getTodo, saveTodo } from "../Serivces/storage";
import TodoList from "../Componants/TodoList";
import FilterBar from "../Componants/FilterBar";

function Todo(){
    const [todos, setTodos]=useState([]);
    const [text, setText]=useState("");
    const [filter, setFilter]=useState("all");
    useEffect(()=>{
        setTodos(getTodo());
    }, []);
    useEffect(()=>{
        saveTodo(todos);
    },[todos]);
    const addTodo = ()=>{
        if (!text.trim()) return;
        setTodos([
            ...todos,
            {id: Date.now(), text, completed: false}
        ]);
        setText("");
    };
    const toggleTodo = (id)=>{
        setTodos(
            todos.map(todo=>
                todo.id===id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
        );
    };
    const deleteTodo = (id)=> {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const filteredTodos = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending" ) return !todo.completed;
        return true;
    });
    return (
        <>
          <div className="todo-page">
            <h2>todo app</h2>
            <div className="todo-input">
                <input
                   value={text}
                   onChange={(e)=>setText(e.target.value)}
                   placeholder="add a task..."
                />
                <button onClick={addTodo}>add</button>
            </div>
            <FilterBar setFilter={setFilter}/>
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>
        </>
    );
}
export default Todo;