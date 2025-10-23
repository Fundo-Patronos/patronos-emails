import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend('re_Dsq9Z2TE_MtjNv8FbkLH7XCoGg3v37Wqp');

async function checkScheduledEmails() {
  try {
    console.log('🔍 Checking for scheduled emails in Resend...\n');

    // Try to list recent emails
    // Note: Resend API might not have a direct "list scheduled" endpoint
    // This will check recent emails to see their status

    const emails = await resend.emails.list({
      limit: 50,
    });

    console.log('📧 Recent emails found:', emails.data?.data?.length || 0);

    if (emails.data?.data && emails.data.data.length > 0) {
      console.log('\n📋 Email Status Summary:\n');

      const statusCounts = {
        scheduled: 0,
        sent: 0,
        delivered: 0,
        bounced: 0,
        failed: 0,
        other: 0,
      };

      emails.data.data.forEach((email, index) => {
        const status = email.last_event || 'unknown';

        // Count by status
        if (status === 'email.scheduled') statusCounts.scheduled++;
        else if (status === 'email.sent') statusCounts.sent++;
        else if (status === 'email.delivered') statusCounts.delivered++;
        else if (status === 'email.bounced') statusCounts.bounced++;
        else if (status === 'email.failed') statusCounts.failed++;
        else statusCounts.other++;

        // Show first 10 emails
        if (index < 10) {
          console.log(`${index + 1}. To: ${email.to} | Status: ${status} | Created: ${new Date(email.created_at).toLocaleString('pt-BR')}`);
        }
      });

      console.log('\n📊 Status Breakdown:');
      console.log(`   Scheduled: ${statusCounts.scheduled}`);
      console.log(`   Sent: ${statusCounts.sent}`);
      console.log(`   Delivered: ${statusCounts.delivered}`);
      console.log(`   Bounced: ${statusCounts.bounced}`);
      console.log(`   Failed: ${statusCounts.failed}`);
      console.log(`   Other: ${statusCounts.other}`);

      if (statusCounts.scheduled > 0) {
        console.log('\n⚠️  WARNING: You have ' + statusCounts.scheduled + ' scheduled emails still in queue!');
      } else {
        console.log('\n✅ No scheduled emails remaining in queue.');
      }
    } else {
      console.log('No emails found in recent history.');
    }

  } catch (error) {
    console.error('❌ Error checking scheduled emails:', error.message);

    if (error.message.includes('401') || error.message.includes('unauthorized')) {
      console.error('\n🔑 API key might be invalid or expired.');
    }

    throw error;
  }
}

// Run the function
checkScheduledEmails()
  .then(() => {
    console.log('\n✨ Check completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Check failed:', error);
    process.exit(1);
  });
