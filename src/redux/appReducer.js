import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAdmin: false,
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAdmin = action.payload.isAdmin;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAdmin = false;
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { login, logout, setIsAdmin, setToken, setUser } = appSlice.actions;
export default appSlice.reducer;

// selector
export const selectUser = (state) => state.app.user;
export const selectToken = (state) => state.app.token;
export const selectIsAdmin = (state) => state.app.isAdmin;