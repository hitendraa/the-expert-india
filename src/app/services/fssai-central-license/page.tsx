"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, FileText, Clock, Building, Users, Globe } from "lucide-react";

export default function FSSAICentralLicensePage() {
  const heroData = {
    badge: "FSSAI Central License",
    title: "Get Your FSSAI Central License for Multi-State Food Operations",
    subtitle: "For businesses with annual turnover above Rs. 20 Crores",
    description: "FSSAI Central License is mandatory for large food businesses with annual turnover above Rs. 20 Crores or those involved in import/export. Get expert assistance for Central License registration with complete multi-state compliance support.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by enterprises"
    },
    features: [
      "Multi-state operations coverage",
      "Import-export authorization",
      "Expert consultation & filing",
      "Central authority processing",
      "Complete compliance support",
      "Priority processing available"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized pricing for Central License"
    },
    trustIndicators: [
      {
        title: "Multi-State",
        subtitle: "Pan-India Operations"
      },
      {
        title: "Import-Export",
        subtitle: "International Trade"
      }
    ],
    form: {
      title: "Get FSSAI Central License",
      subtitle: "Apply for your Central License with expert guidance",
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
      button: "Get Central License Quote",
      note: "Our experts will help you get Central License approved",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const eligibilityRequirements = [
    {
      title: "Annual Turnover",
      description: "Business with annual turnover above Rs. 20 Crores",
      icon: Building
    },
    {
      title: "Multi-State Operations",
      description: "Food business operations across multiple states",
      icon: Globe
    },
    {
      title: "Import/Export",
      description: "Involved in import or export of food products",
      icon: Shield
    },
    {
      title: "Large Scale Processing",
      description: "Large-scale manufacturing or processing operations",
      icon: Users
    }
  ];

  const benefits = [
    "Authorization for multi-state food business operations",
    "Permission for import and export of food products",
    "Enhanced credibility for large-scale operations",
    "Compliance with central food safety regulations",
    "Access to international markets and trade",
    "Protection against regulatory penalties and closures",
    "Streamlined operations across multiple states",
    "Priority in government approvals and clearances"
  ];

  const documents = [
    "Certificate of Incorporation/Partnership deed",
    "Identity and address proof of authorized person",
    "Business premises ownership/rental documents",
    "Detailed Food Safety Management Plan",
    "Complete list of food categories and products",
    "NOC from Pollution Control Board",
    "Financial statements and turnover proof",
    "Import-export code (if applicable)"
  ];

  const faqData = [
    {
      question: "What is FSSAI Central License?",
      answer: "FSSAI Central License is required for large food businesses with annual turnover above Rs. 20 Crores or those involved in import/export. It's issued by the Central Food Safety Authority."
    },
    {
      question: "Who needs FSSAI Central License?",
      answer: "Businesses with annual turnover above Rs. 20 Crores, multi-state operations, import/export activities, or large-scale food processing units need Central License."
    },
    {
      question: "What is the validity of Central License?",
      answer: "FSSAI Central License is valid for 1 to 5 years depending on the period chosen during application."
    },
    {
      question: "Can I operate in all states with Central License?",
      answer: "Yes, Central License allows operations across all states in India and also permits import/export activities."
    },
    {
      question: "Is Central License mandatory for export?",
      answer: "Yes, businesses involved in export of food products must have FSSAI Central License regardless of their turnover."
    },
    {
      question: "How long does Central License approval take?",
      answer: "Central License approval typically takes 45-90 days from the date of complete application submission with all required documents."
    },
    {
      question: "What if my turnover decreases below Rs. 20 Crores?",
      answer: "You can continue with Central License even if turnover decreases, or you may apply for State License during renewal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero heroData={heroData} />

      {/* Eligibility Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Eligibility Criteria
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              FSSAI Central License Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check if your business qualifies for FSSAI Central License
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eligibilityRequirements.map((requirement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <requirement.icon className="h-6 w-6 text-purple-600" />
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
                Benefits of FSSAI Central License
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
                    <FileText className="h-5 w-5 mr-2 text-purple-600" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((document, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
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
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Central License Application Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Document Collection", desc: "Gather all required business documents" },
              { step: "2", title: "Application Filing", desc: "Submit application to Central Authority" },
              { step: "3", title: "Review & Inspection", desc: "Detailed review and facility inspection" },
              { step: "4", title: "License Approval", desc: "Receive your Central License certificate" }
            ].map((process, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
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

      {/* Key Features */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Central License?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Pan-India Operations",
                description: "Operate your food business across all states without additional licenses",
                icon: Globe
              },
              {
                title: "Import/Export Rights",
                description: "Authority to import and export food products internationally",
                icon: Shield
              },
              {
                title: "Enhanced Credibility",
                description: "Higher credibility and trust for large-scale business operations",
                icon: Building
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Common questions about FSSAI Central License"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
