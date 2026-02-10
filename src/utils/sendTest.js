/**
 * Send TEST email - Always adds [TESTE] prefix to subject
 * Usage: RESEND_API_KEY=re_xxx node src/utils/sendTest.js <template> <email> <subject>
 *
 * Example:
 *   node src/utils/sendTest.js VozDoDoador gustavo.beltrami@patronos.org "Fundo Patronos - Pesquisa"
 */

import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTest() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: node src/utils/sendTest.js <template> <email> <subject>');
    console.log('Example: node src/utils/sendTest.js VozDoDoador gustavo@email.com "Subject here"');
    process.exit(1);
  }

  const [template, email, subject] = args;
  const htmlPath = path.join(__dirname, `../../out/${template}.html`);

  if (!fs.existsSync(htmlPath)) {
    console.error(`Template not found: ${htmlPath}`);
    console.log('Run "npx email export" first.');
    process.exit(1);
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');

  // ALWAYS add [TESTE] prefix for test emails
  const testSubject = `[TESTE] ${subject}`;

  console.log('='.repeat(50));
  console.log('SENDING TEST EMAIL');
  console.log('='.repeat(50));
  console.log(`To: ${email}`);
  console.log(`Subject: ${testSubject}`);
  console.log(`Template: ${template}`);
  console.log('='.repeat(50));

  try {
    const response = await resend.emails.send({
      from: 'Fundo Patronos <contato@patronos.org>',
      to: email,
      subject: testSubject,
      html: html,
    });

    if (response.error) {
      console.log('✗ Erro:', response.error.message);
    } else {
      console.log('✓ Enviado com sucesso! ID:', response.data?.id);
    }
  } catch (error) {
    console.log('✗ Exception:', error.message);
  }
}

sendTest();
