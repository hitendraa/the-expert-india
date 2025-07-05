"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Award, CheckCircle, AlertTriangle, Factory, Globe } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const BISRegistrationPage = () => {
  const heroData = {
    badge: "BIS Registration & Certification",
    title: "Get BIS Registration & ISI Mark Certification",
    subtitle: "Quality Assurance for Product Manufacturing",
    description: "Obtain BIS Registration and ISI Mark for your products with expert guidance. Complete assistance for mandatory and voluntary BIS certification across all product categories. ✔Expert Documentation ✔Fast Processing ✔Government Approved ✔Complete Support",
    rating: {
      score: "4.9/5",
      reviews: "(800+ BIS Registrations)"
    },
    features: [
      "BIS Registration Process",
      "ISI Mark Certification",
      "Factory Evaluation Support",
      "Documentation Assistance",
      "Compliance Guidance",
      "Renewal Services"
    ],
    pricing: {
      consultation: "₹4,999",
      consultationLabel: "Starting from",
      consultationDescription: "Complete BIS registration support"
    },
    trustIndicators: [
      {
        title: "Government Approved",
        subtitle: "Official BIS Process"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Get BIS Registration for Your Product",
      subtitle: "Quality Certification Made Easy",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Product Category"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select product category",
        state: "Choose your state"
      },
      button: "Start BIS Registration",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const productCategories = [
    "Cement Products",
    "Electrical Goods",
    "Food Products",
    "Steel Products",
    "Medical Equipment",
    "Automobile Accessories",
    "Cylinders & Valves",
    "Other Products"
  ];

  const overviewData = {
    title: "What is BIS Registration?",
    description: "BIS (Bureau of Indian Standards) Registration is a certification process that provides third-party guarantee of quality, safety, and reliability of products. Established in 1987 through an Act of Parliament, BIS is India's National Standards Body that has been promoting standards movement since 1947. BIS certification allows manufacturers to use the prestigious ISI mark, which is synonymous with quality products in India."
  };

  const keyFeatures = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Third-party guarantee of product quality, safety, and reliability"
    },
    {
      icon: Award,
      title: "ISI Mark License",
      description: "Authorization to use the prestigious ISI mark on certified products"
    },
    {
      icon: Globe,
      title: "Market Access",
      description: "Enhanced market credibility and consumer trust with BIS certification"
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Meet mandatory requirements for regulated product categories"
    }
  ];

  const bisSchemes = [
    {
      scheme: "Normal Procedure",
      target: "Domestic Manufacturers",
      timeline: "4 months",
      process: [
        "Submit application with documents and fee",
        "Preliminary factory evaluation by BIS officer",
        "Sample testing at factory and independent labs",
        "BIS certification granted if samples acceptable"
      ],
      applicability: "Standard manufacturing setups"
    },
    {
      scheme: "Simplified Procedure",
      target: "Domestic Manufacturers",
      timeline: "30 days",
      process: [
        "Submit test report from BIS approved lab",
        "Application submission with required documents",
        "Factory verification by BIS Officer",
        "License granted if verification satisfactory"
      ],
      applicability: "Manufacturers with pre-approved test reports"
    },
    {
      scheme: "Tatkal Scheme",
      target: "Mandatory Product Manufacturers",
      timeline: "30 days",
      process: [
        "Priority processing for mandatory products",
        "Strict timeline adherence",
        "Fast-track evaluation process",
        "Quick certification for compliance"
      ],
      applicability: "Products requiring mandatory BIS certification"
    },
    {
      scheme: "ECO Mark Scheme",
      target: "Eco-friendly Products",
      timeline: "4 months",
      process: [
        "Additional eco-friendly requirements compliance",
        "Standard BIS certification process",
        "Environmental impact assessment",
        "ECO mark license for green products"
      ],
      applicability: "Environment-friendly product manufacturers"
    },
    {
      scheme: "Foreign Manufacturers",
      target: "Overseas Manufacturers",
      timeline: "6 months",
      process: [
        "International application submission",
        "Documentation verification",
        "Product testing and evaluation",
        "ISI mark license for foreign products"
      ],
      applicability: "International manufacturers for Indian market"
    }
  ];

  const mandatoryProducts = [
    {
      category: "Building Materials",
      products: ["Cement", "Steel products", "Electrical wiring accessories"]
    },
    {
      category: "Electrical Goods",
      products: ["Household electrical appliances", "Electrical transformers", "Switches and plugs"]
    },
    {
      category: "Food Products",
      products: ["Packaged food items", "Food additives", "Infant milk substitutes"]
    },
    {
      category: "Automotive",
      products: ["Automobile accessories", "Safety equipment", "Emission control devices"]
    },
    {
      category: "Industrial Equipment",
      products: ["Diesel engines", "Oil pressure stoves", "Industrial machinery"]
    },
    {
      category: "Safety Equipment",
      products: ["Cylinders and valves", "Gas regulators", "Pressure vessels"]
    },
    {
      category: "Medical Equipment",
      products: ["Medical devices", "Diagnostic equipment", "Surgical instruments"]
    },
    {
      category: "Consumer Goods",
      products: ["Toys and games", "Sports equipment", "Personal care items"]
    }
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Product Assessment",
      description: "Evaluate product specifications and determine applicable BIS standards"
    },
    {
      step: 2,
      title: "Documentation Preparation",
      description: "Prepare technical documents, test reports, and application forms"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Submit BIS application with required documents and fees"
    },
    {
      step: 4,
      title: "Factory Evaluation",
      description: "BIS officer conducts preliminary factory inspection and evaluation"
    },
    {
      step: 5,
      title: "Product Testing",
      description: "Sample testing at factory and independent BIS approved laboratories"
    },
    {
      step: 6,
      title: "Certification Grant",
      description: "BIS certificate and ISI mark license issued upon successful evaluation"
    }
  ];

  const requiredDocuments = [
    "Manufacturing license and factory registration",
    "Product specifications and technical drawings",
    "Quality control procedures and manuals",
    "List of raw materials and suppliers",
    "Production process flow chart",
    "Testing equipment and calibration certificates",
    "Factory layout and infrastructure details",
    "Authorized signatory and power of attorney",
    "Company incorporation and registration documents",
    "Previous BIS certificates (if applicable)"
  ];

  const benefits = [
    "Enhanced product credibility and market acceptance",
    "Access to government tenders and contracts",
    "Consumer trust and brand recognition",
    "Compliance with mandatory requirements",
    "Protection against legal issues and penalties",
    "Improved export opportunities",
    "Quality assurance and standardization",
    "Competitive advantage in the market",
    "Insurance benefits and reduced premiums",
    "Support for 'Make in India' initiatives"
  ];

  const complianceChecklist = [
    "Verify product falls under BIS standards",
    "Ensure factory meets BIS infrastructure requirements",
    "Implement quality management systems",
    "Maintain proper documentation and records",
    "Regular internal quality audits",
    "Compliance with environmental regulations",
    "Worker safety and training programs",
    "Raw material quality verification",
    "Equipment calibration and maintenance",
    "Continuous improvement processes"
  ];

  const foreignManufacturerScheme = [
    {
      requirement: "Authorized Representative",
      description: "Appoint Indian representative for liaison with BIS"
    },
    {
      requirement: "Product Testing",
      description: "Testing at BIS approved laboratories in India or abroad"
    },
    {
      requirement: "Factory Evaluation",
      description: "Assessment by BIS officers or recognized agencies"
    },
    {
      requirement: "Documentation",
      description: "Submit all required documents in prescribed format"
    },
    {
      requirement: "Compliance",
      description: "Ensure products meet Indian standards and requirements"
    },
    {
      requirement: "Surveillance",
      description: "Regular monitoring and compliance verification"
    }
  ];

  const faqs = [
    {
      question: "What is BIS certification and why is it important?",
      answer: "BIS certification is a quality assurance mark provided by Bureau of Indian Standards that guarantees product quality, safety, and reliability. It's important for market credibility, consumer trust, legal compliance, and access to government contracts."
    },
    {
      question: "Which products require mandatory BIS certification?",
      answer: "90 products are mandatorily required to have BIS certification including cement, electrical goods, food products, steel items, medical equipment, automobile accessories, cylinders, valves, and more based on public health and safety considerations."
    },
    {
      question: "What is the difference between various BIS certification schemes?",
      answer: "BIS offers Normal Procedure (4 months), Simplified Procedure (30 days), Tatkal Scheme (30 days priority), ECO Mark (eco-friendly products), and Foreign Manufacturers Scheme (6 months) based on manufacturer type and requirements."
    },
    {
      question: "How long does BIS registration take?",
      answer: "Timeline varies by scheme: Simplified and Tatkal schemes take 30 days, Normal procedure takes 4 months, and Foreign Manufacturers scheme takes 6 months from application submission to certificate issuance."
    },
    {
      question: "What documents are required for BIS registration?",
      answer: "Key documents include manufacturing license, product specifications, quality procedures, raw material details, production process, testing equipment certificates, factory layout, and company registration documents."
    },
    {
      question: "Can foreign manufacturers get BIS certification?",
      answer: "Yes, foreign manufacturers can obtain BIS certification through the Foreign Manufacturers Certification Scheme, which allows overseas companies to use ISI mark for Indian market access within 6 months."
    },
    {
      question: "What is the cost of BIS registration?",
      answer: "BIS registration costs vary based on product category, testing requirements, and scheme type. Fees include application charges, testing fees, evaluation costs, and annual license fees ranging from ₹10,000 to ₹1,00,000+."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with BIS registration?`,
      answer: "We provide end-to-end assistance including product assessment, documentation preparation, application submission, factory evaluation support, testing coordination, and compliance guidance throughout the BIS registration process."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={productCategories}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Factory className="h-4 w-4 mr-2" />
              BIS Overview
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
              Benefits of BIS Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the advantages and benefits of BIS certification for manufacturers
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

      {/* BIS Certification Schemes Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Certification Schemes
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              BIS Certification Schemes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different certification schemes available for various manufacturer requirements
            </p>
          </div>

          <div className="space-y-6 max-w-7xl mx-auto">
            {bisSchemes.map((scheme, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-brand-primary text-xl">
                      {scheme.scheme}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        {scheme.timeline}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800">
                        {scheme.target}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600">{scheme.applicability}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Process Steps:</h4>
                  <ol className="space-y-2">
                    {scheme.process.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm">
                        <span className="bg-brand-primary/10 text-brand-primary rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Products Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Mandatory Products
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Products Requiring Mandatory BIS Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              90+ product categories that mandatorily require BIS certification for public health and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {mandatoryProducts.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{product}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
              BIS Registration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process to obtain BIS registration and ISI mark certification
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

      {/* Documents & Foreign Scheme Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
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
                Foreign Manufacturers Scheme
              </h2>
              <div className="space-y-4">
                {foreignManufacturerScheme.map((item, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-brand-primary mb-2">{item.requirement}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Checklist Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Compliance Checklist
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              BIS Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential compliance requirements for successful BIS registration and maintenance
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {complianceChecklist.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary text-center justify-center">
                  <Award className="h-5 w-5 mr-3 flex-shrink-0" />
                  Key Benefits of BIS Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-l-4 border-red-500 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Compliance Notice</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Manufacturing or selling products without mandatory BIS certification is illegal</p>
                    <p>• Non-compliance can result in heavy penalties and legal action</p>
                    <p>• Regular surveillance and monitoring by BIS authorities</p>
                    <p>• Ensure continuous compliance with quality standards</p>
                    <p>• Maintain proper documentation and quality records</p>
                    <p>• Report any changes in manufacturing process to BIS</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about BIS registration, certification process, and compliance requirements"
        faqs={faqs}
        columns={2}
        ctaTitle="Start Your BIS Registration Today"
        ctaDescription="Get your products certified with BIS registration and ISI mark. Our experts provide complete assistance throughout the registration process, from documentation to final certification."
      />
    </div>
  );
};

export default BISRegistrationPage;
