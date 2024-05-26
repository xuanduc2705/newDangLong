import { createSlice } from '@reduxjs/toolkit'

const serviceSlice = createSlice({
    name: 'services',
    initialState: [],
    reducers: {
        setServices: (state, action) => {
            return action.payload
        },
        addService: (state, action) => {
            return [...state, action.payload]
        },
        removeService: (state, action) => {
            return state.filter((a) => a.id !== action.payload)
        },
    },
})

export const { setServices, addService, removeService } = serviceSlice.actions
export default serviceSlice.reducer
