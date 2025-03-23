// const express = require('express');
// const bodyParser = require('body-parser');
// const { Resend } = require('resend');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// const resend = new Resend('re_3FQj7ZND_FuH2cLAkExtnE7zPUmkTgWkm');

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { name, email, intent, message } = req.body;

//   try {
//     await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'rodlester.moreno23@gmail.com',
//       subject: `New message from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Intent:</strong> ${intent}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Error sending email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// filepath: c:\Users\blackmofan\Desktop\work\Portfolio Website\blackmofan-homepage\api\send-email.js
const { Resend } = require('resend');

const resend = new Resend('re_3FQj7ZND_FuH2cLAkExtnE7zPUmkTgWkm');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, intent, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rodlester.moreno23@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Intent:</strong> ${intent}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};