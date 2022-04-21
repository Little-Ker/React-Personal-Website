import { configureStore } from '@reduxjs/toolkit'
import todoTestReducer from './redux/todoTestSlice'
import travelReducer from './redux/travelSlice'

export const store = configureStore({
  reducer: {
    todoTest: todoTestReducer,
    travelDate: travelReducer
  },
})