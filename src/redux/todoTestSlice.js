import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchTitleData  = createAsyncThunk(
    'axios/fetchTitleData',
    async () => {
      const response = await axios.get('/data/dataList.json')
      return response.data.titleData
    }
)

export const todoTestSlice = createSlice({
  name: "axios",
  initialState: {
    titleData: [],
    status: 'idle',
    error: null
  },
  reducers: {
    // addTodo:(state, action) => {
    //     const item = {
    //         id: new Date(),
    //         name: action.payload
    //     }
    //     console.log('item',item);
    //     console.log('state',state);
    //     state.titleData.push(item)
    // }
  },
extraReducers: (builder) => {
    builder
        .addCase(
            fetchTitleData.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(
            fetchTitleData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.titleData = action.payload
        })
        .addCase(
            fetchTitleData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
});

// export const addTodoAsync = todo => dispatch => {
//     console.log('async:', todo);
//     setTimeout(() => {
//       dispatch(addTodo(todo))
//     }, 1000)
// }

// export const { addTodo } = todoTestSlice.actions
export default todoTestSlice.reducer;
export const selectAllPosts = (state) => state.todoTest.titleData
