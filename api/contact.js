import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },

    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'nadinerufo7@gmail.com',
        replyTo: email,
        subject: `New message from ${name}`,
        text: message,
        html: `
            <div style="
                font-family: 'Poppins', Arial, sans-serif;
                max-width: 600px;
                margin: 0 auto;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            ">
                <h2 style="color: #4077DE; margin-top: 0; margin-bottom: 1rem;">New Message from Portfolio Contact Form</h2>
                <hr style="border: none; border-top: 1px solid #eee; margin: 10px 0;">
                <p style="margin: 0.5rem 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0.5rem 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 0.5rem 0;"><strong>Message:</strong></p>
                <div style="
                    padding: 12px;
                    background-color: #f9f9f9;
                    border-left: 4px solid #4077DE;
                    border-radius: 4px;
                    white-space: pre-wrap;
                ">
                    ${message}
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 0.8rem; color: #888; text-align: center; margin: 0;">
                    This message was sent via your portfolio contact form.
                </p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email send failed:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
}
