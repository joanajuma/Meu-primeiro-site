import { useState } from 'react'
import '../styles/Products.css'

// ⭐ ADICIONE AQUI SEUS IMPORTS DE IMAGENS
// Descomente quando adicionar as imagens

// Exemplo:
// import perfume1 from '../assets/images/perfumes/perfume1.jpg'
// import perfume2 from '../assets/images/perfumes/perfume2.jpg'
// import creme1 from '../assets/images/cremes/creme1.jpg'
// ... etc

export default function Products() {
  const whatsappNumber = '+258843882911'
  
  const products = {
    perfumes: [
      {
        id: 1,
        image: null, // ← MUDE PARA: perfume1
        name: 'Perfume Floral Elegante',
        price: 'R$ 89,90',
        description: 'Fragrância luxuosa com notas florais',
        benefits: 'Duração: 8 horas | Fixação excelente'
      },
      {
        id: 2,
        image: null, // ← MUDE PARA: perfume2
        name: 'Perfume Oriental Sofisticado',
        price: 'R$ 99,90',
        description: 'Aroma envolvente e sedutor',
        benefits: 'Notas quentes | Uso diurno e noturno'
      },
      {
        id: 3,
        image: null, // ← MUDE PARA: perfume3
        name: 'Perfume Fresco e Delicado',
        price: 'R$ 79,90',
        description: 'Toque leve e refrescante',
        benefits: 'Ideal para qualquer ocasião | Longa duração'
      }
    ],
    creams: [
      {
        id: 4,
        image: null, // ← MUDE PARA: creme1
        name: 'Creme Facial Hidratante',
        price: 'R$ 129,90',
        description: 'Hidratação profunda e nutritiva',
        benefits: 'Pele mais macia | Reduz rugas | Hipoalergênico'
      },
      {
        id: 5,
        image: null, // ← MUDE PARA: creme2
        name: 'Sérum Anti-idade',
        price: 'R$ 159,90',
        description: 'Tecnologia avançada anti-envelhecimento',
        benefits: 'Reduz rugas | Clareador natural | Colágeno potenciado'
      },
      {
        id: 6,
        image: null, // ← MUDE PARA: creme3
        name: 'Máscara Revitalizante',
        price: 'R$ 99,90',
        description: 'Tratamento intensivo para a pele',
        benefits: 'Pele radiante | Energia renovada | Use 2x semana'
      }
    ],
    accessories: [
      {
        id: 7,
        image: null, // ← MUDE PARA: brinco1
        name: 'Brincos Dourados Elegantes',
        price: 'R$ 59,90',
        description: 'Brincos de gota em ouro 18k',
        benefits: 'Hipoalergênico | Elegância garantida | Diversos estilos'
      },
      {
        id: 8,
        image: null, // ← MUDE PARA: pulseira1
        name: 'Pulseira Semijoia',
        price: 'R$ 89,90',
        description: 'Pulseira com cristais Swarovski',
        benefits: 'Brilho radiante | Ajustável | Acabamento premium'
      },
      {
        id: 9,
        image: null, // ← MUDE PARA: colar1
        name: 'Colar Sofisticado',
        price: 'R$ 79,90',
        description: 'Colar de ouro com pendente elegante',
        benefits: 'Design único | Fechadura segura | Comprimento ajustável'
      },
      {
        id: 10,
        image: null, // ← MUDE PARA: relogio1
        name: 'Relógio Feminino',
        price: 'R$ 199,90',
        description: 'Relógio de pulso estilo minimalista',
        benefits: 'À prova d\'água | Pulseira removível | Vidro resistente'
      },
      {
        id: 11,
        image: null, // ← MUDE PARA: bolsa1
        name: 'Bolsa Carteira Chic',
        price: 'R$ 149,90',
        description: 'Bolsa de couro sintético premium',
        benefits: 'Compartimentos organizados | Alça ajustável | Material duradouro'
      }
    ],
    footwear: [
      {
        id: 12,
        image: null, // ← MUDE PARA: sandalia1
        name: 'Sandália Confortável',
        price: 'R$ 119,90',
        description: 'Sandália de couro com salto moderado',
        benefits: 'Tamanhos 34 a 40 | Palmilha anatômica | Elegância sofisticada'
      },
      {
        id: 13,
        image: null, // ← MUDE PARA: chinelo1
        name: 'Chinelo Luxo',
        price: 'R$ 89,90',
        description: 'Chinelo premium com estampa elegante',
        benefits: 'Conforto incomparável | Antiderrapante | Perfeito em casa'
      },
      {
        id: 14,
        image: null, // ← MUDE PARA: sapatilha1
        name: 'Sapatilha Moda',
        price: 'R$ 129,90',
        description: 'Sapatilha moderna e sofisticada',
        benefits: 'Tamanhos 34 a 40 | Sola flexível | Leve e confortável'
      }
    ]
  }

  const [activeCategory, setActiveCategory] = useState('perfumes')

  const getProducts = () => {
    return products[activeCategory]
  }

  const handleWhatsApp = (productName) => {
    const message = `Olá! Gostaria de pedir o produto: ${productName}`
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(link, '_blank')
  }

  const categories = [
    { key: 'perfumes', label: '🌸 Perfumes' },
    { key: 'creams', label: '💆 Cremes e Cosméticos' },
    { key: 'accessories', label: '✨ Acessórios' },
    { key: 'footwear', label: '👠 Sandálias e Chinelos' }
  ]

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Nossos Produtos</h2>
        <p className="section-subtitle">Coleção selecionada especialmente para você</p>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {getProducts().map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className="image-placeholder">
                    <span>📸 Adicione Foto</span>
                  </div>
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-benefits">{product.benefits}</p>
                <p className="product-price">{product.price}</p>

                <button 
                  className="btn-whatsapp"
                  onClick={() => handleWhatsApp(product.name)}
                >
                  💬 Pedir pelo WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
