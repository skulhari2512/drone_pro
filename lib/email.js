// email-service.js
// lib/email.js
export const EmailConfig = {
    admin: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'cooper@dronecareerpro.com',
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'cooper@dronecareerpro.com',
};
  
const callEmailFunction = async (type, data) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/resend-email`;

  let emailData;
  if (type === 'contact') {
    emailData = {
      from: 'onboarding@dronecareerpro.com',
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
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData)
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Email function error:', error);
    throw new Error(error);
  }

  return await response.json();
};

export const sendContactEmail = async (params) => {
  try {
    return await callEmailFunction('contact', params);
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw error;
  }
};