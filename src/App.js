import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect } from "react-router-dom"
import { afterLogin } from "./state/user"
import { getSelectedMovie } from './state/selectedMovie'

import './App.css'
import 'bulma/css/bulma.min.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Me from './components/Me'
import NotFound from './components/NotFound'
import Movies from "./components/Movies"
import SelectedMovie from "./components/SelectedMovie"
import Favorites from "./components/Favorites"


const App = () => {
    const dispatch = useDispatch()
    const selectedMovie = useSelector(state => state.selectedMovie)

    useEffect(() => {
        dispatch(afterLogin())
        dispatch(getSelectedMovie(localStorage.getItem("imdbID")))
    }, [])

    return (
        <div>
            <Navbar />
            <div className="section">
                <div className="container has-text-centered">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/me">
                            <Me />
                        </Route>
                        <Route path="/movies/:movie">
                            <Movies />
                        </Route>
                        <Route path={`/movie/${selectedMovie.Title}`}>
                            <SelectedMovie />
                        </Route>
                        <Route path="/favorites">
                            <Favorites />
                        </Route>
                        <Route path="/notfound">
                            <NotFound />
                        </Route>
                        <Route path="*">
                        <Redirect to="/notfound" />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App