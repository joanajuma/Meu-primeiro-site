import { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>✨ Glamour & Elegância</h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Início</a>
          <a onClick={() => scrollToSection('about')}>Sobre</a>
          <a onClick={() => scrollToSection('products')}>Produtos</a>
          <a onClick={() => scrollToSection('testimonials')}>Depoimentos</a>
          <a onClick={() => scrollToSection('gallery')}>Galeria</a>
          <a onClick={() => scrollToSection('support')}>Atendimento</a>
        </nav>
      </div>
    </header>
  )
}
