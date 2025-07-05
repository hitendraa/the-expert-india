"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, AlertTriangle, Building, DollarSign } from "lucide-react";

const AnnualReturnFilingPage = () => {
  const heroData = {
    badge: "Annual Return Filing",
    title: "Complete Annual Return Filing",
    subtitle: "Expert MGT-7 & MGT-7A Filing Services",
    description: "Professional assistance for company annual return filing using Form MGT-7/MGT-7A. Ensure compliance and avoid penalties with our expert guidance.",
    rating: {
      score: "4.9/5",
      reviews: "15,000+ successful filings"
    },
    features: [
      "Form MGT-7/MGT-7A Filing",
      "Complete Documentation Support",
      "Expert Review & Verification",
      "Timely Submission",
      "Government Fee Guidance",
      "Penalty Avoidance"
    ],
    pricing: {
      consultation: "₹499",
      consultationLabel: "Starting Price",
      consultationDescription: "Professional filing service included"
    },
    trustIndicators: [
      {
        title: "Expert Filing",
        subtitle: "Professional Support"
      },
      {
        title: "100% Compliant",
        subtitle: "MCA Approved"
      }
    ],
    form: {
      title: "Get Annual Return Filing",
      subtitle: "Professional assistance for your company's compliance",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Company Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "+91 XXXXX XXXXX",
        email: "your@email.com",
        hearAbout: "Select company type",
        state: "Choose your state"
      },
      button: "Get Filing Support",
      note: "Our experts will call you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for filing updates"
      }
    }
  };

  const companyTypes = [
    "Private Limited Company",
    "Public Limited Company",
    "One Person Company (OPC)",
    "Small Company",
    "Other"
  ];

  const pricingPlans = [
    {
      id: "basic",
      title: "Standard Annual Return",
      price: "₹499",
      recommended: false,
      features: [
        "Form MGT-7A filing (OPC/Small Companies)",
        "Document preparation",
        "Expert review",
        "Government fee guidance",
        "Email support",
        "Status tracking"
      ],
      excludes: []
    },
    {
      id: "standard",
      title: "Premium Annual Return",
      price: "₹999",
      recommended: true,
      features: [
        "Form MGT-7/MGT-7A filing",
        "Complete documentation support",
        "Expert consultation",
        "Priority processing",
        "Phone & email support",
        "Compliance advisory",
        "Deadline reminders"
      ],
      excludes: []
    },
    {
      id: "premium",
      title: "Complete Compliance",
      price: "₹2,499",
      recommended: false,
      features: [
        "Annual return filing",
        "Board resolution drafting",
        "AGM compliance support",
        "Dedicated expert assistance",
        "Year-round compliance advisory",
        "Priority support",
        "Multiple revisions",
        "Penalty protection"
      ],
      excludes: []
    }
  ];

  const faqs = [
    {
      question: "What is Annual Return Filing?",
      answer: "Annual Return Filing is a mandatory compliance requirement where companies must submit Form MGT-7 or MGT-7A to the Registrar of Companies (ROC) annually, containing details about the company's shareholders, directors, and financial status."
    },
    {
      question: "What is the difference between MGT-7 and MGT-7A?",
      answer: "MGT-7 is for all companies except OPCs and Small Companies, while MGT-7A is a condensed form specifically for One Person Companies (OPCs) and Small Companies."
    },
    {
      question: "What is the due date for filing Annual Return?",
      answer: "Form MGT-7/MGT-7A must be filed within 60 days from the company's Annual General Meeting. The typical deadline is November 29th each year."
    },
    {
      question: "What are the government fees for MGT-7 filing?",
      answer: "Fees range from ₹200 to ₹600 based on nominal share capital: Less than ₹1 lakh - ₹200, ₹1-5 lakh - ₹300, ₹5-25 lakh - ₹400, ₹25 lakh-₹1 crore - ₹500, Above ₹1 crore - ₹600."
    },
    {
      question: "What is the penalty for late filing?",
      answer: "The penalty is ₹100 per day of delay. Additionally, late filing fees are imposed: 2x for up to 30 days, 4x for 31-60 days, 6x for 61-90 days, 10x for 91-180 days, and 12x for 181-270 days."
    },
    {
      question: "What documents are required for filing?",
      answer: "Required documents include list of shareholders and debenture holders, AGM approval letter (if applicable), copy of MGT-8, and any other relevant attachments as specified in the form."
    },
    {
      question: "Who can sign the Annual Return?",
      answer: "The Annual Return must be signed by a Director and Company Secretary using Digital Signatures. For OPCs or small companies without a Company Secretary, the Director's signature is sufficient."
    },
    {
      question: "Can I track my filing status?",
      answer: "Yes, after submission, you'll receive a Service Request Number (SRN) which can be used to track the status of your filing on the MCA portal."
    }
  ];

  const governmentFees = [
    { capital: "Less than ₹1,00,000", fee: "₹200" },
    { capital: "₹1,00,000 to ₹4,99,999", fee: "₹300" },
    { capital: "₹5,00,000 to ₹24,99,999", fee: "₹400" },
    { capital: "₹25,00,000 to ₹99,99,999", fee: "₹500" },
    { capital: "₹1,00,00,000 or more", fee: "₹600" },
    { capital: "No share capital", fee: "₹200" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={companyTypes}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Annual Return Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Complete Guide to Annual Return Filing
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Following company registration, every company must submit a return to the Registrar of Companies (ROC) annually. 
              This report encompasses fundamental details about the company, its shareholders, directors, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">What is Form MGT-7?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Form MGT-7 is an electronic document for annual return filing, containing essential company information 
                  like registered office, shareholders, directors, and financial details.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Filing Deadline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Must be filed within 60 days from the Annual General Meeting. 
                  Typical deadline is November 29th each year for most companies.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Penalty for Delay</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  ₹100 per day penalty for non-filing. Additional late fees range from 
                  2x to 12x the normal fee based on delay period.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Fees Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <DollarSign className="h-4 w-4 mr-2" />
              Government Fees
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              MGT-7 Filing Fees Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Filing fees are determined based on the company&apos;s nominal share capital
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Nominal Share Capital</th>
                        <th className="text-left p-3 font-semibold">Government Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {governmentFees.map((fee, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="p-3">{fee.capital}</td>
                          <td className="p-3 font-medium text-green-600">{fee.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="Annual Return Filing Services"
        subtitle="Choose the right plan for your company's compliance needs"
        plans={pricingPlans}
        note="Government fees are additional. All plans include expert guidance and compliance support."
      />

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Annual Return Filing"
        faqs={faqs}
        columns={2}
        ctaTitle="Ready to File Your Annual Return?"
        ctaDescription="Ensure compliance and avoid penalties with our professional annual return filing services. Our experts handle all documentation and submission processes."
      />
    </div>
  );
};

export default AnnualReturnFilingPage;
