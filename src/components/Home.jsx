import '../styles/Home.css'

// ⭐ ADICIONE AQUI A IMAGEM DO BANNER
// import heroImage from '../assets/images/modelos/hero.jpg'

export default function Home() {
  const whatsappNumber = '+258843882911'
  const whatsappMessage = 'Olá! Vi seus produtos no site e gostaria de receber mais informações sobre os produtos de beleza.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  
  // ⭐ COLOQUE A IMAGEM AQUI ou deixe null para placeholder
  const heroImage = null

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h2 className="home-title">Realce sua beleza com produtos selecionados especialmente para você</h2>
          <p className="home-subtitle">Bem-vinda ao mundo da elegância e do luxo</p>
          
          <div className="home-buttons">
            <button className="btn btn-primary">
              ✨ Comprar Agora
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              💬 Falar no WhatsApp
            </a>
          </div>

          <div className="hero-image">
            {heroImage ? (
              <img src={heroImage} alt="Modelo Elegante" style={{width: '100%', borderRadius: '20px'}} />
            ) : (
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span>📸 Foto da Modelo</span>
                  <p>Elegância & Beleza</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="home-features">
          <div className="feature">
            <span className="feature-icon">👑</span>
            <h3>Premium</h3>
            <p>Produtos de alta qualidade</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Entrega Rápida</h3>
            <p>Receba em casa com rapidez</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💝</span>
            <h3>Elegância</h3>
            <p>Design luxuoso e sofisticado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
