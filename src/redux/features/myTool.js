import { createSlice } from '@reduxjs/toolkit'
export const myToolSlice = createSlice({
    name: 'myTool',
    initialState: {
        myTool: [],
        myMenuTool: [],
        companies: [],
    },
    reducers: {
        setMyTool: (state, action) => {
            state.myTool = action.payload.myTool
            state.myMenuTool = action.payload.myMenuTool
            state.companies = action.payload.companies
        },
        clearMyTool: (state) => {
            state.myTool = []
            state.myMenuTool = []
            state.companies = []
        },
    },
})
export const { setMyTool, clearMyTool } = myToolSlice.actions
export default myToolSlice.reducer
