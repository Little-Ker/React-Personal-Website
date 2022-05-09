import { useSelector, useDispatch } from "react-redux"
import {React, useEffect} from 'react'
import {fetchTitleData, selectAllPosts} from '../../redux/todoTestSlice'

const TodoTestList = () => {
    const dispatch = useDispatch()
    const titleDate = useSelector(selectAllPosts)
    const postStatus = useSelector(state => state.todoTest.status) // <-- 拿取資料

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchTitleData())
        }
    }, [postStatus, dispatch])

    return (
        <ul>
            {titleDate.map((val, index) => (
                <li key={index}>{val.title}</li>
            ))}
        </ul>
    )
}
 
export default TodoTestList
