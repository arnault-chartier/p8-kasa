import './Header.css'
import { NavLink } from 'react-router-dom'
import HeaderLogoDesktop from '../../assets/header-logo-desktop.svg'

function Header() {
    return (
        <header>
            <img src={HeaderLogoDesktop} alt='Logo Kasa'></img>
            <nav>
                {/* Utilisation de NavLink avec une classe active */}
                {/* Fonction qui permet d'ajouter la classe "active-link" si le lien est actif */}
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : '')}>Accueil</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : '')}>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header