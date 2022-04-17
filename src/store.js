import { configureStore } from '@reduxjs/toolkit'
import todoTestReducer from './redux/todoTestSlice'

export const store = configureStore({
  reducer: {
    todoTest: todoTestReducer
  },
})