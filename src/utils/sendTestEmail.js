import { Resend } from 'resend';
import { render } from '@react-email/render';
import JantarExecutivos6Edicao from '../../emails/JantarExecutivos6Edicao.jsx';

// Initialize Resend with API key
const resend = new Resend('re_Dsq9Z2TE_MtjNv8FbkLH7XCoGg3v37Wqp');

async function sendTestEmail() {
  try {
    console.log('📧 Preparing to send test email...\n');

    // Render the email template to HTML
    const emailHtml = await render(JantarExecutivos6Edicao());

    console.log('✅ Email template rendered successfully');
    console.log(`📊 Email HTML size: ${(emailHtml.length / 1024).toFixed(2)} KB\n`);

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Fundo Patronos <contato@patronos.org>',
      to: ['gustavo.beltrami@patronos.org'],
      cc: ['gustavo.beltrami@patronos.org'],
      replyTo: 'gustavo.beltrami@patronos.org',
      subject: '6ª Edição do Jantar de Executivos - Obrigado!',
      html: emailHtml,
    });

    console.log('✅ Email sent successfully!');
    console.log('📬 Email ID:', data.id);
    console.log('\n📋 Email details:');
    console.log('  From: Fundo Patronos <contato@patronos.org>');
    console.log('  To: gustavo.beltrami@patronos.org');
    console.log('  CC: gustavo.beltrami@patronos.org');
    console.log('  Reply-to: gustavo.beltrami@patronos.org');
    console.log('  Subject: 6ª Edição do Jantar de Executivos - Obrigado!');

    return data;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
    throw error;
  }
}

// Run the function
sendTestEmail()
  .then(() => {
    console.log('\n✨ Test email sent successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Failed to send test email:', error);
    process.exit(1);
  });
