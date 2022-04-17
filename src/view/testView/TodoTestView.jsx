import TodoTestList from "../../component/todoTest/TodoTestList";
import { useDispatch } from 'react-redux'
import {
    addTodo,
    addTodoAsync
} from '../../redux/todoTestSlice'
const TodoTestView = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Todo</h1>
            <TodoTestList />
            <button onClick={() => dispatch(addTodo('test'))}>add</button>
            <button onClick={() => dispatch(addTodoAsync('test2'))}>addAsync</button>
        </div>
    );
};
 
export default TodoTestView;
