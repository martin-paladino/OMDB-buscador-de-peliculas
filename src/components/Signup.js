import { useHistory } from "react-router-dom"
import useInput from "../hooks/useInput"
import { useDispatch } from "react-redux";
import { register } from "../state/user"
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri'
import { BsPerson } from 'react-icons/bs'

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const name = useInput()
  const lastName = useInput()
  const email = useInput()
  const password = useInput()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    }))
      .then(() => history.push("/login"))
  }

  return (
    <section className="hero is-secondary is-fullheight has-text-left">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={handleSubmit} action="" className="box">

                <div className="field">
                  <label className="label">Nombre</label>
                  <div className="control has-icons-left">
                    <input
                      {...name} type="text" placeholder="ingrese su nombre" className="input" required />
                    <span className="icon is-small is-left">
                      <BsPerson />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Apellido</label>
                  <div className="control has-icons-left">
                    <input
                      {...lastName} type="text" placeholder="ingrese su apellido" className="input" required />
                    <span className="icon is-small is-left">
                      <BsPerson />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      {...email} type="email" placeholder="ingrese_un@email.com" className="input" required />
                    <span className="icon is-small is-left">
                      <FiMail />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Contraseña</label>
                  <div className="control has-icons-left">
                    <input {...password} type="password" placeholder="ingrese una contraseña" className="input" required />
                    <span className="icon is-small is-left">
                      <RiLockPasswordLine />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <button className="button is-success">
                    Registrarme
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

export default Signup
