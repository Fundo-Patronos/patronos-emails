# Public Assets - Fundo Patronos Email Templates

Esta pasta contém todos os assets públicos (imagens, logos, ícones) usados nos templates de email.

## 📁 Estrutura de Pastas

```
public/
├── images/          # Imagens para emails (hero images, fotos, etc)
├── logos/           # Logos do Fundo Patronos
└── icons/           # Ícones para componentes
```

## 🖼️ Diretrizes de Assets

### Imagens (`/images/`)

**Hero Images:**
- Tamanho recomendado: **1200px × 720px** (aspect ratio 5:3)
- Formato: JPG (85-90% qualidade) ou PNG
- Peso máximo: 200-300KB
- Exemplos: `hero-jantar-executivos.jpg`, `hero-newsletter-outubro.jpg`

**Imagens de Conteúdo:**
- Largura máxima: 600px
- Formato: JPG ou PNG
- Otimizar para web

### Logos (`/logos/`)

**Arquivos necessários:**
- Logo completo: `logo-patronos-completo.svg` / `.png`
- Logo símbolo: `logo-patronos-simbolo.svg` / `.png`
- Logo símbolo branco: `logo-patronos-simbolo-branco.svg` / `.png`

**Especificações:**
- SVG preferencial (vetorial)
- PNG de fallback com fundo transparente
- Altura recomendada: 80-120px

### Ícones (`/icons/`)

**Especificações:**
- Tamanho: 48px × 48px ou 64px × 64px
- Formato: PNG com fundo transparente ou SVG
- Exemplos: `icon-bolsas.png`, `icon-carreiras.png`

## 🌐 Hospedagem de Imagens

Para usar imagens em emails de produção, você precisa hospedá-las publicamente:

### Opções de Hospedagem:

1. **Website Patronos** (Recomendado)
   ```
   https://patronos.org/email-assets/images/hero-jantar.jpg
   ```

2. **CDN (Cloudinary, Imgix, etc.)**
   ```
   https://cdn.patronos.org/emails/hero-jantar.jpg
   ```

3. **AWS S3 / Google Cloud Storage**
   ```
   https://s3.amazonaws.com/patronos-emails/hero-jantar.jpg
   ```

## 📝 Como Usar nos Templates

### Durante Desenvolvimento (Local)

```jsx
// Use caminhos relativos
<Hero
  image="/public/images/hero-jantar-executivos.jpg"
  imageAlt="Jantar de Executivos"
/>
```

### Em Produção

```jsx
// Use URLs completas
<Hero
  image="https://patronos.org/email-assets/images/hero-jantar-executivos.jpg"
  imageAlt="Jantar de Executivos"
/>
```

## 🎨 Otimização de Imagens

Antes de adicionar imagens, otimize-as:

### Ferramentas Online:
- [TinyPNG](https://tinypng.com/) - Compressão PNG/JPG
- [Squoosh](https://squoosh.app/) - Otimização avançada
- [ImageOptim](https://imageoptim.com/) - Mac app

### Linha de Comando:
```bash
# Otimizar JPG
jpegoptim --max=85 --strip-all imagem.jpg

# Otimizar PNG
optipng -o7 imagem.png
```

## 📐 Dimensões Recomendadas por Tipo de Email

### Newsletter
- Hero: 1200×720px
- Thumbnails: 400×300px
- Logos: 200×80px

### Evento (Jantar de Executivos)
- Hero: 1200×720px
- Foto do local: 800×600px

### Recibo de Doação
- Logo: 200×80px (apenas)
- Sem hero image

### Relatório Anual
- Capa: 1200×720px
- Gráficos: 800×500px

## ⚠️ Importante

1. **Nunca** faça commit de imagens muito grandes (>500KB)
2. **Sempre** use alt text descritivo nas imagens
3. **Teste** imagens em diferentes clientes de email
4. **Use HTTPS** sempre em produção
5. **Otimize** antes de fazer upload

## 🔗 Links Úteis

- [Email Image Best Practices](https://www.litmus.com/blog/image-width-email-design)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [Patronos Brand Guidelines](../PROJECT_DIARY.md#brand-identity-guidelines)
