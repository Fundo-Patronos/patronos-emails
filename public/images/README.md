# Email Images - Fundo Patronos

Esta pasta contém imagens para uso nos templates de email.

## 📸 Imagens Disponíveis

### Hero Images (1200×720px)
- [ ] `hero-jantar-executivos.jpg` - 6ª Edição do Jantar de Executivos
- [ ] `hero-newsletter-outubro.jpg` - Newsletter mensal
- [ ] `hero-bolsas-extras.jpg` - Programa Bolsas Extras
- [ ] `hero-centro-carreiras.jpg` - Centro de Carreiras
- [ ] `hero-relatorio-anual.jpg` - Relatório Anual

### Content Images (800×600px ou menor)
- [ ] `campus-unicamp.jpg` - Vista do campus
- [ ] `estudantes-graduacao.jpg` - Estudantes em atividades
- [ ] `evento-patronos.jpg` - Eventos do fundo

## ✅ Checklist Antes de Adicionar Imagens

- [ ] Imagem otimizada (< 300KB)
- [ ] Dimensões corretas (1200×720px para hero)
- [ ] Formato adequado (JPG para fotos, PNG para gráficos)
- [ ] Nome descritivo e sem espaços (use-hifens)
- [ ] Alt text preparado para o template

## 🎨 Estilo Visual

Ao criar/escolher imagens, considere:
- Cores do gradiente Patronos: #ff9700 → #ff6253 → #fc4696 → #c964e2
- Tom profissional e inspirador
- Foco em pessoas e impacto
- Boa iluminação e qualidade

## 📝 Nomeação de Arquivos

Padrão: `tipo-descricao-contexto.ext`

Exemplos:
- ✅ `hero-jantar-executivos-2025.jpg`
- ✅ `thumb-evento-carreiras.jpg`
- ✅ `icon-doacao-recorrente.png`
- ❌ `IMG_1234.jpg`
- ❌ `foto campus.jpg` (espaço)
- ❌ `banner.png` (genérico demais)

## 🔗 Como Usar

### No Email Template:
```jsx
<Hero
  image="https://patronos.org/email-assets/images/hero-jantar-executivos.jpg"
  imageAlt="Convidados no 6º Jantar de Executivos do Fundo Patronos"
/>
```

### Placeholder para Desenvolvimento:
Use a imagem genérica enquanto a final não estiver pronta:
```jsx
<Hero
  image="/public/images/Generic Email Header - Cover Image (600 x 200 px).svg"
  imageAlt="Placeholder"
/>
```
