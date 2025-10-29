import { Resend } from 'resend';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Resend with API key
const resend = new Resend('re_Dsq9Z2TE_MtjNv8FbkLH7XCoGg3v37Wqp');

// Recipient list
const recipients = [
  'agnesbq@icloud.com',
  'andrebosque@hotmail.com',
  'aristotelesnf@gmail.com',
  'danielmendoncabarros@gmail.com',
  'ecrolim@gmail.com',
  'erica.jannini@gmail.com',
  'gabriel.neves@patronos.org',
  'grrolim@gmail.com',
  'hbiscolla@alvarezandmarsal.com',
  'hrmascarenhas@uol.com.br',
  'julia.monteiro@patronos.org',
  'lucas.yuhara@patronos.org',
  'mhiran@galapagoscapital.com',
  'micaram@gmail.com',
  'pedro.mota@nubank.com.br',
  'pedro.mota@patronos.org',
  'rodrigo.ferroni@gmail.com',
  'sabrinasutto@hotmail.com',
  'tulio.prado@patronos.org',
];

// Calculate scheduled time: Today at 7:00 PM Brasilia time
function getScheduledTime() {
  const now = new Date();

  // Create date for today at 7:00 PM in Brasilia timezone (UTC-3)
  const scheduledDate = new Date(now);

  // Set to 7:00 PM Brasilia time
  // Brasilia is typically UTC-3 (BRT/BRST)
  const saoPauloOffset = -3; // UTC-3
  const localOffset = scheduledDate.getTimezoneOffset() / 60; // Local offset in hours

  scheduledDate.setHours(19, 0, 0, 0); // 7:00 PM local

  // Adjust for timezone difference if needed
  // For now, assuming you're running this from Brasilia

  console.log('📅 Scheduled for:', scheduledDate.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }));

  return scheduledDate.toISOString();
}

async function sendScheduledBatch() {
  try {
    console.log('📧 Preparing to schedule batch email send...\n');

    // Read the exported HTML file
    const emailHtmlPath = join(__dirname, '../../out/InstrucoesDoacao.html');
    const emailHtml = readFileSync(emailHtmlPath, 'utf-8');

    console.log('✅ Email HTML loaded successfully');
    console.log(`📊 Email HTML size: ${(emailHtml.length / 1024).toFixed(2)} KB`);
    console.log(`👥 Recipients: ${recipients.length}`);

    const scheduledAt = getScheduledTime();
    console.log(`⏰ Scheduled for: ${scheduledAt}\n`);

    const results = {
      success: [],
      failed: [],
    };

    // Send individual email to each recipient
    for (let i = 0; i < recipients.length; i++) {
      const recipient = recipients[i];

      try {
        console.log(`📤 [${i + 1}/${recipients.length}] Scheduling email to: ${recipient}`);

        const data = await resend.emails.send({
          from: 'Fundo Patronos <contato@patronos.org>',
          to: [recipient],
          cc: ['gustavo.beltrami@patronos.org'],
          replyTo: 'gustavo.beltrami@patronos.org',
          subject: 'Fundo Patronos - Como fazer sua contribuição',
          html: emailHtml,
          scheduledAt: scheduledAt,
        });

        results.success.push({
          email: recipient,
          id: data.id,
        });

        console.log(`   ✅ Scheduled successfully (ID: ${data.id})`);

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`   ❌ Failed: ${error.message}`);
        results.failed.push({
          email: recipient,
          error: error.message,
        });
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 BATCH SEND SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully scheduled: ${results.success.length}`);
    console.log(`❌ Failed: ${results.failed.length}`);
    console.log(`📧 Total recipients: ${recipients.length}`);

    if (results.failed.length > 0) {
      console.log('\n❌ Failed recipients:');
      results.failed.forEach(({ email, error }) => {
        console.log(`   - ${email}: ${error}`);
      });
    }

    console.log('\n⏰ All emails scheduled for: ' + new Date(scheduledAt).toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'full',
      timeStyle: 'short',
    }));

    return results;
  } catch (error) {
    console.error('❌ Error in batch send:', error.message);
    throw error;
  }
}

// Run the function
sendScheduledBatch()
  .then(() => {
    console.log('\n✨ Batch scheduling completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Batch scheduling failed:', error);
    process.exit(1);
  });
