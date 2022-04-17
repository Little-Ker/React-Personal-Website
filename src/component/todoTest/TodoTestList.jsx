import { useSelector, useDispatch } from "react-redux";
import {React, useEffect} from 'react'
import {fetchTitleData, selectAllPosts} from '../../redux/todoTestSlice'

const TodoTestList = () => {
    const dispatch = useDispatch()
    const titleDate = useSelector(selectAllPosts)
    const postStatus = useSelector(state => state.todoTest.status) // <-- 拿取資料
    console.log('titleDate',titleDate)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchTitleData())
        }
    }, [postStatus, dispatch])

    if (titleDate.length == 0) {
        return null;
    } else {
        return (
            <ul>
            {titleDate.titleData.map((val, index) => (
                <li key={index}>{val.title}</li>
            ))}
            </ul>
        );
    }
};
 
export default TodoTestList;
