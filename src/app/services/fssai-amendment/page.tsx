"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, FileText, Clock, Building, Users, Edit, AlertTriangle } from "lucide-react";

export default function FSSAIAmendmentPage() {
  const heroData = {
    badge: "FSSAI License Amendment",
    title: "FSSAI License Amendment & Modification Services",
    subtitle: "Update your existing FSSAI license details with expert assistance",
    description: "Need to modify your FSSAI license details? Our experts help you amend your existing FSSAI registration or license for changes in business address, food categories, ownership, or other business details. Quick processing with complete documentation support.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "Address change amendments",
      "Food category modifications",
      "Ownership transfer support",
      "Business name updates",
      "Expert consultation",
      "Quick processing"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized pricing for amendments"
    },
    trustIndicators: [
      {
        title: "Expert Support",
        subtitle: "Complete Amendment Process"
      },
      {
        title: "Quick Processing",
        subtitle: "Minimal Downtime"
      }
    ],
    form: {
      title: "Get FSSAI Amendment Support",
      subtitle: "Apply for license amendment with expert guidance",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        state: "Choose your state"
      },
      button: "Get Amendment Quote",
      note: "Our experts will help you process your amendment quickly",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const amendmentTypes = [
    {
      title: "Address Change",
      description: "Modification of business premises address or registered office location",
      icon: Building,
      reasons: ["Office relocation", "Premises change", "New branch addition", "Registered office shift"]
    },
    {
      title: "Food Category Changes",
      description: "Addition or removal of food categories in your license",
      icon: FileText,
      reasons: ["New product lines", "Business expansion", "Category removal", "Product diversification"]
    },
    {
      title: "Ownership Transfer",
      description: "Change in ownership, partnership, or authorized signatory",
      icon: Users,
      reasons: ["Partnership changes", "Ownership transfer", "Signatory updates", "Legal entity changes"]
    },
    {
      title: "Business Details",
      description: "Modification of business name, contact details, or other information",
      icon: Edit,
      reasons: ["Name change", "Contact updates", "Email changes", "Business restructuring"]
    }
  ];

  const requiredDocuments = [
    {
      category: "Basic Documents",
      documents: [
        "Original FSSAI license certificate",
        "Amendment application form",
        "Supporting documents for changes",
        "Identity proof of authorized person"
      ]
    },
    {
      category: "Address Change",
      documents: [
        "New premises ownership/rental agreement",
        "Address proof of new location",
        "NOC from landlord (if applicable)",
        "Municipal corporation approval"
      ]
    },
    {
      category: "Ownership Transfer",
      documents: [
        "Partnership deed/MOA changes",
        "Board resolution for changes",
        "Identity proof of new owners",
        "Transfer agreement documents"
      ]
    }
  ];

  const amendmentProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "Review current license and required changes",
      icon: FileText
    },
    {
      step: "2",
      title: "Documentation",
      description: "Prepare and collect all required documents",
      icon: Building
    },
    {
      step: "3",
      title: "Application Filing",
      description: "Submit amendment application to FSSAI portal",
      icon: Edit
    },
    {
      step: "4",
      title: "Approval",
      description: "Receive updated license certificate",
      icon: CheckCircle
    }
  ];

  const benefits = [
    "Maintain compliance with current business operations",
    "Avoid penalties for operating with outdated license details",
    "Ensure smooth business operations without legal issues",
    "Update license to reflect current business reality",
    "Maintain credibility with customers and authorities",
    "Prepare for business expansion or changes"
  ];

  const faqData = [
    {
      question: "What is FSSAI license amendment?",
      answer: "FSSAI license amendment is the process of modifying or updating existing details in your FSSAI registration or license, such as address, food categories, ownership, or other business information."
    },
    {
      question: "When do I need to amend my FSSAI license?",
      answer: "You need to amend your FSSAI license when there are changes in business address, food categories, ownership, business name, or any other details mentioned in the original license."
    },
    {
      question: "How long does the amendment process take?",
      answer: "FSSAI license amendment typically takes 15-30 days from the date of complete application submission with all required documents."
    },
    {
      question: "Can I operate my business during the amendment process?",
      answer: "Yes, you can continue operating your business with the existing license while the amendment application is being processed."
    },
    {
      question: "What documents are required for address amendment?",
      answer: "For address amendment, you need new premises documents, address proof, NOC from landlord (if applicable), and municipal approvals along with the original license."
    },
    {
      question: "Is there a fee for FSSAI license amendment?",
      answer: "Yes, there are government fees for amendments which vary based on the type of license (Basic/State/Central) and the nature of changes being made."
    },
    {
      question: "Can I add new food categories to my existing license?",
      answer: "Yes, you can add new food categories through the amendment process. You may need to provide additional documentation related to the new categories."
    },
    {
      question: "What happens if I don't amend my license after business changes?",
      answer: "Operating with outdated license information can lead to penalties, legal issues, and compliance problems during inspections or renewals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero heroData={heroData} />

      {/* Amendment Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Edit className="h-4 w-4 mr-2" />
              Amendment Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of FSSAI License Amendments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common reasons why businesses need to amend their FSSAI license
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {amendmentTypes.map((amendment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <amendment.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{amendment.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{amendment.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Common Reasons:</h4>
                    {amendment.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              FSSAI Amendment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to amend your FSSAI license
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {amendmentProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {process.step}
                  </div>
                  <process.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Required Documents for Amendment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Documents needed based on the type of amendment required
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {requiredDocuments.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-purple-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.documents.map((document, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Amend Your FSSAI License?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-lg bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-red-700">
                      <strong>Mandatory Amendment:</strong> Any changes in business details must be updated in FSSAI license within 30 days of the change.
                    </p>
                    <p className="text-sm text-red-700">
                      <strong>Penalty Warning:</strong> Operating with outdated license information can result in penalties and legal complications.
                    </p>
                    <p className="text-sm text-red-700">
                      <strong>Compliance Requirement:</strong> Updated license is essential for renewal and regulatory compliance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Common questions about FSSAI license amendment"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
