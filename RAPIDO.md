# 🎯 INÍCIO RÁPIDO - 5 MINUTOS PARA COMEÇAR

## ⚡ SÓ LEIA ISTO PRIMEIRO!

Seu site está pronto. Agora é só customizar!

---

## 📌 PASSO 1: TROCAR NOME DA LOJA (1 min)

**Arquivo:** `src/components/Header.jsx`

Procure na linha 12:
```jsx
<h1>✨ Glamour & Elegância</h1>
```

Substitua por seu nome:
```jsx
<h1>✨ SUA LOJA AQUI</h1>
```

**Faça a mesma coisa em:** `src/components/Footer.jsx` (linha ~13)

---

## 📌 PASSO 2: TROCAR WHATSAPP (2 min)

**SEU NÚMERO:** 55 + DDD + NÚMERO
Exemplo: 55 85 98765-4321 → `5585987654321`

Edite em 4 arquivos (procure por `5585987654321`):

1. `src/components/Home.jsx` - linha 6
2. `src/components/Products.jsx` - linha 3
3. `src/components/Support.jsx` - linha 9
4. `src/components/WhatsAppButton.jsx` - linha 2

Substitua em TODOS por seu número.

---

## 📌 PASSO 3: ADICIONAR SEUS PRODUTOS (5 min)

**Arquivo:** `src/components/Products.jsx`

Procure por:
```jsx
const products = {
  perfumes: [
    {
      id: 1,
      name: 'Perfume Floral Elegante',
      price: 'R$ 89,90',
      description: 'Fragrância luxuosa...',
      benefits: 'Duração: 8 horas...'
    }
```

Mude os dados com seus produtos reais.

---

## 📌 PASSO 4: TESTAR TUDO

Terminal:
```bash
npm run dev
```

Navegador: `http://localhost:5173/`

✅ Veja como ficou!

---

## ✅ PRONTO!

Customizou? Agora é hora de publicar!

```bash
npm run build
```

Envie a pasta `dist/` para hospedar.

---

## 📚 PRECISA DE MAIS AJUDA?

Leia estes arquivos (em ordem):

1. **SUMARIO.md** - Visão geral completa
2. **MUDANCAS-RAPIDAS.md** - Todas as mudanças exatas
3. **CUSTOMIZACAO.md** - Guia passo a passo
4. **DEPLOYMENT.md** - Como publicar online

---

## 🚀 HOSPEDAGEM GRATUITA

**Vercel** (mais fácil):
1. Vá em https://vercel.com
2. Faça login com GitHub
3. Clique "New Project"
4. Selecione seu repositório
5. Click "Deploy" - Pronto!

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 🎉 Você está online!

Compartilhe seu site com clientes e comece a vender!

---

**Dúvidas?** Leia a documentação completa nos arquivos .md
