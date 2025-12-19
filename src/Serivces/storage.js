export const getTodo=()=>{
    const data=localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
};
export const saveTodo=(todos)=>{
    localStorage.setItem("todos", JSON.stringify(todos));
};