import './Layout.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="layout-body">
            <div className="layout-body__wrapper">
                {/* Le Header est affiché en haut de chaque page */}
                <Header />
                {/* Outlet rend le contenu des sous-routes (définies dans "AppRouter") ici */}
                <Outlet />
            </div>
            {/* Le Footer est affiché en bas de chaque page */}
            <Footer />
        </div>
    )
}

export default Layout