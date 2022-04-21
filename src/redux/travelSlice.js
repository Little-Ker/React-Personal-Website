import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchTravelData  = createAsyncThunk(
    'travel/fetchTravelData',
    async () => {
      const response = await axios.get('/data/dataList.json')
      return response.data.travelData
    }
)

export const travelSlice = createSlice({
    name: "travel",
    initialState: {
        travelBannerData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchTravelData.fulfilled, (state, action) => {
                state.travelBannerData = action.payload.banner
        })
    }
});

export default travelSlice.reducer