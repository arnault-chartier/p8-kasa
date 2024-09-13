import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className="error-main">
            <p className="error-text-404">404</p>
            <p className="error-text-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="error-link-home">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error