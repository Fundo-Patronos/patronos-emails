/**
 * Send Lembrete 1 - Remaining 31 recipients
 * Run after quota resets (Feb 17, 2026)
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

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  console.log('='.repeat(60));
  console.log('LEMBRETE 1 - PENDENTES (31 recipients)');
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
  const pendingPath = path.join(__dirname, '../../pending_lembrete1_28.json');
  if (!fs.existsSync(pendingPath)) {
    console.error('ERROR: pending_lembrete1_28.json not found.');
    process.exit(1);
  }
  const pendingEmails = JSON.parse(fs.readFileSync(pendingPath, 'utf-8'));
  console.log(`✓ Emails pendentes: ${pendingEmails.length}`);

  console.log('\n' + '-'.repeat(60));
  console.log('CONFIGURAÇÃO:');
  console.log('-'.repeat(60));
  console.log(`From: ${EMAIL_CONFIG.from}`);
  console.log(`Subject: ${EMAIL_CONFIG.subject}`);
  console.log(`Total destinatários (BCC): ${pendingEmails.length}`);
  console.log('-'.repeat(60));

  console.log('\n⚠️  Iniciando envio em 5 segundos...');
  console.log('   Press Ctrl+C to cancel.\n');
  await sleep(5000);

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
      console.log(`✗ Erro: ${response.error.message}`);
    } else {
      console.log(`✓ Enviado! ID: ${response.data?.id || 'N/A'}`);
      console.log(`\n✅ Lembrete 1 completo! Todos os 216 doadores receberam o email.`);
    }
  } catch (error) {
    console.log(`✗ Exception: ${error.message}`);
  }
}

main().catch(console.error);
