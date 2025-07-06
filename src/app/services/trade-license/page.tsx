import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building2, CheckCircle, Shield, Clock, Users, Award, AlertTriangle, Utensils, Factory, Store } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Trade License Registration | Municipal Business License | The Expert India',
  description: 'Obtain your trade license with expert assistance. Complete documentation and support for municipal authorization to legally operate your business in your local area.',
  keywords: [
    'trade license',
    'trade license registration',
    'municipal trade license',
    'business trade license',
    'shop license',
    'commercial license',
    'local business authorization',
    'municipal business permit'
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

function TradeLicensePage() {
  const heroData = {
    badge: "Trade License Registration",
    title: "Get Your Trade License",
    subtitle: "Legal Permission to Start Your Business",
    description: "Obtain your trade license with expert assistance and start your business legally. We help you get municipal corporation approval for all types of businesses. ✔Quick Processing ✔Expert Guidance ✔Complete Documentation ✔Legal Compliance",
    rating: {
      score: "4.9/5",
      reviews: "(1800+ Trade Licenses Processed)"
    },
    features: [
      "Quick Processing",
      "Expert Guidance", 
      "Complete Documentation",
      "Legal Compliance",
      "Municipal Approval",
      "Renewal Support"
    ],
    pricing: {
      consultation: "₹799",
      consultationLabel: "Starting from",
      consultationDescription: "Professional trade license service"
    },
    trustIndicators: [
      {
        title: "Municipal Approved",
        subtitle: "Legal Business Permission"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Get Your Trade License",
      subtitle: "Start Your Business Legally",
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
      button: "Get Trade License",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const businessTypes = [
    "Food Establishment",
    "Manufacturing Industry",
    "Retail Shop",
    "Service Business",
    "Trading Business",
    "Other Business"
  ];

  const overviewData = {
    title: "What is Trade License?",
    description: "A trade license is a document/certificate that gives permission to the applicant to commence a particular trade or business in a particular area/location. It's issued by municipal corporations to ensure businesses follow safety measures, guidelines, and maintain harmony in society while preventing health hazards and nuisances."
  };

  const licenseCategories = [
    {
      category: "Food Establishment License",
      icon: Utensils,
      description: "For food-related businesses",
      examples: [
        "Hotels and Restaurants",
        "Canteens and Food Stalls", 
        "Bakeries and Sweet Shops",
        "Vegetable and Meat Sales",
        "Fast Food Outlets"
      ],
      color: "text-green-600"
    },
    {
      category: "Industries License",
      icon: Factory,
      description: "For manufacturing businesses",
      examples: [
        "Small Scale Manufacturing",
        "Large Scale Factories",
        "Cyber Cafes",
        "Processing Units",
        "Production Facilities"
      ],
      color: "text-blue-600"
    },
    {
      category: "Shop License",
      icon: Store,
      description: "For retail and service shops",
      examples: [
        "Barber Shops",
        "Dhobi (Laundry) Shops",
        "Candle Manufacturing",
        "General Stores",
        "Service Centers"
      ],
      color: "text-purple-600"
    }
  ];

  const eligibilityCriteria = [
    "Person must be at least 18 years of age",
    "Person must not have any criminal records",
    "Business must be capable of executing legal work",
    "Business activity must be legally permissible",
    "Must comply with municipal regulations"
  ];

  const requiredDocuments = [
    "Address proof and identity proof of applicant",
    "Affidavit certificate",
    "Certificate of incorporation, MOA and AOA (for companies)",
    "Cancelled cheque and bank statement",
    "Legal occupancy document proof of establishment",
    "Documentary proof of establishment of trade",
    "Lease deed of the premises",
    "Proof of non-existence of unauthorized construction",
    "NOC from land-owning agency",
    "PAN card (for firms/companies)",
    "Aadhaar card (for individuals)",
    "Latest municipality property tax payment receipt"
  ];

  const processingInfo = [
    {
      location: "Metropolitan Cities",
      timeframe: "7-10 days",
      condition: "If documents are properly filled",
      delay: "35-40 working days if documents incomplete"
    },
    {
      location: "Small Cities & Rural Areas", 
      timeframe: "Within 30 days",
      condition: "From commencement of business",
      delay: "May take longer based on local regulations"
    }
  ];

  const importantPoints = [
    "Application must be made before starting business",
    "License is valid for one year and requires annual renewal",
    "Renewal application must be filed 30 days before expiry",
    "License is specific to the business type and location",
    "Failure to obtain license can result in fines and penalties",
    "License ensures ethical business practices",
    "Creates business credibility and customer trust"
  ];

  const renewalProcess = [
    {
      title: "Renewal Period",
      description: "January 1st to March 31st annually",
      requirement: "Must renew within 30 days of expiry"
    },
    {
      title: "Required Documents",
      description: "Original license, previous year challans, property tax receipt",
      requirement: "All documents must be up to date"
    },
    {
      title: "Penalty",
      description: "Late renewal attracts fines",
      requirement: "Based on issuing authority rules"
    }
  ];

  const keyBenefits = [
    {
      title: "Legal Authorization",
      description: "Official permission to operate business",
      icon: Shield
    },
    {
      title: "Business Credibility",
      description: "Enhanced trust among customers and investors",
      icon: Award
    },
    {
      title: "Regulatory Compliance",
      description: "Ensures adherence to safety and health standards",
      icon: CheckCircle
    },
    {
      title: "Market Access",
      description: "Access to government contracts and tenders",
      icon: Building2
    }
  ];

  const faqs = [
    {
      question: "What is a Trade License?",
      answer: "A trade license is a document/certificate that gives permission to the applicant to commence a particular trade or business in a particular area/location. However, the license does not allow the holder to any other trade or business than for which it is issued."
    },
    {
      question: "Why is Trade License required?",
      answer: "Trade license helps ensure that no one is severely affected by nuisance and health hazards of any trade or business. It's necessary to carry out any particular business in a particular area and ensures ethical business practices while maintaining harmony in society."
    },
    {
      question: "Who can issue a Trade License?",
      answer: "Trade licenses are issued by the licensing department of the municipal corporation in various departments like industries, engineering, health etc. The government authorizes licenses to regulate trade activities in cities across the country."
    },
    {
      question: "What are the different categories of trade license?",
      answer: "There are three main categories: 1) Industries license for manufacturing factories, 2) Shop license for retail and service businesses, and 3) Food establishment license for restaurants, hotels, food stalls, and food-related businesses."
    },
    {
      question: "What are the eligibility criteria for trade license?",
      answer: "The applicant must be at least 18 years old, must not have any criminal records, and the business must be legally permissible. The business should be capable of executing legal work and comply with municipal regulations."
    },
    {
      question: "How long does it take to process a trade license?",
      answer: "In metropolitan cities, it takes 7-10 days if documents are properly filled, otherwise 35-40 working days. In small cities and rural areas, it takes up to 30 days from commencement of business."
    },
    {
      question: "How often does trade license need to be renewed?",
      answer: "Trade licenses are valid for one year and must be renewed annually. The renewal period is typically between January 1st to March 31st, and the application must be filed within 30 days of expiry to avoid penalties."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with trade license?`,
      answer: "We provide complete assistance with trade license applications including document preparation, municipal coordination, application filing, and renewal support. Our experts ensure quick processing and legal compliance for all types of businesses."
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
              Trade License Overview
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

      {/* License Categories Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              License Categories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Trade License
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different categories of trade licenses based on business type
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {licenseCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${category.color}`}>
                    <category.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {category.category}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Key Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Key Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of Trade License
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why obtaining a trade license is essential for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                  <CardTitle className="text-brand-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
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
                  <Users className="h-5 w-5 mr-3 flex-shrink-0" />
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
                <ul className="space-y-2">
                  {requiredDocuments.slice(0, 8).map((doc, index) => (
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

      {/* Processing Time Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Processing Time
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              License Processing Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expected processing time based on location and documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {processingInfo.map((info, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">
                    {info.location}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-medium">Normal Processing:</span>
                      <p className="text-green-700 font-semibold">{info.timeframe}</p>
                      <p className="text-sm text-gray-600">{info.condition}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="font-medium">Delayed Processing:</span>
                      <p className="text-orange-700 font-semibold">{info.delay}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              License Renewal
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trade License Renewal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important information about license renewal and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {renewalProcess.map((process, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">
                    {process.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">{process.requirement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Points Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Important Points to Remember
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {importantPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about trade license requirements and process"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Your Trade License"
        ctaDescription="Ready to obtain your trade license and start your business legally? Our experts provide complete assistance with documentation, municipal coordination, and quick processing."
      />
    </div>
  );
};

export default TradeLicensePage;
