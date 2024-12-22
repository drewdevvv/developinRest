import { NextResponse } from 'next/server'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(formData)
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || ''
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }

    if (!process.env.MAILGUN_DOMAIN || !process.env.CONTACT_EMAIL) {
      throw new Error('Missing required environment variables')
    }

    // Send email to admin
    const adminResponse = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `${name} <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    // Send autoresponder email to user
    const userResponse = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `develop in Rest <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting develop in Rest',
      text: `Dear ${name},

Thank you for reaching out to develop in Rest. We have received your message and appreciate your interest in our services.

Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.

Here's a summary of the information you provided:

Name: ${name}
Email: ${email}
Message: ${message}

If you need to add any information to your request, please don't hesitate to reply to this email.

Best regards,
The develop in Rest Team`,
    })

    console.log('Emails sent successfully:', adminResponse, userResponse)
    return NextResponse.json({ success: true, message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
        error: error instanceof Error ? error.stack : String(error)
      }, 
      { status: 500 }
    )
  }
}

