"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, AlertTriangle, CheckCircle, Clock, XCircle, Shield, Users, Calculator } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const GSTCancellationPage = () => {
  const heroData = {
    badge: "GST Registration Cancellation",
    title: "GST Registration Cancellation",
    subtitle: "Professional GST Cancellation Services",
    description: "Get expert assistance for GST registration cancellation with complete compliance. Our professionals handle all legal requirements, documentation, and procedures to ensure smooth cancellation without penalties.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "Business Discontinuation Cases",
      "Voluntary Cancellation",
      "Transfer & Amalgamation",
      "Legal Compliance Review",
      "Documentation Support",
      "Penalty Avoidance"
    ],
    pricing: {
      consultation: "₹2,499",
      consultationLabel: "Starting from",
      consultationDescription: "Complete GST cancellation service"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "Legal Compliance Specialists"
      },
      {
        title: "Hassle-Free Process",
        subtitle: "End-to-End Support"
      }
    ],
    form: {
      title: "Get GST Cancellation Service",
      subtitle: "Connect with our GST experts for professional registration cancellation services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Cancellation Reason"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select reason for cancellation",
        state: "Choose your state"
      },
      button: "Get Cancellation Service",
      note: "Our GST experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for GST consultation"
      }
    }
  };

  const cancellationReasons = [
    "Business Discontinuation",
    "Business Transfer",
    "Amalgamation/Merger",
    "Change in Constitution",
    "Voluntary Opt-out",
    "Death of Proprietor",
    "Other Legal Reasons"
  ];

  const cancellationOverview = {
    title: "GST Registration Cancellation Overview",
    description: "GST registration cancellation means the taxpayer will no longer be a GST registered person. They will not have to pay or collect GST, claim input tax credit, or file GST returns. This process is governed by Section 29 of CGST Act, 2017 and relevant rules under CGST Rules, 2017."
  };

  const cancellationTypes = [
    {
      title: "Voluntary Cancellation",
      description: "Taxpayer-initiated cancellation under Section 29(1)",
      icon: FileText,
      applicable: "Business discontinuation, transfer, or voluntary opt-out",
      details: [
        "Business has been discontinued or transferred",
        "Change in constitution of business",
        "No longer liable to be registered under Section 22/24",
        "Voluntary opt-out from registration under Section 25(3)"
      ]
    },
    {
      title: "Cancellation by Proper Officer",
      description: "Authority-initiated cancellation under Section 29(2)",
      icon: AlertTriangle,
      applicable: "Non-compliance or regulatory violations",
      details: [
        "Contravention of Act provisions or rules",
        "Composition taxpayer not filing returns for 3 consecutive periods",
        "Regular taxpayer not filing returns for 6 months",
        "Voluntary registrant not commencing business within 6 months",
        "Registration obtained through fraud or misstatement"
      ]
    }
  ];

  const cancellationGrounds = [
    {
      category: "Business Changes",
      description: "Legitimate business reasons for cancellation",
      icon: Users,
      color: "text-blue-600",
      grounds: [
        "Business discontinued permanently",
        "Business transferred to another entity",
        "Amalgamation with other legal entity",
        "De-merger or disposal of business",
        "Death of proprietor (application by legal heirs)"
      ]
    },
    {
      category: "Compliance Issues",
      description: "Non-compliance leading to cancellation",
      icon: XCircle,
      color: "text-red-600",
      grounds: [
        "Not conducting business from declared place",
        "Issuing invoices without actual supply",
        "Violating anti-profiteering provisions",
        "Illegal availment of input tax credit",
        "Excessive outward supplies in GSTR-1",
        "Violating e-invoicing or e-way bill rules"
      ]
    },
    {
      category: "Return Filing Defaults",
      description: "Non-filing of returns leading to cancellation",
      icon: Clock,
      color: "text-orange-600",
      grounds: [
        "Composition taxpayer: 3 consecutive periods",
        "Regular taxpayer: 6 months continuous",
        "Voluntary registrant: No business commencement within 6 months",
        "Significant differences in returns vs actual supplies"
      ]
    }
  ];

  const cancellationProcess = [
    {
      step: "1",
      title: "Application Submission",
      description: "Submit cancellation application in prescribed format",
      icon: FileText,
      details: [
        "File application in FORM GST REG-16",
        "Include details of stock and capital goods",
        "Submit within 30 days of event occurrence",
        "Provide relevant supporting documents"
      ]
    },
    {
      step: "2",
      title: "Registration Suspension",
      description: "Registration gets suspended during proceedings",
      icon: Clock,
      details: [
        "Automatic suspension from application date",
        "Cannot make taxable supplies during suspension",
        "No requirement to file returns during suspension",
        "Cannot issue tax invoices or charge tax"
      ]
    },
    {
      step: "3",
      title: "Show Cause Notice",
      description: "Proper officer issues notice if required",
      icon: AlertTriangle,
      details: [
        "Notice issued in FORM GST REG-17",
        "7 working days to respond",
        "Reply to be submitted in FORM GST REG-18",
        "Opportunity to explain and justify"
      ]
    },
    {
      step: "4",
      title: "Final Order",
      description: "Cancellation order or proceedings dropped",
      icon: CheckCircle,
      details: [
        "Order issued in FORM GST REG-19 (cancellation)",
        "Order issued in FORM GST REG-20 (proceedings dropped)",
        "Effective date of cancellation specified",
        "Payment of dues and liabilities as per Section 29(5)"
      ]
    }
  ];

  const liabilityCalculation = [
    {
      title: "Input Tax Credit Recovery",
      description: "ITC on stock held on cancellation date",
      icon: Calculator,
      color: "text-purple-600",
      details: [
        "ITC on inputs held in stock",
        "ITC contained in semi-finished/finished goods",
        "Higher of ITC or output tax payable",
        "Payment through electronic credit/cash ledger"
      ]
    },
    {
      title: "Capital Goods Treatment",
      description: "Special calculation for capital goods and plant & machinery",
      icon: Shield,
      color: "text-green-600",
      details: [
        "ITC taken on capital goods/plant & machinery",
        "Reduced by percentage points/tax on transaction value",
        "Whichever is higher to be paid",
        "Based on Section 15 transaction value"
      ]
    }
  ];

  const suspensionRules = [
    {
      title: "Deemed Suspension",
      description: "Automatic suspension upon application submission",
      icon: Clock,
      details: [
        "From application date or requested cancellation date",
        "Whichever is later",
        "Pending completion of cancellation proceedings",
        "No taxable supplies allowed during suspension"
      ]
    },
    {
      title: "Officer-Initiated Suspension",
      description: "Suspension by proper officer for suspected violations",
      icon: AlertTriangle,
      details: [
        "Based on significant differences in returns",
        "Anomalies indicating contraventions",
        "30 days to explain via FORM GST REG-31",
        "Opportunity of being heard provided"
      ]
    },
    {
      title: "Revocation of Suspension",
      description: "Suspension lifted upon completion of proceedings",
      icon: CheckCircle,
      details: [
        "Automatic revocation upon proceedings completion",
        "Effective from original suspension date",
        "Officer may revoke anytime during proceedings",
        "Provisions of Section 31 and 40 apply for supplies made"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is GST registration cancellation and when is it required?",
      answer: "GST registration cancellation means the taxpayer will no longer be GST registered and cannot collect GST or claim input tax credit. It's required when business is discontinued, transferred, amalgamated, or when there's a change in business constitution."
    },
    {
      question: "What are the different types of GST registration cancellation?",
      answer: "There are two types: Voluntary cancellation (Section 29(1)) initiated by taxpayer for business discontinuation, transfer, or voluntary opt-out; and Cancellation by proper officer (Section 29(2)) due to non-compliance or regulatory violations."
    },
    {
      question: "How long does the GST cancellation process take?",
      answer: "The process typically takes 30 days from application submission. The proper officer must issue the final order within 30 days of receiving the application or reply to show cause notice."
    },
    {
      question: "What happens to Input Tax Credit upon cancellation?",
      answer: "You must pay back the ITC on inputs, semi-finished/finished goods, and capital goods held in stock. The amount is higher of ITC taken or output tax payable on such goods, calculated as per Section 29(5)."
    },
    {
      question: "Can I make taxable supplies during the cancellation process?",
      answer: "No, once registration is suspended (automatically upon application or by proper officer), you cannot make taxable supplies, issue tax invoices, or charge tax during the suspension period."
    },
    {
      question: "What documents are required for GST cancellation?",
      answer: "You need to submit application in FORM GST REG-16 with details of stock, capital goods, payment of liabilities, and relevant supporting documents within 30 days of the event warranting cancellation."
    },
    {
      question: "Does cancellation affect past tax liabilities?",
      answer: "No, cancellation under Section 29(3) doesn't affect liability to pay tax and other dues for any period prior to cancellation date, whether determined before or after cancellation."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with GST cancellation?`,
      answer: "We provide comprehensive GST cancellation services including application preparation, documentation support, liability calculation, compliance review, and representation before tax authorities to ensure smooth cancellation process."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={cancellationReasons}
        selectFieldType="hearAbout"
      />

      {/* Cancellation Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              GST Cancellation Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {cancellationOverview.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {cancellationOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <XCircle className="h-4 w-4 mr-2" />
              Cancellation Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of GST Registration Cancellation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding voluntary and authority-initiated cancellation processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {cancellationTypes.map((type, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <type.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {type.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{type.description}</p>
                  <div className="bg-blue-50 px-3 py-2 rounded-md mt-3">
                    <p className="text-sm font-medium text-blue-800">
                      <span className="font-semibold">Applicable:</span> {type.applicable}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Cancellation Grounds Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Cancellation Grounds
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Grounds for GST Registration Cancellation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Various reasons and circumstances that lead to GST registration cancellation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {cancellationGrounds.map((ground, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${ground.color}`}>
                    <ground.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {ground.category}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{ground.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {ground.grounds.map((item, itemIndex) => (
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

      {/* Cancellation Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Cancellation Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GST Registration Cancellation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process for GST registration cancellation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cancellationProcess.map((process, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-6 bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {process.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="flex items-center text-brand-primary">
                    <process.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {process.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{process.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
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

      {/* Liability Calculation Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              Liability Calculation
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Liability Calculation Upon Cancellation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the financial obligations during GST registration cancellation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {liabilityCalculation.map((liability, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${liability.color}`}>
                    <liability.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {liability.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{liability.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {liability.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Suspension Rules Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Suspension Rules
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Registration Suspension During Cancellation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding registration suspension rules during the cancellation process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {suspensionRules.map((rule, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <rule.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {rule.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{rule.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {rule.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about GST registration cancellation"
        faqs={faqs}
        columns={2}
        ctaTitle="Get GST Cancellation Service"
        ctaDescription="Need help with GST registration cancellation? Our GST experts provide comprehensive support for all types of cancellation processes, ensuring legal compliance and smooth transition."
      />
    </div>
  );
};

export default GSTCancellationPage;
