import { configureStore } from '@reduxjs/toolkit'
import todoTestReducer from './redux/todoTestSlice'
import travelReducer from './redux/travelSlice'
import aboutReducer from './redux/aboutSlice'
import controlReducer from './redux/controlSlice'

export const store = configureStore({
  reducer: {
    todoTest: todoTestReducer,
    travelDate: travelReducer,
    aboutData :aboutReducer,
    controlData: controlReducer
  },
})