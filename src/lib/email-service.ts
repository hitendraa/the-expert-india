import { Resend } from 'resend';
import { InvoiceEmailTemplate } from '@/components/email/InvoiceEmailTemplate';
import { 
  SITE_FULL_NAME, 
  SITE_EMAIL, 
  SITE_PHONE, 
  SITE_ADDRESS
} from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  customerName: string;
  customerEmail: string;
  serviceName: string;
  amount: number;
  orderId: string;
  orderDate: string;
  paymentMethod: string;
}

const companyDetails = {
  name: SITE_FULL_NAME,
  address: SITE_ADDRESS,
  email: SITE_EMAIL,
  phone: SITE_PHONE,
  website: process.env.NEXT_PUBLIC_SITE_URL || 'https://theexpertindia.com',
};

export async function sendInvoiceEmail(emailData: EmailData) {
  try {
    // Validate required environment variables
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }

    // Validate email data
    if (!emailData.customerEmail || !emailData.customerName || !emailData.serviceName) {
      throw new Error('Missing required email data: customerEmail, customerName, or serviceName');
    }

    // Ensure amount is a valid number
    const amount = typeof emailData.amount === 'number' ? emailData.amount : parseFloat(String(emailData.amount) || '0');
    if (isNaN(amount) || amount < 0) {
      throw new Error('Invalid amount provided');
    }

    const { data, error } = await resend.emails.send({
      from: `${companyDetails.name} <info@theexpertindia.com>`, // Using your verified domain
      to: [emailData.customerEmail],
      subject: `Payment Confirmed - Invoice for ${emailData.serviceName} | Order #${emailData.orderId}`,
      react: InvoiceEmailTemplate({
        ...emailData,
        amount,
        companyDetails,
      }),
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(`Failed to send invoice email: ${error.message || 'Unknown error'}`);
    }

    console.log('Invoice email sent successfully:', data?.id);
    return { success: true, emailId: data?.id };
  } catch (error) {
    console.error('Email service error:', error);
    
    // Re-throw with more specific error message
    if (error instanceof Error) {
      throw new Error(`Email service failed: ${error.message}`);
    } else {
      throw new Error('Email service failed: Unknown error occurred');
    }
  }
}

export async function sendOrderConfirmationEmail(emailData: EmailData) {
  // This is an alias for sendInvoiceEmail for backward compatibility
  return sendInvoiceEmail(emailData);
}
