import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import useInput from "../hooks/useInput"
import { loginRequest } from '../state/user';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri'

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const email = useInput()
    const password = useInput()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginRequest({email: email.value, password: password.value}))
        .then(({payload}) => payload ? history.push("/me") : history.push("/notfound"))
    }

    return (
        <section className="hero is-secondary is-fullheight has-text-left">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form  onSubmit={handleSubmit} action="" className="box">
                  <div className="field">
                    <label  className="label">Email</label>
                    <div className="control has-icons-left">
                      <input 
                      {...email} type="email" placeholder="ingrese_un@email.com" className="input" required/>
                      <span className="icon is-small is-left">
                      <FiMail/>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Contraseña</label>
                    <div className="control has-icons-left">
                      <input {...password} type="password" placeholder="*******" className="input" required/>
                      <span className="icon is-small is-left">
                      <RiLockPasswordLine />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-success">
                      Acceder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Login