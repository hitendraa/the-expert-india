"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, CheckCircle, TrendingUp, Building, Users, Clock } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const GSTCompliancePage = () => {
  const heroData = {
    badge: "GST Compliance Services",
    title: "GST Compliance Services",
    subtitle: "Complete GST Compliance Solutions",
    description: "Get comprehensive GST compliance support to ensure your business remains 100% compliant. Our end-to-end solutions cover registration, return filing, invoicing, e-way bills, and ongoing compliance management.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "GST Registration & Amendment",
      "Monthly Return Filing",
      "Annual Return Compliance",
      "E-Way Bill Management",
      "Invoice Compliance",
      "Real-time Support"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Customized compliance pricing"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "Certified Professionals"
      },
      {
        title: "100% Compliance",
        subtitle: "Zero Penalty Assurance"
      }
    ],
    form: {
      title: "Get GST Compliance Service",
      subtitle: "Connect with our GST experts for comprehensive compliance solutions",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Compliance Service"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select compliance service",
        state: "Choose your state"
      },
      button: "Get Compliance Service",
      note: "Our GST experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for GST consultation"
      }
    }
  };

  const complianceServices = [
    "GST Registration",
    "Monthly Return Filing",
    "Annual Return Filing",
    "E-Way Bill Services",
    "Invoice Compliance",
    "GST Advisory",
    "Refund Management"
  ];

  const complianceOverview = {
    title: "GST Compliance Overview",
    description: "GST compliance service aims to help corporates become GST compliant by providing end-to-end return filing solutions. Since GST is complex, organizations need expert assistance to handle compliances as they don't have the in-house expertise to deal with GST law effectively."
  };

  const coreCompliances = [
    {
      title: "GST Registration",
      description: "Mandatory registration for businesses exceeding turnover thresholds",
      icon: Users,
      threshold: "₹40 Lakh (₹10 Lakh for NE states)",
      details: [
        "Normal taxable persons above threshold",
        "Pre-GST law registered businesses",
        "Casual taxable persons",
        "E-commerce aggregators",
        "Non-resident taxable persons",
        "Reverse charge mechanism taxpayers",
        "Input service distributors"
      ],
      penalty: "10% of tax amount (min ₹10,000) for genuine errors, 100% for deliberate evasion"
    },
    {
      title: "GST Return Filing",
      description: "Regular filing of various GST returns as per schedule",
      icon: FileText,
      threshold: "Monthly/Quarterly as applicable",
      details: [
        "GSTR-1: Monthly outward supplies (11th of next month)",
        "GSTR-3B: Monthly summary return (20th of next month)",
        "GSTR-4: Quarterly for composition dealers",
        "GSTR-6: Monthly for Input Service Distributors",
        "GSTR-9: Annual return for regular taxpayers",
        "GSTR-9A: Annual return for composition taxpayers"
      ],
      penalty: "Late fees and interest charges for delayed filing"
    },
    {
      title: "GST Invoicing",
      description: "Mandatory invoice issuance for all supplies",
      icon: FileText,
      threshold: "Every supply transaction",
      details: [
        "Invoice for goods: on/before removal/delivery",
        "Invoice for services: within 30 days of supply",
        "Classification-based invoice types",
        "Payment vouchers for unregistered purchases",
        "Credit/debit notes for corrections",
        "Proper invoice format compliance"
      ],
      penalty: "Penalties for non-compliance with invoicing rules"
    },
    {
      title: "E-Way Bill",
      description: "Electronic waybill for goods movement",
      icon: TrendingUp,
      threshold: "Goods worth ₹50,000 or more",
      details: [
        "Required for registered and unregistered persons",
        "Mandatory for inter-state job work movement",
        "Inter-state handicraft goods transport",
        "Generated by supplier, recipient, or transporter",
        "Distance-based validity periods",
        "Penalties for non-compliance"
      ],
      penalty: "Tax amount as penalty plus potential goods detention"
    }
  ];

  const ourServices = [
    {
      category: "Return Filing Support",
      description: "Comprehensive return filing and compliance management",
      icon: FileText,
      color: "text-blue-600",
      services: [
        "Monthly GSTR-1 & GSTR-3B preparation and filing",
        "Quarterly GSTR-4 for composition taxpayers",
        "Annual GSTR-9 & GSTR-9A filing",
        "GSTR-6 for Input Service Distributors",
        "Real-time reconciliation with books",
        "Error identification and correction"
      ]
    },
    {
      category: "Advisory & Support",
      description: "Expert guidance and query resolution",
      icon: Shield,
      color: "text-green-600",
      services: [
        "Handling all GST law queries",
        "Regular updates on law changes",
        "Compliance requirement analysis",
        "Departmental query responses",
        "Registration and amendment services",
        "Strategic GST planning"
      ]
    },
    {
      category: "E-Way Bill Management",
      description: "Complete e-way bill generation and management",
      icon: TrendingUp,
      color: "text-purple-600",
      services: [
        "E-way bill requirement analysis",
        "Portal-based generation assistance",
        "Validity management and extensions",
        "Consolidated e-way bill creation",
        "Compliance monitoring",
        "Training and guidance"
      ]
    },
    {
      category: "Technology Solutions",
      description: "Advanced tools for compliance management",
      icon: Building,
      color: "text-orange-600",
      services: [
        "SmartRec System for reconciliation",
        "Automated data processing",
        "Real-time compliance tracking",
        "Error detection and alerts",
        "Comprehensive reporting",
        "Dashboard-based monitoring"
      ]
    }
  ];

  const ourApproach = [
    {
      step: "1",
      title: "Data Gathering",
      description: "Collect and analyze client's business data",
      icon: FileText,
      details: [
        "Comprehensive data collection from client",
        "Business transaction analysis",
        "Existing compliance review",
        "System integration assessment"
      ]
    },
    {
      step: "2",
      title: "Comprehensive Review",
      description: "Detailed review and compliance gap analysis",
      icon: Shield,
      details: [
        "Data accuracy verification",
        "Compliance gap identification",
        "Risk assessment and mitigation",
        "Process optimization recommendations"
      ]
    },
    {
      step: "3",
      title: "Expert Processing",
      description: "GST team handles compliance with client approval",
      icon: Users,
      details: [
        "Expert team assignment",
        "Client approval-based processing",
        "Quality checks and validation",
        "Timely filing and submission"
      ]
    },
    {
      step: "4",
      title: "After-Filing Support",
      description: "Ongoing support and monitoring post-filing",
      icon: CheckCircle,
      details: [
        "Post-filing compliance monitoring",
        "Query resolution support",
        "Regular performance reviews",
        "Continuous improvement implementation"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "GST Refund Management",
      description: "Complete refund processing and claim management",
      icon: TrendingUp,
      features: [
        "Export refund claims",
        "ITC refund processing",
        "TCS refund claims",
        "Refund documentation support"
      ]
    },
    {
      title: "E-Invoicing Compliance",
      description: "Electronic invoicing compliance and management",
      icon: FileText,
      features: [
        "E-invoice generation setup",
        "Portal integration support",
        "Compliance monitoring",
        "Training and implementation"
      ]
    },
    {
      title: "GST Audit Support",
      description: "Assistance during GST audits and assessments",
      icon: Shield,
      features: [
        "Audit preparation support",
        "Documentation assistance",
        "Query response management",
        "Compliance verification"
      ]
    },
    {
      title: "QRMP Scheme Support",
      description: "Quarterly Return Monthly Payment scheme assistance",
      icon: Clock,
      features: [
        "Eligibility assessment",
        "Scheme registration support",
        "Quarterly return filing",
        "Monthly payment calculations"
      ]
    }
  ];

  const faqs = [
    {
      question: "What's the threshold limit for generating an e-invoice under GST compliance?",
      answer: "Currently, taxpayers with turnover exceeding ₹10 crores are required to generate e-invoices as part of their GST compliance. However, beginning from 1st January 2023, this limit will be revised and brought down to ₹5 crores. Further, it is being speculated that the limit will be further reduced by the end of the next fiscal year to ₹1 crore."
    },
    {
      question: "What is the QRMP scheme? Is it beneficial?",
      answer: "Quarterly Returns and Monthly Payments (QRMP) is a scheme for regular small taxpayers whereby they can elect to file their GST returns quarterly. Here, both GSTR-1 and GSTR-3B shall be filed on a quarterly basis. However, the taxpayer is required to auto-calculate tax and if the tax liability arises and ITC is insufficient to meet such tax liability, then the taxpayer shall pay the tax for that particular month irrespective of quarterly returns. Taxpayers with annual turnover up to ₹5 crores in a financial year are eligible to opt for the QRMP scheme."
    },
    {
      question: "What are all the compliances and related matters associated with GST that a GST professional can help us with?",
      answer: "GST is comprehensive indirect tax law. GST compliance includes: GST registration, GST returns, GST annual return and reconciliation statement in GSTR-9C, GST refunds, GST e-way bill, GST e-invoicing, GST assessment, scrutiny, and audit, GST search and seizure proceedings, GST litigation proceedings, and GST advisory and consultancy."
    },
    {
      question: "How can I claim GST refund for the TCS collected by the e-commerce operator?",
      answer: "In case you are selling through an e-commerce operator, then the e-commerce operator is liable to collect TCS and deposit it with the government. The seller can claim a refund of the TCS so deposited by filing TCS returns online. This will credit the entire TCS amount to the electronic cash ledger. Then a GST refund application can be filed online for claiming a refund of the excess cash balance lying in the electronic cash ledger."
    },
    {
      question: "What are the penalties for GST non-compliance?",
      answer: "Penalties vary based on the type of non-compliance. For genuine errors like non-payment or short payment of tax, the penalty is 10% of the tax amount subject to a minimum of ₹10,000. However, the penalty will be 100% of the tax amount in case of deliberate evasion. Late filing of returns also attracts late fees."
    },
    {
      question: "How often do I need to file GST returns?",
      answer: "Regular taxpayers need to file GSTR-1 by the 11th and GSTR-3B by the 20th of the next month. Composition dealers file GSTR-4 quarterly. Input Service Distributors file GSTR-6 monthly. Annual returns GSTR-9 and GSTR-9A are filed yearly."
    },
    {
      question: "What is the SmartRec System mentioned in your services?",
      answer: "SmartRec System is our advanced reconciliation tool that provides real-time and constant reconciliation with your books of accounts. It helps in automated data processing, error detection, and ensures accuracy in GST compliance."
    },
    {
      question: `How does ${SITE_FULL_NAME} ensure 100% GST compliance?`,
      answer: "We provide comprehensive GST compliance services including expert return filing, real-time reconciliation, regular law updates, proactive query resolution, and continuous monitoring to ensure your business remains fully compliant with all GST requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={complianceServices}
        selectFieldType="hearAbout"
      />

      {/* Compliance Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              GST Compliance Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {complianceOverview.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {complianceOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Core Compliances Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Core Compliances
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Essential GST Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the four core pillars of GST compliance that every business must follow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {coreCompliances.map((compliance, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <compliance.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {compliance.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{compliance.description}</p>
                  <Badge className="bg-blue-100 text-blue-800 w-fit mt-2">
                    {compliance.threshold}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {compliance.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-800">
                      <span className="font-semibold">Penalty:</span> {compliance.penalty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive GST Compliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end GST compliance solutions to keep your business 100% compliant
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {ourServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${service.color}`}>
                    <service.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {service.category}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Our Approach
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our GST Compliance Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach to ensure comprehensive GST compliance for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ourApproach.map((approach, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-6 bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {approach.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="flex items-center text-brand-primary">
                    <approach.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {approach.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{approach.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {approach.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Additional Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Extended GST Compliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services to address specific GST compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <service.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about GST compliance requirements and services"
        faqs={faqs}
        columns={2}
        ctaTitle="Get GST Compliance Service"
        ctaDescription="Ensure 100% GST compliance with our comprehensive services. Our experts handle all aspects of GST compliance including registration, return filing, invoicing, and ongoing support to keep your business penalty-free."
      />
    </div>
  );
};

export default GSTCompliancePage;
