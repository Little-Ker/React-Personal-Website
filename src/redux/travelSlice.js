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
        travelAsiaData: [],
        asiaCount: 0,
        travelNingxiaData: [],
        travelSianData: [],
    },
    reducers: {
        initAsiaCount: (state) => {
            state.asiaCount = 0
        },
        addAsiaCount: (state) => {
            const totalItem = 3
            if (state.asiaCount >= totalItem) {
                state.asiaCount = 0
                return
            }
            state.asiaCount += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchTravelData.fulfilled, (state, action) => {
                state.travelBannerData = action.payload.banner
                state.travelAsiaData = action.payload.asia
                state.travelNingxiaData = action.payload.ningxia
                state.travelSianData = action.payload.sian
        })
    }
});

export const { addAsiaCount, initAsiaCount } = travelSlice.actions
export default travelSlice.reducer