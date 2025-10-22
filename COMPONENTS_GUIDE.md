# Guia Rápido - Biblioteca de Componentes

## 📚 Visão Geral

Biblioteca de componentes reutilizáveis para emails do Fundo Patronos, criada com React.email e estilizada com Tailwind CSS.

## 🎨 Componentes Disponíveis

### 1. **Button** - Botão com gradiente Patronos
```jsx
<Button href="URL" variant="primary|secondary">
  Texto do botão
</Button>
```

### 2. **ButtonGroup** - Dois botões lado a lado
```jsx
<ButtonGroup
  primaryButton={{ text: '...', href: '...' }}
  secondaryButton={{ text: '...', href: '...' }}
/>
```

### 3. **Hero** - Cabeçalho com imagem e CTA
```jsx
<Hero
  image="URL"
  tagline="Texto pequeno"
  title="Título principal"
  description="Descrição"
  cta={{ text: '...', href: '...' }}
/>
```

### 4. **FeatureList** - Lista numerada com separadores
```jsx
<FeatureList
  title="Título"
  description="Descrição"
  features={[
    { title: '...', description: '...' },
    { title: '...', description: '...' }
  ]}
/>
```

### 5. **FeatureGrid** - Grade 2x2 com ícones
```jsx
<FeatureGrid
  title="Título"
  description="Descrição"
  features={[
    { icon: 'URL', title: '...', description: '...' },
    // até 4 items
  ]}
/>
```

### 6. **NumberedList** - Lista numerada simples
```jsx
<NumberedList
  title="Título"
  items={[
    { title: '...', description: '...' },
    { title: '...', description: '...' }
  ]}
/>
```

### 7. **ImageGrid** - Grade de 3 imagens
```jsx
<ImageGrid
  title="Título"
  description="Descrição"
  images={[
    { src: 'URL', alt: '...', href: '...' },
    // 3 imagens
  ]}
/>
```

## 📁 Estrutura do Projeto

```
5.patronos-emails/
├── emails/                 # 📧 Templates de email (root level)
│   └── ExampleEmail.jsx
│
├── src/
│   ├── components/         # ✨ Biblioteca de componentes
│   │   ├── Button.jsx
│   │   ├── ButtonGroup.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureList.jsx
│   │   ├── FeatureGrid.jsx
│   │   ├── NumberedList.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── index.js        # Export de todos os componentes
│   │   └── README.md       # Documentação detalhada
│   │
│   ├── config/
│   │   └── brand.js        # 🎨 Configuração de marca (cores, links, etc)
│   │
│   └── utils/              # 🛠️ Funções auxiliares
│
├── COMPONENTS_GUIDE.md     # Este arquivo
├── PROJECT_DIARY.md        # Diário do projeto
└── package.json
```

## 🚀 Como Usar

### Passo 1: Importar componentes
```jsx
// Em seus templates na pasta emails/
import {
  Hero,
  FeatureList,
  Button,
  brand
} from '../src/components';
```

### Passo 2: Usar em seus templates
```jsx
export default function MeuEmail() {
  return (
    <Html>
      <Body>
        <Container>
          <Hero
            title="Meu título"
            description="Descrição"
          />
          <FeatureList
            features={[...]}
          />
          <Button href={brand.links.actions.donate}>
            Doar
          </Button>
        </Container>
      </Body>
    </Html>
  );
}
```

### Passo 3: Acessar configuração de marca
```jsx
// Cores
brand.colors.gradient.css
brand.colors.text.primary

// Links
brand.links.actions.donate
brand.links.social.instagram.url

// Organização
brand.organization.legalName
brand.organization.cnpj
```

## 📝 Exemplos Completos

### Exemplo 1: Email de Newsletter
```jsx
<Hero
  image="https://..."
  title="Newsletter de Outubro"
  description="Novidades do mês"
  cta={{ text: 'Ler mais', href: '...' }}
/>

<FeatureList
  title="Destaques"
  features={[
    { title: 'Notícia 1', description: '...' },
    { title: 'Notícia 2', description: '...' }
  ]}
/>

<Button href={brand.links.website.home}>
  Visitar site
</Button>
```

### Exemplo 2: Email de Doação
```jsx
<Section>
  <Heading>Obrigado pela sua doação!</Heading>
  <Text>Sua contribuição faz a diferença.</Text>
</Section>

<NumberedList
  title="Próximos passos"
  items={[
    { title: 'Recibo enviado', description: 'Verifique seu email' },
    { title: 'Portal do doador', description: 'Acompanhe seu impacto' }
  ]}
/>

<ButtonGroup
  primaryButton={{ text: 'Portal do doador', href: '...' }}
  secondaryButton={{ text: 'Compartilhar', href: '...' }}
/>
```

## 🎯 Dicas

1. **Use o ExampleEmail.jsx** como referência para criar novos templates
2. **Consulte README.md** em `/src/components/` para documentação detalhada
3. **Customize com className** para ajustes específicos
4. **Acesse brand.js** para links e cores oficiais
5. **Mantenha consistência** visual usando sempre os componentes da biblioteca

## 📖 Documentação Completa

Para documentação detalhada de cada componente com todos os props disponíveis, veja:
`/src/components/README.md`

## 🎨 Identidade Visual

Todos os componentes seguem a identidade visual do Fundo Patronos:
- **Gradiente**: `#ff9700 → #ff6253 → #fc4696 → #c964e2`
- **Fonte**: Inter
- **Cores de texto**: `#111827` (primary), `#6B7280` (secondary)

---

**Pronto para começar!** 🚀

Use este guia como referência rápida enquanto desenvolve seus templates de email.
