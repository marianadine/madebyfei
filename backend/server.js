const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nadinerufo7@gmail.com',
            pass: 'jmxt ijsn uwsr szle',
        },
    });

    const mailOptions = {
        from: email,
        to: 'YOUR_GMAIL@gmail.com',
        subject: `New message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email send failed:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
