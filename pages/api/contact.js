// pages/api/contact.js
import { supabase } from '../../lib/supabase';
import { sendContactEmail } from '../../lib/email';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed',
            message: 'This endpoint only accepts POST requests'
        });
    }

    try {
        const { name, email, phone, message, inquiryType } = req.body;

        // Validation
        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                error: 'Validation Error',
                message: 'Please fill in all required fields (Name, Email, Phone, Message).'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid Email',
                message: 'Please enter a valid email address.'
            });
        }

        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                error: 'Invalid Phone',
                message: 'Please enter a valid phone number.'
            });
        }

        // Store in Supabase
        const { data: contactData, error: dbError } = await supabase
            .from('contacts')
            .insert([
                {
                    name,
                    email,
                    phone,
                    message,
                    inquiry_type: inquiryType || 'general',
                    created_at: new Date().toISOString()
                }
            ])
            .select()
            .single();

        if (dbError) {
            console.error('Database error:', dbError);
            return res.status(500).json({
                error: 'Database Error',
                message: 'Failed to save contact information. Please try again.'
            });
        }

        // Send email notification (if email service is configured)
        try {
            await sendContactEmail({
                name,
                email,
                phone,
                message,
                inquiryType
            });
        } catch (emailError) {
            // Log email error but don't fail the request
            console.error('Email sending failed:', emailError);
            // You might want to store this in a queue for retry
        }

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Thank you for contacting us! We\'ll get back to you soon.',
            data: {
                id: contactData.id,
                name: contactData.name
            }
        });

    } catch (error) {
        console.error('Contact form submission error:', error);
        return res.status(500).json({
            error: 'Server Error',
            message: 'An unexpected error occurred. Please try again later.'
        });
    }
}

// Configure API route settings
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb', // Limit request body size
        },
    },
};