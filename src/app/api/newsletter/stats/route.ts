import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { getNewsletterStats } from '@/lib/newsletter-utils';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as { role?: string })?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const stats = await getNewsletterStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching newsletter stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter stats' },
      { status: 500 }
    );
  }
}
