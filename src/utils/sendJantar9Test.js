/**
 * Send TEST emails for Jantar Executivos 9a Edicao to the test recipients.
 * Usage: RESEND_API_KEY=re_xxx node src/utils/sendJantar9Test.js
 */

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

const htmlPath = path.join(__dirname, '../../out/JantarExecutivos9Edicao.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

const testRecipients = [
  'renan.nardoni@patronos.org',
  'joao.camargos@patronos.org',
  'gustavo.beltrami@patronos.org',
];

const subject = '[TESTE] Convite: 9ª Edição do Jantar de Executivos - Fundo Patronos';

async function sendTests() {
  console.log('='.repeat(60));
  console.log('SENDING TEST EMAILS - Jantar Executivos 9ª Edição');
  console.log('='.repeat(60));
  console.log(`Recipients: ${testRecipients.length}`);
  console.log(`Subject: ${subject}`);
  console.log('='.repeat(60));

  for (const email of testRecipients) {
    try {
      const response = await resend.emails.send({
        from: 'Fundo Patronos <contato@patronos.org>',
        to: email,
        replyTo: 'gustavo.beltrami@patronos.org',
        subject: subject,
        html: html,
      });

      if (response.error) {
        console.log(`✗ ${email} — Erro: ${response.error.message}`);
      } else {
        console.log(`✓ ${email} — ID: ${response.data?.id}`);
      }

      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.log(`✗ ${email} — Exception: ${error.message}`);
    }
  }
}

sendTests();
