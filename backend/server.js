import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// SMTP Transporter setup with Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL || 'pmahi7801@gmail.com',
    pass: (process.env.SMTP_PASS || 'vylt vkwb teck pxtl').replace(/\s+/g, '') // remove spaces from Google App Password
  }
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Error:', error.message);
  } else {
    console.log('✅ SMTP Transporter connected successfully! Ready to deliver emails.');
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Sai Krishna Photography SMTP Server',
    timestamp: new Date().toISOString()
  });
});

// Contact / Booking Inquiry endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, inquiryType, message, eventDate } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required.'
      });
    }

    const recipientEmail = process.env.ADMIN_EMAIL || 'pmahi7801@gmail.com';

    // 1. Luxury HTML notification email to Studio Admin
    const adminMailOptions = {
      from: `"Sai Krishna Photography Website" <${process.env.SMTP_EMAIL || 'pmahi7801@gmail.com'}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `✨ New Inquiry: ${name} (${inquiryType || 'General Inquiry'})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #0c0a08; color: #f5f3ef; margin: 0; padding: 24px; }
            .card { max-width: 600px; margin: 0 auto; background-color: #161310; border: 1px solid #d4af37; padding: 32px; border-radius: 4px; }
            .header { text-align: center; border-bottom: 1px solid #2a2520; padding-bottom: 20px; margin-bottom: 24px; }
            .brand { font-size: 20px; letter-spacing: 4px; color: #d4af37; text-transform: uppercase; font-weight: bold; }
            .subtitle { font-size: 11px; letter-spacing: 2px; color: #a39e93; text-transform: uppercase; margin-top: 4px; }
            .field-group { margin-bottom: 18px; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #d4af37; margin-bottom: 4px; }
            .value { font-size: 15px; color: #f5f3ef; line-height: 1.5; background: #0c0a08; padding: 10px 14px; border-left: 2px solid #d4af37; }
            .message-box { font-size: 14px; color: #f5f3ef; line-height: 1.6; background: #0c0a08; padding: 14px; border: 1px solid #2a2520; }
            .footer { text-align: center; font-size: 11px; color: #6d675e; margin-top: 28px; border-top: 1px solid #2a2520; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="brand">Sai Krishna Photography</div>
              <div class="subtitle">New Client Inquiry Submission</div>
            </div>

            <div class="field-group">
              <div class="label">Client Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="field-group">
              <div class="label">Client Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></div>
            </div>

            ${phone ? `
            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a></div>
            </div>` : ''}

            <div class="field-group">
              <div class="label">Inquiry / Service Type</div>
              <div class="value">${inquiryType || 'Not Specified'}</div>
            </div>

            ${eventDate ? `
            <div class="field-group">
              <div class="label">Event Date</div>
              <div class="value">${eventDate}</div>
            </div>` : ''}

            <div class="field-group">
              <div class="label">Client's Story / Message</div>
              <div class="message-box">${message ? message.replace(/\n/g, '<br>') : 'No specific message provided.'}</div>
            </div>

            <div class="footer">
              Sent via Sai Krishna Photography Website • Direct Reply enabled
            </div>
          </div>
        </body>
        </html>
      `
    };

    // 2. Luxury confirmation receipt to client
    const clientMailOptions = {
      from: `"Sai Krishna Photography" <${process.env.SMTP_EMAIL || 'pmahi7801@gmail.com'}>`,
      to: email,
      subject: `Thank you for reaching out, ${name} — Sai Krishna Photography`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #0c0a08; color: #f5f3ef; margin: 0; padding: 24px; }
            .card { max-width: 580px; margin: 0 auto; background-color: #161310; border: 1px solid #d4af37; padding: 32px; }
            .header { text-align: center; border-bottom: 1px solid #2a2520; padding-bottom: 20px; margin-bottom: 24px; }
            .brand { font-size: 20px; letter-spacing: 4px; color: #d4af37; text-transform: uppercase; font-weight: bold; }
            .greeting { font-size: 16px; color: #f5f3ef; margin-bottom: 16px; font-weight: 300; }
            .text { font-size: 14px; color: #c4bfb6; line-height: 1.7; margin-bottom: 20px; }
            .highlight { color: #d4af37; font-weight: 500; }
            .footer { text-align: center; font-size: 11px; color: #6d675e; margin-top: 28px; border-top: 1px solid #2a2520; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="brand">Sai Krishna Photography</div>
            </div>
            <div class="greeting">Dear ${name},</div>
            <p class="text">
              Thank you for considering <span class="highlight">Sai Krishna Photography</span> to capture your special moments. We have successfully received your inquiry for <strong style="color:#d4af37;">${inquiryType || 'our signature services'}</strong>.
            </p>
            <p class="text">
              Our creative director and booking team are reviewing your details and will get in touch with you shortly with our availability, pricing, and bespoke packages.
            </p>
            <p class="text">
              In the meantime, feel free to explore our full cinematic showreels on our website or connect with us directly on WhatsApp for immediate dates check.
            </p>
            <div class="footer">
              Warm regards,<br>
              <strong style="color: #d4af37;">Sai Krishna Photography Studio</strong><br>
              Phone: +91 91775 88567 • Email: pmahi7801@gmail.com
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send admin notification
    await transporter.sendMail(adminMailOptions);

    // Send client acknowledgment (silently ignore client send failure if invalid client email)
    try {
      await transporter.sendMail(clientMailOptions);
    } catch (clientErr) {
      console.warn('Client receipt delivery skipped:', clientErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry sent successfully! We will connect with you shortly.'
    });

  } catch (error) {
    console.error('❌ Error processing inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send inquiry. Please try again or reach out on WhatsApp.',
      error: error.message
    });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Sai Krishna Photography SMTP Server running on port ${PORT}`);
  console.log(`📧 Configured with Gmail SMTP: ${process.env.SMTP_EMAIL || 'pmahi7801@gmail.com'}`);
});
