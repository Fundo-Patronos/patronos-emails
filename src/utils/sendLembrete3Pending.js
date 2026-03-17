/**
 * Send Lembrete 3 Pending - Voz do Doador 2026
 * Remaining 28 emails that hit daily quota on Mar 11
 *
 * Run this when Resend quota resets (next day)
 */

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_CONFIG = {
  from: 'Fundo Patronos <contato@patronos.org>',
  to: 'contato@patronos.org',
  cc: ['gustavo.beltrami@patronos.org', 'lucas.yuhara@patronos.org'],
  replyTo: 'gustavo.beltrami@patronos.org',
  subject: 'Fundo Patronos - Lembrete: Pesquisa Voz do Doador 2026',
};

async function main() {
  console.log('='.repeat(60));
  console.log('LEMBRETE 3 PENDING - VOZ DO DOADOR 2026');
  console.log('='.repeat(60));

  // Load HTML template
  const htmlPath = path.join(__dirname, '../../out/VozDoDoadorLembrete.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('ERROR: Template not found. Run "npx email export" first.');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf-8');
  console.log(`\n✓ Template carregado: ${(html.length / 1024).toFixed(2)} KB`);

  // Load pending emails
  const pendingPath = path.join(__dirname, '../../pending_lembrete3.json');
  if (!fs.existsSync(pendingPath)) {
    console.error('ERROR: pending_lembrete3.json not found.');
    process.exit(1);
  }
  const pendingEmails = JSON.parse(fs.readFileSync(pendingPath, 'utf-8'));
  console.log(`✓ Emails pendentes: ${pendingEmails.length}`);

  console.log('\n' + '-'.repeat(60));
  console.log('CONFIGURAÇÃO:');
  console.log('-'.repeat(60));
  console.log(`From: ${EMAIL_CONFIG.from}`);
  console.log(`To: ${EMAIL_CONFIG.to}`);
  console.log(`CC: ${EMAIL_CONFIG.cc.join(', ')}`);
  console.log(`Subject: ${EMAIL_CONFIG.subject}`);
  console.log(`BCC: ${pendingEmails.length} destinatários`);
  console.log('-'.repeat(60));

  console.log('\nEnviando...');

  try {
    const response = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      cc: EMAIL_CONFIG.cc,
      bcc: pendingEmails,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: EMAIL_CONFIG.subject,
      html: html,
    });

    if (response.error) {
      console.log(`\n✗ Erro: ${response.error.message}`);
    } else {
      console.log(`\n✓ Enviado! ID: ${response.data?.id || 'N/A'}`);
      console.log('\n' + '='.repeat(60));
      console.log('LEMBRETE 3 COMPLETO');
      console.log(`Total enviado: ${pendingEmails.length} destinatários`);
      console.log('='.repeat(60));

      // Delete pending file after success
      fs.unlinkSync(pendingPath);
      console.log('\n✓ Arquivo pending_lembrete3.json removido.');
    }
  } catch (error) {
    console.log(`\n✗ Exception: ${error.message}`);
  }
}

main().catch(console.error);
