import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Shield, CheckCircle, AlertTriangle, TrendingUp, Users } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'GST Return Filing Services | GSTR-1, GSTR-3B & Annual Returns | The Expert India',
  description: 'Professional GST return filing services for all business types. Timely filing of GSTR-1, GSTR-3B, quarterly and annual returns with complete compliance support.',
  keywords: [
    'GST return filing',
    'GST returns',
    'GSTR-1 filing',
    'GSTR-3B filing',
    'GST annual return',
    'GST quarterly return',
    'GST compliance',
    'GST return services'
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

function GSTReturnFilingPage() {
  const heroData = {
    badge: "GST Return Filing Services",
    title: "GST Return Filing Services",
    subtitle: "Complete GST Compliance & Return Filing",
    description: "Ensure timely GST return filing with our comprehensive services. We handle all types of GST returns including GSTR-1, GSTR-3B, annual returns, and quarterly filings for seamless compliance.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "GSTR-1 Filing",
      "GSTR-3B Filing",
      "Annual Returns",
      "Quarterly Filing (QRMP)",
      "Input Tax Credit",
      "GST Compliance"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized GST filing pricing"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "Certified Professionals"
      },
      {
        title: "Timely Filing",
        subtitle: "Zero Penalties"
      }
    ],
    form: {
      title: "Get GST Return Filing Quote",
      subtitle: "Connect with our GST experts for comprehensive return filing services",
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
      button: "Get GST Filing Quote",
      note: "Our GST experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for GST consultation"
      }
    }
  };

  const businessTypes = [
    "Regular Taxpayer",
    "Composition Scheme",
    "Non-Resident",
    "Input Service Distributor",
    "E-commerce Operator",
    "TDS Deductor",
    "Other"
  ];

  const gstOverview = {
    title: "What is a GST Return?",
    description: "A GST return is a document containing details of all income/sales and/or expenses/purchases that a GST-registered taxpayer (every GSTIN) is required to file with the tax administrative authorities. This is used by tax authorities to calculate net tax liability.",
    components: [
      "Purchases",
      "Sales", 
      "Output GST (On sales)",
      "Input tax credit (GST paid on purchases)"
    ]
  };

  const whoShouldFile = [
    {
      category: "Regular Businesses",
      turnover: "Above ₹5 Crore",
      frequency: "Monthly",
      returns: "25 returns per year",
      description: "Two monthly returns and one annual return"
    },
    {
      category: "Small Businesses",
      turnover: "Up to ₹5 Crore", 
      frequency: "Quarterly (QRMP)",
      returns: "9 returns per year",
      description: "4 GSTR-1, 4 GSTR-3B, and 1 annual return"
    },
    {
      category: "Composition Dealers",
      turnover: "Up to ₹1.5 Crore",
      frequency: "Quarterly",
      returns: "5 returns per year",
      description: "4 CMP-08 statements and 1 annual return"
    }
  ];

  const gstReturnTypes = [
    {
      form: "GSTR-1",
      description: "Details of outward supplies of taxable goods and/or services",
      frequency: "Monthly/Quarterly",
      dueDate: "11th of next month (Monthly) / 13th of succeeding quarter (Quarterly)",
      applicability: "All regular taxpayers"
    },
    {
      form: "GSTR-3B",
      description: "Summary return of outward supplies and input tax credit claimed",
      frequency: "Monthly/Quarterly",
      dueDate: "20th of next month (Monthly) / 22nd/24th of succeeding quarter (Quarterly)",
      applicability: "All taxpayers except composition scheme"
    },
    {
      form: "GSTR-4",
      description: "Annual return for composition scheme taxpayers",
      frequency: "Annually",
      dueDate: "30th June following financial year",
      applicability: "Composition scheme taxpayers"
    },
    {
      form: "GSTR-5",
      description: "Return for non-resident taxable persons",
      frequency: "Monthly",
      dueDate: "20th of next month",
      applicability: "Non-resident taxpayers"
    },
    {
      form: "GSTR-6",
      description: "Return for input service distributors",
      frequency: "Monthly", 
      dueDate: "13th of next month",
      applicability: "Input Service Distributors"
    },
    {
      form: "GSTR-7",
      description: "Return for tax deductors at source (TDS)",
      frequency: "Monthly",
      dueDate: "10th of next month",
      applicability: "TDS deductors"
    },
    {
      form: "GSTR-8",
      description: "Return for e-commerce operators (TCS)",
      frequency: "Monthly",
      dueDate: "10th of next month",
      applicability: "E-commerce operators"
    },
    {
      form: "GSTR-9",
      description: "Annual return for regular taxpayers",
      frequency: "Annually",
      dueDate: "31st December of next financial year",
      applicability: "All regular taxpayers"
    },
    {
      form: "GSTR-9C",
      description: "Self-certified reconciliation statement",
      frequency: "Annually",
      dueDate: "31st December of next financial year",
      applicability: "Taxpayers with turnover > ₹5 crore"
    }
  ];

  const penaltiesLateFees = [
    {
      type: "Interest",
      rate: "18% per annum",
      calculation: "On outstanding tax amount from due date to payment date",
      description: "Calculated daily on unpaid tax amount"
    },
    {
      type: "Late Fee",
      amount: "₹100 per day per Act",
      maximum: "₹200 per day (CGST + SGST)",
      caps: [
        "Nil tax payable: ₹250 (per Act)",
        "Turnover up to ₹1.5 crore: ₹1,000 (per Act)", 
        "Turnover ₹1.5-5 crore: ₹2,500 (per Act)"
      ]
    }
  ];

  const qrmpScheme = {
    title: "Quarterly Return Filing (QRMP) Scheme",
    eligibility: "Taxpayers with turnover up to ₹5 crore",
    benefits: [
      "File GSTR-1 and GSTR-3B quarterly instead of monthly",
      "Reduced compliance burden with only 9 returns per year",
      "Optional Invoice Furnishing Facility (IFF) for B2B sales",
      "Pay taxes monthly using PMT-06 form"
    ],
    note: "Even under QRMP, taxes must be paid monthly for the first two months of each quarter"
  };

  const filingProcess = [
    {
      step: "1",
      title: "Data Collection",
      description: "Gather all sales and purchase invoices, tax payments",
      icon: FileText,
      details: [
        "Collect all sales invoices",
        "Gather purchase invoices", 
        "Compile tax payment receipts",
        "Organize credit/debit notes"
      ]
    },
    {
      step: "2", 
      title: "Data Entry & Validation",
      description: "Enter data in GST portal or software with validation",
      icon: CheckCircle,
      details: [
        "Input sales details in GSTR-1",
        "Verify purchase data for ITC",
        "Validate HSN/SAC codes",
        "Cross-check tax calculations"
      ]
    },
    {
      step: "3",
      title: "Return Filing",
      description: "File returns on GST portal before due dates",
      icon: Calendar,
      details: [
        "Submit GSTR-1 by due date",
        "File GSTR-3B with tax payment",
        "Verify auto-populated GSTR-2A",
        "Submit any other applicable returns"
      ]
    },
    {
      step: "4",
      title: "Tax Payment & Compliance",
      description: "Pay taxes and ensure ongoing compliance",
      icon: Shield,
      details: [
        "Calculate net tax liability",
        "Make tax payments online",
        "Generate acknowledgment receipts",
        "Maintain records for audit"
      ]
    }
  ];

  const complianceTips = [
    "File returns before due dates to avoid penalties",
    "Maintain accurate records of all transactions",
    "Reconcile GSTR-2A with purchase records monthly",
    "Ensure HSN/SAC codes are correctly mentioned",
    "Keep track of input tax credit eligibility",
    "Pay taxes even if returns are filed late",
    "Use GST software for accurate calculations",
    "Regularly monitor GST portal for notices"
  ];

  const faqs = [
    {
      question: "What is a GST return and who should file it?",
      answer: "A GST return is a document containing details of income/sales and expenses/purchases that GST-registered taxpayers must file. All GST-registered businesses must file returns based on their turnover and business type."
    },
    {
      question: "How many GST returns are there and which ones apply to my business?",
      answer: "There are 13 types of GST returns. Regular businesses file GSTR-1, GSTR-3B, and GSTR-9. The specific returns depend on your business type, turnover, and registration category."
    },
    {
      question: "What is the QRMP scheme and who can opt for it?",
      answer: "QRMP (Quarterly Return Filing) scheme allows taxpayers with turnover up to ₹5 crore to file GSTR-1 and GSTR-3B quarterly instead of monthly, reducing compliance burden from 25 to 9 returns per year."
    },
    {
      question: "What are the due dates for filing GST returns?",
      answer: "GSTR-1: 11th of next month (monthly) or 13th of succeeding quarter (quarterly). GSTR-3B: 20th of next month (monthly) or 22nd/24th of succeeding quarter (quarterly). Due dates may be extended by government notifications."
    },
    {
      question: "What are the penalties for late filing of GST returns?",
      answer: "Late filing attracts interest at 18% per annum on outstanding tax and late fees of ₹100 per day per Act (₹200 total), subject to caps based on turnover and tax liability."
    },
    {
      question: "Can I file GST returns if I have no sales or purchases?",
      answer: "Yes, you must file nil returns even if there are no transactions during the period. This is mandatory for all registered taxpayers to maintain compliance."
    },
    {
      question: "Do I need to pay GST if I file returns quarterly under QRMP?",
      answer: "Yes, even under QRMP scheme, you must pay taxes monthly using PMT-06 form for the first two months of each quarter, and then file quarterly returns."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with GST return filing?`,
      answer: "We provide end-to-end GST return filing services including data collection, validation, timely filing of all applicable returns, tax calculations, and ongoing compliance support to ensure zero penalties."
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

      {/* GST Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              GST Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {gstOverview.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {gstOverview.description}
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              {gstOverview.components.map((component, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">{component}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should File Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Filing Requirements
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Should File GST Returns?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GST return filing requirements vary based on business turnover and type
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whoShouldFile.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    {category.category}
                  </CardTitle>
                  <div className="text-lg font-bold text-gray-900">
                    {category.turnover}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Frequency:</span>
                      <span className="text-sm font-medium">{category.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Returns:</span>
                      <span className="text-sm font-medium">{category.returns}</span>
                    </div>
                    <p className="text-sm text-gray-700">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GST Return Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Return Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of GST Returns & Due Dates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different types of GST returns with their frequencies and due dates
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Return Form
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Frequency
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Due Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gstReturnTypes.map((returnType, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-blue-700">
                        {returnType.form}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {returnType.description}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {returnType.frequency}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {returnType.dueDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* QRMP Scheme Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              QRMP Scheme
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {qrmpScheme.title}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Eligibility:</strong> {qrmpScheme.eligibility}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Benefits of QRMP Scheme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {qrmpScheme.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Important Note:</strong> {qrmpScheme.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filing Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Filing Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GST Return Filing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process for accurate and timely GST return filing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filingProcess.map((process, index) => (
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

      {/* Penalties Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Penalties
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Late Fees & Penalties for Non-Filing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {penaltiesLateFees.map((penalty, index) => (
              <Card key={index} className="shadow-lg border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    {penalty.type}
                  </CardTitle>
                  <div className="text-lg font-bold text-red-600 mt-2">
                    {penalty.rate || penalty.amount}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    {penalty.calculation || penalty.description}
                  </p>
                  {penalty.maximum && (
                    <p className="text-sm font-medium text-gray-800 mb-2">
                      Maximum: {penalty.maximum}
                    </p>
                  )}
                  {penalty.caps && (
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Late Fee Caps:</p>
                      <ul className="space-y-1">
                        {penalty.caps.map((cap, capIndex) => (
                          <li key={capIndex} className="text-sm text-gray-700">
                            • {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Tips Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Compliance Tips
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GST Compliance Best Practices
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  Essential Compliance Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {complianceTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about GST return filing"
        faqs={faqs}
        columns={2}
        ctaTitle="Get GST Return Filing Quote"
        ctaDescription="Ensure timely and accurate GST return filing with our comprehensive services. Connect with our GST experts for all types of returns including GSTR-1, GSTR-3B, annual returns, and quarterly filings under QRMP scheme."
      />
    </div>
  );
};

export default GSTReturnFilingPage;
