import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import Newsletter from '@/models/Newsletter';
import connectDB from '@/lib/mongodb';
import { addToNewsletter } from '@/lib/newsletter-utils';
import { authOptions } from '@/lib/auth';

// GET - Fetch newsletter subscribers with pagination and filters
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as { role?: string })?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const search = searchParams.get('search') || '';
    const source = searchParams.get('source') || '';
    const status = searchParams.get('status') || '';
    const startDate = searchParams.get('startDate') || '';
    const endDate = searchParams.get('endDate') || '';

    // Build filter query
    const filter: {
      $or?: Array<{ email: { $regex: string; $options: string } } | { name: { $regex: string; $options: string } }>
      status?: string
      source?: string
      subscribedAt?: {
        $gte?: Date
        $lte?: Date
      }
    } = {};

    if (search) {
      filter.$or = [
        { email: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
      ];
    }

    if (source && source !== 'all') {
      filter.source = source;
    }

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (startDate || endDate) {
      filter.subscribedAt = {};
      if (startDate) filter.subscribedAt.$gte = new Date(startDate);
      if (endDate) filter.subscribedAt.$lte = new Date(endDate + 'T23:59:59.999Z');
    }

    // Get total count for pagination
    const total = await Newsletter.countDocuments(filter);
    const pages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    // Fetch subscribers with pagination
    const subscribers = await Newsletter.find(filter)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json({
      subscribers,
      pagination: {
        page,
        limit,
        total,
        pages,
      },
    });
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter subscribers' },
      { status: 500 }
    );
  }
}

// POST - Add new subscriber or newsletter signup
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, mobile, source, sourceDetails, tags } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const success = await addToNewsletter({
      email,
      name,
      mobile,
      source: source || 'manual',
      sourceDetails,
      tags,
    });

    return NextResponse.json({
      success,
      message: success ? 'Successfully subscribed to newsletter' : 'Already subscribed',
    });
  } catch (error) {
    console.error('Error adding newsletter subscriber:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
