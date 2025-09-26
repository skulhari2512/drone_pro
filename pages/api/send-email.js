export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { type, data } = req.body;

    try {
        // In production, integrate with your email service (SendGrid, Resend, etc.)
        // For now, we'll just log and return success

        if (type === 'contact') {
            // Format and send contact email
            const emailContent = {
                to: process.env.ADMIN_EMAIL || 'cooper@dronecareerpro.au',
                subject: `New Contact Form Submission from ${data.name}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Inquiry Type:</strong> ${data.inquiryType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p>Received at: ${new Date().toLocaleString()}</p>
        `
            };

            // TODO: Integrate with actual email service
            console.log('Sending email:', emailContent);

            return res.status(200).json({
                success: true,
                message: 'Email sent successfully'
            });
        }

        return res.status(400).json({ error: 'Invalid email type' });

    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({
            error: 'Failed to send email',
            message: error.message
        });
    }
}