/**
 * Asset URLs Configuration - Example
 *
 * Copy this file to 'assets-urls.js' and update with your production URLs
 * Add 'assets-urls.js' to .gitignore to keep URLs private
 */

export const assetUrls = {
  // Base URL for hosted assets
  baseUrl: 'https://patronos.org/email-assets',

  // Hero Images
  images: {
    jantarExecutivos: '/images/hero-jantar-executivos.jpg',
    newsletterMensal: '/images/hero-newsletter.jpg',
    eventoCampus: '/images/hero-evento-campus.jpg',
    relatorioAnual: '/images/hero-relatorio-anual.jpg',
  },

  // Logos
  logos: {
    completo: '/logos/logo-patronos-completo.svg',
    simbolo: '/logos/logo-patronos-simbolo.svg',
    simboloBranco: '/logos/logo-patronos-simbolo-branco.svg',
  },

  // Icons
  icons: {
    bolsas: '/icons/icon-bolsas.png',
    carreiras: '/icons/icon-carreiras.png',
    infraestrutura: '/icons/icon-infraestrutura.png',
    doacao: '/icons/icon-doacao.png',
  },
};

/**
 * Helper function to get full asset URL
 * @param {string} path - Relative path from assetUrls
 * @returns {string} Full URL
 */
export const getAssetUrl = (path) => {
  return `${assetUrls.baseUrl}${path}`;
};

/**
 * Usage in email templates:
 *
 * import { getAssetUrl, assetUrls } from '../public/assets-urls.js';
 *
 * <Hero
 *   image={getAssetUrl(assetUrls.images.jantarExecutivos)}
 *   imageAlt="6ª Edição do Jantar de Executivos"
 * />
 */
