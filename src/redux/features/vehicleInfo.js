import { createSlice } from '@reduxjs/toolkit'

export const vehicleSlice = createSlice({
    name: 'vehicleInfo',
    initialState: null,
    reducers: {
        setVehicleInfo: (state, action) => {
            return action.payload
        },
        clearVehicleInfo: () => {
            return null
        },
    },
})

export const { setVehicleInfo, clearVehicleInfo } = vehicleSlice.actions
export default vehicleSlice.reducer
