import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env`,
});

const emailFrom = `${process.env.MAIL_FROM}`;
const emailTo = `${process.env.MAIL_TO}`;
const emailToPass = `${process.env.MAIL_PASS}`;

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const dickPick: string | null = request.body.dickPick.replace(
    `data:image/png;base64,`,
    ``
  );

  if (!dickPick) {
    return response.status(400).json({ error: `No dick in the body` });
  }

  const transporter = nodemailer.createTransport({
    service: `gmail`,
    auth: {
      user: emailFrom,
      pass: emailToPass,
    },
  });

  const mailOptions = {
    from: emailFrom,
    to: emailTo,
    subject: `Vous avez reçu une nouvelle oeuvre d'art`,
    html: `<html><body><h1>Test Email</h1><img src="data:image/png;base64,${dickPick}" /></body></html>`,
    attachments: [
      {
        filename: `oh_quelle_est_belle.png`,
        content: Buffer.from(dickPick, `base64`),
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
      return response.status(500).json({ error: `Failed to send email` });
    } else {
      console.log(`Email sent: ` + info.response);
      return new Response(JSON.stringify(info.response), {
        status: 200,
      });
    }
  });
}
