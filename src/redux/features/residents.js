import { createSlice } from '@reduxjs/toolkit'

const residentSlice = createSlice({
    name: 'residents',
    initialState: [],
    reducers: {
        setResidents: (state, action) => {
            return action.payload
        },
        addResident: (state, action) => {
            return [...state, action.payload]
        },
        removeResident: (state, action) => {
            return state.filter((s) => s.id !== action.payload)
        },
    },
})

export const { setResidents, addResident, removeResident } = residentSlice.actions
export default residentSlice.reducer
