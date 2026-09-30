import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import MusicButton from './components/MusicButton'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
// import Entrance from './pages/Entrance'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar/>
       <Routes>
        {/* <Route path="/" element={<Entrance />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <MusicButton/>
    </>
  )
}

export default App
