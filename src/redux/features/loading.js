import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        ToggleLoading: (state, action) => action.payload,
    },
})

export const { ToggleLoading } = loadingSlice.actions
export default loadingSlice.reducer
