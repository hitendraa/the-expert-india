import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, FileText, Clock, Building, Users } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'FSSAI State License | Food Business License | The Expert India',
  description: 'Get FSSAI State License for food businesses with annual turnover between Rs. 12 Lakhs to Rs. 20 Crores. Expert assistance with complete documentation support.',
  keywords: [
    'FSSAI state license',
    'food license',
    'food business license',
    'state food license',
    'food safety license',
    'FSSAI registration',
    'food business operator',
    'food safety compliance'
  ],
  authors: [{ name: SITE_FULL_NAME }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function FSSAIStateLicensePage() {
  const heroData = {
    badge: "FSSAI State License",
    title: "Get Your FSSAI State License for Food Business Operations",
    subtitle: "For businesses with annual turnover Rs. 12 Lakhs - Rs. 20 Crores",
    description: "FSSAI State License is mandatory for food businesses operating within a state with annual turnover between Rs. 12 Lakhs to Rs. 20 Crores. Get expert assistance for hassle-free State License registration with complete documentation support.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "State-wide operations coverage",
      "Expert consultation & filing",
      "Complete documentation support",
      "State authority processing",
      "Compliance guidance",
      "Quick approval process"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized pricing for State License"
    },
    trustIndicators: [
      {
        title: "State Coverage",
        subtitle: "Single State Operations"
      },
      {
        title: "Expert Support",
        subtitle: "Complete Assistance"
      }
    ],
    form: {
      title: "Get FSSAI State License",
      subtitle: "Apply for your State License with expert guidance",
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
      button: "Get State License Quote",
      note: "Our experts will help you get State License approved",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const eligibilityRequirements = [
    {
      title: "Annual Turnover",
      description: "Business with annual turnover between Rs. 12 Lakhs to Rs. 20 Crores",
      icon: Building
    },
    {
      title: "State Operations",
      description: "Food business operations within a single state",
      icon: Shield
    },
    {
      title: "Food Processing",
      description: "Manufacturing, processing, or distribution of food products",
      icon: Users
    },
    {
      title: "Valid Documents",
      description: "All required business and identity documents available",
      icon: FileText
    }
  ];

  const benefits = [
    "Legal authorization for food business operations within the state",
    "Compliance with food safety standards and regulations",
    "Enhanced credibility and customer trust",
    "Access to government schemes and subsidies",
    "Protection against legal penalties and closures",
    "Improved business reputation and market acceptance"
  ];

  const documents = [
    "Partnership deed or Certificate of Incorporation",
    "Identity proof of applicant (Aadhaar/PAN/Passport)",
    "Business premises address proof",
    "Food Safety Management Plan",
    "List of food categories to be manufactured/sold",
    "NOC from pollution control board (if applicable)"
  ];

  const faqData = [
    {
      question: "What is FSSAI State License?",
      answer: "FSSAI State License is required for food businesses operating within a state with annual turnover between Rs. 12 Lakhs to Rs. 20 Crores. It's issued by the State Food Safety Authority."
    },
    {
      question: "Who needs FSSAI State License?",
      answer: "Food businesses with annual turnover between Rs. 12 Lakhs to Rs. 20 Crores operating within a single state need State License."
    },
    {
      question: "What is the validity of State License?",
      answer: "FSSAI State License is valid for 1 to 5 years depending on the period chosen during application."
    },
    {
      question: "Can I operate in multiple states with State License?",
      answer: "No, State License allows operations only within the state where it's issued. For multi-state operations, you need Central License."
    },
    {
      question: "What happens if I exceed Rs. 20 Crores turnover?",
      answer: "If your annual turnover exceeds Rs. 20 Crores, you need to apply for Central License within 30 days."
    },
    {
      question: "How long does State License approval take?",
      answer: "State License approval typically takes 30-60 days from the date of complete application submission."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero heroData={heroData} />

      {/* Eligibility Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Eligibility Criteria
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              FSSAI State License Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check if your business qualifies for FSSAI State License
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eligibilityRequirements.map((requirement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <requirement.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{requirement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{requirement.description}</p>
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
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Benefits of FSSAI State License
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
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((document, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              State License Application Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Document Collection", desc: "Gather all required documents" },
              { step: "2", title: "Application Filing", desc: "Submit application to State Authority" },
              { step: "3", title: "Review & Inspection", desc: "Authority reviews and inspects if needed" },
              { step: "4", title: "License Approval", desc: "Receive your State License certificate" }
            ].map((process, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Common questions about FSSAI State License"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
