import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Mail, Phone, MapPin } from "lucide-react";
import { SITE_FULL_NAME, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Disclaimer - ${SITE_FULL_NAME}`,
  description: 'Legal disclaimer for The Expert India Consultancy - Important information about the use of our services and website.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Legal Disclaimer
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-muted-foreground">
              Important information about the use of our services and website
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>General Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information provided on this website and through our services is for general 
                  informational purposes only. While we strive to keep the information up to date 
                  and accurate, we make no representations or warranties of any kind about the 
                  completeness, accuracy, reliability, or suitability of the information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Services Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {SITE_FULL_NAME} provides legal and compliance services through qualified 
                  professionals. However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>We do not guarantee specific outcomes or results</li>
                  <li>Government processing times may vary beyond our control</li>
                  <li>Regulatory changes may affect service delivery</li>
                  <li>Client cooperation is essential for successful completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Website Content Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The content on this website is provided &quot;as is&quot; without any representations 
                  or warranties. We reserve the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Modify or discontinue any part of the website</li>
                  <li>Update information without prior notice</li>
                  <li>Correct errors or omissions at any time</li>
                  <li>Remove or update outdated information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Links Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our website may contain links to external websites. We have no control over 
                  the content and nature of these sites and are not responsible for their 
                  availability, content, or any damage that may result from their use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Government and Regulatory Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We facilitate applications and filings with various government authorities. 
                  However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Final approval decisions rest with government authorities</li>
                  <li>Processing times are subject to government policies</li>
                  <li>Regulatory requirements may change without notice</li>
                  <li>We are not responsible for government delays or rejections</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {SITE_FULL_NAME} shall not be liable for any direct, indirect, incidental, 
                  consequential, or punitive damages arising from the use of our services or 
                  website, including but not limited to business losses, lost profits, or 
                  data loss.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accuracy of Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  While we make every effort to ensure accuracy, we do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Information on our website is always current or complete</li>
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>All defects will be corrected</li>
                  <li>The website is free from viruses or harmful components</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact for Clarifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this disclaimer or need clarification 
                  about our services, please contact us:
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
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 {SITE_FULL_NAME}. All rights reserved.</p>
            <p className="mt-2">This disclaimer was last updated in January 2025.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
