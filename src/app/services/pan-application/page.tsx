import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CreditCard, MapPin, Calendar, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'PAN Card Application Services | Online PAN Registration | The Expert India',
  description: 'Apply for PAN card online with expert assistance. Quick processing, complete documentation support, and hassle-free application for individuals and businesses.',
  keywords: [
    'PAN card application',
    'apply for PAN online',
    'PAN card registration',
    'new PAN card',
    'PAN card services',
    'online PAN application',
    'individual PAN card',
    'business PAN card'
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

function PANApplicationPage() {
  const heroData = {
    badge: "PAN Card Application",
    title: "Apply for PAN Card Online",
    subtitle: "Quick & Easy PAN Card Application",
    description: "Get your PAN Card quickly with our expert assistance. Complete documentation support and hassle-free processing.",
    rating: {
      score: "4.9/5",
      reviews: "25,000+ successful applications"
    },
    features: [
      "Complete Documentation Support",
      "Expert Application Review",
      "Fast Processing",
      "Government Approved Process",
      "Status Tracking",
      "Doorstep Delivery"
    ],
    pricing: {
      consultation: "₹199",
      consultationLabel: "Starting Price",
      consultationDescription: "Complete PAN application included"
    },
    trustIndicators: [
      {
        title: "Fast Processing",
        subtitle: "Quick Approval"
      },
      {
        title: "100% Legal",
        subtitle: "Government Approved"
      }
    ],
    form: {
      title: "Apply for PAN Card",
      subtitle: "Get expert help for your PAN card application",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Application Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "+91 XXXXX XXXXX",
        email: "your@email.com",
        hearAbout: "Select application type",
        state: "Choose your state"
      },
      button: "Apply for PAN Card",
      note: "Our experts will call you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for application updates"
      }
    }
  };

  const applicationTypes = [
    "New PAN Card",
    "PAN Card Correction",
    "Duplicate PAN Card",
    "PAN Card Reprint"
  ];

  const pricingPlans = [
    {
      id: "pan-application",
      title: "PAN Card Application",
      price: "₹199",
      recommended: true,
      features: [
        "Complete form filling",
        "Document verification",
        "Application submission",
        "Status tracking",
        "Expert guidance",
        "Email & SMS updates",
        "Doorstep delivery",
        "24/7 support"
      ],
      excludes: []
    }
  ];

  const faqs = [
    {
      question: "What is a PAN card?",
      answer: "PAN (Permanent Account Number) is a unique 10-digit alphanumeric identifier issued by the Income Tax Department. It's mandatory for financial transactions and tax filing."
    },
    {
      question: "Who needs a PAN card?",
      answer: "Anyone who earns income, owns property, makes investments, or conducts financial transactions above specified limits needs a PAN card."
    },
    {
      question: "How long does it take to get a PAN card?",
      answer: "Typically, it takes 15-20 working days to receive your PAN card after successful application submission."
    },
    {
      question: "Can I apply for PAN card online?",
      answer: "Yes, you can apply for PAN card online through the official NSDL or UTIITSL websites, or through our expert assistance service."
    },
    {
      question: "What is the fee for PAN card application?",
      answer: "The government fee for PAN card application is ₹110 for Indian addresses and ₹1,020 for foreign addresses, plus applicable taxes."
    },
    {
      question: "Can I track my PAN application status?",
      answer: "Yes, you can track your PAN application status using the acknowledgment number provided after application submission."
    },
    {
      question: "What if I lose my PAN card?",
      answer: "You can apply for a duplicate PAN card by submitting a request with proper documentation and paying the required fee."
    },
    {
      question: "Is PAN card mandatory for bank accounts?",
      answer: "Yes, PAN card is mandatory for opening bank accounts, fixed deposits, and various financial transactions."
    }
  ];

  const documentRequirements = [
    {
      title: "Identity Proof (PoI)",
      description: "This document verifies your identity. You can submit any one of the following:",
      icon: CreditCard,
      documents: [
        "Aadhaar Card",
        "Passport",
        "Driver's License",
        "Voter ID"
      ]
    },
    {
      title: "Address Proof (PoA)",
      description: "This is used to confirm your residential address. One of the following documents will be accepted:",
      icon: MapPin,
      documents: [
        "Recent Bank Statement (typically from the past 3 months)",
        "Valid Rent Agreement (if applicable)",
        "Latest Utility Bills (electricity, water, or gas bills from the past 3 months)",
        "Aadhaar Card (if it reflects your current address)"
      ]
    },
    {
      title: "Date of Birth Proof (DoB)",
      description: "To validate the date of birth, any one of the following documents:",
      icon: Calendar,
      documents: [
        "Birth Certificate",
        "School Leaving Certificate",
        "Passport"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={applicationTypes}
        selectFieldType="hearAbout"
      />

      {/* Document Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Required Documents
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Documents Required for PAN Card Application
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All the documents should be current, accurate, and comply with official guidelines to prevent processing delays and facilitate a hassle-free application process.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documentRequirements.map((requirement, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <requirement.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{requirement.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requirement.documents.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <h3 className="font-semibold text-yellow-800">Important Note</h3>
              </div>
              <p className="text-sm text-yellow-700">
                Make sure that all submitted documents are legible and match the information in your application form to avoid rejection or delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="PAN Card Application Service"
        subtitle="Professional PAN card application with expert assistance"
        plans={pricingPlans}
        note="Government fees are additional. Service includes expert guidance and status tracking."
      />

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about PAN card application"
        faqs={faqs}
        columns={2}
        ctaTitle="Ready to Apply for Your PAN Card?"
        ctaDescription="Get expert assistance for hassle-free PAN card application. Our professionals ensure accurate documentation and fast processing."
      />
    </div>
  );
};

export default PANApplicationPage;
