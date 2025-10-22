# Fundo Patronos - Email Service

Serviço de e-mails programáticos para a Associação Fundo Patrimonial Patronos usando React.email e Resend.

## 📋 Sobre o Projeto

Este projeto permite o envio de e-mails institucionais com a identidade visual do Fundo Patronos, incluindo:

- 📰 Newsletters mensais
- 🧾 Recibos de doação
- 📅 Notificações de eventos
- 📊 Anúncios de relatórios anuais
- 👋 E-mails de boas-vindas
- 📧 Comunicações institucionais gerais

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **React.email** - Sistema de templates usando componentes React
- **Resend** - Serviço de envio de e-mails
- **Git** - Controle de versão

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de variáveis de ambiente
cp .env.example .env
```

## 🔧 Configuração

1. Obtenha sua API key do Resend em https://resend.com
2. Adicione a key no arquivo `.env`:

```env
RESEND_API_KEY=your_api_key_here
```

## 💻 Desenvolvimento

### Visualizar templates localmente

```bash
npm run dev
```

Isso abrirá um servidor local onde você pode visualizar e editar os templates de e-mail em tempo real.

### Exportar templates

```bash
npm run export
```

Gera versões HTML estáticas dos templates na pasta `.react-email/`.

## 📤 Enviando E-mails

### Manualmente via Claude Code

Use o script de envio com os parâmetros necessários:

```bash
npm run send -- --template=newsletter --to=email@example.com
```

### Programaticamente

```javascript
import { sendEmail } from './src/utils/sendEmail.js';

await sendEmail({
  to: 'destinatario@email.com',
  subject: 'Assunto do e-mail',
  template: 'newsletter',
  data: { /* dados do template */ }
});
```

## 📁 Estrutura do Projeto

```
patronos-emails/
├── src/
│   ├── emails/              # Templates de e-mail (React components)
│   │   ├── BaseTemplate.jsx # Layout base reutilizável
│   │   ├── Newsletter.jsx   # Template de newsletter
│   │   ├── DonationReceipt.jsx  # Recibo de doação
│   │   ├── EventNotification.jsx  # Notificação de evento
│   │   ├── AnnualReport.jsx  # Anúncio de relatório
│   │   └── Welcome.jsx      # E-mail de boas-vindas
│   ├── utils/               # Funções auxiliares
│   │   └── sendEmail.js     # Função de envio
│   └── config/              # Configurações
│       └── brand.js         # Cores, fonts e links da marca
├── package.json
├── PROJECT_DIARY.md         # Diário do projeto
└── README.md
```

## 🎨 Identidade Visual

Todos os e-mails seguem a identidade visual do website:

### Cores
- **Gradiente primário**: `linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)`
- **Laranja**: #ff9700
- **Coral**: #ff6253
- **Rosa**: #fc4696
- **Roxo**: #c964e2

### Tipografia
- **Fonte**: Inter (400, 500, 600, 700)
- **Títulos**: 48px/36px (desktop/mobile)
- **Corpo**: 18px/16px

### Links Oficiais
- **Site**: https://patronos.org
- **Doações**: https://doa.re/patronos
- **Instagram**: @fundopatronos
- **LinkedIn**: fundo-patronos
- **YouTube**: @FundoPatronos

## 📝 Templates Disponíveis

### 1. Newsletter
Newsletter mensal com notícias, impactos e oportunidades de doação.

### 2. Recibo de Doação
E-mail de agradecimento com detalhes da doação e informações fiscais.

### 3. Notificação de Evento
Convites para eventos do Fundo Patronos (editais, programas, etc.).

### 4. Relatório Anual
Anúncio da publicação do relatório anual com link para download.

### 5. Boas-Vindas
E-mail de boas-vindas para novos inscritos na newsletter ou novos doadores.

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
# Resend API Key
RESEND_API_KEY=re_123456789

# Sender Configuration
FROM_EMAIL=noreply@patronos.org
FROM_NAME=Fundo Patrimonial Patronos

# Reply-To
REPLY_TO_EMAIL=contato@patronos.org
REPLY_TO_NAME=Fundo Patronos
```

## 📊 Logs e Monitoramento

Todos os envios são registrados no dashboard do Resend:
- Status de entrega
- Aberturas (se habilitado)
- Cliques (se habilitado)
- Bounces e reclamações

## 🤝 Contribuindo

Este é um projeto interno do Fundo Patronos. Para modificações:

1. Consulte o `PROJECT_DIARY.md` para contexto
2. Mantenha a identidade visual consistente com o website
3. Teste todos os templates antes de enviar
4. Documente mudanças no diário do projeto

## 📄 Licença

© 2025 Associação Fundo Patrimonial Patronos. Todos os direitos reservados.

**CNPJ**: 40.418.520/0001-33
**Endereço**: Jd. Nossa Senhora Auxiliadora, 257 - Campinas, SP
