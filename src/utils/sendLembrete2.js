/**
 * Send Lembrete 2 - Voz do Doador 2026
 * Second reminder email for survey response
 *
 * Recipients: All 216 donors from CSV
 * Originally scheduled: Feb 19, 2026
 * Sending: Feb 22, 2026 (3 days late)
 */

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

const BATCH_SIZE = 47; // Max BCC (50 total - 1 TO - 2 CC)
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds

const EMAIL_CONFIG = {
  from: 'Fundo Patronos <contato@patronos.org>',
  to: 'contato@patronos.org',
  cc: ['gustavo.beltrami@patronos.org', 'lucas.yuhara@patronos.org'],
  replyTo: 'gustavo.beltrami@patronos.org',
  subject: 'Fundo Patronos - Lembrete: Pesquisa Voz do Doador 2026',
};

// Parse CSV and extract emails
function parseCSV(csvPath) {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());
  const emails = new Set();

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split(';');
    if (parts.length >= 2) {
      let emailPart = parts[1].trim().replace(/^"|"$/g, '').trim();
      const individualEmails = emailPart.split(/[;,]/).map(e => e.trim()).filter(e => e);
      for (const email of individualEmails) {
        if (email && email.includes('@') && !email.includes(' ')) {
          emails.add(email.toLowerCase());
        }
      }
    }
  }
  return Array.from(emails);
}

// Split into batches
function splitIntoBatches(array, batchSize) {
  const batches = [];
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }
  return batches;
}

// Sleep function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  console.log('='.repeat(60));
  console.log('LEMBRETE 2 - VOZ DO DOADOR 2026');
  console.log('='.repeat(60));

  // Load HTML template
  const htmlPath = path.join(__dirname, '../../out/VozDoDoadorLembrete.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('ERROR: Template not found. Run "npx email export" first.');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf-8');
  console.log(`\n✓ Template carregado: ${(html.length / 1024).toFixed(2)} KB`);

  // Parse CSV
  const csvPath = path.join(__dirname, '../../Patronos_Base_Email_Doadores_2026.csv');
  if (!fs.existsSync(csvPath)) {
    console.error('ERROR: CSV file not found.');
    process.exit(1);
  }
  const allEmails = parseCSV(csvPath);
  console.log(`✓ Total de emails: ${allEmails.length}`);

  const batches = splitIntoBatches(allEmails, BATCH_SIZE);
  console.log(`✓ Número de lotes: ${batches.length}`);

  console.log('\n' + '-'.repeat(60));
  console.log('CONFIGURAÇÃO:');
  console.log('-'.repeat(60));
  console.log(`From: ${EMAIL_CONFIG.from}`);
  console.log(`To: ${EMAIL_CONFIG.to}`);
  console.log(`CC: ${EMAIL_CONFIG.cc.join(', ')}`);
  console.log(`Reply-To: ${EMAIL_CONFIG.replyTo}`);
  console.log(`Subject: ${EMAIL_CONFIG.subject}`);
  console.log(`Total destinatários (BCC): ${allEmails.length}`);
  console.log(`Número de lotes: ${batches.length}`);
  console.log('-'.repeat(60));

  console.log('\n⚠️  Iniciando envio em 5 segundos...');
  console.log('   Press Ctrl+C to cancel.\n');
  await sleep(5000);

  let successCount = 0;
  let errorCount = 0;
  const failedBatches = [];

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`\nEnviando lote ${i + 1}/${batches.length} (${batch.length} destinatários)...`);

    try {
      const response = await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: EMAIL_CONFIG.to,
        cc: EMAIL_CONFIG.cc,
        bcc: batch,
        replyTo: EMAIL_CONFIG.replyTo,
        subject: EMAIL_CONFIG.subject,
        html: html,
      });

      if (response.error) {
        console.log(`  ✗ Erro: ${response.error.message}`);
        errorCount++;
        failedBatches.push({ batchIndex: i + 1, emails: batch, error: response.error.message });
      } else {
        console.log(`  ✓ Enviado! ID: ${response.data?.id || 'N/A'}`);
        successCount++;
      }
    } catch (error) {
      console.log(`  ✗ Exception: ${error.message}`);
      errorCount++;
      failedBatches.push({ batchIndex: i + 1, emails: batch, error: error.message });
    }

    if (i < batches.length - 1) {
      console.log(`  Aguardando ${DELAY_BETWEEN_BATCHES / 1000}s...`);
      await sleep(DELAY_BETWEEN_BATCHES);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('RESUMO - LEMBRETE 2');
  console.log('='.repeat(60));
  console.log(`Total de lotes: ${batches.length}`);
  console.log(`Sucesso: ${successCount}`);
  console.log(`Falhas: ${errorCount}`);
  console.log(`Total de destinatários: ${allEmails.length}`);
  console.log('='.repeat(60));

  // Save failed batches if any
  if (failedBatches.length > 0) {
    const pendingEmails = failedBatches.flatMap(b => b.emails);
    const pendingPath = path.join(__dirname, '../../pending_lembrete2.json');
    fs.writeFileSync(pendingPath, JSON.stringify(pendingEmails, null, 2));
    console.log(`\n⚠️  ${pendingEmails.length} emails pendentes salvos em: pending_lembrete2.json`);
  }
}

main().catch(console.error);
