import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { auth: { session: {}, user: {} } },
    reducers: {
        signIn: (state, action) => {
            console.log("Signed in")

            state.auth = action.payload
            console.log(state.auth)
            console.log(action.payload)
        },
        signOut: (state, _) => {
            state.auth = null
        },
    },
});

export const authReducer = authSlice.reducer;

export const {
    signIn,
    signOut
} = authSlice.actions;