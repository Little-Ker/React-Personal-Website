import { useSelector } from "react-redux";
const TodoTestList = () => {
    const todoTest = useSelector((selectTodo) => selectTodo.todoTest); // <-- 拿取資料
    console.log('todoTest',todoTest);
    return (
        <ul>
        {todoTest.todoList.map((i) => (
            <li key={i.id}>{i.name}</li>
        ))}
        </ul>
    );
};
 
export default TodoTestList;
