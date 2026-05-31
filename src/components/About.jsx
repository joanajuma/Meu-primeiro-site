import '../styles/About.css'

// ⭐ ADICIONE AQUI A IMAGEM DA LOJA
// import lojaImage from '../assets/images/modelos/loja.jpg'

export default function About() {
  // ⭐ COLOQUE A IMAGEM AQUI ou deixe null para placeholder
  const lojaImage = null

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          {lojaImage ? (
            <img src={lojaImage} alt="Loja Glamour & Elegância" style={{width: '100%', borderRadius: '20px'}} />
          ) : (
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>📸 Foto da Loja</span>
                <p>Nosso Espaço</p>
              </div>
            </div>
          )}
        </div>

        <div className="about-content">
          <h2 className="section-title">Sobre a Glamour & Elegância</h2>
          
          <div className="about-text">
            <p>
              A <strong>Glamour & Elegância</strong> é uma loja especializada em produtos de beleza, 
              moda e acessórios femininos. Com anos de experiência, nos comprometemos em oferecer 
              apenas os melhores produtos do mercado.
            </p>

            <p>
              Cada item foi selecionado com cuidado para garantir qualidade, elegância e sofisticação. 
              Acreditamos que você merece se sentir bonita todos os dias.
            </p>

            <p className="highlight">
              "Cada detalhe foi escolhido para destacar sua beleza e elegância. Produtos de qualidade 
              que transformam sua autoestima e valorizam sua imagem."
            </p>
          </div>

          <div className="about-values">
            <div className="value-item">
              <h3>💎 Qualidade</h3>
              <p>Produtos premium selecionados com rigor</p>
            </div>
            <div className="value-item">
              <h3>🤝 Confiança</h3>
              <p>Atendimento personalizado e transparente</p>
            </div>
            <div className="value-item">
              <h3>✨ Elegância</h3>
              <p>Experiência sofisticada do início ao fim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
