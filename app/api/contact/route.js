import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail or your email service
    // For Gmail: enable "App Passwords" in Google Account settings
    // For other services: update the host, port, and credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to you (portfolio owner)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
      replyTo: email,
    });

    // Confirmation email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you, ${name}!</h2>
          <p>I&apos;ve received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          <p>Best regards,<br>Anna Lea Dagos</p>
        </div>
      `,
    });

    return Response.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
