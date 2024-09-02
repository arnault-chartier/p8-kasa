import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
import Property from '../Property/Property'
import Error from '../Error/Error'
import About from '../About/About'
import Layout from '../Layout/Layout'

function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
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