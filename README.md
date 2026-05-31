
git add .
git commit -m "atualizacao de numero" 
git push




# ✨ Glamour & Elegância - Site de Venda de Produtos de Beleza

Um site profissional, moderno, elegante e totalmente responsivo para venda de perfumes, cremes, cosméticos, acessórios femininos, sandálias, chinelos e artigos de beleza.

## 🚀 Características

- ✅ **Design Luxuoso**: Paleta de cores premium (Branco, Dourado, Rosa claro, Bege)
- ✅ **Totalmente Responsivo**: Perfeito em desktop, tablet e mobile
- ✅ **Animações Suaves**: Efeitos elegantes em hover e scroll
- ✅ **Integração WhatsApp**: Botão flutuante e links de contato
- ✅ **Múltiplas Seções**: Home, Sobre, Produtos, Depoimentos, Galeria, Atendimento
- ✅ **Catálogo Dinâmico**: 4 categorias de produtos (Perfumes, Cremes, Acessórios, Calçados)
- ✅ **Perguntas Frequentes**: Seção interativa de FAQ
- ✅ **Formulário de Contato**: Envio direto para WhatsApp

## 🛠️ Tecnologias

- React 19
- Vite 8
- CSS Modular
- Responsive Design

## 📦 Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Rodar servidor de desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:5173/
```

## 📝 Como Customizar

### 1. **Mudar o Nome da Loja**

Edite os arquivos:
- `src/components/Header.jsx` (linha 12)
- `src/components/Footer.jsx` (linha 13)

```jsx
// De:
<h1>✨ Glamour & Elegância</h1>

// Para:
<h1>✨ Seu Nome da Loja</h1>
```

### 2. **Configurar Número do WhatsApp**

Edite em todos os componentes que usam WhatsApp:
- `src/components/Home.jsx` (linha 6)
- `src/components/Products.jsx` (linha 3)
- `src/components/Support.jsx` (linha 9)
- `src/components/WhatsAppButton.jsx` (linha 2)

```javascript
// De:
const whatsappNumber = '5585987654321'

// Para:
const whatsappNumber = 'SEU_NUMERO' // Ex: '558599887766'
```

### 3. **Adicionar Suas Fotos**

Crie uma pasta `src/assets/images/` e adicione suas fotos:

```
src/
├── assets/
│   ├── images/
│   │   ├── perfume1.jpg
│   │   ├── cream1.jpg
│   │   ├── model1.jpg
│   │   └── ...
```

Depois importe nos componentes:

```jsx
import perfumeImg from '../assets/images/perfume1.jpg'

// No JSX:
<img src={perfumeImg} alt="Perfume" />
```

### 4. **Atualizar Produtos**

Edite `src/components/Products.jsx`:

```jsx
const products = {
  perfumes: [
    {
      id: 1,
      name: 'Seu Perfume',
      price: 'R$ 99,90',
      description: 'Descrição do perfume',
      benefits: 'Benefícios do produto'
    },
    // Adicione mais produtos...
  ],
  // Outras categorias...
}
```

### 5. **Personalizar Depoimentos**

Edite `src/components/Testimonials.jsx`:

```jsx
const testimonials = [
  {
    id: 1,
    name: 'Nome da Cliente',
    text: 'Depoimento aqui...',
    rating: 5,
    image: '👩'
  },
  // Adicione mais depoimentos...
]
```

### 6. **Configurar Informações de Contato**

Edite `src/components/Support.jsx`:

```jsx
// Horário de atendimento (linhas 28-31)
// Endereço (linhas 33-36)
// Formulário de contato (linhas 66-75)
```

### 7. **Mudar Paleta de Cores**

Edite `src/App.css`:

```css
:root {
  --primary-white: #ffffff;      /* Fundo principal */
  --primary-gold: #d4af37;       /* Cor destaque */
  --primary-rose: #f5d5e3;       /* Rosa claro */
  --primary-beige: #e8dcc8;      /* Bege */
  --secondary-dark: #2a1f1f;     /* Texto escuro */
  /* ... outras cores */
}
```

## 🎨 Estrutura de Componentes

```
src/
├── components/
│   ├── Header.jsx          # Menu superior
│   ├── Home.jsx            # Página inicial com banner
│   ├── About.jsx           # Sobre a loja
│   ├── Products.jsx        # Catálogo de produtos
│   ├── Testimonials.jsx    # Depoimentos de clientes
│   ├── Gallery.jsx         # Galeria de inspiração
│   ├── Support.jsx         # Atendimento ao cliente
│   ├── Footer.jsx          # Rodapé
│   └── WhatsAppButton.jsx  # Botão flutuante
├── styles/
│   ├── Header.css
│   ├── Home.css
│   ├── About.css
│   ├── Products.css
│   ├── Testimonials.css
│   ├── Gallery.css
│   ├── Support.css
│   └── Footer.css
├── App.jsx                 # Componente raiz
├── App.css                 # Estilos globais
└── index.css              # Configurações CSS
```

## 📱 Responsividade

O site é otimizado para:
- 📱 Mobile (até 480px)
- 📱 Tablet (481px - 768px)
- 💻 Desktop (769px+)
- 🖥️ Ultra-wide (1920px+)

## 🔗 Integração WhatsApp

Todos os botões de WhatsApp abrem uma conversa com uma mensagem pré-configurada:

```
"Olá! Vi seus produtos no site e gostaria de receber mais informações."
```

Customize a mensagem editando a variável `whatsappMessage` em cada componente.

## 🚀 Build para Produção

```bash
npm run build
# Cria pasta 'dist/' com arquivos otimizados
```

## 📊 SEO Básico

Para melhor SEO, adicione no `index.html`:

```html
<meta name="description" content="Glamour & Elegância - Produtos Premium de Beleza">
<meta name="keywords" content="perfumes, cremes, cosméticos, acessórios, beleza">
<meta name="author" content="Glamour & Elegância">
```

## 🎯 Próximas Melhorias

- [ ] Adicionar sistema de carrinho (localStorage)
- [ ] Implementar busca de produtos
- [ ] Adicionar filtros por preço
- [ ] Integrar com API de pagamento (Stripe, Mercado Pago)
- [ ] Adicionar sistema de cupons
- [ ] Implementar newsletter
- [ ] Adicionar review de produtos

## 📄 Licença

Desenvolvido com ❤️ para sua loja de beleza.

---

**Dúvidas?** Consulte a documentação dos componentes ou customize conforme necessário!

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
