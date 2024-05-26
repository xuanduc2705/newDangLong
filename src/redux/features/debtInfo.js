import { createSlice } from '@reduxjs/toolkit'

export const debtSlice = createSlice({
    name: 'debtInfo',
    initialState: null,
    reducers: {
        setDebtInfo: (state, action) => {
            return action.payload
        },
        clearDebtInfo: () => {
            return null
        },
    },
})

export const { setDebtInfo, clearDebtInfo } = debtSlice.actions
export default debtSlice.reducer
