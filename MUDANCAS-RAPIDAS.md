# 🎯 QUICK START - Principais Mudanças que Você Precisa Fazer

## ⚡ MUDANÇAS RÁPIDAS (Copie e Cola)

### 1. TROCAR NOME DA LOJA (3 lugares)

**Arquivo: src/components/Header.jsx - Linha 12**
```jsx
// Procure por:
<h1>✨ Glamour & Elegância</h1>

// Substitua por:
<h1>✨ SUA LOJA AQUI</h1>
```

**Arquivo: src/components/Footer.jsx - Linha 13**
```jsx
// Procure por:
<h4>Glamour & Elegância</h4>

// Substitua por:
<h4>SUA LOJA AQUI</h4>
```

---

### 2. TROCAR WHATSAPP (4 ARQUIVOS) - IMPORTANTE!

**SEU NÚMERO DEVE SER: 55 + DDD + NÚMERO**
Exemplo: 55 85 98765-4321 → 5585987654321

**Arquivo: src/components/Home.jsx - Linha 6**
```javascript
// Procure por:
const whatsappNumber = '5585987654321'

// Substitua por:
const whatsappNumber = 'SEU_NUMERO_AQUI'
```

**Arquivo: src/components/Products.jsx - Linha 3**
```javascript
// Procure por:
const whatsappNumber = '5585987654321'

// Substitua por:
const whatsappNumber = 'SEU_NUMERO_AQUI'
```

**Arquivo: src/components/Support.jsx - Linha 9**
```javascript
// Procure por:
const whatsappNumber = '5585987654321'

// Substitua por:
const whatsappNumber = 'SEU_NUMERO_AQUI'
```

**Arquivo: src/components/WhatsAppButton.jsx - Linha 2**
```javascript
// Procure por:
const whatsappNumber = '5585987654321'

// Substitua por:
const whatsappNumber = 'SEU_NUMERO_AQUI'
```

---

### 3. ATUALIZAR CONTATO EM Support.jsx

**Arquivo: src/components/Support.jsx - Procure por:**

```jsx
// Horário (linhas ~28-31):
<p>Segunda a Sexta: 9:00 - 18:00</p>
<p>Sábado: 10:00 - 16:00</p>

// Endereço (linhas ~33-36):
<p>Rua da Elegância, 123</p>
<p>Centro - Fortaleza, CE</p>
<p>CEP: 60000-000</p>
```

---

### 4. ADICIONAR SEUS PRODUTOS

**Arquivo: src/components/Products.jsx - Procure por:**

```jsx
const products = {
  perfumes: [
    {
      id: 1,
      name: 'Perfume Floral Elegante',           // ← Mude o nome
      price: 'R$ 89,90',                         // ← Mude o preço
      description: 'Fragrância luxuosa com...',  // ← Mude descrição
      benefits: 'Duração: 8 horas | Fixação...' // ← Mude benefícios
    },
    // Adicione mais produtos aqui
  ],
  creams: [ /* ... */ ],
  accessories: [ /* ... */ ],
  footwear: [ /* ... */ ]
}
```

**Modelo para copiar:**
```jsx
{
  id: SEU_ID,
  name: 'Nome do Produto',
  price: 'R$ XX,XX',
  description: 'Descrição do produto',
  benefits: 'Benefício 1 | Benefício 2 | Benefício 3'
}
```

---

### 5. ADICIONAR DEPOIMENTOS

**Arquivo: src/components/Testimonials.jsx - Procure por:**

```jsx
const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',                    // ← Nome da cliente
    text: 'Adorei a qualidade dos...',     // ← Depoimento
    rating: 5,                              // ← Nota (1-5)
    image: '👩'                             // ← Pode mudar emoji
  },
  // Adicione mais depoimentos
]
```

---

### 6. ATUALIZAR FOOTER

**Arquivo: src/components/Footer.jsx - Procure por:**

```jsx
// Redes sociais (procure por):
<a href="https://www.whatsapp.com" target="_blank">
  // Substitua pela sua conta

<a href="https://www.instagram.com" target="_blank">
  // Substitua pela sua conta

<a href="https://www.facebook.com" target="_blank">
  // Substitua pela sua conta
```

**Seu número de telefone (procure por):**
```jsx
<p>📞 (85) 98765-4321</p>
// Substitua pelo seu número

<p>📧 contato@glamour-elegancia.com</p>
// Substitua pelo seu email
```

---

### 7. ADICIONAR FOTOS

**Passo 1:** Crie a pasta
```
src/assets/images/
```

**Passo 2:** Adicione suas fotos
```
src/assets/images/
├── perfume1.jpg
├── creme1.jpg
├── acessorio1.jpg
├── sandalia1.jpg
└── modelo.jpg
```

**Passo 3:** Importe nos componentes

**Em Products.jsx (no topo):**
```jsx
import perfume1 from '../assets/images/perfume1.jpg'
import creme1 from '../assets/images/creme1.jpg'
// ... etc

// Depois, nos produtos:
{
  id: 1,
  image: perfume1,  // ← Adicione isto
  name: 'Seu Perfume',
  // ...
}
```

**Em Home.jsx (no topo):**
```jsx
import heroImage from '../assets/images/modelo.jpg'

// No JSX:
<img src={heroImage} alt="Modelo Elegante" />
```

---

### 8. PERSONALIZAR CORES (OPCIONAL)

**Arquivo: src/App.css - Procure por `:root {`**

```css
:root {
  --primary-white: #ffffff;    /* Branco */
  --primary-gold: #d4af37;     /* Dourado - MUDE AQUI */
  --primary-rose: #f5d5e3;     /* Rosa - MUDE AQUI */
  --primary-beige: #e8dcc8;    /* Bege - MUDE AQUI */
  --secondary-dark: #2a1f1f;   /* Escuro */
  --secondary-light: #f9f6f3;  /* Claro */
  --accent-gold: #c9a961;      /* Acentos - MUDE AQUI */
}
```

**Cores sugeridas (Rosa):**
```css
--primary-gold: #e75480;
--primary-rose: #ffc0cb;
--accent-gold: #d63450;
```

---

## ✅ CHECKLIST PERSONALIZAÇÃO

- [ ] Nome da loja atualizado (3 lugares)
- [ ] Número do WhatsApp correto (4 lugares)
- [ ] Endereço e horário de atendimento
- [ ] Produtos atualizados com seus dados
- [ ] Depoimentos atualizados com clientes reais
- [ ] Links de redes sociais corretos
- [ ] Fotos adicionadas
- [ ] Cores personalizadas (opcional)
- [ ] Testado em mobile (F12)
- [ ] Testado em desktop
- [ ] Nenhum erro no console (F12)

---

## 🧪 TESTAR LOCALMENTE

```bash
# Terminal 1: Iniciar servidor
npm run dev

# Navegador: Abrir
http://localhost:5173/

# Testar responsividade
F12 → Toggle device toolbar (Ctrl+Shift+M)
```

---

## 🚀 FAZER BUILD

```bash
# Criar versão final
npm run build

# Aparecerá uma pasta: dist/
# (Use esta pasta para hospedar)
```

---

## 📍 LOCAIS MAIS IMPORTANTES PARA EDITAR

| Função | Arquivo | Linha |
|--------|---------|-------|
| Nome da Loja | Header.jsx | 12 |
| Nome da Loja | Footer.jsx | 13 |
| WhatsApp | Home.jsx | 6 |
| WhatsApp | Products.jsx | 3 |
| WhatsApp | Support.jsx | 9 |
| WhatsApp | WhatsAppButton.jsx | 2 |
| Produtos | Products.jsx | 20-75 |
| Depoimentos | Testimonials.jsx | 5-30 |
| Contato | Support.jsx | 25-40 |
| Cores | App.css | 7-15 |

---

## 💡 DICAS

1. **Sempre edite um arquivo por vez**
2. **Não mude nomes de pastas/arquivos**
3. **Procure pela mensagem de erro se quebrar**
4. **Use Ctrl+F para buscar no arquivo**
5. **Salve o arquivo (Ctrl+S)**
6. **Atualize o navegador (Ctrl+R)**

---

## 🔍 PROCURANDO ALGO?

Use Ctrl+F para buscar nos arquivos:

```
"Glamour & Elegância" ............ Nome da loja
"5585987654321" ................. WhatsApp
"Rua da Elegância" .............. Endereço
"Perfume Floral Elegante" ....... Produtos
"Maria Silva" ................... Depoimentos
"#d4af37" ....................... Cores
```

---

## ❓ DÚVIDAS?

Leia os arquivos de documentação:
- **README.md** - Informações gerais
- **CUSTOMIZACAO.md** - Passo a passo detalhado
- **DEPLOYMENT.md** - Como hospedar
- **dados-exemplo.js** - Mais exemplos

---

**Boa sorte! Seu site está pronto para ser seu. 🌟**
