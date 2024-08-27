import './Footer.css'
import FooterLogo from '../../assets/footer-logo.svg'

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt='Logo Kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer