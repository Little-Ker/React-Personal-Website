import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchAboutData  = createAsyncThunk(
    'about/fetchTravelData',
    async () => {
      const response = await axios.get('/data/dataList.json')
      return response.data.aboutData
    }
)

export const aboutSlice = createSlice({
    name: "about",
    initialState: {
        aboutFamilyData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchAboutData.fulfilled, (state, action) => {
                state.aboutFamilyData = action.payload.familyData
        })
    }
});

export const { addAsiaCount, initAsiaCount } = aboutSlice.actions
export default aboutSlice.reducer