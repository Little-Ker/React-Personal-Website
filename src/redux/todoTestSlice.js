import { createSlice } from "@reduxjs/toolkit";
export const todoTestSlice = createSlice({
  name: "todo2",
  initialState: {
    todoList: [
        {id: 1, name: "aaa"},
        {id: 2, name: "bbb"},
    ]
  },
  reducers: {
    addTodo:(state, action) => {
        const item = {
            id: new Date(),
            name: action.payload
        }
        state.todoList.push(item)
    }
  },
});

export const addTodoAsync = todo => dispatch => {
    console.log('async:', todo);
    setTimeout(() => {
      dispatch(addTodo(todo))
    }, 1000)
}  
 
export const { addTodo } = todoTestSlice.actions
export default todoTestSlice.reducer;
