// pages/api/contact.js
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed',
            message: 'This endpoint only accepts POST requests'
        });
    }

    try {
        // Create Supabase client with anon key (public access)
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        console.log('🔑 Supabase URL:', supabaseUrl ? 'Set' : 'MISSING');
        console.log('🔑 Supabase Anon Key:', supabaseAnonKey ? 'Set (length: ' + supabaseAnonKey.length + ')' : 'MISSING');

        if (!supabaseUrl || !supabaseAnonKey) {
            return res.status(500).json({
                error: 'Configuration Error',
                message: 'Supabase credentials are not configured'
            });
        }

        const supabase = createClient(supabaseUrl, supabaseAnonKey);

        const { name, email, phone, message, inquiryType } = req.body;

        console.log('📝 Received contact form:', { name, email, phone, inquiryType });

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

        // Prepare data for insertion
        const insertData = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            message: message.trim(),
            inquiry_type: inquiryType || null,
        };

        console.log('💾 Attempting to insert:', insertData);

        // Store in Supabase
        const { data: contactData, error: dbError } = await supabase
            .from('contact_us')
            .insert([insertData])
            .select()
            .single();

        if (dbError) {
            console.error('❌ Database error:', {
                message: dbError.message,
                details: dbError.details,
                hint: dbError.hint,
                code: dbError.code,
            });

            return res.status(500).json({
                error: 'Database Error',
                message: `Failed to save contact information: ${dbError.message}`,
                details: dbError.hint || dbError.details || 'Please check your database configuration'
            });
        }

        console.log('✅ Contact saved successfully:', contactData?.id);

        return res.status(200).json({
            success: true,
            message: "Thank you for contacting us! We'll get back to you within 24 hours.",
            data: {
                id: contactData?.id,
                name: contactData?.name
            }
        });

    } catch (error) {
        console.error('❌ Server error:', error);
        return res.status(500).json({
            error: 'Server Error',
            message: error.message || 'An unexpected error occurred. Please try again later.',
        });
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
};