import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers: (state, action) => {
            return action.payload
        },
        addUser: (state, action) => {
            return [...state, action.payload]
        },
        removeUser: (state, action) => {
            return state.filter((user) => user.user_id !== action.payload)
        },
    },
})

export const { setUsers, addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
