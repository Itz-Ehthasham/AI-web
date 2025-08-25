// app/api/contact/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const message = formData.get('message');
    const file = formData.get('file');
    
    // Handle file attachment if present
    let attachments = [];
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      attachments = [{
        filename: file.name,
        content: buffer,
      }];
    }

    // Send email to you (the admin)
    const {  error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You'll change this later to your domain
      to: [TO_EMAIL], // Now using your environment variable
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #667eea; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">✨ New Contact Form Submission</h2>
              </div>
              
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">✉️ Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${company || 'Not provided'}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              
              ${file && file.size > 0 ? `
              <div class="field">
                <div class="label">📎 Attachment:</div>
                <div class="value">${file.name} (${(file.size / 1024).toFixed(2)} KB)</div>
              </div>
              ` : ''}
              
              <div class="footer">
                <p>This email was sent from your website's contact form.</p>
                <p>📅 Submission time: ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Karachi', // Pakistan time
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      attachments: attachments,
      replyTo: email, // This allows you to reply directly to the person who filled the form
    });

    if (error) {
      console.error('Failed to send email:', error);
      return Response.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    // Send auto-reply to the user (optional but recommended)
    // await resend.emails.send({
    //   from: 'Solveit <onboarding@resend.dev>',
    //   to: [email],
    //   subject: 'Thank you for contacting Solveit!',
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
    //         <h1 style="margin: 0;">Thank you for reaching out!</h1>
    //       </div>
    //       <div style="padding: 30px; background: #f9f9f9;">
    //         <p style="font-size: 16px;">Hi ${name},</p>
    //         <p>We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>
            
    //         <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
    //           <h3 style="color: #667eea; margin-top: 0;">Here's what you sent us:</h3>
    //           <p><strong>Message:</strong></p>
    //           <p style="color: #666; white-space: pre-wrap;">${message}</p>
    //         </div>
            
    //         <p>In the meantime, feel free to:</p>
    //         <ul style="color: #666;">
    //           <li>Check out our <a href="https://yourwebsite.com/portfolio" style="color: #667eea;">portfolio</a></li>
    //           <li>Read our <a href="https://yourwebsite.com/blog" style="color: #667eea;">latest blog posts</a></li>
    //           <li>Follow us on <a href="https://twitter.com/yourhandle" style="color: #667eea;">social media</a></li>
    //         </ul>
            
    //         <p style="margin-top: 30px;">Best regards,<br>
    //         <strong>The Solveit Team</strong></p>
    //       </div>
    //       <div style="background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
    //         <p style="margin: 0; font-size: 12px;">© 2024 Solveit. All rights reserved.</p>
    //       </div>
    //     </div>
    //   `,
    // });

    return Response.json({ 
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}