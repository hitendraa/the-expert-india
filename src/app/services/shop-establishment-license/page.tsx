"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building2, CheckCircle, Shield, Clock, Users, MapPin, Award } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const ShopEstablishmentLicensePage = () => {
  const heroData = {
    badge: "Shop & Establishment License",
    title: "Get Your Shop & Establishment License",
    subtitle: "Mandatory License for Commercial Operations",
    description: "Obtain your Shop & Establishment License with expert guidance. Ensure legal compliance for your business operations with complete documentation and regulatory support. ✔Mandatory Compliance ✔Quick Registration ✔Expert Assistance ✔Complete Documentation",
    rating: {
      score: "4.9/5",
      reviews: "(850+ Licenses Obtained)"
    },
    features: [
      "Mandatory Compliance",
      "Quick Registration Process",
      "Expert Legal Assistance",
      "Complete Documentation",
      "Renewal Support",
      "Multi-State Coverage"
    ],
    pricing: {
      consultation: "₹1,499",
      consultationLabel: "Starting from",
      consultationDescription: "Complete license registration"
    },
    trustIndicators: [
      {
        title: "100% Legal",
        subtitle: "Compliant Operations"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Get Your Shop & Establishment License",
      subtitle: "Start Legal Business Operations",
      fields: {
        name: "Business Owner Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Business Type"
      },
      placeholders: {
        name: "Enter business owner name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select business type",
        state: "Choose your state"
      },
      button: "Get My License",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const businessTypes = [
    "Retail Shop",
    "Restaurant/Hotel",
    "Office/Commercial",
    "Manufacturing Unit",
    "Service Business",
    "Trading Business"
  ];

  const overviewData = {
    title: "What is Shop & Establishment License?",
    description: "Shop & Establishment License is a mandatory registration for all commercial establishments under the respective State Shops and Establishment Acts. It regulates working conditions, employment terms, and operational compliance for businesses employing workers."
  };

  const keyFeatures = [
    {
      icon: Building2,
      title: "Legal Compliance",
      description: "Mandatory for all commercial establishments"
    },
    {
      icon: Users,
      title: "Employee Protection",
      description: "Ensures proper working conditions and rights"
    },
    {
      icon: Shield,
      title: "Business Credibility",
      description: "Enhances business legitimacy and trust"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval within 15-30 days"
    }
  ];

  const applicableBusinesses = [
    {
      category: "Retail Establishments",
      examples: [
        "Shops and stores",
        "Supermarkets",
        "Departmental stores",
        "Showrooms",
        "Market stalls"
      ]
    },
    {
      category: "Commercial Establishments",
      examples: [
        "Offices and banks",
        "Insurance companies",
        "Consulting firms",
        "Real estate agencies",
        "Educational institutions"
      ]
    },
    {
      category: "Hospitality & Entertainment",
      examples: [
        "Hotels and restaurants",
        "Cafes and bars",
        "Cinema halls",
        "Entertainment centers",
        "Clubs and resorts"
      ]
    },
    {
      category: "Industrial & Manufacturing",
      examples: [
        "Manufacturing units",
        "Workshops",
        "Factories",
        "Processing units",
        "Industrial establishments"
      ]
    }
  ];

  const eligibilityCriteria = [
    "All commercial establishments employing one or more workers",
    "Shops, stores, and retail establishments",
    "Restaurants, hotels, and hospitality businesses",
    "Offices, banks, and commercial enterprises",
    "Manufacturing units and workshops",
    "Educational and healthcare institutions",
    "Entertainment and recreational facilities",
    "Any establishment engaged in trade or business"
  ];

  const requiredDocuments = [
    "Application form (duly filled and signed)",
    "Identity proof of owner/proprietor",
    "Address proof of establishment",
    "Partnership deed/MOA & AOA (if applicable)",
    "Property ownership or rental agreement",
    "NOC from landlord (for rented premises)",
    "Passport size photographs of owner",
    "Plan/layout of the establishment",
    "Fire safety certificate (if required)",
    "Pollution clearance (if applicable)"
  ];

  const registrationProcess = [
    {
      step: 1,
      title: "Document Preparation",
      description: "Collect and prepare all required documents and certificates"
    },
    {
      step: 2,
      title: "Application Filing",
      description: "Submit application with required documents to local authority"
    },
    {
      step: 3,
      title: "Inspection & Verification",
      description: "Official inspection of premises for compliance verification"
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Pay prescribed fees for license issuance"
    },
    {
      step: 5,
      title: "License Issuance",
      description: "Receive Shop & Establishment License certificate"
    },
    {
      step: 6,
      title: "Display & Compliance",
      description: "Display license at premises and maintain compliance"
    }
  ];

  const renewalRequirements = [
    {
      title: "Annual Renewal",
      description: "Most states require annual renewal of the license",
      timeline: "Before expiry date"
    },
    {
      title: "Updated Documents",
      description: "Submit updated documents if there are any changes",
      timeline: "With renewal application"
    },
    {
      title: "Compliance Certificate",
      description: "Ensure compliance with all applicable labor laws",
      timeline: "During renewal process"
    },
    {
      title: "Fee Payment",
      description: "Pay renewal fees as prescribed by state government",
      timeline: "Before processing"
    }
  ];

  const benefits = [
    "Legal authorization to operate business",
    "Protection under labor laws",
    "Enhanced business credibility",
    "Access to government schemes and benefits",
    "Easier loan approvals from banks",
    "Compliance with statutory requirements",
    "Protection of employee rights",
    "Avoidance of penalties and legal issues"
  ];

  const penalties = [
    {
      violation: "Operating without license",
      penalty: "₹5,000 to ₹25,000 fine"
    },
    {
      violation: "Non-renewal of license",
      penalty: "₹2,000 to ₹10,000 fine"
    },
    {
      violation: "Non-display of license",
      penalty: "₹1,000 to ₹5,000 fine"
    },
    {
      violation: "Violation of working hours",
      penalty: "₹3,000 to ₹15,000 fine"
    }
  ];

  const faqs = [
    {
      question: "What is Shop & Establishment License and why is it mandatory?",
      answer: "Shop & Establishment License is a mandatory registration under state Shops and Establishment Acts. It regulates working conditions, employment terms, and ensures compliance with labor laws for all commercial establishments employing workers."
    },
    {
      question: "Which businesses need Shop & Establishment License?",
      answer: "All commercial establishments including shops, restaurants, offices, hotels, manufacturing units, educational institutions, and any business employing one or more workers require this license."
    },
    {
      question: "What documents are required for Shop & Establishment License?",
      answer: "Required documents include application form, identity and address proofs, property documents, partnership deed (if applicable), NOC from landlord, photographs, establishment layout, and relevant clearance certificates."
    },
    {
      question: "How long does it take to get Shop & Establishment License?",
      answer: "The processing time typically ranges from 15-30 days, depending on the state and completeness of documentation. Some states offer online processing for faster approval."
    },
    {
      question: "Is renewal required for Shop & Establishment License?",
      answer: "Yes, most states require annual renewal of the license. The renewal process involves submitting updated documents, compliance certificates, and paying prescribed renewal fees."
    },
    {
      question: "What are the penalties for operating without this license?",
      answer: "Penalties range from ₹5,000 to ₹25,000 for operating without license, plus additional fines for non-renewal, non-display, and other violations as per state regulations."
    },
    {
      question: "Can I apply for Shop & Establishment License online?",
      answer: "Many states now offer online application facilities for Shop & Establishment License. The process involves filling online forms, uploading documents, and making online fee payments."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with Shop & Establishment License?`,
      answer: "We provide complete assistance including document preparation, application filing, liaison with authorities, inspection support, and ongoing compliance guidance to ensure smooth license procurement and renewal."
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
              License Overview
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
              Why Shop & Establishment License is Important
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the importance and benefits of Shop & Establishment License
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

      {/* Applicable Businesses Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              Applicable Businesses
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Needs Shop & Establishment License?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Categories of businesses that require Shop & Establishment License
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {applicableBusinesses.map((business, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {business.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {business.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

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
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
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
              Complete guide to obtain Shop & Establishment License
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {registrationProcess.map((step, index) => (
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

      {/* Benefits & Renewal Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <Award className="h-5 w-5 mr-3 flex-shrink-0" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Renewal Requirements
              </h2>
              {renewalRequirements.map((requirement, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-brand-primary text-lg">
                      {requirement.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{requirement.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-blue-100 text-blue-800">
                      {requirement.timeline}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Penalties & Fines
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Penalties for Non-Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Avoid legal issues and penalties by maintaining proper compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {penalties.map((penalty, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-600 text-lg">
                    {penalty.violation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Penalty Amount:</span>
                    <Badge className="bg-red-100 text-red-800 text-sm">
                      {penalty.penalty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Shop & Establishment License registration and compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Your Shop & Establishment License"
        ctaDescription="Ensure legal compliance for your business operations. Our experts provide complete assistance with license registration, renewal, and ongoing compliance support."
      />
    </div>
  );
};

export default ShopEstablishmentLicensePage;
