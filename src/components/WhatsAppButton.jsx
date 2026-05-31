export default function WhatsAppButton() {
  const whatsappNumber = '+258843882911'
  const whatsappMessage = 'Olá! Vi seus produtos no site e gostaria de receber mais informações.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Fale conosco no WhatsApp"
    >
      💬
    </a>
  )
}
