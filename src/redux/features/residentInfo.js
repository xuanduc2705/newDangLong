import { createSlice } from '@reduxjs/toolkit'

export const residentsSlice = createSlice({
    name: 'residentInfo',
    initialState: null,
    reducers: {
        setResidentInfo: (state, action) => {
            return action.payload
        },
        clearResidentInfo: () => {
            return null
        },
    },
})

export const { setResidentInfo, clearResidentInfo } = residentsSlice.actions
export default residentsSlice.reducer
