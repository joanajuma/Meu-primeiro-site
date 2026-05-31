import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Support from './components/Support'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Home />
        <About />
        <Products />
        <Testimonials />
        <Gallery />
        <Support />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>  )
}

export default App