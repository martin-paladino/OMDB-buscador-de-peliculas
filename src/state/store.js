import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import favoritesReducer from './favorites'
import moviesReducer from './movies'
import selectedMovieReducer from './selectedMovie'
import deletedMovieReducer from './deletedMovie'
import userReducer from './user'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer, //se define el estado a partir de su reducer
        movies: moviesReducer,
        favorites: favoritesReducer,
        selectedMovie: selectedMovieReducer,
        deletedMovie: deletedMovieReducer
    }
})

export default store