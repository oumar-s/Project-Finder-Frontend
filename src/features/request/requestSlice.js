import { createSlice } from "@reduxjs/toolkit";

export const RequestSlice = createSlice({
    name: 'requests',
    initialState:{
        requests: []
    },
    reducers: {
        requestAdded: (state, action) => {
            return [...state, action.payload];
        }
    }
})


export const {requestAdded} = RequestSlice.actions;
export default RequestSlice.reducer;