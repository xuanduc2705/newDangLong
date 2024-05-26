import { createSlice } from '@reduxjs/toolkit'

const apartmentsSlice = createSlice({
    name: 'apartments',
    initialState: [],
    reducers: {
        setApartments: (state, action) => {
            return action.payload
        },
        addApartment: (state, action) => {
            return [...state, action.payload]
        },
        removeApartment: (state, action) => {
            return state.filter((a) => a.id !== action.payload)
        },
    },
})

export const { setApartments, addApartment, removeApartment } = apartmentsSlice.actions
export default apartmentsSlice.reducer
