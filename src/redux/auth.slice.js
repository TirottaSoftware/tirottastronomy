import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { auth: null },
    reducers: {
        signIn: (state, action) => {

            state.auth = action.payload
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