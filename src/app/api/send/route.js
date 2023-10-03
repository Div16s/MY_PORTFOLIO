import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();

      // Create a transporter object using Gmail's SMTP server
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp-relay.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: "divyankarshah1602@gmail.com",
          pass: process.env.GMAIL_PASS,
        },
      });

      // Define email data
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: subject,
        text: message,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({message:"Email sent successfully!"},{status:200});
    } catch (error) {
        return NextResponse.json({message:"Failed to send email!"},{status:500});
    }
}
