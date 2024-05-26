import { createSlice } from '@reduxjs/toolkit'
const initialState = { apartment_id: null, department_id: null, bill_ids: [] }

export const moreItemSlice = createSlice({
    name: 'moreItem',
    initialState,
    reducers: {
        setMoreItem: (state, action) => {
            state.apartment_id = action.payload.apartment_id
            state.department_id = action.payload.department_id
            state.bill_ids = action.payload.bill_ids
        },
        clearMoreItem: (state) => {
            state.apartment_id = null
            state.department_id = null
            state.bill_ids = []
        },
    },
})

export const { setMoreItem, clearMoreItem } = moreItemSlice.actions
export default moreItemSlice.reducer
