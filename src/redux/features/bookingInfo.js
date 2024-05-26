import { createSlice } from '@reduxjs/toolkit'

export const bookingSlice = createSlice({
    name: 'bookingInfo',
    initialState: null,
    reducers: {
        setBookingInfo: (state, action) => {
            return action.payload
        },
        clearBookingInfo: () => {
            return null
        },
    },
})

export const { setBookingInfo, clearBookingInfo } = bookingSlice.actions
export default bookingSlice.reducer
