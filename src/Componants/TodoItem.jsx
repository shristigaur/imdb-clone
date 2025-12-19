function TodoItem({todo, onToggle,onDelete}){
    return (
        <>
          <li className={`todo-item ${todo.completed ? "done" : ""}`}>
            <span onClick={()=>onToggle(todo.id)}>
                {todo.text}
            </span>
            <button onClick={()=> onDelete(todo.id)}>x</button>
          </li>
        </>
    );
}

export default TodoItem;