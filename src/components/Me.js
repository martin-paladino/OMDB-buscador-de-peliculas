import { useSelector } from 'react-redux'

const Me = () => {

    const user = useSelector(state => state.user)

        return (
            <div>
                <h1>Bienvenid@ {user.fullName}!</h1>
                <h2>Buscá tus películas favoritas aquí!</h2>
            </div>
        )
}

export default Me