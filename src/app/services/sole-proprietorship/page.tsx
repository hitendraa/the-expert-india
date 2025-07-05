"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, User, Building2, CheckCircle, Shield, Clock, IndianRupee, Award } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const SoleProprietorshipPage = () => {
  const heroData = {
    badge: "Sole Proprietorship Registration",
    title: "Start Your Business as Sole Proprietorship",
    subtitle: "Simple and Cost-Effective Business Structure",
    description: "Register your sole proprietorship business with expert guidanc    e. Get complete documentation, licenses, and compliance support to start your business journey with confidence. ✔Simple Registration Process ✔Minimal Documentation ✔Expert Guidance ✔Complete Legal Support",
    rating: {
      score: "4.9/5",
      reviews: "(1200+ Businesses Registered)"
    },
    features: [
      "Simple Registration Process",
      "Minimal Documentation",
      "Expert Guidance",
      "Complete Legal Support",
      "Tax Registration Support",
      "Business License Assistance"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Starting from",
      consultationDescription: "Complete sole proprietorship setup"
    },
    trustIndicators: [
      {
        title: "100% Legal",
        subtitle: "Compliant Business Setup"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Start Your Sole Proprietorship Business",
      subtitle: "Get Expert Assistance",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Business Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select business type",
        state: "Choose your state"
      },
      button: "Start My Business",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const businessTypes = [
    "Trading Business",
    "Service Business",
    "Manufacturing",
    "Consultancy",
    "Online Business",
    "Retail Business"
  ];

  const overviewData = {
    title: "What is Sole Proprietorship?",
    description: "A sole proprietorship is the simplest form of business entity where a single individual owns and operates the business. It's ideal for small businesses, freelancers, and entrepreneurs who want to start with minimal formalities and maximum control over their business operations."
  };

  const keyFeatures = [
    {
      icon: User,
      title: "Single Ownership",
      description: "Complete control and ownership by one individual"
    },
    {
      icon: IndianRupee,
      title: "Low Cost Setup",
      description: "Minimal registration fees and operational costs"
    },
    {
      icon: FileText,
      title: "Simple Compliance",
      description: "Easy tax filing and minimal regulatory requirements"
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Fast registration process, usually within 7-10 days"
    }
  ];

  const advantages = [
    "Complete control over business decisions",
    "Easy to start and dissolve",
    "Minimal regulatory compliance",
    "Direct tax benefits",
    "No sharing of profits",
    "Quick decision-making process",
    "Low operational costs",
    "Simple accounting requirements"
  ];

  const disadvantages = [
    "Unlimited personal liability",
    "Limited access to capital",
    "Difficulty in expansion",
    "Limited business credibility",
    "No separate legal entity",
    "Limited life of business",
    "Challenges in getting loans",
    "Tax implications on personal income"
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Business Name Selection",
      description: "Choose a unique business name and verify availability"
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Gather required personal and business documents"
    },
    {
      step: 3,
      title: "Registration Applications",
      description: "File applications for various registrations and licenses"
    },
    {
      step: 4,
      title: "Tax Registrations",
      description: "Complete PAN, GST, and other tax-related registrations"
    },
    {
      step: 5,
      title: "Bank Account Opening",
      description: "Open business bank account with required documentation"
    },
    {
      step: 6,
      title: "Business Launch",
      description: "Start operations with complete legal compliance"
    }
  ];

  const requiredDocuments = [
    "PAN Card of the proprietor",
    "Aadhaar Card of the proprietor",
    "Address proof (residence and business)",
    "Identity proof with photograph",
    "Bank account details",
    "Business address proof",
    "Passport size photographs",
    "Educational certificates (if required)",
    "Experience certificates (if applicable)",
    "Property documents (if owned)"
  ];

  const registrationTypes = [
    {
      title: "Shop and Establishment License",
      description: "Mandatory for businesses with employees",
      applicability: "All commercial establishments",
      validity: "1-5 years (varies by state)"
    },
    {
      title: "GST Registration",
      description: "Required for turnover above ₹40 lakhs",
      applicability: "Based on turnover threshold",
      validity: "Valid till cancelled"
    },
    {
      title: "Professional Tax",
      description: "State-specific tax registration",
      applicability: "Businesses with employees",
      validity: "Annual renewal"
    },
    {
      title: "Trade License",
      description: "Municipal license for business operations",
      applicability: "Location-specific requirements",
      validity: "1-3 years"
    }
  ];

  const faqs = [
    {
      question: "What is a sole proprietorship business?",
      answer: "A sole proprietorship is a business owned and operated by a single individual. It's the simplest form of business structure where the owner has complete control over all business decisions and is personally liable for all business debts and obligations."
    },
    {
      question: "What are the main advantages of sole proprietorship?",
      answer: "Key advantages include complete control over business decisions, easy setup and dissolution, minimal regulatory compliance, direct tax benefits, no profit sharing, quick decision-making, low operational costs, and simple accounting requirements."
    },
    {
      question: "What documents are required for sole proprietorship registration?",
      answer: "Required documents include PAN card, Aadhaar card, address proofs (residence and business), identity proof with photograph, bank account details, passport size photographs, and relevant educational or experience certificates."
    },
    {
      question: "Is GST registration mandatory for sole proprietorship?",
      answer: "GST registration is mandatory for sole proprietorships with annual turnover exceeding ₹40 lakhs (₹20 lakhs for northeastern states). Voluntary registration is also available for businesses below the threshold."
    },
    {
      question: "What are the disadvantages of sole proprietorship?",
      answer: "Disadvantages include unlimited personal liability, limited access to capital, difficulty in expansion, limited business credibility, no separate legal entity, limited business life, challenges in getting loans, and tax implications on personal income."
    },
    {
      question: "How long does it take to register a sole proprietorship?",
      answer: "The registration process typically takes 7-10 working days, depending on the type of licenses required and the state of registration. Some registrations may be completed faster with proper documentation."
    },
    {
      question: "Can a sole proprietorship be converted to other business structures?",
      answer: "Yes, a sole proprietorship can be converted to partnership, LLP, or private limited company as the business grows. The conversion process involves specific legal procedures and documentation requirements."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with sole proprietorship registration?`,
      answer: "We provide end-to-end assistance including business name selection, documentation support, various license applications, tax registrations, bank account opening guidance, and ongoing compliance support to ensure your business starts on the right track."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={businessTypes}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Building2 className="h-4 w-4 mr-2" />
              Business Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {overviewData.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {overviewData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Key Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sole Proprietorship?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the key features and benefits of sole proprietorship business structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                  <CardTitle className="text-brand-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages vs Disadvantages Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Pros & Cons
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Advantages vs Disadvantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare the benefits and limitations of sole proprietorship structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Shield className="h-5 w-5 mr-3 flex-shrink-0" />
                  Disadvantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Shield className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{disadvantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Registration Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step Registration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete guide to register your sole proprietorship business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {registrationSteps.map((step, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-brand-primary/10 text-brand-primary rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-brand-primary">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <FileText className="h-5 w-5 mr-3 flex-shrink-0" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Registration Types
              </h2>
              {registrationTypes.map((type, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-brand-primary text-lg">
                      {type.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Applicable to:</span>
                        <span className="text-gray-600">{type.applicability}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Validity:</span>
                        <Badge className="bg-blue-100 text-blue-800">{type.validity}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about sole proprietorship registration and compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Start Your Sole Proprietorship"
        ctaDescription="Ready to start your business as a sole proprietorship? Our experts provide complete guidance and support throughout the registration process."
      />
    </div>
  );
};

export default SoleProprietorshipPage;
