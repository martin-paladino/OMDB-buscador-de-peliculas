import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from '../state/favorites'
import MovieCard from './MovieCard'


export const Movies = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    useEffect(() => {
        dispatch(getFavorites())
    }, [])

    if (!movies.length) return (
        <div>
            <h2>Ups! Resultado no encontrado...</h2>
            <p>Probá de nuevo!</p>
        </div>
    )

    return (
            <div className="section">
                <div className="container">
                    <h1>Resultados de la búsqueda:</h1>
                    <div className="columns is-multiline">
                        {movies.map((movie, i) => (
                            <MovieCard
                                key={i}
                                movieData={{ ...movie }} />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Movies