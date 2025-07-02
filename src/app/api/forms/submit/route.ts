import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import FormSubmission from '@/models/FormSubmission'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'
import { addToNewsletter } from '@/lib/newsletter-utils'

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const {
      name,
      email,
      mobile,
      page,
      source,
      formType,
      state,
      city,
      companyType,
      hearAbout,
      package: packageSelected,
      additionalData,
    } = await request.json()

    // Validate required fields
    if (!name || !email || !mobile || !page || !source || !formType) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, mobile, page, source, formType' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate mobile format (basic check for 8-15 digits)
    const mobileRegex = /^\d{8,15}$/
    if (!mobileRegex.test(mobile.replace(/[^\d]/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      )
    }

    // Get IP address and user agent
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ipAddress = forwardedFor?.split(',')[0] || realIp || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Clean mobile number
    const cleanMobile = mobile.replace(/[^\d]/g, '')

    // Create form submission
    const formSubmission = new FormSubmission({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: cleanMobile,
      page,
      source,
      formType,
      state: state?.trim(),
      city: city?.trim(),
      companyType: companyType?.trim(),
      hearAbout: hearAbout?.trim(),
      package: packageSelected?.trim(),
      additionalData: additionalData || {},
      ipAddress,
      userAgent,
      status: 'new',
    })

    const savedSubmission = await formSubmission.save()

    // Add to newsletter automatically
    try {
      await addToNewsletter({
        email: email.trim().toLowerCase(),
        name: name.trim(),
        mobile: cleanMobile,
        source: 'form_submission',
        sourceDetails: {
          formType,
          page,
        },
        tags: [source, formType],
      })
    } catch (newsletterError) {
      console.error('Error adding to newsletter:', newsletterError)
      // Don't fail the form submission if newsletter fails
    }

    // Log activity for tracking
    const session = await getServerSession(authOptions)
    await logActivity({
      userId: session?.user ? (session.user as { id?: string }).id : undefined,
      action: 'created',
      resource: 'system',
      resourceId: String(savedSubmission._id),
      details: `Form submission received: ${name} from ${source} (${formType})`,
      metadata: {
        source,
        formType,
        page,
        email,
        mobile: cleanMobile,
      },
    })

    console.log('Form submission saved:', {
      id: savedSubmission._id,
      source,
      formType,
      email,
      page,
    })

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: savedSubmission._id,
    })
  } catch (error) {
    console.error('Error saving form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    // Check if user is admin
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const source = searchParams.get('source')
    const status = searchParams.get('status')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    const query: any = {}
    
    if (source) query.source = source
    if (status) query.status = status
    if (startDate || endDate) {
      query.createdAt = {}
      if (startDate) query.createdAt.$gte = new Date(startDate)
      if (endDate) query.createdAt.$lte = new Date(endDate)
    }

    const skip = (page - 1) * limit

    const [submissions, total] = await Promise.all([
      FormSubmission.find(query)
        .populate('assignedTo', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      FormSubmission.countDocuments(query)
    ])

    return NextResponse.json({
      submissions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching form submissions:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
