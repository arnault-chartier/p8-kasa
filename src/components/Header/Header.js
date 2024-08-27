import './Header.css'
import { Link } from 'react-router-dom'
import HeaderLogoDesktop from '../../assets/header-logo-desktop.svg'

function Header() {
    return (
        <header>
            <img src={HeaderLogoDesktop} alt='Logo Kasa'></img>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header