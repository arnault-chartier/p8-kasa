import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
import Property from '../Property/Property'
import Error from '../Error/Error'
import About from '../About/About'
import Layout from '../Layout/Layout'

function AppRouter() {
    // Création du router avec les routes et sous-routes
    const router = createBrowserRouter([
        {
            // Route parent
            path: "/",
            element: <Layout />, // "Layout" est le composant parent
            children: [
                // Sous-routes qui s'affichent à l'intérieur du Layout via "Outlet" (composants enfants)
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "/property/:id",
                    element: <Property />,
                },
                {
                    path: "*",
                    element: <Error />,
                },
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter