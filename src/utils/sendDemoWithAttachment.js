import { Resend } from 'resend';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Resend with API key
const resend = new Resend('re_Dsq9Z2TE_MtjNv8FbkLH7XCoGg3v37Wqp');

// Lista de destinatários
const recipients = [
  'joao.camargos@patronos.org',
  'gabriel.neves@patronos.org',
  'lucas.yuhara@patronos.org',
];

async function sendEmailWithAttachment(recipientEmail) {
  try {
    console.log(`\n📧 Preparando email para ${recipientEmail}...`);

    // Read the exported HTML file
    const emailHtmlPath = join(__dirname, '../../out/DemoPatronos.html');
    const emailHtml = readFileSync(emailHtmlPath, 'utf-8');

    // Read PDF attachment
    const pdfPath = join(__dirname, '../../public/documents/Convite Jantar de Executivos 6a Edicao - Fundo Patronos.pdf');
    const pdfBuffer = readFileSync(pdfPath);

    console.log('✅ Email HTML carregado');
    console.log('✅ PDF anexo carregado');
    console.log(`📊 Tamanho do email: ${(emailHtml.length / 1024).toFixed(2)} KB`);
    console.log(`📊 Tamanho do PDF: ${(pdfBuffer.length / 1024).toFixed(2)} KB`);

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Fundo Patronos <contato@patronos.org>',
      to: [recipientEmail],
      cc: ['gustavo.beltrami@patronos.org'],
      replyTo: 'gustavo.beltrami@patronos.org',
      subject: 'Fundo Patronos - Apoie a Excelência Acadêmica da Unicamp',
      html: emailHtml,
      attachments: [
        {
          filename: 'Convite Jantar de Executivos 6a Edicao - Fundo Patronos.pdf',
          content: pdfBuffer,
        },
      ],
    });

    console.log(`✅ Email enviado com sucesso para ${recipientEmail}`);
    console.log(`📬 Email ID: ${data.id || 'N/A'}`);

    return data;
  } catch (error) {
    console.error(`❌ Erro ao enviar email para ${recipientEmail}:`, error.message);
    throw error;
  }
}

async function sendAllEmails() {
  console.log('🚀 Iniciando envio de emails...');
  console.log(`📋 Total de destinatários: ${recipients.length}`);
  console.log('📎 Anexo: Convite Jantar de Executivos 6a Edicao - Fundo Patronos.pdf');
  console.log('📧 CC: gustavo.beltrami@patronos.org\n');

  let successCount = 0;
  let errorCount = 0;

  for (const recipient of recipients) {
    try {
      await sendEmailWithAttachment(recipient);
      successCount++;

      // Delay de 100ms entre emails para evitar rate limiting
      if (recipients.indexOf(recipient) < recipients.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      errorCount++;
      console.error(`💥 Falha no envio para ${recipient}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMO DO ENVIO');
  console.log('='.repeat(60));
  console.log(`✅ Emails enviados com sucesso: ${successCount}`);
  console.log(`❌ Emails com erro: ${errorCount}`);
  console.log(`📧 Total de destinatários: ${recipients.length}`);
  console.log('='.repeat(60));

  if (successCount === recipients.length) {
    console.log('\n🎉 Todos os emails foram enviados com sucesso!');
  } else {
    console.log('\n⚠️  Alguns emails falharam. Verifique os logs acima.');
  }
}

// Run the function
sendAllEmails()
  .then(() => {
    console.log('\n✨ Processo concluído!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Erro geral no processo:', error);
    process.exit(1);
  });
