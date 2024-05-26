import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userInfo',
    initialState: null,
    reducers: {
        setUserInfo: (state, action) => {
            return action.payload
        },
        clearUserInfo: () => {
            return null
        },
    },
})

export const { setUserInfo, clearUserInfo } = userSlice.actions
export default userSlice.reducer
