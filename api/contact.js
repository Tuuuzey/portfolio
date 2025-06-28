import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Bot" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Wiadomość z portfolio: ${title}`,
      text: message,
    });

    return res.status(200).json({ message: 'EMAIL WAS SENT SUCCESSFULLY!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'AN ERROR OCCURRED.' });
  }
}
