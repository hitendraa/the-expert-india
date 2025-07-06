import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, AlertTriangle, CheckCircle, Building, Calculator, Shield, TrendingUp } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'GST Annual Return Filing Services | GSTR-9, GSTR-9A, GSTR-9C | The Expert India',
  description: 'Professional GST annual return filing services for GSTR-9, GSTR-9A, GSTR-9B, and GSTR-9C. Ensure compliance with expert assistance for reconciliation statements.',
  keywords: [
    'GST annual return',
    'GSTR-9 filing',
    'GSTR-9A filing',
    'GSTR-9C filing',
    'GST annual compliance',
    'GST reconciliation statement',
    'GST yearly return',
    'GST annual summary'
  ],
  authors: [{ name: SITE_FULL_NAME }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

function GSTAnnualReturnPage() {
  const heroData = {
    badge: "GST Annual Return",
    title: "GST Annual Return Filing",
    subtitle: "Comprehensive Annual GST Compliance",
    description: "Ensure complete GST compliance with our professional annual return filing services. Our experts handle all forms of GST annual returns including GSTR-9, GSTR-9A, GSTR-9B, and GSTR-9C with accuracy and timeliness.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by GST registrants"
    },
    features: [
      "GSTR-9 Regular Return Filing",
      "GSTR-9A Composition Return",
      "GSTR-9C Reconciliation Statement",
      "Data Compilation & Validation",
      "Compliance Review",
      "Expert Consultation"
    ],
    pricing: {
      consultation: "₹2,999",
      consultationLabel: "Starting from",
      consultationDescription: "Professional GST annual return filing"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "Certified Professionals"
      },
      {
        title: "Timely Filing",
        subtitle: "Before Due Dates"
      }
    ],
    form: {
      title: "Get GST Annual Return Filing",
      subtitle: "Connect with our GST experts for professional annual return filing services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "GST Return Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select return type",
        state: "Choose your state"
      },
      button: "Get GST Filing Service",
      note: "Our GST experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for GST consultation"
      }
    }
  };

  const returnTypes = [
    "GSTR-9 Regular Return",
    "GSTR-9A Composition Return", 
    "GSTR-9C Reconciliation Statement",
    "GSTR-9B E-commerce Return",
    "GST Compliance Review"
  ];

  const gstOverview = {
    title: "GST Annual Returns Overview",
    description: "GST Annual Return is a comprehensive compilation return that consolidates all business transactions for a particular financial year. It includes information from monthly/quarterly returns filed during that financial year. All GST registrants who held registration anytime during a financial year must file annual returns, irrespective of business activity, sales, or profitability."
  };

  const annualReturnTypes = [
    {
      title: "GSTR-9 (Regular Taxpayers)",
      description: "Annual return for all regular taxpayers who file GSTR-3B and GSTR-1",
      icon: FileText,
      applicability: "All regular GST registrants",
      details: [
        "6 parts with 19 tables covering complete business data",
        "Mandatory for taxpayers with turnover above ₹2 crore",
        "Optional for taxpayers with turnover below ₹2 crore",
        "Requires all GSTR-1 and GSTR-3B to be filed first"
      ]
    },
    {
      title: "GSTR-9A (Composition Taxpayers)",
      description: "Annual return for taxpayers under composition scheme",
      icon: Building,
      applicability: "Composition scheme taxpayers",
      details: [
        "5 parts with 17 tables for composition dealers",
        "Made optional for recent financial years",
        "Simplified format for composition taxpayers",
        "Not required from FY 2019-20 due to Annual GSTR-4"
      ]
    },
    {
      title: "GSTR-9B (E-commerce Operators)",
      description: "Annual return for e-commerce operators collecting TCS",
      icon: TrendingUp,
      applicability: "E-commerce operators under Section 52",
      details: [
        "Specific format for e-commerce operators",
        "Required for TCS collection under Section 52",
        "Filed by operators who file GSTR-8 regularly",
        "Covers all e-commerce transactions and TCS details"
      ]
    },
    {
      title: "GSTR-9C (Reconciliation Statement)",
      description: "Reconciliation statement for taxpayers with turnover above ₹5 crore",
      icon: Calculator,
      applicability: "Taxpayers with annual turnover > ₹5 crore",
      details: [
        "5 parts with 17 tables for reconciliation",
        "Reconciles audited financial statements with GST returns",
        "Self-certified by registered taxpayer",
        "Threshold increased from ₹2 crore to ₹5 crore"
      ]
    }
  ];

  const eligibilityExemptions = [
    {
      title: "Who Must File",
      description: "Every registered person under GST must file annual return",
      icon: CheckCircle,
      color: "text-green-600",
      details: [
        "All regular taxpayers with GST registration",
        "Composition scheme taxpayers (GSTR-9A)",
        "E-commerce operators (GSTR-9B)",
        "Taxpayers with turnover above ₹5 crore (GSTR-9C)"
      ]
    },
    {
      title: "Who is Exempt",
      description: "Following categories are exempt from filing annual return",
      icon: Shield,
      color: "text-blue-600",
      details: [
        "Input Service Distributors (ISD)",
        "TDS deductors under Section 51",
        "TCS collectors under Section 52",
        "Casual taxable persons",
        "Non-residential taxable persons"
      ]
    }
  ];

  const dueDatesAndFees = [
    {
      title: "Due Date",
      description: "31st December of the next financial year",
      icon: Calendar,
      color: "text-purple-600",
      details: [
        "Annual return for FY 2022-23 due by 31st December 2023",
        "Previous years had extended due dates",
        "Filing must be completed before midnight on due date",
        "Extensions may be granted by government notifications"
      ]
    },
    {
      title: "Late Fee Structure",
      description: "Penalties for delayed filing vary by turnover",
      icon: AlertTriangle,
      color: "text-red-600",
      details: [
        "₹200 per day (₹100 CGST + ₹100 SGST) for delay",
        "Maximum 0.50% of annual turnover",
        "Reduced penalties for smaller taxpayers",
        "Up to ₹25/day for turnover ≤ ₹5 crore",
        "Up to ₹50/day for turnover ₹5-20 crore"
      ]
    }
  ];

  const gstr9Structure = [
    {
      part: "Part I",
      title: "Basic Details",
      description: "Financial year, GSTIN, legal name, and trade name",
      tables: "Tables 1-3B"
    },
    {
      part: "Part II", 
      title: "Outward & Inward Supplies",
      description: "Details of advances and supplies during the financial year",
      tables: "Tables 4-5"
    },
    {
      part: "Part III",
      title: "Input Tax Credit Details",
      description: "ITC availed, reversed, and other ITC information",
      tables: "Tables 6-8"
    },
    {
      part: "Part IV",
      title: "Tax Paid Details",
      description: "Tax paid as declared in returns filed during FY",
      tables: "Table 9"
    },
    {
      part: "Part V",
      title: "Next FY Transactions",
      description: "Transactions declared in returns of next FY",
      tables: "Tables 10-11"
    },
    {
      part: "Part VI",
      title: "Other Information",
      description: "ITC reversals, demands, refunds, HSN summary, late fees",
      tables: "Tables 12-19"
    }
  ];

  const gstr9cStructure = [
    {
      part: "Part I",
      title: "Basic Details",
      description: "Financial year, GSTIN, legal name, and audit liability",
      tables: "Tables 1-4"
    },
    {
      part: "Part II",
      title: "Turnover Reconciliation",
      description: "Reconciliation of turnover from audited statements with GSTR-9",
      tables: "Tables 5-8"
    },
    {
      part: "Part III",
      title: "Tax Paid Reconciliation",
      description: "Reconciliation of tax liability and payments",
      tables: "Tables 9-11"
    },
    {
      part: "Part IV",
      title: "ITC Reconciliation",
      description: "Reconciliation of Input Tax Credit with books of accounts",
      tables: "Tables 12-16"
    },
    {
      part: "Part V",
      title: "Additional Liability",
      description: "Additional liability due to non-reconciliation",
      tables: "Table 17"
    }
  ];

  const faqs = [
    {
      question: "What is GST Annual Return and who needs to file it?",
      answer: "GST Annual Return is a comprehensive compilation return that consolidates all business transactions for a financial year. All GST registrants who held registration anytime during a financial year must file it, except Input Service Distributors, TDS deductors, TCS collectors, casual taxable persons, and non-residential taxable persons."
    },
    {
      question: "What are the different types of GST Annual Returns?",
      answer: "There are four types: GSTR-9 for regular taxpayers, GSTR-9A for composition taxpayers, GSTR-9B for e-commerce operators, and GSTR-9C reconciliation statement for taxpayers with turnover above ₹5 crore."
    },
    {
      question: "When is the due date for filing GST Annual Return?",
      answer: "The due date is 31st December of the next financial year. For example, annual return for FY 2022-23 is due by 31st December 2023."
    },
    {
      question: "Is GST Annual Return mandatory for all taxpayers?",
      answer: "No, it's optional for taxpayers with aggregate annual turnover below ₹2 crore. However, it's mandatory for taxpayers with turnover above ₹2 crore. GSTR-9C is required only for taxpayers with turnover above ₹5 crore."
    },
    {
      question: "What is the penalty for late filing of GST Annual Return?",
      answer: "Late fee is ₹200 per day (₹100 CGST + ₹100 SGST) subject to maximum 0.50% of annual turnover. Reduced penalties apply for smaller taxpayers: up to ₹25/day for turnover ≤ ₹5 crore and up to ₹50/day for turnover ₹5-20 crore."
    },
    {
      question: "What documents are required for GST Annual Return filing?",
      answer: "You need all filed GSTR-1 and GSTR-3B returns for the financial year, books of accounts, purchase and sales registers, bank statements, and audited financial statements (for GSTR-9C)."
    },
    {
      question: "Can I claim Input Tax Credit through GST Annual Return?",
      answer: "No, you cannot claim Input Tax Credit through annual return. However, you can declare additional liability not declared in regular returns. ITC can only be claimed through regular monthly/quarterly returns."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with GST Annual Return filing?`,
      answer: "We provide comprehensive GST annual return filing services including data compilation, validation, form preparation, timely filing, and compliance review. Our GST experts ensure accuracy and help avoid penalties."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={returnTypes}
        selectFieldType="hearAbout"
      />

      {/* GST Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              GST Annual Return
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {gstOverview.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {gstOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Annual Return Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Return Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of GST Annual Returns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different types of annual returns based on taxpayer category and business nature
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {annualReturnTypes.map((returnType, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <returnType.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {returnType.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{returnType.description}</p>
                  <div className="bg-blue-50 px-3 py-2 rounded-md mt-3">
                    <p className="text-sm font-medium text-blue-800">
                      <span className="font-semibold">Applicability:</span> {returnType.applicability}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {returnType.details.map((detail, detailIndex) => (
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

      {/* Eligibility Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Eligibility
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Must File GST Annual Return
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the eligibility criteria and exemptions for GST annual return filing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {eligibilityExemptions.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${category.color}`}>
                    <category.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {category.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.details.map((detail, detailIndex) => (
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

      {/* Due Dates and Late Fees Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Due Dates & Penalties
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Due Dates and Late Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important dates and penalty structure for GST annual return filing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {dueDatesAndFees.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${item.color}`}>
                    <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
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

      {/* GSTR-9 Structure Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              GSTR-9 Structure
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Structure of GSTR-9 (Regular Taxpayers)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of GSTR-9 form containing 6 parts with 19 tables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {gstr9Structure.map((part, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-brand-primary text-white">
                      {part.part}
                    </Badge>
                    <span className="text-sm text-gray-500">{part.tables}</span>
                  </div>
                  <CardTitle className="text-brand-primary">
                    {part.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {part.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GSTR-9C Structure Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              GSTR-9C Structure
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Structure of GSTR-9C (Reconciliation Statement)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of GSTR-9C reconciliation statement with 5 parts and 17 tables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {gstr9cStructure.map((part, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-600 text-white">
                      {part.part}
                    </Badge>
                    <span className="text-sm text-gray-500">{part.tables}</span>
                  </div>
                  <CardTitle className="text-purple-600">
                    {part.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {part.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about GST annual return filing"
        faqs={faqs}
        columns={2}
        ctaTitle="Get GST Annual Return Filing Service"
        ctaDescription="Ensure timely and accurate GST annual return filing with our expert services. Our GST professionals handle all types of annual returns including GSTR-9, GSTR-9A, GSTR-9B, and GSTR-9C."
      />
    </div>
  );
};

export default GSTAnnualReturnPage;
