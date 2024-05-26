import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'cardInfo',
    initialState: null,
    reducers: {
        setCardInfo: (state, action) => {
            return action.payload
        },
        clearCardInfo: () => {
            return null
        },
    },
})

export const { setCardInfo, clearCardInfo } = cardSlice.actions
export default cardSlice.reducer
