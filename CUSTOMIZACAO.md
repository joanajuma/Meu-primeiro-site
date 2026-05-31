# 📋 GUIA DE CUSTOMIZAÇÃO - Glamour & Elegância

## 🎯 PASSO A PASSO PARA PERSONALIZAR O SITE

### ✅ PASSO 1: Configurar Informações Básicas

#### 1.1 Trocar Nome da Loja
**Arquivos a editar:**
- `src/components/Header.jsx` - linha 12
- `src/components/Footer.jsx` - linha 13

```jsx
// Encontre:
<h1>✨ Glamour & Elegância</h1>

// Substitua por:
<h1>✨ Sua Loja Aqui</h1>
```

#### 1.2 Configurar WhatsApp
**Arquivos a editar (trocar em TODOS):**
- `src/components/Home.jsx` - linha 6
- `src/components/Products.jsx` - linha 3  
- `src/components/Support.jsx` - linha 9
- `src/components/WhatsAppButton.jsx` - linha 2

```javascript
// Encontre:
const whatsappNumber = '5585987654321'

// Substitua por (com seu número):
const whatsappNumber = '558599112233' // Incluir +55 + DDD + número
```

#### 1.3 Atualizar Endereço e Horário
**Arquivo:** `src/components/Support.jsx`

Procure por "Horário de Atendimento" e "Endereço":
```jsx
<p>Segunda a Sexta: 9:00 - 18:00</p>  // Mude aqui
<p>Rua da Elegância, 123</p>           // E aqui
```

---

### ✅ PASSO 2: Adicionar Fotos de Produtos

#### 2.1 Criar Estrutura de Pastas
```
src/
└── assets/
    └── images/
        ├── perfumes/
        │   ├── perfume1.jpg
        │   └── perfume2.jpg
        ├── cremes/
        │   ├── creme1.jpg
        │   └── creme2.jpg
        ├── acessorios/
        │   ├── brinco1.jpg
        │   └── pulseira1.jpg
        ├── calcados/
        │   ├── sandalia1.jpg
        │   └── chinelo1.jpg
        └── modelos/
            ├── modelo1.jpg
            └── modelo2.jpg
```

#### 2.2 Importar Fotos nos Componentes

**Exemplo em `src/components/Products.jsx`:**

```jsx
// No topo do arquivo, adicione:
import perfume1 from '../assets/images/perfumes/perfume1.jpg'
import creme1 from '../assets/images/cremes/creme1.jpg'

// Depois, na estrutura de produtos, modifique:
const products = {
  perfumes: [
    {
      id: 1,
      image: perfume1,  // Adicione isto
      name: 'Perfume Floral Elegante',
      // ... resto do objeto
    }
  ]
}

// E no JSX, substitua o placeholder:
<div className="product-image">
  <img src={product.image} alt={product.name} />
</div>
```

#### 2.3 Adicionar Foto no Banner (Home)

**Arquivo:** `src/components/Home.jsx`

```jsx
// No topo:
import heroImage from '../assets/images/modelos/modelo1.jpg'

// No JSX, substitua:
<div className="hero-image">
  <img src={heroImage} alt="Modelo Elegante" className="hero-img" />
</div>
```

---

### ✅ PASSO 3: Atualizar Catálogo de Produtos

**Arquivo:** `src/components/Products.jsx`

```jsx
const products = {
  perfumes: [
    {
      id: 1,
      name: 'Seu Perfume 1',
      price: 'R$ 89,90',
      description: 'Descrição completa do perfume',
      benefits: 'Duração: 8 horas | Fixação excelente'
    },
    {
      id: 2,
      name: 'Seu Perfume 2',
      price: 'R$ 99,90',
      description: 'Outro perfume incrível',
      benefits: 'Notas florais | Uso diurno'
    },
    // Adicione mais perfumes...
  ],
  
  creams: [
    {
      id: 4,
      name: 'Seu Creme Facial',
      price: 'R$ 129,90',
      description: 'Hidratação profunda',
      benefits: 'Pele mais macia | Antirrugas | Hipoalergênico'
    },
    // Adicione mais cremes...
  ],
  
  accessories: [
    {
      id: 7,
      name: 'Brincos Dourados',
      price: 'R$ 59,90',
      description: 'Elegância garantida',
      benefits: 'Hipoalergênico | Ouro 18k | Premium'
    },
    // Adicione mais acessórios...
  ],
  
  footwear: [
    {
      id: 12,
      name: 'Sandália Premium',
      price: 'R$ 119,90',
      description: 'Conforto e elegância',
      benefits: 'Tamanhos 34 a 40 | Palmilha anatômica'
    },
    // Adicione mais calçados...
  ]
}
```

---

### ✅ PASSO 4: Personalizar Depoimentos

**Arquivo:** `src/components/Testimonials.jsx`

```jsx
const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    text: 'Adorei a qualidade! Produto perfeito.',
    rating: 5,
    image: '👩' // Pode usar emojis ou importar imagens
  },
  {
    id: 2,
    name: 'Ana Costa',
    text: 'Recomendo! Atendimento excelente.',
    rating: 5,
    image: '👩'
  },
  // Adicione mais depoimentos...
]
```

---

### ✅ PASSO 5: Customizar Cores

**Arquivo:** `src/App.css`

```css
:root {
  --primary-white: #ffffff;    /* Branco principal */
  --primary-gold: #d4af37;     /* Dourado/Ouro */
  --primary-rose: #f5d5e3;     /* Rosa claro */
  --primary-beige: #e8dcc8;    /* Bege */
  --secondary-dark: #2a1f1f;   /* Texto escuro */
  --secondary-light: #f9f6f3;  /* Fundo claro */
  --accent-gold: #c9a961;      /* Destaque ouro */
}
```

**Paletas sugeridas:**

Opção Rosa Luxo:
```css
--primary-gold: #e75480;
--accent-gold: #d63450;
--primary-rose: #ffc0cb;
```

Opção Bronze:
```css
--primary-gold: #8b4513;
--accent-gold: #a0522d;
--primary-rose: #ffe4e1;
```

---

### ✅ PASSO 6: Adicionar Perguntas Frequentes

**Arquivo:** `src/components/Support.jsx`

```jsx
const faqs = [
  {
    id: 1,
    question: 'Qual é o prazo de entrega?',
    answer: 'Entregamos em até 7 dias úteis.'
  },
  {
    id: 2,
    question: 'Os produtos são originais?',
    answer: 'Sim, 100% certificados e originais.'
  },
  // Adicione mais perguntas...
]
```

---

### ✅ PASSO 7: Personalizar Redes Sociais

**Arquivo:** `src/components/Footer.jsx`

```jsx
<a href="https://www.instagram.com/suaconta" target="_blank">
  📷 Instagram
</a>

<a href="https://www.facebook.com/suapagina" target="_blank">
  👥 Facebook
</a>

<a href="https://www.tiktok.com/@suaconta" target="_blank">
  🎵 TikTok
</a>
```

---

## 🎨 CUSTOMIZAÇÕES AVANÇADAS

### Mudar Fonte da Página

**Arquivo:** `src/index.css`

```css
:root {
  --sans: 'Sua Fonte Aqui', sans-serif;
  --heading: 'Sua Fonte Aqui', serif;
}
```

**Opções populares:**
```css
/* Elegante */
--heading: 'Playfair Display', serif;

/* Moderna */
--sans: 'Inter', sans-serif;

/* Luxuosa */
--heading: 'Cormorant Garamond', serif;
```

### Adicionar Animações de Entrada

**Adicione em qualquer CSS:**

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card {
  animation: slideInUp 0.6s ease-out;
}
```

### Modificar Efeitos de Hover

```css
.product-card:hover {
  transform: translateY(-15px) scale(1.05); /* Mude aqui */
  box-shadow: var(--shadow-hover);
}
```

---

## 🚀 DICAS IMPORTANTES

1. **Sempre teste no celular** - Use a ferramenta F12 do navegador
2. **Comprima as imagens** - Use TinyPNG para reduzir tamanho
3. **Use fotos de qualidade** - Mínimo 1200x800 pixels
4. **Adicione alt text** - Importante para SEO
5. **Teste todos os links** - Especialmente os de WhatsApp

---

## 📱 TESTAR RESPONSIVIDADE

Abra o DevTools (F12) e clique em "Dispositivo" para testar em:
- iPhone SE (375px)
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1920px+)

---

## ✅ CHECKLIST FINAL

Antes de lançar seu site, verifique:

- [ ] Nome da loja atualizado
- [ ] Número do WhatsApp correto
- [ ] Todas as fotos de produtos adicionadas
- [ ] Produtos com preços corretos
- [ ] Depoimentos atualizados
- [ ] Endereço e horário corretos
- [ ] Links de redes sociais funcionando
- [ ] Testado em mobile
- [ ] Testado em desktop
- [ ] Links de WhatsApp funcionando
- [ ] Mensagens pré-configuradas fazem sentido
- [ ] Cores personalizadas conforme marca
- [ ] Nenhum erro no console (F12)

---

## 🆘 SUPORTE

Se tiver problemas:

1. Verifique o console do navegador (F12)
2. Procure pela mensagem de erro
3. Revise se não faltou fechar chaves/parênteses
4. Recarregue a página (Ctrl+R ou Cmd+R)
5. Limpe o cache (Ctrl+Shift+Delete)

---

## 📞 PRONTO PARA LANÇAR?

Quando estiver tudo configurado:

```bash
# Criar build otimizado
npm run build

# A pasta 'dist/' terá os arquivos prontos para hospedar
```

**Plataformas recomendadas para hospedar:**
- Vercel (gratuito)
- Netlify (gratuito)
- GitHub Pages (gratuito)
- Hostinger (pago - recomendado)

---

**Sucesso! 🌟 Seu site está pronto para conquistar clientes!**
