/**
 * Send to the 12 pending recipients
 * Schedule for tomorrow (Feb 10, 2026) at 10:00 AM Brasilia time
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
  subject: 'Fundo Patronos - Pesquisa Voz do Doador 2026 - Queremos ouvir você!',
};

// Send immediately (scheduled time has passed)
const SEND_NOW = true;

async function main() {
  console.log('='.repeat(60));
  console.log('ENVIO DOS 12 EMAILS PENDENTES');
  console.log('='.repeat(60));

  // Load HTML template
  const htmlPath = path.join(__dirname, '../../out/VozDoDoador.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  console.log(`✓ Template carregado: ${(html.length / 1024).toFixed(2)} KB`);

  // Load pending emails
  const pendingPath = path.join(__dirname, '../../pending_emails_12.json');
  const pendingEmails = JSON.parse(fs.readFileSync(pendingPath, 'utf-8'));
  console.log(`✓ Emails pendentes: ${pendingEmails.length}`);

  console.log('\n' + '-'.repeat(60));
  console.log('CONFIGURAÇÃO:');
  console.log('-'.repeat(60));
  console.log(`From: ${EMAIL_CONFIG.from}`);
  console.log(`To: ${EMAIL_CONFIG.to}`);
  console.log(`CC: ${EMAIL_CONFIG.cc.join(', ')}`);
  console.log(`BCC: ${pendingEmails.length} destinatários`);
  console.log(`Subject: ${EMAIL_CONFIG.subject}`);
  console.log(`Envio: IMEDIATO`);
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
      console.log('✗ Erro:', response.error.message);
    } else {
      console.log('✓ Enviado com sucesso! ID:', response.data?.id || 'N/A');
    }
  } catch (error) {
    console.log('✗ Exception:', error.message);
  }
}

main();
