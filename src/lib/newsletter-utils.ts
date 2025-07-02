import Newsletter from '@/models/Newsletter';
import connectDB from '@/lib/mongodb';

export interface NewsletterSubscription {
  email: string;
  name?: string;
  mobile?: string;
  source: 'newsletter' | 'form_submission' | 'registration' | 'manual';
  sourceDetails?: {
    formType?: string;
    page?: string;
    registrationType?: string;
  };
  tags?: string[];
}

export const addToNewsletter = async (subscription: NewsletterSubscription): Promise<boolean> => {
  try {
    await connectDB();

    // Check if email already exists
    const existing = await Newsletter.findOne({ email: subscription.email });
    
    if (existing) {
      // If exists but unsubscribed, reactivate
      if (existing.status === 'unsubscribed') {
        existing.status = 'active';
        existing.subscribedAt = new Date();
        existing.unsubscribedAt = undefined;
        
        // Update name and mobile if provided and not already set
        if (subscription.name && !existing.name) {
          existing.name = subscription.name;
        }
        if (subscription.mobile && !existing.mobile) {
          existing.mobile = subscription.mobile;
        }
        
        // Add new tags
        if (subscription.tags) {
          const existingTags = existing.tags || [];
          const newTags = subscription.tags.filter(tag => !existingTags.includes(tag));
          existing.tags = [...existingTags, ...newTags];
        }
        
        await existing.save();
        return true;
      }
      
      // If already active, just update tags and details if needed
      if (subscription.tags) {
        const existingTags = existing.tags || [];
        const newTags = subscription.tags.filter(tag => !existingTags.includes(tag));
        if (newTags.length > 0) {
          existing.tags = [...existingTags, ...newTags];
          await existing.save();
        }
      }
      
      return false; // Already subscribed
    }

    // Create new subscription
    await Newsletter.create({
      email: subscription.email,
      name: subscription.name,
      mobile: subscription.mobile,
      source: subscription.source,
      sourceDetails: subscription.sourceDetails,
      tags: subscription.tags || [],
      status: 'active',
      subscribedAt: new Date(),
      emailsSent: 0,
    });

    return true;
  } catch (error) {
    console.error('Error adding to newsletter:', error);
    throw error;
  }
};

export const unsubscribeFromNewsletter = async (email: string): Promise<boolean> => {
  try {
    await connectDB();
    
    const result = await Newsletter.findOneAndUpdate(
      { email },
      { 
        status: 'unsubscribed',
        unsubscribedAt: new Date(),
      }
    );
    
    return !!result;
  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error);
    throw error;
  }
};

export const getNewsletterStats = async () => {
  try {
    await connectDB();
    
    const [
      total,
      active,
      unsubscribed,
      bounced,
      bySource,
      recentSubscriptions
    ] = await Promise.all([
      Newsletter.countDocuments(),
      Newsletter.countDocuments({ status: 'active' }),
      Newsletter.countDocuments({ status: 'unsubscribed' }),
      Newsletter.countDocuments({ status: 'bounced' }),
      Newsletter.aggregate([
        { $group: { _id: '$source', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      Newsletter.countDocuments({
        subscribedAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      })
    ]);
    
    return {
      total,
      active,
      unsubscribed,
      bounced,
      bySource: bySource.reduce((acc, item) => {
        acc[item._id] = item.count;
        return acc;
      }, {} as Record<string, number>),
      recentSubscriptions
    };
  } catch (error) {
    console.error('Error getting newsletter stats:', error);
    throw error;
  }
};
