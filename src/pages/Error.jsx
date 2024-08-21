
import '../styles/Error.scss'
import { Link } from "react-router-dom"

function Error() {
    return(
        <>
            <div className="container-error">
                <div className="error-content">
                    <h1>404</h1>
                    <span>Oups! La page que vous demandez n'existe pas.</span>
                    <Link to="/">retourner sur la page d'acceuil</Link>
                </div>
            </div>
        </>
    )
}

export default Error