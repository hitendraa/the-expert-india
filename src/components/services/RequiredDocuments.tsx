"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  CreditCard, 
  MapPin, 
  FileText, 
  Zap, 
  Shield,
  Download,
  Clock
} from "lucide-react";
import { REQUIRED_DOCUMENTS } from "@/lib/services-constants";
import { CONTACT_INFO, SITE_FULL_NAME } from "@/lib/constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const iconMap = {
  User,
  CreditCard,
  MapPin,
  FileText,
  Zap,
  Shield
};

const RequiredDocuments = () => {
  const handleDownloadChecklist = () => {
    // Create a simple text content for the checklist
    const checklistContent = `COMPANY REGISTRATION DOCUMENT CHECKLIST

✓ REQUIRED DOCUMENTS:

1. PASSPORT SIZE PHOTOGRAPH
   - 3 copies of recent passport size photographs of all directors
   - White background preferred
   - Clear and professional quality

2. PAN CARD
   - Valid PAN card of all directors and shareholders
   - Ensure name matches exactly across all documents

3. ADDRESS PROOF
   - Current address proof matching with PAN card details
   - Can be utility bill, bank statement, or lease agreement
   - Should not be older than 3 months

4. AADHAAR CARD
   - Government-issued identity proof with photograph
   - Self-attested copy required

5. ELECTRICITY BILL
   - Recent utility bill not older than 3 months
   - For registered office address proof

6. NOC CERTIFICATE
   - No Objection Certificate from local authorities (if required)
   - Depends on business type and location

✓ IMPORTANT NOTES:
- All documents should be clear and legible
- Self-attest all document copies
- Names on all documents should match exactly
- Keep digital copies ready for online submission
- Ensure documents are not older than 3 months

For any queries, contact ${SITE_FULL_NAME}:
Phone: ${CONTACT_INFO.phone}
Email: ${CONTACT_INFO.email}

© ${new Date().getFullYear()} ${SITE_FULL_NAME}`;

    // Create and download the file
    const blob = new Blob([checklistContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Company-Registration-Document-Checklist.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <FileText className="h-4 w-4 mr-2" />
            Required Documents
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Documents Required for Company Registration
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Prepare these essential documents to ensure a smooth and fast company registration process
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {REQUIRED_DOCUMENTS.map((document, index) => {
            const IconComponent = iconMap[document.icon as keyof typeof iconMap];
            
            return (
              <Card key={index} className="animated-hover shadow-md border-0 h-full">
                <CardHeader className="text-center pb-3">
                  <div className="bg-brand-gradient p-3 rounded-full w-12 h-12 mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-base md:text-lg font-bold text-gray-900">
                    {document.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-4">
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {document.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 lg:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-brand-primary mr-2" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Document Preparation Tips
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="bg-brand-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                  <span>Ensure all documents are recent and not older than 3 months</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                  <span>All documents should be clear, legible, and self-attested</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                  <span>Names on all documents should match exactly</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">4</span>
                  <span>Keep digital copies ready for quick online submission</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Download className="h-8 w-8 text-brand-primary mx-auto lg:ml-auto lg:mr-0 mb-3" />
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Document Checklist
                </h4>
                <p className="text-gray-600 mb-3 text-sm">
                  Download our comprehensive document checklist
                </p>
                <Button 
                  onClick={handleDownloadChecklist}
                  className="bg-brand-gradient hover:opacity-90 text-white animated-hover animated-hover-primary"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Checklist
                </Button>
              </div>
            </div>
          </div>
        </div>        {/* CTA */}
        <CTA
          title="Need Expert Help with Documentation?"
          description="Our experts will guide you through the entire documentation process to ensure quick approval and hassle-free registration."
          primaryButton="Get Documentation Help"
          secondaryButton="View Sample Documents"
          secondaryButtonHref="/resources/samples"
          badge="Document Support"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default RequiredDocuments;
