import { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { getSelectedMovie } from '../state/selectedMovie'
import { deleteFromFavorites } from '../state/deletedMovie'

import { MdFavoriteBorder } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md'
import { addToFavorites } from '../state/favorites'

const MovieCard = ({ movieData }) => {

  const user = useSelector(state => state.user)
  const favorites = useSelector(state => state.favorites)
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()
  const [isFav, setIsFav] = useState(false)

  const handleMovieClick = () => {
    dispatch(getSelectedMovie(movieData.imdbID))
      .then(({ payload }) => {
        localStorage.setItem("imdbID", payload.imdbID)
        history.push(`/movie/${payload.Title}`)
      })
  }
  const handleFavorite = () => dispatch(addToFavorites(movieData.imdbID)).then(() => setIsFav(true))
  const handleDelete = () => dispatch(deleteFromFavorites(movieData.imdbID)).then(() => setIsFav(false))
  
  return (
    <div className="column is-one-quarter-desktop">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              onClick={handleMovieClick}
              src={movieData.Poster}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <div className="media-content">
                <p className="title is-6">{movieData.Title}</p>
                {location.pathname !== `/favorites` ? (
                  <>
                    {user.id && (isFav || favorites.some(fav => fav.imdbID === movieData.imdbID)) ?
                      <button className="favButtons" onClick={handleDelete}>
                        <MdFavorite />
                      </button> :
                     user.id && <button className="favButtons" onClick={handleFavorite}>
                        <MdFavoriteBorder />
                      </button>
                    }
                  </>
                ) : (
                  <button className="favButtons" onClick={handleDelete}>
                    <MdDeleteForever />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
