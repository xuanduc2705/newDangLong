import { createSlice } from '@reduxjs/toolkit'

const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        severity: null,
        summary: null,
        detail: null,
        life: 3000,
    },
    reducers: {
        setToast: (state, action) => {
            state.severity = action.payload.severity
            state.summary = action.payload.summary
            state.detail = action.payload.detail
            state.life = action.payload.life
        },
        hideToast: (state) => {
            state.severity = null
            state.summary = null
            state.detail = null
        },
    },
})

export const { setToast, hideToast } = toastSlice.actions
export default toastSlice.reducer
