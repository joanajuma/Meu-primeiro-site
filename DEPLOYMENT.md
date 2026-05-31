# 🚀 GUIA DE DEPLOYMENT - Glamour & Elegância

## Como hospedar seu site gratuitamente

### Opção 1: VERCEL (Recomendado - Mais Fácil)

1. **Criar conta:**
   - Acesse: https://vercel.com
   - Clique em "Sign Up"
   - Faça login com GitHub, GitLab ou email

2. **Conectar seu projeto:**
   - Clique em "New Project"
   - Selecione o repositório do seu site
   - Vercel detectará automaticamente que é React + Vite
   - Clique em "Deploy"

3. **Pronto!** Seu site estará online em minutos

**Vantagens:**
- ✅ Hosting gratuito ilimitado
- ✅ SSL gratuito (HTTPS)
- ✅ Deploy automático a cada push
- ✅ Muito rápido
- ✅ Suporte a domínio customizado

---

### Opção 2: NETLIFY

1. **Criar conta:**
   - Acesse: https://netlify.com
   - Clique em "Sign Up"

2. **Fazer deploy:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

3. **Ou conectar com Git:**
   - Clique em "New site from Git"
   - Selecione seu repositório
   - Clique em "Deploy site"

**Vantagens:**
- ✅ Gratuito
- ✅ Fácil de usar
- ✅ Bom desempenho
- ✅ Suporte a formulários

---

### Opção 3: GITHUB PAGES

1. **Criar repositório:**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git remote add origin https://github.com/seu-usuario/glamour-elegancia.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages:**
   - Vá em Settings > Pages
   - Selecione "Deploy from a branch"
   - Selecione "main" branch
   - Clique em "Save"

3. **Fazer build:**
   ```bash
   npm run build
   ```

**Vantagens:**
- ✅ Completamente gratuito
- ✅ Integrado com GitHub
- ✅ Seguro e confiável

**Desvantagens:**
- ❌ Mais lento que Vercel/Netlify
- ❌ Domínio padrão é longo

---

### Opção 4: HOSTINGER (Pago - Recomendado Profissional)

1. **Criar conta:**
   - Acesse: https://www.hostinger.com.br
   - Escolha um plano (a partir de R$ 30/mês)

2. **Fazer upload dos arquivos:**
   ```bash
   npm run build
   # Upload a pasta 'dist/' via FTP
   ```

3. **Configurar domínio:**
   - Registre seu domínio
   - Configure os DNS apontando para Hostinger
   - Ative SSL gratuito

**Vantagens:**
- ✅ Domínio customizado (.com.br)
- ✅ Email profissional incluído
- ✅ Suporte ao cliente
- ✅ Performance otimizada
- ✅ Backups automáticos

---

## 🔧 PREPARAR PARA DEPLOY

### 1. Criar arquivo `.env` (se necessário)

```bash
VITE_WHATSAPP_NUMBER=5585987654321
VITE_STORE_NAME=Glamour & Elegância
```

### 2. Configurar SEO básico

Edite `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Glamour & Elegância - Perfumes, Cremes, Cosméticos e Acessórios Femininos Premium">
    <meta name="keywords" content="perfumes, cremes, cosméticos, acessórios, sandálias, chinelos, beleza, loja online">
    <meta name="author" content="Glamour & Elegância">
    <meta property="og:title" content="Glamour & Elegância - Produtos Premium de Beleza">
    <meta property="og:description" content="Conheça nossa coleção de perfumes, cremes e acessórios femininos de qualidade.">
    <meta property="og:image" content="https://seusite.com/imagem.jpg">
    <title>Glamour & Elegância - Loja de Beleza Online</title>
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 3. Otimizar imagens

```bash
# Instalar ferramenta de compressão
npm install --save-dev imagemin

# Ou use online: https://tinypng.com/
```

### 4. Criar sitemap.xml

Na pasta `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seusite.com/</loc>
    <lastmod>2024-05-31</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seusite.com/#produtos</loc>
    <lastmod>2024-05-31</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 5. Criar robots.txt

Na pasta `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://seusite.com/sitemap.xml
```

---

## 📦 FAZER BUILD

```bash
# Criar versão otimizada
npm run build

# Testar build localmente
npm run preview
```

Isto criará uma pasta `dist/` com todos os arquivos prontos para produção.

---

## 🔐 SEGURANÇA

### 1. Remover informações sensíveis

Nunca commite:
- Senhas
- Chaves de API
- Números de telefone reais
- Informações pessoais

### 2. Usar variáveis de ambiente

```javascript
// Em componentes:
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER
```

Arquivo `.env.local`:
```
VITE_WHATSAPP_NUMBER=5585987654321
VITE_STORE_NAME=Glamour & Elegância
```

### 3. Ativar HTTPS

- Vercel/Netlify: Automático
- Hostinger: Ativar SSL gratuito
- GitHub Pages: Automático

---

## 📊 MONITORAR PERFORMANCE

### Google Analytics

1. Criar conta em: https://analytics.google.com
2. Copiar Tracking ID
3. Adicionar ao `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### Google Search Console

1. Acessar: https://search.google.com/search-console/
2. Adicionar propriedade com seu domínio
3. Verificar proprietário
4. Enviar sitemap.xml

---

## 🚀 OTIMIZAÇÕES DE PERFORMANCE

### 1. Lazy Loading de Imagens

```jsx
<img src={image} loading="lazy" alt="Produto" />
```

### 2. Compressão de CSS e JS

Vercel/Netlify fazem automaticamente.

### 3. Cache Control

No `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 4. Minificação

```bash
npm run build
# Já otimizado automaticamente
```

---

## 📝 DOMÍNIO CUSTOMIZADO

### Com Vercel:

1. Vá em Project Settings > Domains
2. Clique em "Add Domain"
3. Digite seu domínio
4. Siga as instruções de DNS

### Com Hostinger:

1. Registre o domínio
2. Aponte DNS para Hostinger
3. Configure no painel da Hostinger

**Domínios sugeridos:**
- glamourelegancia.com.br
- loja.seusite.com.br
- beleza-premium.com.br

---

## ✅ CHECKLIST PRÉ-DEPLOYMENT

- [ ] Trocar número do WhatsApp
- [ ] Atualizar nome da loja
- [ ] Adicionar fotos de qualidade
- [ ] Testar em mobile
- [ ] Testar em desktop
- [ ] Verificar todos os links
- [ ] SEO básico configurado
- [ ] Sitemap criado
- [ ] Robots.txt criado
- [ ] Build gerado sem erros
- [ ] Nenhum console.log deixado
- [ ] Variáveis de ambiente configuradas
- [ ] HTTPS ativo
- [ ] Analytics configurado
- [ ] Domínio customizado (opcional)

---

## 🆘 PROBLEMAS COMUNS

### Erro: "Module not found"
```bash
rm -rf node_modules
npm install
```

### Site lento
- Comprimir imagens
- Ativar cache
- Verificar bundle size: `npm run build`

### WhatsApp não funciona
- Verificar número do WhatsApp
- Testar link manualmente no navegador
- Verificar mensagem codificada

### Domínio não aponta
- Aguardar propagação DNS (até 48h)
- Verificar registros A/CNAME
- Limpar cache do navegador

---

## 📞 SUPORTE

**Vercel Support:** https://vercel.com/support
**Netlify Support:** https://docs.netlify.com/
**Hostinger Support:** https://support.hostinger.com/

---

## 🎉 SEU SITE ESTÁ NO AR!

Parabéns! Seu site de beleza está online e pronto para receber clientes! 

**Próximos passos:**
1. Compartilhar link no Instagram
2. Adicionar no WhatsApp bio
3. Enviar para email marketing
4. Pedir para amigos compartilharem
5. Monitorar analytics

**Boa sorte! 🌟**
