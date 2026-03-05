import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('--- Incoming Request Body ---', body);

        // Helper to force a string to clean ASCII and trim whitespace
        const cleanString = (str: any) => {
            if (!str) return '';
            return String(str)
                .normalize('NFD') // Decompose combined characters
                .replace(/[\u0300-\u036f]/g, '') // Remove accents
                .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII
                .trim();
        };

        const name = cleanString(body.name);
        const email = cleanString(body.email);
        const eventType = cleanString(body.eventType);
        const location = cleanString(body.location);
        const date = cleanString(body.date);
        const vision = cleanString(body.vision);

        console.log('--- Processing Email Inquiry ---');
        console.log(`From: ${name} (${email})`);

        // Basic validation
        if (!name || !email || !eventType) {
            console.error('--- Validation failed ---', { name, email, eventType });
            return NextResponse.json(
                { error: 'Name, email, and event type are required.' },
                { status: 400 }
            );
        }

        const rawSmtpKey = process.env.GMAIL_SMTP_KEY;
        if (!rawSmtpKey) {
            console.error('--- GMAIL_SMTP_KEY is missing from environment ---');
            return NextResponse.json(
                { error: 'SMTP Configuration Missing' },
                { status: 500 }
            );
        }

        // Robustly clean the password - remove ALL whitespace
        const safePassword = rawSmtpKey.replace(/\s+/g, '');

        // Configure SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // TLS
            auth: {
                user: 'harpaskane@gmail.com', // Verified correct address
                pass: safePassword,
            },
        });

        const mailOptions = {
            from: 'harpaskane@gmail.com',
            to: 'harpaskane@gmail.com',
            subject: `Harp Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nEvent: ${eventType}\nLocation: ${location}\nDate: ${date}\nVision: ${vision}`,
            html: `
                <div style="font-family: sans-serif; background: #fdfaf6; padding: 30px; border-radius: 12px; color: #064e3b; border: 1px solid #d4af37;">
                    <h2 style="margin-top: 0;">New inquiry from your website</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Event Type:</strong> ${eventType}</p>
                    <p><strong>Location:</strong> ${location}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Vision:</strong> ${vision}</p>
                </div>
            `,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        console.log('--- Email sent successfully ---');
        return NextResponse.json({ message: 'Success' }, { status: 200 });

    } catch (error: any) {
        console.error('--- SMTP Error Detail: ---', error);
        return NextResponse.json(
            { error: error.message || 'Internal Error' },
            { status: 500 }
        );
    }
}
