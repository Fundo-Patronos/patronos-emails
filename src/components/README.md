# Patronos Email Components Library

Biblioteca de componentes reutilizáveis para templates de email usando React.email e Tailwind CSS, com identidade visual do Fundo Patronos.

## Como Usar

### Importação

Importe os componentes de forma individual ou em conjunto:

```jsx
// Em seus templates na pasta emails/
import { Button, Hero, FeatureList } from '../src/components';

// Importar a configuração de marca
import { brand } from '../src/components';
```

---

## Componentes Disponíveis

### 1. Button

Botão customizável com variantes primary (gradiente) e secondary (outline).

**Props:**
- `href` (string, required): URL do link
- `variant` ('primary' | 'secondary', default: 'primary'): Variante do botão
- `children` (string, required): Texto do botão
- `className` (string, optional): Classes CSS adicionais
- `style` (object, optional): Estilos inline adicionais

**Exemplo:**

```jsx
import { Button } from '../src/components';

<Button href="https://doa.re/patronos" variant="primary">
  Fazer uma doação
</Button>

<Button href="https://patronos.org" variant="secondary">
  Saiba mais
</Button>
```

---

### 2. ButtonGroup

Dois botões lado a lado (primary e secondary).

**Props:**
- `primaryButton` (object, required):
  - `text` (string): Texto do botão primário
  - `href` (string): URL do botão primário
- `secondaryButton` (object, required):
  - `text` (string): Texto do botão secundário
  - `href` (string): URL do botão secundário
- `className` (string, optional): Classes CSS adicionais

**Exemplo:**

```jsx
import { ButtonGroup } from '../src/components';

<ButtonGroup
  primaryButton={{
    text: 'Fazer doação',
    href: 'https://doa.re/patronos'
  }}
  secondaryButton={{
    text: 'Ver programas',
    href: 'https://patronos.org/impacto'
  }}
/>
```

---

### 3. Hero

Header com imagem, tagline, título, descrição e CTA.

**Props:**
- `image` (string, required): URL da imagem
- `imageAlt` (string, optional): Texto alternativo da imagem
- `tagline` (string, optional): Texto pequeno acima do título
- `title` (string, required): Título principal
- `description` (string, required): Texto descritivo
- `cta` (object, optional):
  - `text` (string): Texto do botão
  - `href` (string): URL do botão
- `className` (string, optional): Classes CSS adicionais

**Exemplo:**

```jsx
import { Hero } from '../src/components';

<Hero
  image="https://patronos.org/images/hero.jpg"
  imageAlt="Estudantes da Unicamp"
  tagline="Novidades"
  title="Lançamento do Programa Trilhas Carreiras"
  description="Estamos felizes em anunciar o novo programa de desenvolvimento profissional para estudantes da Unicamp."
  cta={{
    text: 'Saiba mais',
    href: 'https://carreiras.patronos.org'
  }}
/>
```

---

### 4. FeatureList

Lista numerada de funcionalidades com separadores.

**Props:**
- `title` (string, required): Título da seção
- `description` (string, required): Descrição da seção
- `features` (array, required): Array de objetos com:
  - `title` (string): Título da feature
  - `description` (string): Descrição da feature
- `className` (string, optional): Classes CSS adicionais

**Exemplo:**

```jsx
import { FeatureList } from '../src/components';

<FeatureList
  title="Impacto do Fundo Patronos"
  description="Conheça as principais áreas onde o fundo atua para transformar a Unicamp."
  features={[
    {
      title: 'Bolsas Extras',
      description: 'Apoio financeiro para estudantes em vulnerabilidade socioeconômica.'
    },
    {
      title: 'Centro de Carreiras',
      description: 'Desenvolvimento profissional e preparação para o mercado de trabalho.'
    },
    {
      title: 'Infraestrutura',
      description: 'Melhorias nos espaços de ensino e pesquisa da universidade.'
    }
  ]}
/>
```

---

### 5. FeatureGrid

Grade 2x2 de funcionalidades com ícones.

**Props:**
- `title` (string, required): Título da seção
- `description` (string, required): Descrição da seção
- `features` (array, required): Array de objetos com:
  - `icon` (string): URL do ícone
  - `iconAlt` (string, optional): Texto alternativo do ícone
  - `title` (string): Título da feature
  - `description` (string): Descrição da feature
- `className` (string, optional): Classes CSS adicionais

**Exemplo:**

```jsx
import { FeatureGrid } from '../src/components';

<FeatureGrid
  title="Como Você Pode Contribuir"
  description="Diversas formas de apoiar o Fundo Patronos e transformar vidas."
  features={[
    {
      icon: 'https://patronos.org/icons/donate.png',
      iconAlt: 'Ícone de doação',
      title: 'Doação única',
      description: 'Faça uma contribuição pontual para apoiar nossos programas.'
    },
    {
      icon: 'https://patronos.org/icons/recurring.png',
      title: 'Doação recorrente',
      description: 'Torne-se um patrono mensal e garanta suporte contínuo.'
    },
    {
      icon: 'https://patronos.org/icons/volunteer.png',
      title: 'Voluntariado',
      description: 'Compartilhe seu conhecimento como mentor de estudantes.'
    },
    {
      icon: 'https://patronos.org/icons/share.png',
      title: 'Divulgação',
      description: 'Ajude-nos a alcançar mais pessoas compartilhando nossa missão.'
    }
  ]}
/>
```

---

### 6. NumberedList

Lista numerada simples com título e descrição.

**Props:**
- `title` (string, optional): Título principal
- `items` (array, required): Array de objetos com:
  - `number` (number, optional): Número customizado (auto-numerado se não fornecido)
  - `title` (string): Título do item
  - `description` (string): Descrição do item
- `className` (string, optional): Classes CSS adicionais

**Exemplo:**

```jsx
import { NumberedList } from '../src/components';

<NumberedList
  title="Como Fazer sua Doação"
  items={[
    {
      title: 'Acesse o portal',
      description: 'Visite doa.re/patronos para iniciar sua doação.'
    },
    {
      title: 'Escolha o valor',
      description: 'Selecione o valor que deseja contribuir.'
    },
    {
      title: 'Preencha os dados',
      description: 'Complete suas informações para receber o recibo.'
    },
    {
      title: 'Confirme a doação',
      description: 'Finalize e receba a confirmação por email.'
    }
  ]}
/>
```

---

### 7. ImageGrid

Grade de três imagens em colunas.

**Props:**
- `tagline` (string, optional): Texto pequeno acima do título
- `title` (string, required): Título da seção
- `description` (string, required): Descrição da seção
- `images` (array, required): Array de objetos com:
  - `src` (string): URL da imagem
  - `alt` (string): Texto alternativo
  - `href` (string, optional): Link ao clicar na imagem
- `className` (string, optional): Classes CSS adicionais

**Exemplo:**

```jsx
import { ImageGrid } from '../src/components';

<ImageGrid
  tagline="Nossos Programas"
  title="Impacto em Ação"
  description="Veja como o Fundo Patronos está transformando a experiência universitária."
  images={[
    {
      src: 'https://patronos.org/images/extras.jpg',
      alt: 'Programa Bolsas Extras',
      href: 'https://patronos.org/impacto/extras'
    },
    {
      src: 'https://patronos.org/images/carreiras.jpg',
      alt: 'Centro de Carreiras',
      href: 'https://carreiras.patronos.org'
    },
    {
      src: 'https://patronos.org/images/eventos.jpg',
      alt: 'Eventos e Workshops'
    }
  ]}
/>
```

---

## Configuração de Marca

Todos os componentes usam as cores, tipografia e links definidos em `/src/config/brand.js`.

### Acessando a configuração:

```jsx
import { brand } from '../src/components';

// Cores
brand.colors.gradient.css // Gradiente completo
brand.colors.gradient.stops.orange // #ff9700
brand.colors.text.primary // #111827

// Tipografia
brand.typography.fontFamily.primary // 'Inter, ...'
brand.typography.fontWeight.semibold // 600

// Links
brand.links.actions.donate // https://doa.re/patronos
brand.links.social.instagram.url

// Organização
brand.organization.legalName
brand.organization.cnpj
```

---

## Dicas de Uso

### 1. Combine componentes

Crie templates completos combinando múltiplos componentes:

```jsx
import { Hero, FeatureList, ButtonGroup } from '../src/components';

<>
  <Hero
    image="..."
    title="Newsletter Mensal"
    description="Confira as novidades de outubro"
  />

  <FeatureList
    title="Destaques do Mês"
    features={...}
  />

  <ButtonGroup
    primaryButton={{ text: 'Doar', href: '...' }}
    secondaryButton={{ text: 'Ler mais', href: '...' }}
  />
</>
```

### 2. Customize com className

Adicione classes Tailwind CSS para ajustes finos:

```jsx
<Button
  href="..."
  className="!px-[60px] !py-[16px]"
>
  Botão maior
</Button>
```

### 3. Use estilos inline quando necessário

Para customizações que não são suportadas por Tailwind:

```jsx
<Hero
  title="Título"
  style={{ marginTop: '40px' }}
/>
```

---

## Estrutura de Arquivos

```
src/components/
├── Button.jsx
├── ButtonGroup.jsx
├── Hero.jsx
├── FeatureList.jsx
├── FeatureGrid.jsx
├── NumberedList.jsx
├── ImageGrid.jsx
├── index.js
└── README.md
```

---

## Próximos Passos

1. Crie templates de email em `/src/emails/` usando estes componentes
2. Use o preview local com `npm run dev` para visualizar
3. Teste os emails em diferentes clientes antes de enviar
