import { useSelector } from 'react-redux'

const SelectedMovie = () => {
    const selectedMovie = useSelector(state => state.selectedMovie)
    
    return (
        <div>
            <h1>{selectedMovie.Title}</h1>
            <p>{selectedMovie.Plot}</p>
            <img src={selectedMovie.Poster} alt="imagen de la pelicula seleccionada"></img>
            <p>Año: {selectedMovie.Year}</p>
            <p>Duración: {selectedMovie.Runtime}</p>
            <p>IMDB rating: {selectedMovie.imdbRating}</p>
        </div>
    )
}

export default SelectedMovie
