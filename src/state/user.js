import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const setUser = createAction("SET_USER")

export const register = createAsyncThunk("REGISTER", ({name, lastName, email, password}) => {
    return axios.post('/api/auth/signup', { name, lastName, email, password })
        .then(res => res.data)
        .catch(err => console.log({ err }))
})

export const loginRequest = createAsyncThunk("LOGIN_REQUEST", ({ email, password }) => {
    return axios.post('/api/auth/login', { email, password })
        .then(res => res.data)
        .catch(err => console.log({ err }))
})

export const afterLogin = createAsyncThunk("AFTER_LOGIN", () => {
    return axios.get("/api/auth/me")
        .then(res => res.data)
        .catch(err => console.log({ err }))
})

export const logoutRequest = createAsyncThunk("LOGOUT_REQUEST", () => {
    return axios.post("/api/auth/logout")
    .then(res => res.data)
    .catch(err => console.log({ err }))
})

const userReducer = createReducer({}, {
    [setUser]: (state, action) => action.payload,
    [afterLogin.fulfilled]: (state, action) => action.payload,
    [loginRequest.fulfilled]: (state, action) => action.payload,
    [register.fulfilled]: (state, action) => action.payload,
    [logoutRequest.fulfilled]: (state, action) => action.payload
})

export default userReducer