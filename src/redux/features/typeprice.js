import { createSlice } from '@reduxjs/toolkit'

export const typePriceSlice = createSlice({
    name: 'typePrice',
    initialState: null,
    reducers: {
        setTypePrice: (state, action) => {
            return action.payload
        },
        clearTypePrice: () => {
            return null
        },
    },
})

export const { setTypePrice, clearTypePrice } = typePriceSlice.actions
export default typePriceSlice.reducer
