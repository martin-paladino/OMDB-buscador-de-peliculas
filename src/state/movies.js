import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const setMovies = createAction("SET_MOVIES")

export const searchMovies = createAsyncThunk("SEARCH_MOVIES", name => {
    return axios.get(`/api/movies/${name}`)
        .then(res => res.data.Search)
        .then(movies => !movies ? [] : movies)
        .catch(err => console.log({ err }))
})

const moviesReducer = createReducer([], {
    [setMovies]: (state, action) => action.payload,
    [searchMovies.fulfilled]: (state, action) => action.payload
})

export default moviesReducer