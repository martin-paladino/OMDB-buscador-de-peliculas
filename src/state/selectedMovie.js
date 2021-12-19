import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const setSelectedMovie = createAction("SET_SELECTED_MOVIE")

export const getSelectedMovie = createAsyncThunk("GET_SELECTED_MOVIE", (movieID) => {
    return axios.get(`/api/movies/get/${movieID}`)
      .then(res => res.data)
      .catch(err => console.log({ err }))
})

const selectedMovieReducer = createReducer({}, {
    [setSelectedMovie]: (state, action) => action.payload,
    [getSelectedMovie.fulfilled]: (state, action) => action.payload
})

export default selectedMovieReducer