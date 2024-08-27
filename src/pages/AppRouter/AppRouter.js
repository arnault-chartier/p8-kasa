import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Property from '../Property/Property'
import Error from '../Error/Error'
import About from '../About/About'
import Layout from '../Layout/Layout'

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout><Home /></Layout>} />
                <Route path="/property/:id" element={<Layout><Property /></Layout>} />
                <Route path='/about' element={<Layout><About /></Layout>} />
                <Route path="*" element={<Layout><Error /></Layout>} />
            </Routes>
        </Router>
    )
}

export default AppRouter