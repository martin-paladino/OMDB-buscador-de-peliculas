import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logoutRequest, setUser } from '../state/user'
import { searchMovies, setMovies } from '../state/movies'

const Navbar = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const handleLogout = () => dispatch(logoutRequest()).then(() => history.push("/"))

  const handleMoviesSearch = (e) => {
    if (e.key === 'Enter') {
     dispatch(searchMovies(e.target.value))
        .then(() => {
          history.push(`/movies/${e.target.value}`)
          e.target.value = ""
        })
    }
  }

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {user.id &&
            <Link to="/favorites">
              <button className="navbar-item button is-primary">
                Mis Favoritos
              </button>
            </Link>}
          <div className="navbar-item">
            <input onKeyPress={handleMoviesSearch} className="input" type="search" placeholder="Buscar películas" />
          </div>
        </div>

        <div className="navbar-end">
          {!user.id ? <div className="navbar-item">
            <div className="buttons">
              <Link to="/signup">
                <button className="button is-primary">
                  <strong>Registrarme</strong>
                </button>
              </Link>
              <Link to="/login">
                <button className="button is-light">
                  Acceder
                </button>
              </Link>
            </div>
          </div>
            :
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/me">
                  <button className="button is-primary">
                    <strong>Mi perfil</strong>
                  </button>
                </Link>
                <button className="button is-light" onClick={handleLogout}>
                  Salir
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar