/**
 * Send Voz do Doador survey email to all donors
 * Uses BCC to send in batches
 */

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration
const BATCH_SIZE = 47; // Max recipients per BCC batch (50 total - 1 TO - 2 CC = 47)
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds between batches

// Email configuration
const EMAIL_CONFIG = {
  from: 'Fundo Patronos <contato@patronos.org>',
  to: 'contato@patronos.org',
  cc: ['gustavo.beltrami@patronos.org', 'lucas.yuhara@patronos.org'],
  replyTo: 'gustavo.beltrami@patronos.org',
  subject: 'Fundo Patronos - Pesquisa Voz do Doador 2026 - Queremos ouvir você!',
};

// Parse CSV and extract emails
function parseCSV(csvPath) {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());

  const emails = new Set();

  // Skip header line
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Handle semicolon delimiter and potential quoted fields
    const parts = line.split(';');
    if (parts.length >= 2) {
      let emailPart = parts[1].trim();

      // Remove quotes if present
      emailPart = emailPart.replace(/^"/, '').replace(/"$/, '').trim();

      // Handle multiple emails separated by ; or ,
      const individualEmails = emailPart.split(/[;,]/).map(e => e.trim()).filter(e => e);

      for (const email of individualEmails) {
        // Basic email validation
        if (email && email.includes('@') && !email.includes(' ')) {
          emails.add(email.toLowerCase());
        }
      }
    }
  }

  return Array.from(emails);
}

// Split array into batches
function splitIntoBatches(array, batchSize) {
  const batches = [];
  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }
  return batches;
}

// Sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('VOZ DO DOADOR - EMAIL SENDER');
  console.log('='.repeat(60));

  // Read HTML template
  const htmlPath = path.join(__dirname, '../../out/VozDoDoador.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('ERROR: HTML template not found. Run "npx email export" first.');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf-8');
  console.log(`\n✓ Template loaded: ${(html.length / 1024).toFixed(2)} KB`);

  // Parse CSV
  const csvPath = path.join(__dirname, '../../Patronos_Base_Email_Doadores_2026.csv');
  if (!fs.existsSync(csvPath)) {
    console.error('ERROR: CSV file not found.');
    process.exit(1);
  }
  const allEmails = parseCSV(csvPath);
  console.log(`✓ Total unique emails found: ${allEmails.length}`);

  // Split into batches
  const batches = splitIntoBatches(allEmails, BATCH_SIZE);
  console.log(`✓ Split into ${batches.length} batches of up to ${BATCH_SIZE} recipients each`);

  console.log('\n' + '-'.repeat(60));
  console.log('EMAIL CONFIGURATION:');
  console.log('-'.repeat(60));
  console.log(`From: ${EMAIL_CONFIG.from}`);
  console.log(`To: ${EMAIL_CONFIG.to}`);
  console.log(`CC: ${EMAIL_CONFIG.cc.join(', ')}`);
  console.log(`Reply-To: ${EMAIL_CONFIG.replyTo}`);
  console.log(`Subject: ${EMAIL_CONFIG.subject}`);
  console.log(`Total recipients (BCC): ${allEmails.length}`);
  console.log(`Number of batches: ${batches.length}`);
  console.log('-'.repeat(60));

  // Confirm before sending
  console.log('\n⚠️  Ready to send. Starting in 5 seconds...');
  console.log('    Press Ctrl+C to cancel.\n');
  await sleep(5000);

  // Send batches
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`\nSending batch ${i + 1}/${batches.length} (${batch.length} recipients)...`);

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
        console.error(`  ✗ Error: ${response.error.message}`);
        errorCount++;
      } else {
        console.log(`  ✓ Sent successfully! ID: ${response.data?.id || 'N/A'}`);
        successCount++;
      }
    } catch (error) {
      console.error(`  ✗ Exception: ${error.message}`);
      errorCount++;
    }

    // Wait between batches (except for the last one)
    if (i < batches.length - 1) {
      console.log(`  Waiting ${DELAY_BETWEEN_BATCHES / 1000}s before next batch...`);
      await sleep(DELAY_BETWEEN_BATCHES);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total batches: ${batches.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${errorCount}`);
  console.log(`Total recipients covered: ${allEmails.length}`);
  console.log('='.repeat(60));
}

main().catch(console.error);
