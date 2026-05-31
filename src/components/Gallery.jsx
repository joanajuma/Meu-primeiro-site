import '../styles/Gallery.css'

export default function Gallery() {
  const images = [
    { id: 1, category: 'Perfumes', emoji: '🌸' },
    { id: 2, category: 'Cremes', emoji: '💆' },
    { id: 3, category: 'Acessórios', emoji: '✨' },
    { id: 4, category: 'Sandálias', emoji: '👠' },
    { id: 5, category: 'Modelos', emoji: '👑' },
    { id: 6, category: 'Inspiração', emoji: '💄' }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Galeria de Inspiração</h2>
        <p className="section-subtitle">Conheça melhor nossa coleção elegante</p>

        <div className="gallery-grid">
          {images.map(img => (
            <div key={img.id} className="gallery-item">
              <div className="gallery-image-placeholder">
                <span className="gallery-emoji">{img.emoji}</span>
                <p>{img.category}</p>
              </div>
              <p className="gallery-caption">{img.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
