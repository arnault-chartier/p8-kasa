import './Layout.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="layout-body">
            <div className="layout-body__wrapper">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout