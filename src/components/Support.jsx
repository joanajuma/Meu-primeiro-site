import { useState } from 'react'
import '../styles/Support.css'

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const whatsappNumber = '+258843882911'
  const whatsappMessage = 'Olá! Gostaria de falar com alguém sobre seus produtos.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const faqs = [
    {
      id: 1,
      question: 'Qual é o prazo de entrega?',
      answer: 'Entregamos em até 7 dias úteis após confirmação do pedido. Para regiões mais distantes, o prazo pode ser estendido.'
    },
    {
      id: 2,
      question: 'Os produtos são originais?',
      answer: 'Sim! Todos os nossos produtos são 100% originais e certificados. Garantimos autenticidade em cada compra.'
    },
    {
      id: 3,
      question: 'Posso devolver um produto?',
      answer: 'Temos política de devolução de 30 dias. Se não estiver satisfeito, devolvemos seu dinheiro.'
    },
    {
      id: 4,
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos PIX, transferência bancária e cartão de crédito. Parcelamos em até 3x sem juros.'
    },
    {
      id: 5,
      question: 'Como faço um pedido?',
      answer: 'Envie uma mensagem no WhatsApp com o nome do produto desejado. Nossa equipe o ajudará com todos os detalhes.'
    },
    {
      id: 6,
      question: 'Vocês oferecem atendimento personalizado?',
      answer: 'Sim! Oferecemos consultoria gratuita para ajudar você a escolher os produtos perfeitos.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const messageText = `Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`
    window.open(link, '_blank')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="support" className="support">
      <div className="support-container">
        <h2 className="section-title">Atendimento ao Cliente</h2>
        <p className="section-subtitle">Estamos aqui para ajudá-la</p>

        <div className="support-content">
          <div className="support-info">
            <div className="info-item">
              <h3>⏰ Horário de Atendimento</h3>
              <p>Segunda a Sexta: 9:00 - 18:00</p>
              <p>Sábado: 10:00 - 16:00</p>
              <p>Domingo: Fechado</p>
            </div>

            <div className="info-item">
              <h3>📍 Endereço</h3>
              <p>Rua da Elegância, 123</p>
              <p>Centro - Fortaleza, CE</p>
              <p>CEP: 60000-000</p>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-large">
              💬 Falar no WhatsApp Agora
            </a>
          </div>

          <div className="faqs">
            <h3>❓ Perguntas Frequentes</h3>
            <div className="faq-list">
              {faqs.map(faq => (
                <details key={faq.id} className="faq-item">
                  <summary className="faq-question">{faq.question}</summary>
                  <p className="faq-answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>📧 Formulário de Contato</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
