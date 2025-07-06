import * as React from 'react';

interface InvoiceEmailTemplateProps {
  customerName: string;
  customerEmail: string;
  serviceName: string;
  amount: number;
  orderId: string;
  orderDate: string;
  paymentMethod: string;
  companyDetails: {
    name: string;
    address: string;
    email: string;
    phone: string;
    website: string;
  };
}

export function InvoiceEmailTemplate({
  customerName,
  customerEmail,
  serviceName,
  amount,
  orderId,
  orderDate,
  paymentMethod,
  companyDetails,
}: InvoiceEmailTemplateProps) {
  // Safely format the amount
  const formattedAmount = typeof amount === 'number' && !isNaN(amount) 
    ? amount.toLocaleString('en-IN') 
    : '0';

  // Safely get customer name with fallback
  const safeCustomerName = customerName || 'Valued Customer';
  
  // Safely get service name with fallback
  const safeServiceName = serviceName || 'Professional Service';
  
  // Safely get order ID with fallback
  const safeOrderId = orderId || 'N/A';
  
  // Safely get order date with fallback
  const safeOrderDate = orderDate || new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Safely get payment method with fallback
  const safePaymentMethod = paymentMethod || 'Online Payment';
  return (
    <div style={{
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f8fafc',
      padding: '20px',
      lineHeight: 1.6,
      color: '#374151',
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
      }}>
        {/* Header - Company Branding */}
        <div style={{
          backgroundColor: '#1f2937',
          padding: '32px 24px',
          textAlign: 'center' as const,
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            letterSpacing: '-0.025em',
          }}>
            {companyDetails.name}
          </h1>
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            margin: '0',
            fontWeight: '500',
          }}>
            Payment Confirmation & Invoice
          </p>
        </div>

        {/* Success Message */}
        <div style={{
          backgroundColor: '#ecfdf5',
          borderLeft: '4px solid #10b981',
          padding: '20px 24px',
          margin: '0',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <div style={{
              backgroundColor: '#10b981',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
            }}>
              <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
            </div>
            <h2 style={{
              color: '#065f46',
              fontSize: '18px',
              fontWeight: '600',
              margin: '0',
            }}>
              Payment Successful
            </h2>
          </div>
          <p style={{
            color: '#047857',
            fontSize: '14px',
            margin: '0',
            lineHeight: 1.5,
          }}>
            Hello {safeCustomerName}, your payment has been processed successfully. Thank you for choosing our services.
          </p>
        </div>

        {/* Invoice Details */}
        <div style={{ padding: '32px 24px' }}>
          <div style={{
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '24px',
            marginBottom: '24px',
          }}>
            <h3 style={{
              color: '#111827',
              fontSize: '16px',
              fontWeight: '600',
              margin: '0 0 16px 0',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em',
            }}>
              Invoice Details
            </h3>
            
            <table style={{
              width: '100%',
              borderCollapse: 'collapse' as const,
            }}>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  width: '35%',
                  verticalAlign: 'top',
                }}>
                  Invoice #:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#111827',
                  fontSize: '14px',
                  fontWeight: '600',
                }}>
                  INV-{safeOrderId}
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  verticalAlign: 'top',
                }}>
                  Date:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#111827',
                  fontSize: '14px',
                  fontWeight: '600',
                }}>
                  {safeOrderDate}
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  verticalAlign: 'top',
                }}>
                  Service:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#111827',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: 1.4,
                }}>
                  {safeServiceName}
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  verticalAlign: 'top',
                }}>
                  Payment Method:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#111827',
                  fontSize: '14px',
                  fontWeight: '600',
                }}>
                  {safePaymentMethod}
                </td>
              </tr>
            </table>
          </div>

          {/* Amount Section */}
          <div style={{
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '20px',
            marginBottom: '24px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                color: '#374151',
                fontSize: '16px',
                fontWeight: '600',
              }}>
                Total Amount Paid:
              </span>
              <span style={{
                color: '#059669',
                fontSize: '24px',
                fontWeight: '700',
              }}>
                ₹{formattedAmount}
              </span>
            </div>
          </div>

          {/* Customer Information */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '20px',
            marginBottom: '24px',
          }}>
            <h4 style={{
              color: '#374151',
              fontSize: '14px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em',
            }}>
              Billing Information
            </h4>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              margin: '4px 0',
              lineHeight: 1.4,
            }}>
              <strong style={{ color: '#374151' }}>Name:</strong> {safeCustomerName}
            </p>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              margin: '4px 0',
              lineHeight: 1.4,
            }}>
              <strong style={{ color: '#374151' }}>Email:</strong> {customerEmail}
            </p>
          </div>

          {/* Next Steps */}
          <div style={{
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '6px',
            padding: '20px',
            marginBottom: '24px',
          }}>
            <h4 style={{
              color: '#1e40af',
              fontSize: '16px',
              fontWeight: '600',
              margin: '0 0 12px 0',
            }}>
              What happens next?
            </h4>
            <ul style={{
              color: '#1e3a8a',
              fontSize: '14px',
              margin: '0',
              paddingLeft: '16px',
              lineHeight: 1.5,
            }}>
              <li style={{ marginBottom: '6px' }}>Our team will contact you within 24 hours</li>
              <li style={{ marginBottom: '6px' }}>Track your order progress in your dashboard</li>
              <li style={{ marginBottom: '6px' }}>We&apos;ll keep you updated throughout the process</li>
              <li>Contact us anytime if you have questions</li>
            </ul>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center' as const }}>
            <a
              href={`${companyDetails.website}/dashboard`}
              style={{
                display: 'inline-block',
                backgroundColor: '#4B7C80',
                color: '#ffffff',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center' as const,
                letterSpacing: '0.025em',
              }}
            >
              View Order Status
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: '#1f2937',
          padding: '24px',
          borderTop: '1px solid #e5e7eb',
        }}>
          <div style={{
            textAlign: 'center' as const,
            marginBottom: '16px',
          }}>
            <h3 style={{
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              margin: '0 0 8px 0',
            }}>
              {companyDetails.name}
            </h3>
            <p style={{
              color: '#9ca3af',
              fontSize: '13px',
              margin: '0',
              lineHeight: 1.4,
            }}>
              {companyDetails.address}
            </p>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '16px',
            textAlign: 'center' as const,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap' as const,
              marginBottom: '12px',
            }}>
              <a
                href={`mailto:${companyDetails.email}`}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '13px',
                }}
              >
                {companyDetails.email}
              </a>
              <a
                href={`tel:${companyDetails.phone}`}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '13px',
                }}
              >
                +91 {companyDetails.phone}
              </a>
              <a
                href={companyDetails.website}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '13px',
                }}
              >
                {companyDetails.website.replace('https://', '')}
              </a>
            </div>
            
            <p style={{
              color: '#6b7280',
              fontSize: '12px',
              margin: '0',
              lineHeight: 1.4,
            }}>
              This is an automated invoice. For support, please contact our team.
              <br />
              © {new Date().getFullYear()} {companyDetails.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
