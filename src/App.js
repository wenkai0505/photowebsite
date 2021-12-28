import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>


            <Footer />
        </div>
    )
}

export default App