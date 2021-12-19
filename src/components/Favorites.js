import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from '../state/favorites'
import MovieCard from './MovieCard'

const Favorites = () => {

    const dispatch = useDispatch()
    const deletedMovie = useSelector(state => state.deletedMovie)
    const favorites = useSelector(state => state.favorites)
    const user = useSelector(state => state.user)

    useEffect(() => dispatch(getFavorites()), [deletedMovie, user])

    return (
        <div className="section">
            <div className="container">
                <h1>Mis películas favoritas</h1>
                <div className="columns is-multiline">
                    {favorites?.map((favorite, i) => (
                        <MovieCard
                            key={i}
                            movieData={{ ...favorite }}
                        />))}
                </div>
            </div>
        </div>
    )
}

export default Favorites