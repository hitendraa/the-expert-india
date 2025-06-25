"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  User, 
  Building, 
  Phone,
  Mail,
  Banknote
} from "lucide-react";

const GSTRequirements = () => {
  const basicDocuments = [
    {
      icon: CreditCard,
      title: "PAN Card",
      description: "PAN of the Applicant (Proprietor/Company)",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: User,
      title: "Aadhaar Card",
      description: "Aadhaar card of the applicant",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Phone,
      title: "Phone Number",
      description: "Active mobile number for OTP verification",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Mail,
      title: "Email Address",
      description: "Valid email address for communication",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const detailedDocuments = [
    {
      category: "Identity & Authorization",
      documents: [
        "PAN of the Applicant(Proprietor)",
        "Aadhaar card",
        "Identity and Address proof of Promoters/Director with Photographs",
        "Letter of Authorization/Board Resolution for Authorized Signatory"
      ]
    },
    {
      category: "Business Registration",
      documents: [
        "Proof of business registration or Incorporation certificate",
        "Address proof of the place of business",
        "Rent Agreement in case the PPOB(Principal Place of Business) is rented"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "Bank Account statement/Cancelled cheque"
      ]
    }
  ];

  const additionalRequirements = [
    {
      icon: Building,
      title: "Commercial Address",
      description: "If you are handling your business from your home, then you can register the residential address with the GST. It requires only the address proof such as electricity bill, NOC, sale deed or link agreement.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: FileText,
      title: "Digital Signature",
      description: "DSC is required in case of private limited company, LLP etc. In case of proprietorship firm or partnership firm, DSC is not required.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Banknote,
      title: "Bank Account",
      description: "Yes you do need a personal saving account or current account. If you are starting a new business and have a personal saving account, then it can be provided.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const documentSubmission = [
    {
      method: "Email",
      description: "Send documents via email",
      icon: Mail
    },
    {
      method: "WhatsApp",
      description: "Upload documents through WhatsApp",
      icon: Phone
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Documents Required
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Required Documents for GST Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The following documents are required to register for GST (Goods and Service Tax). 
              Ensure all documents are clear and valid for smooth processing.
            </p>
          </div>

          {/* Basic Documents */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Basic Documents Required</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {basicDocuments.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${doc.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <doc.icon className={`h-6 w-6 ${doc.color}`} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{doc.title}</h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Document Categories */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Complete Document Checklist</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {detailedDocuments.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-center">{category.category}</h4>
                    <ul className="space-y-3">
                      {category.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Requirements</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {additionalRequirements.map((req, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${req.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <req.icon className={`h-6 w-6 ${req.color}`} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">{req.title}</h4>
                    <p className="text-gray-600 text-sm">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Document Submission */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Submit Documents</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documentSubmission.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <method.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{method.method}</h4>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-blue-900 mb-2">🔒 100% Confidential</h4>
                <p className="text-blue-800 text-sm">
                  We have a 100% confidential policy and we do not share our customers documents with anyone. 
                  All documents are securely handled and processed.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-green-900 mb-2">⚡ Quick Processing</h4>
                <p className="text-green-800 text-sm">
                  If you don&apos;t submit correct required documents during submission of registration, 
                  then the jurisdiction officer shall reject the application. Ensure all documents 
                  are accurate and complete for fastest processing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-yellow-900 mb-2">📋 Place of Business Proof</h4>
                <p className="text-yellow-800 text-sm">
                  We require the copy of electricity bill or NOC from the landlord in case of rented place. 
                  NOC format will be shared by our company during registration process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTRequirements;
