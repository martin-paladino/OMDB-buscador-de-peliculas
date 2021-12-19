import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const setDeletedMovie = createAction("SET_DELETED_MOVIE")

export const deleteFromFavorites = createAsyncThunk("DELETE_FROM_FAVORITES", (movieID) => {
    return axios.delete(`/api/favorites/${movieID}`)
    .then(res => res.config.url)
    .catch(err => console.log({ err }))
})

const deletedMovieReducer = createReducer("", {
    [setDeletedMovie]: (state, action) => action.payload,
    [deleteFromFavorites.fulfilled]: (state, action) => action.payload
})

export default deletedMovieReducer