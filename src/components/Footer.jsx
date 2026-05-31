import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Glamour & Elegância</h4>
            <p>Produtos premium para sua beleza e elegância</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#products">Produtos</a></li>
              <li><a href="#support">Atendimento</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                💬 WhatsApp
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                📷 Instagram
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                👥 Facebook
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <p>📞 (85) 98765-4321</p>
            <p>📧 contato@glamour-elegancia.com</p>
            <p>📍 Fortaleza - CE</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Glamour & Elegância. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para sua beleza</p>
        </div>
      </div>
    </footer>
  )
}
