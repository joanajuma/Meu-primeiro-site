# 📸 GUIA - ADICIONAR IMAGENS REAIS

## 🎯 PASSO A PASSO

### Passo 1: Criar Estrutura de Pastas

Crie a pasta `src/assets/images/` com subpastas:

```
src/
└── assets/
    └── images/
        ├── perfumes/
        │   ├── perfume1.jpg
        │   ├── perfume2.jpg
        │   └── perfume3.jpg
        ├── cremes/
        │   ├── creme1.jpg
        │   ├── creme2.jpg
        │   ├── creme3.jpg
        │   └── creme4.jpg
        ├── acessorios/
        │   ├── brinco1.jpg
        │   ├── pulseira1.jpg
        │   ├── relogio1.jpg
        │   ├── colar1.jpg
        │   ├── bolsa1.jpg
        │   └── anel1.jpg
        ├── calcados/
        │   ├── sandalia1.jpg
        │   ├── chinelo1.jpg
        │   ├── sapatilha1.jpg
        │   └── sandalia2.jpg
        └── modelos/
            ├── modelo1.jpg
            ├── modelo2.jpg
            ├── loja.jpg
            └── hero.jpg
```

---

### Passo 2: Adicionar Imagens em Products.jsx

**Arquivo:** `src/components/Products.jsx`

**No topo do arquivo, adicione os imports:**

```jsx
// Imagens de perfumes
import perfume1 from '../assets/images/perfumes/perfume1.jpg'
import perfume2 from '../assets/images/perfumes/perfume2.jpg'
import perfume3 from '../assets/images/perfumes/perfume3.jpg'

// Imagens de cremes
import creme1 from '../assets/images/cremes/creme1.jpg'
import creme2 from '../assets/images/cremes/creme2.jpg'
import creme3 from '../assets/images/cremes/creme3.jpg'
import creme4 from '../assets/images/cremes/creme4.jpg'

// Imagens de acessórios
import brinco1 from '../assets/images/acessorios/brinco1.jpg'
import pulseira1 from '../assets/images/acessorios/pulseira1.jpg'
import relogio1 from '../assets/images/acessorios/relogio1.jpg'
import colar1 from '../assets/images/acessorios/colar1.jpg'
import bolsa1 from '../assets/images/acessorios/bolsa1.jpg'
import anel1 from '../assets/images/acessorios/anel1.jpg'

// Imagens de calçados
import sandalia1 from '../assets/images/calcados/sandalia1.jpg'
import chinelo1 from '../assets/images/calcados/chinelo1.jpg'
import sapatilha1 from '../assets/images/calcados/sapatilha1.jpg'
import sandalia2 from '../assets/images/calcados/sandalia2.jpg'
```

**Depois, na estrutura de produtos, adicione a propriedade `image`:**

```jsx
const products = {
  perfumes: [
    {
      id: 1,
      image: perfume1,  // ← ADICIONE ISTO
      name: 'Perfume Floral Elegante',
      price: 'R$ 89,90',
      description: 'Fragrância luxuosa com notas florais',
      benefits: 'Duração: 8 horas | Fixação excelente'
    },
    {
      id: 2,
      image: perfume2,  // ← ADICIONE ISTO
      name: 'Aroma Sensual Noturno',
      price: 'R$ 99,90',
      description: 'Aroma envolvente e sedutor',
      benefits: 'Notas quentes | Ideal para noites especiais'
    },
    // ... adicione para os outros
  ]
  // ... resto
}
```

**No JSX, mude o placeholder pela imagem real:**

Procure por:
```jsx
<div className="product-image">
  <div className="image-placeholder">
    <div className="placeholder-content">
      <span>Produto</span>
    </div>
  </div>
</div>
```

Substitua por:
```jsx
<div className="product-image">
  <img src={product.image} alt={product.name} />
</div>
```

**Adicione CSS para as imagens:**

Abra `src/styles/Products.css` e adicione:
```css
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

---

### Passo 3: Adicionar Imagem na Home

**Arquivo:** `src/components/Home.jsx`

**No topo:**
```jsx
import heroImage from '../assets/images/modelos/hero.jpg'
```

**Procure por:**
```jsx
<div className="hero-image">
  <div className="image-placeholder">
    <div className="placeholder-content">
      <span>Foto da Modelo</span>
      <p>Elegância & Beleza</p>
    </div>
  </div>
</div>
```

**Substitua por:**
```jsx
<div className="hero-image">
  <img src={heroImage} alt="Modelo Elegante" style={{width: '100%', borderRadius: '20px'}} />
</div>
```

---

### Passo 4: Adicionar Imagem em About

**Arquivo:** `src/components/About.jsx`

**No topo:**
```jsx
import lojaImage from '../assets/images/modelos/loja.jpg'
```

**Procure por:**
```jsx
<div className="image-placeholder">
  <div className="placeholder-content">
    <span>Foto da Loja</span>
    <p>Nosso Espaço</p>
  </div>
</div>
```

**Substitua por:**
```jsx
<img src={lojaImage} alt="Loja Glamour & Elegância" style={{width: '100%', borderRadius: '20px'}} />
```

---

### Passo 5: Adicionar Estilos para Imagens

**Arquivo:** `src/App.css`

Adicione ao final:
```css
/* Estilos para imagens */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.product-image img,
.about-image img,
.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}
```

---

## 📸 DICAS PARA FOTOS

### Tamanho Recomendado:
- **Produtos:** 1200x1200px (quadrado)
- **Modelos:** 1200x800px (retrato)
- **Banner:** 1600x600px (paisagem)

### Ferramentas Online Gratuitas:
1. **Comprimir:** https://tinypng.com/
2. **Redimensionar:** https://pixlr.com/
3. **Editar:** https://canva.com/

### Formato:
- JPG para fotos (menor tamanho)
- PNG para transparência

---

## ✅ CHECKLIST

- [ ] Criei a pasta `src/assets/images/`
- [ ] Adicionei subpastas (perfumes, cremes, etc)
- [ ] Copiei minhas fotos para as pastas
- [ ] Importei as imagens em Products.jsx
- [ ] Importei as imagens em Home.jsx
- [ ] Importei as imagens em About.jsx
- [ ] Substitui os placeholders pelas imagens
- [ ] Testei localmente (npm run dev)
- [ ] As imagens aparecem corretamente

---

## 🚀 TESTAR

```bash
npm run dev
# http://localhost:5173/
```

As imagens devem aparecer no lugar dos placeholders!

---

## 💡 DICA EXTRA: Galeria com Mais Imagens

Se quiser adicionar mais imagens na Galeria, edite `src/components/Gallery.jsx`:

```jsx
const images = [
  { id: 1, image: require('../assets/images/modelos/modelo1.jpg'), category: 'Perfumes' },
  { id: 2, image: require('../assets/images/modelos/modelo2.jpg'), category: 'Cremes' },
  // ... adicione mais
]
```

---

**Pronto! Seu site com imagens reais está funcionando!** 📸✨
