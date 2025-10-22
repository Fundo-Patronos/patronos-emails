# Fundo Patrimonial Patronos - Email Service Project Diary

**Date**: October 22, 2025
**Session Duration**: Initial setup session
**Developer**: Claude Code Assistant
**Client**: Associação Fundo Patrimonial Patronos (Unicamp Endowment Fund)

## Project Overview

Building a programmatic email service for Fundo Patrimonial Patronos using React.email and Resend. This service enables the organization to send branded institutional emails including newsletters, donation receipts, event notifications, and annual reports.

## Key Project Requirements

- **Email Provider**: Resend for email delivery
- **Template System**: React.email components for email templates
- **Language**: All email content in Portuguese (PT-BR)
- **Brand Consistency**: Match website visual identity and branding
- **Triggering**: Manual sending via Claude Code or scheduled sends
- **Email Types**:
  - Newsletters (monthly)
  - Donation receipts
  - Event notifications
  - Annual report announcements
  - Welcome emails
  - General institutional communications

## Tech Stack

- **Node.js**: Runtime environment
- **React.email**: Email template system using React components
- **Resend**: Email delivery service
- **Git**: Version control

## Brand Identity Guidelines

### Color Palette
- **Primary Gradient**: `linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)`
- **Gradient Colors**:
  - Orange: `#ff9700`
  - Coral: `#ff6253`
  - Pink: `#fc4696`
  - Purple: `#c964e2`
- **Text Colors**:
  - Primary: `#111827` (gray-900)
  - Secondary: `#6B7280` (gray-600)
  - Light: `#9CA3AF` (gray-500)

### Typography
- **Font Family**: Inter (weights: 400, 500, 600, 700)
- **Heading Sizes**:
  - H1: `48px / 56px` (mobile: `36px / 44px`)
  - H2: `36px / 44px` (mobile: `30px / 36px`)
  - H3: `20px / 28px`
- **Body Text**:
  - Large paragraph: `18px / 32px` (leading-8)
  - Regular paragraph: `16px / 28px` (leading-7)
  - Small text: `14px / 24px` (leading-6)
- **Font Weights**:
  - Regular: 400
  - Medium: 500
  - Semibold: 600
  - Bold: 700

### Official Links & Contact Information

#### Social Media
- **Instagram**: https://www.instagram.com/fundopatronos/
- **LinkedIn**: https://www.linkedin.com/company/fundo-patronos
- **YouTube**: https://www.youtube.com/@FundoPatronos

#### Important Links
- **Website**: https://patronos.org (assumed main domain)
- **Donation Page**: https://doa.re/patronos
- **Newsletter Signup**: https://tally.so/r/wvkW18
- **Donor Portal**: https://doador.doare.org/
- **Centro de Carreiras**: https://carreiras.patronos.org/
- **Contact**: /sobre-nos/contato (website relative path)
- **Transparency**: /sobre-nos/transparencia (website relative path)

#### Organization Information
- **Legal Name**: Associação Fundo Patrimonial Patronos
- **CNPJ**: 40.418.520/0001-33
- **Address**: Jd. Nossa Senhora Auxiliadora, 257 - Campinas, SP
- **Associated Institution**: Unicamp (Universidade Estadual de Campinas)

### Logo Assets
- **Main Logo**: `/Logo-Patronos-Completo.svg` (from website)
- **Symbol Logo**: `/Logo Patronos Simbolo Transparente - SVG .svg` (from website)
- **Symbol White**: `/Logo Patronos Simbolo Branco - SVG.svg` (from website)

## Project Structure

```
5.patronos-emails/
├── src/
│   ├── emails/          # React.email template components
│   ├── utils/           # Helper functions
│   └── config/          # Configuration files
├── package.json
├── PROJECT_DIARY.md
└── README.md
```

## Session 1 - October 22, 2025: Project Initialization

### Accomplished

#### 1. Project Setup
- ✅ **Created project directory**: `/Users/G.Beltrami/Documents/Projects/5.patronos-emails`
- ✅ **Initialized Node.js project**: Generated package.json
- ✅ **Installed dependencies**:
  - `react-email` - Email template framework
  - `@react-email/components` - Pre-built email components
  - `resend` - Email sending service
- ✅ **Git repository initialized**: First commit completed
- ✅ **Created folder structure**: src/emails, src/utils, src/config

#### 2. Brand Guidelines Extraction
- ✅ **Extracted color scheme**: Primary gradient and text colors from website
- ✅ **Documented typography**: Font sizes, line heights, and weights
- ✅ **Collected links**: Social media, donation, and important website links
- ✅ **Gathered organization info**: Legal name, CNPJ, address

#### 3. Documentation
- ✅ **Created PROJECT_DIARY.md**: Comprehensive project documentation
- ✅ **Documented brand guidelines**: Colors, fonts, and visual identity
- ✅ **Listed official links**: All social media and important URLs
- ✅ **Defined email types**: Newsletter, receipts, events, reports, welcome

### Next Steps

1. **Brand Constants File**: Create `/src/config/brand.js` with colors, fonts, and links
2. **Base Email Template**: Build reusable layout component with header/footer
3. **Email Templates**: Create specific templates for each email type
4. **Resend Setup**: Configure Resend API and test sending
5. **Preview System**: Set up local preview for email development
6. **Send Scripts**: Create utility scripts for manual email sending

## Development Guidelines

### Email Design Standards
- **Mobile-first**: All emails must be responsive
- **Brand consistency**: Use official gradient, colors, and Inter font
- **Portuguese content**: All email text in Brazilian Portuguese
- **Professional tone**: Formal institutional communication style
- **Clear CTAs**: Prominent call-to-action buttons with gradient styling
- **Footer consistency**: Include social media, contact, and legal information

### Technical Standards
- **React.email components**: Use official components for cross-client compatibility
- **Inline styles**: Email clients require inline CSS
- **Image hosting**: Host images externally (not embedded)
- **Alt text**: All images must have descriptive alt attributes
- **Testing**: Preview in multiple email clients before sending

### Content Guidelines
- **Subject lines**: Clear, concise, Portuguese
- **Preheader text**: Compelling preview text (50-100 characters)
- **Personalization**: Use recipient name when available
- **Unsubscribe**: Include clear unsubscribe link in footer
- **Privacy**: Link to transparency/privacy policy

## Email Template Types Planned

### 1. Newsletter Template
- **Frequency**: Monthly
- **Content**: News, impacts, donation opportunities
- **Sections**: Hero, featured story, updates, CTA, footer
- **Design**: Multi-column layout with images

### 2. Donation Receipt Template
- **Trigger**: After successful donation
- **Content**: Thank you message, donation details, tax receipt info
- **Sections**: Header, donation summary, impact statement, footer
- **Design**: Clean, professional, single column

### 3. Event Notification Template
- **Trigger**: Upcoming events (Centro de Carreiras, editais, etc.)
- **Content**: Event details, registration link, agenda
- **Sections**: Hero, event info, CTA, footer
- **Design**: Visual with event imagery

### 4. Annual Report Template
- **Trigger**: Annual report release
- **Content**: Year highlights, download link, impact metrics
- **Sections**: Hero, achievements, stats, download CTA, footer
- **Design**: Rich visual with charts/graphics

### 5. Welcome Email Template
- **Trigger**: New newsletter subscriber or donor
- **Content**: Welcome message, fund introduction, navigation links
- **Sections**: Hero welcome, about fund, resources, footer
- **Design**: Friendly, inviting, single column

## Technical Implementation Notes

### Resend Configuration
- **API Key**: Will be stored in environment variable `RESEND_API_KEY`
- **From Email**: Will use organization's official email domain
- **Reply-To**: Configure appropriate reply-to address
- **Rate Limits**: Be aware of Resend tier limits

### React.email Development
- **Preview Server**: Run `email dev` for local preview
- **Export**: Generate static HTML for production sending
- **Testing**: Use Resend's testing features before production

### Deployment Strategy
- **Manual Sending**: Scripts triggered via Claude Code
- **Scheduled Sending**: Cron jobs or manual scheduling
- **Contact Lists**: Manage in external service (connected to Resend)
- **Analytics**: Basic send tracking via Resend dashboard

## Files to Create Next

1. `/src/config/brand.js` - Brand constants and configuration
2. `/src/emails/BaseTemplate.jsx` - Reusable base layout
3. `/src/emails/Newsletter.jsx` - Newsletter template
4. `/src/emails/DonationReceipt.jsx` - Receipt template
5. `/src/emails/EventNotification.jsx` - Event template
6. `/src/emails/AnnualReport.jsx` - Report announcement
7. `/src/emails/Welcome.jsx` - Welcome email
8. `/src/utils/sendEmail.js` - Send utility function
9. `/.env.example` - Environment variables template
10. `/README.md` - Project documentation

---

**Session End**: Project successfully initialized with comprehensive brand guidelines and documentation. Ready to begin template development in next session.
