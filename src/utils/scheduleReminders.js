/**
 * Schedule 4 reminders for Voz do Doador survey
 * Sends to all 216 donors, 5 days apart
 *
 * Schedule (10:00 AM Brasilia time):
 * - Lembrete 1: Feb 14, 2026
 * - Lembrete 2: Feb 19, 2026
 * - Lembrete 3: Feb 24, 2026
 * - Lembrete 4: Mar 1, 2026
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

// Schedule dates (10:00 AM Brasilia = 13:00 UTC)
const REMINDER_DATES = [
  { name: 'Lembrete 1', date: '2026-02-14T13:00:00Z' },
  { name: 'Lembrete 2', date: '2026-02-19T13:00:00Z' },
  { name: 'Lembrete 3', date: '2026-02-24T13:00:00Z' },
  { name: 'Lembrete 4', date: '2026-03-01T13:00:00Z' },
];

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
  console.log('AGENDAMENTO DE LEMBRETES - VOZ DO DOADOR 2026');
  console.log('='.repeat(60));

  // Load HTML template
  const htmlPath = path.join(__dirname, '../../out/VozDoDoadorLembrete.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  console.log(`\n✓ Template carregado: ${(html.length / 1024).toFixed(2)} KB`);

  // Parse CSV
  const csvPath = path.join(__dirname, '../../Patronos_Base_Email_Doadores_2026.csv');
  const allEmails = parseCSV(csvPath);
  console.log(`✓ Total de emails: ${allEmails.length}`);

  const batches = splitIntoBatches(allEmails, BATCH_SIZE);
  console.log(`✓ Lotes por lembrete: ${batches.length}`);

  console.log('\n' + '-'.repeat(60));
  console.log('CRONOGRAMA:');
  console.log('-'.repeat(60));
  REMINDER_DATES.forEach(r => {
    const dateStr = new Date(r.date).toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short',
      timeStyle: 'short'
    });
    console.log(`${r.name}: ${dateStr}`);
  });
  console.log('-'.repeat(60));

  console.log('\n⚠️  Iniciando agendamento em 5 segundos...');
  console.log('   Press Ctrl+C to cancel.\n');
  await sleep(5000);

  // Schedule each reminder
  for (const reminder of REMINDER_DATES) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`AGENDANDO: ${reminder.name}`);
    console.log(`Data: ${new Date(reminder.date).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`);
    console.log('='.repeat(60));

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      console.log(`  Lote ${i + 1}/${batches.length} (${batch.length} destinatários)...`);

      try {
        const response = await resend.emails.send({
          from: EMAIL_CONFIG.from,
          to: EMAIL_CONFIG.to,
          cc: EMAIL_CONFIG.cc,
          bcc: batch,
          replyTo: EMAIL_CONFIG.replyTo,
          subject: EMAIL_CONFIG.subject,
          html: html,
          scheduledAt: reminder.date,
        });

        if (response.error) {
          console.log(`    ✗ Erro: ${response.error.message}`);
          errorCount++;
        } else {
          console.log(`    ✓ Agendado! ID: ${response.data?.id || 'N/A'}`);
          successCount++;
        }
      } catch (error) {
        console.log(`    ✗ Exception: ${error.message}`);
        errorCount++;
      }

      if (i < batches.length - 1) {
        await sleep(DELAY_BETWEEN_BATCHES);
      }
    }

    console.log(`\n  Resumo ${reminder.name}: ${successCount} OK, ${errorCount} falhas`);

    // Wait between reminders to avoid rate limits
    if (reminder !== REMINDER_DATES[REMINDER_DATES.length - 1]) {
      console.log('  Aguardando 3s antes do próximo lembrete...');
      await sleep(3000);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('AGENDAMENTO CONCLUÍDO');
  console.log('='.repeat(60));
  console.log(`Total de lembretes: ${REMINDER_DATES.length}`);
  console.log(`Total de lotes por lembrete: ${batches.length}`);
  console.log(`Total de destinatários: ${allEmails.length}`);
  console.log('='.repeat(60));
}

main().catch(console.error);
