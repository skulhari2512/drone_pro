// email-service.js
export const EmailConfig = {
    admin: process.env.REACT_APP_ADMIN_EMAIL || 'cooper@dronecareerpro.au',
    contact: process.env.REACT_APP_CONTACT_EMAIL || 'cooper@dronecareerpro.au',
};
  
// Helper function to call the send-email edge function
const callEmailFunction = async (type, data) => {
  const apiUrl = `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/resend-email`;

  // Prepare email content based on type
  let emailData;
  if (type === 'contact') {
    emailData = {
      from: 'onboarding@dronecareerpro.com', // Should be a verified domain in Resend
      to: EmailConfig.admin,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Inquiry Type:</strong> ${data.inquiry_type || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `
    };
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData)
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Email function error:', error);
    throw new Error(error);
  }

  const result = await response.json();
  return result;
};

export const sendContactEmail = async (params) => {
  try {
    const result = await callEmailFunction('contact', params);
    return result;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw error;
  }
};