# 🌐 Guia de Hospedagem de Imagens para Emails

## ⚠️ Importante

**Emails precisam de URLs absolutas (HTTPS) para carregar imagens!**

Caminhos locais como `/public/images/...` **NÃO funcionam** em emails.

## 📋 Passo a Passo

### Opção 1: Hospedar no Website Patronos (Recomendado)

1. **Faça upload da imagem para o servidor do site:**
   ```
   Caminho sugerido: /email-assets/images/hero-jantar-executivos.jpg
   ```

2. **Verifique a URL:**
   ```
   https://patronos.org/email-assets/images/hero-jantar-executivos.jpg
   ```

3. **Teste se está acessível:**
   - Abra a URL no navegador
   - Deve mostrar a imagem

4. **Use no email:**
   ```jsx
   <Img
     src="https://patronos.org/email-assets/images/hero-jantar-executivos.jpg"
     alt="6ª Edição do Jantar de Executivos"
   />
   ```

### Opção 2: Usar CDN (Cloudinary, ImgBB, etc.)

#### Cloudinary (Gratuito até 25GB)
1. Crie conta em [cloudinary.com](https://cloudinary.com)
2. Faça upload da imagem
3. Copie a URL pública:
   ```
   https://res.cloudinary.com/seu-usuario/image/upload/v1234567890/hero-jantar.jpg
   ```

#### ImgBB (Gratuito)
1. Acesse [imgbb.com](https://imgbb.com)
2. Faça upload da imagem
3. Copie o "Direct Link":
   ```
   https://i.ibb.co/xxxxxx/hero-jantar.jpg
   ```

### Opção 3: GitHub Pages (Se usar Git)

1. Crie branch `gh-pages`
2. Faça upload das imagens
3. Ative GitHub Pages nas configurações
4. URL será:
   ```
   https://seuusuario.github.io/patronos-emails/images/hero-jantar.jpg
   ```

## ✅ Checklist Antes de Hospedar

- [ ] Imagem otimizada (< 200KB)
- [ ] Dimensões corretas (1200x400px para hero)
- [ ] Formato adequado (JPG para fotos)
- [ ] Nome descritivo sem espaços
- [ ] URL acessível publicamente (teste no navegador)
- [ ] HTTPS (não HTTP)

## 🔧 Como Atualizar o Email

### No arquivo: `/emails/JantarExecutivos6Edicao.jsx`

**Linha 35** - Substitua o placeholder:

```jsx
// ANTES (placeholder temporário)
src="https://placehold.co/1200x400/ff9700/ffffff?text=..."

// DEPOIS (sua imagem hospedada)
src="https://patronos.org/email-assets/images/hero-jantar-executivos.jpg"
```

## 📐 Especificações da Imagem Hero

```
Largura: 1200px
Altura: 400px (ou 720px para 5:3)
Aspect Ratio: 3:1 (ou 5:3)
Formato: JPG
Qualidade: 85-90%
Peso: < 200KB
```

## 🎨 Dicas de Design

1. **Conteúdo importante no centro** - Margens podem ser cortadas em mobile
2. **Texto legível** - Se houver texto, use tamanho grande (mínimo 24px)
3. **Cores Patronos** - Use o gradiente ou cores da marca
4. **Alta resolução** - 2x para telas retina

## 🧪 Teste

Depois de hospedar, teste:

```bash
# Cole a URL no navegador
https://sua-url-aqui.jpg

# Se carregar, está pronto! ✅
# Se não carregar, verifique permissões ❌
```

## 📞 Suporte

Se tiver dúvidas sobre hospedagem, considere:
- Falar com o time de TI que gerencia patronos.org
- Usar serviço CDN gratuito (Cloudinary recomendado)
- Criar pasta `/email-assets/` no servidor web atual
