import { createSlice } from '@reduxjs/toolkit'

export const controlSlice = createSlice({
    name: "nav",
    initialState: {
        clickBool: false,
    },
    reducers: {
        initClickBool: (state) => {
            state.clickBool = false
        },
        changeClickBool: (state, action) => {
            state.clickBool = action.payload
        }
    },
})

export const { initClickBool, changeClickBool } = controlSlice.actions
export default controlSlice.reducer