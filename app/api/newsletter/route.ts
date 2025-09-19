import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service provider
    // For now, we'll just log it and return success
    console.log('Newsletter signup:', email)

    // You can integrate with services like:
    // - Mailchimp
    // - ConvertKit
    // - SendGrid
    // - Resend
    // - Or save to a database

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}