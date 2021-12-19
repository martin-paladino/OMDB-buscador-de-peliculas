import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const setFavorites = createAction("SET_FAVORITES")

export const getFavorites = createAsyncThunk("GET_FAVORITES", (_, thunkAPI) => {
    const { user } = thunkAPI.getState()
    return axios.get(`/api/favorites/${user.id}`)
    .then(res => res.data)
    .catch(err => console.log({ err }))
})

export const addToFavorites = createAsyncThunk("ADD_TO_FAVORITES", (movieID, thunkAPI) => {
    const { user } = thunkAPI.getState()
    return axios.post(`/api/favorites/add/${movieID}/${user.id}`)
    .then(res => res.data)
    .catch(err => console.log({ err }))
})

const favoritesReducer = createReducer([], {
    [setFavorites]: (state, action) => action.payload,
    [getFavorites.fulfilled]: (state, action) => action.payload,
    [addToFavorites.fulfilled]: (state, action) => state
})

export default favoritesReducer