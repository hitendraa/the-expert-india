
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RotateCcw, Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import { SITE_FULL_NAME, CONTACT_INFO } from "@/lib/constants";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              <RotateCcw className="w-4 h-4 mr-2" />
              Refund Policy
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground">
              Last updated: July 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Due to the nature of our legal and compliance services, most of our offerings 
                  involve immediate processing and submission to government authorities. 
                  Please read this policy carefully before making any payment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Refunds may be considered in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Service not initiated within 7 days of payment</li>
                  <li>Technical error resulting in duplicate payment</li>
                  <li>Service cancellation before document submission to authorities</li>
                  <li>Failure to deliver service due to our internal issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Non-Refundable Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The following services are non-refundable once initiated:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Government filing fees and stamp duties</li>
                  <li>Services where documents have been filed with authorities</li>
                  <li>Consultation services that have been delivered</li>
                  <li>Digital signature certificates</li>
                  <li>Fast-track or express processing services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Refund Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If eligible for a refund, the process timeline is as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Refund request must be made within 7 days of payment</li>
                  <li>Review and approval process: 5-7 business days</li>
                  <li>Refund processing: 7-10 business days after approval</li>
                  <li>Bank credit time: 2-5 business days (varies by bank)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Service cancellation terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Free cancellation within 24 hours of payment (if no work initiated)</li>
                  <li>Partial refund may apply if work is in progress</li>
                  <li>No cancellation allowed after document submission</li>
                  <li>Government fees are non-refundable in all cases</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To request a refund, please follow these steps:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Contact our support team with your order details</li>
                  <li>Provide reason for refund request</li>
                  <li>Submit any required documentation</li>
                  <li>Wait for review and approval</li>
                  <li>Refund will be processed to the original payment method</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exceptions and Special Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Special circumstances that may affect refund eligibility:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Government policy changes affecting service delivery</li>
                  <li>Incorrect information provided by client</li>
                  <li>Client non-cooperation in document collection</li>
                  <li>Services rejected by authorities due to client information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact for Refund Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For any refund or cancellation requests, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Please include your order number and payment details 
                    when contacting us for faster processing of your request.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 {SITE_FULL_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
