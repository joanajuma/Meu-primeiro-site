import '../styles/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      text: 'Adorei a qualidade dos produtos! Chegou rápido e bem embalado. Recomendo!',
      rating: 5,
      image: '👩'
    },
    {
      id: 2,
      name: 'Ana Costa',
      text: 'O atendimento foi excelente e personalizado. Os produtos são realmente premium!',
      rating: 5,
      image: '👩'
    },
    {
      id: 3,
      name: 'Juliana Santos',
      text: 'Sinto-me muito mais bonita e elegante usando os produtos da Glamour & Elegância.',
      rating: 5,
      image: '👩'
    },
    {
      id: 4,
      name: 'Carolina Oliveira',
      text: 'Cada detalhe é pensado com cuidado. Qualidade impecável em tudo!',
      rating: 5,
      image: '👩'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Depoimentos de Clientes</h2>
        <p className="section-subtitle">Veja o que nossas clientes dizem sobre a gente</p>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <span className="testimonial-avatar">{testimonial.image}</span>
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
