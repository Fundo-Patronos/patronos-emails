/**
 * Fundo Patrimonial Patronos - Brand Configuration
 *
 * This file contains all brand colors, typography, links, and contact information
 * extracted from the official website to ensure consistent branding across all emails.
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Primary Brand Gradient
  gradient: {
    css: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)',
    stops: {
      orange: '#ff9700',
      coral: '#ff6253',
      pink: '#fc4696',
      purple: '#c964e2',
    },
  },

  // Brand Colors (for single-color usage)
  brand: {
    primary: '#ff9700',    // Orange - primary brand color
    secondary: '#ff6253',  // Coral - secondary accent
    tertiary: '#fc4696',   // Pink - tertiary accent
    quaternary: '#c964e2', // Purple - quaternary accent
  },

  // Text Colors
  text: {
    primary: '#111827',   // gray-900 - main text
    secondary: '#6B7280', // gray-600 - secondary text
    light: '#9CA3AF',     // gray-500 - light text
    white: '#FFFFFF',     // white text
  },

  // Background Colors
  background: {
    white: '#FFFFFF',
    light: '#F9FAFB',     // gray-50
    gray: '#F3F4F6',      // gray-100
  },

  // Border Colors
  border: {
    light: '#E5E7EB',     // gray-200
    DEFAULT: '#D1D5DB',   // gray-300
  },
};

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Font Family
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Heading Sizes (desktop / mobile)
  headings: {
    h1: {
      desktop: { size: '48px', lineHeight: '56px' },
      mobile: { size: '36px', lineHeight: '44px' },
    },
    h2: {
      desktop: { size: '36px', lineHeight: '44px' },
      mobile: { size: '30px', lineHeight: '36px' },
    },
    h3: {
      size: '20px',
      lineHeight: '28px',
    },
  },

  // Body Text Sizes
  body: {
    large: {
      size: '18px',
      lineHeight: '32px', // leading-8
    },
    regular: {
      size: '16px',
      lineHeight: '28px', // leading-7
    },
    small: {
      size: '14px',
      lineHeight: '24px', // leading-6
    },
  },

  // Button / CTA Text
  button: {
    size: '14px',
    lineHeight: '24px',
    fontWeight: 600,
  },
};

// ============================================================================
// OFFICIAL LINKS
// ============================================================================

export const links = {
  // Website
  website: {
    home: 'https://patronos.org',
    about: 'https://patronos.org/sobre-nos/fundo',
    transparency: 'https://patronos.org/sobre-nos/transparencia',
    contact: 'https://patronos.org/sobre-nos/contato',
    partners: 'https://patronos.org/parceiros',
  },

  // Programs & Impact
  programs: {
    extras: 'https://patronos.org/impacto/extras',
    trilhaCarreiras: 'https://patronos.org/impacto/trilhas',
    centroCarreiras: 'https://carreiras.patronos.org/',
  },

  // Actions
  actions: {
    donate: 'https://doa.re/patronos',
    newsletter: 'https://tally.so/r/wvkW18',
    donorPortal: 'https://doador.doare.org/',
  },

  // Social Media
  social: {
    instagram: {
      url: 'https://www.instagram.com/fundopatronos/',
      handle: '@fundopatronos',
    },
    linkedin: {
      url: 'https://www.linkedin.com/company/fundo-patronos',
      handle: 'fundo-patronos',
    },
    youtube: {
      url: 'https://www.youtube.com/@FundoPatronos',
      handle: '@FundoPatronos',
    },
  },
};

// ============================================================================
// ORGANIZATION INFORMATION
// ============================================================================

export const organization = {
  // Legal Information
  legalName: 'Associação Fundo Patrimonial Patronos',
  shortName: 'Fundo Patronos',
  cnpj: '40.418.520/0001-33',

  // Address
  address: {
    street: 'Jd. Nossa Senhora Auxiliadora, 257',
    city: 'Campinas',
    state: 'SP',
    country: 'Brasil',
    full: 'Jd. Nossa Senhora Auxiliadora, 257 - Campinas, SP',
  },

  // Associated Institution
  institution: {
    name: 'Unicamp',
    fullName: 'Universidade Estadual de Campinas',
  },

  // Contact (to be filled with actual email)
  contact: {
    email: 'contato@patronos.org', // Update with actual email
    phone: '', // Add if available
  },
};

// ============================================================================
// EMAIL CONFIGURATION
// ============================================================================

export const emailConfig = {
  // Sender Information
  from: {
    name: 'Fundo Patrimonial Patronos',
    email: 'noreply@patronos.org', // Update with actual sending domain
  },

  // Reply-To
  replyTo: {
    name: 'Fundo Patronos',
    email: 'contato@patronos.org', // Update with actual contact email
  },

  // Footer Text (required for bulk emails)
  footerText: {
    copyright: `© ${new Date().getFullYear()} Associação Fundo Patrimonial Patronos. Todos os direitos reservados.`,
    legal: 'CNPJ: 40.418.520/0001-33',
    address: 'Jd. Nossa Senhora Auxiliadora, 257 - Campinas, SP',
    unsubscribe: 'Para cancelar sua inscrição, clique aqui.',
  },
};

// ============================================================================
// LOGO PATHS (for email usage)
// ============================================================================

export const logos = {
  // These paths should be updated to publicly accessible URLs
  // For now, using relative paths from website
  main: '/Logo-Patronos-Completo.svg',
  symbol: '/Logo Patronos Simbolo Transparente - SVG .svg',
  symbolWhite: '/Logo Patronos Simbolo Branco - SVG.svg',

  // Full URLs (to be updated with actual hosted URLs)
  mainUrl: 'https://patronos.org/Logo-Patronos-Completo.svg',
  symbolUrl: 'https://patronos.org/Logo%20Patronos%20Simbolo%20Transparente%20-%20SVG%20.svg',
};

// ============================================================================
// BUTTON STYLES (for CTAs)
// ============================================================================

export const buttonStyles = {
  primary: {
    background: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
  },

  secondary: {
    background: '#FFFFFF',
    color: '#111827',
    border: '1px solid #D1D5DB',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
  },
};

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

export default {
  colors,
  typography,
  links,
  organization,
  emailConfig,
  logos,
  buttonStyles,
};
