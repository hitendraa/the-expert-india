import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertTriangle, FileText, Calculator, TrendingUp, BarChart, PieChart, Users, Clock, Award, Target, AlertCircle } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'CMA Report Preparation | Credit Monitoring Arrangement | Bank Loan Documentation | The Expert India',
  description: 'Professional CMA report preparation for bank loans and credit facilities. Expert CA assistance for Credit Monitoring Arrangement with accurate financial projections and ratio analysis.',
  keywords: [
    'CMA report',
    'credit monitoring arrangement',
    'bank loan documentation',
    'financial projections',
    'ratio analysis',
    'working capital loan',
    'CA services',
    'bank loan application',
    'financial statements',
    'project report'
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

const cmaComponents = [
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: "Financial Statements",
    description: "5-year comparative analysis including 2 years audited, 1 year provisional, and 2 years projected statements."
  },
  {
    icon: <Calculator className="h-8 w-8 text-green-600" />,
    title: "Ratio Analysis",
    description: "Comprehensive ratio analysis covering profitability, liquidity, leverage, and efficiency ratios."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    title: "Projections & Assumptions",
    description: "Realistic financial projections with detailed assumptions and correlation with historical data."
  },
  {
    icon: <BarChart className="h-8 w-8 text-orange-600" />,
    title: "Fund Flow Statement",
    description: "Detailed fund flow analysis showing sources and utilization of funds for the project."
  }
]

const keyFeatures = [
  {
    icon: <Award className="h-6 w-6 text-blue-600" />,
    title: "Expert CA Assistance",
    description: "Prepared by qualified Chartered Accountants with banking expertise"
  },
  {
    icon: <Target className="h-6 w-6 text-green-600" />,
    title: "Bank-Compliant Format",
    description: "Reports prepared as per banking norms and RBI guidelines"
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-600" />,
    title: "Quick Turnaround",
    description: "Professional CMA reports delivered within 5-7 working days"
  },
  {
    icon: <Users className="h-6 w-6 text-orange-600" />,
    title: "Post-Submission Support",
    description: "Assistance with banker queries and clarifications"
  }
]

const requiredDocuments = [
  {
    category: "Tax & Compliance",
    documents: [
      "Income Tax Returns (Business & Owners)",
      "GST Returns for last 12 months",
      "TDS Returns and certificates",
      "Sales Tax/VAT Returns (if applicable)"
    ]
  },
  {
    category: "Financial Statements",
    documents: [
      "Last 2 years Audited Financial Statements",
      "Provisional Financial Statements (current year)",
      "Monthly/Quarterly management accounts",
      "Bank statements for last 12-18 months"
    ]
  },
  {
    category: "Business Documents",
    documents: [
      "Detailed cost sheets",
      "Product-wise sales analysis",
      "Order book and future contracts",
      "Business registration certificates"
    ]
  },
  {
    category: "Project Specific",
    documents: [
      "Project feasibility report",
      "Quotations for machinery/equipment",
      "Land documents (if applicable)",
      "Environmental clearances"
    ]
  }
]

const ratioAnalysis = [
  {
    category: "Profitability Ratios",
    ratios: [
      "Gross Profit Ratio (%)",
      "Operating Profit Ratio (%)",
      "Net Profit Ratio (%)",
      "Return on Capital Employed (%)"
    ]
  },
  {
    category: "Liquidity Ratios",
    ratios: [
      "Current Ratio",
      "Quick Ratio",
      "Cash Ratio",
      "Working Capital Ratio"
    ]
  },
  {
    category: "Leverage Ratios",
    ratios: [
      "Debt-Equity Ratio",
      "Debt Service Coverage Ratio",
      "Interest Coverage Ratio",
      "Total Indebtedness Ratio"
    ]
  },
  {
    category: "Activity Ratios",
    ratios: [
      "Inventory Turnover Ratio",
      "Debtors Turnover Ratio (Days)",
      "Creditors Turnover Ratio (Days)",
      "Total Assets Turnover Ratio"
    ]
  }
]

const cmaStructure = [
  {
    section: "Executive Summary",
    description: "Brief overview of business, loan requirement, and key financial highlights"
  },
  {
    section: "Company Profile",
    description: "Business background, management team, products/services, and market position"
  },
  {
    section: "Financial Analysis",
    description: "5-year comparative financial statements with detailed analysis"
  },
  {
    section: "Ratio Analysis",
    description: "Comprehensive ratio analysis with industry benchmarking"
  },
  {
    section: "Fund Flow Statement",
    description: "Sources and application of funds with detailed projections"
  },
  {
    section: "Assumptions & Projections",
    description: "Detailed assumptions for projected years with supporting data"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Document Collection",
    description: "Gather all required financial documents, tax returns, and business records for analysis."
  },
  {
    step: "02",
    title: "Data Analysis",
    description: "Analyze historical financial data and identify trends, patterns, and key performance indicators."
  },
  {
    step: "03",
    title: "Projection Preparation",
    description: "Prepare realistic financial projections based on business plans and market conditions."
  },
  {
    step: "04",
    title: "Ratio Calculation",
    description: "Calculate comprehensive financial ratios and compare with industry benchmarks."
  },
  {
    step: "05",
    title: "Report Compilation",
    description: "Compile comprehensive CMA report with all financial statements and analysis."
  },
  {
    step: "06",
    title: "Review & Finalization",
    description: "Final review, quality check, and preparation of bank-ready CMA report."
  }
]

const benefits = [
  "Higher loan approval chances with professional CMA reports",
  "Accurate financial projections increase banker confidence",
  "Comprehensive ratio analysis demonstrates business viability",
  "Professional presentation enhances credibility",
  "Saves time and ensures compliance with banking norms",
  "Expert guidance on fund utilization and repayment capacity"
]

const considerations = [
  "Accurate data is crucial for realistic projections",
  "Projections must correlate with historical performance",
  "Industry benchmarks should be considered for ratios",
  "All assumptions must be clearly documented",
  "Regular updates may be required for long-term projects",
  "Professional expertise is essential for complex businesses"
]

const faqData = [
  {
    question: "What is a CMA report and why is it required for bank loans?",
    answer: "CMA (Credit Monitoring Arrangement) report is a comprehensive financial document that provides 5-year comparative financial analysis including historical data and projections. Banks require it to assess the financial viability, repayment capacity, and creditworthiness of loan applicants."
  },
  {
    question: "What is the typical structure of a CMA report?",
    answer: "A CMA report typically includes 5 years of financial data (2 years audited, 1 year provisional, 2 years projected), comprehensive ratio analysis, fund flow statements, assumptions for projections, and detailed financial analysis with industry comparisons."
  },
  {
    question: "How long does it take to prepare a CMA report?",
    answer: "With complete documentation, a professional CMA report can be prepared within 5-7 working days. Complex businesses or incomplete documentation may require additional time for accurate analysis and projections."
  },
  {
    question: "What documents are required for CMA report preparation?",
    answer: "Key documents include last 2 years audited financials, provisional statements, ITRs, GST returns, bank statements, cost sheets, business registration documents, and project-specific documents like feasibility reports."
  },
  {
    question: "Can CMA reports be prepared for both manufacturing and trading businesses?",
    answer: "Yes, CMA reports can be prepared for all types of businesses including manufacturing, trading, and service sectors. However, the format and analysis may vary based on the nature of business operations."
  },
  {
    question: "What happens if the projected figures in CMA report don't match actual performance?",
    answer: "Banks monitor actual performance against projections. Significant deviations may require explanation and updated projections. It's important to make realistic projections based on historical data and market conditions."
  },
  {
    question: "How important is ratio analysis in CMA reports?",
    answer: "Ratio analysis is crucial as banks compare your ratios with industry benchmarks. Poor ratios can lead to loan rejection. Professional preparation ensures optimal presentation of financial health through proper ratio analysis."
  },
  {
    question: "Can you assist with bank queries after CMA report submission?",
    answer: "Yes, we provide post-submission support including assistance with banker queries, clarifications on financial data, and preparation of additional documents that may be requested by the bank."
  }
]

export default function CMAReportPage() {
  const cmaOptions = [
    "Working Capital Loan",
    "Term Loan", 
    "Project Financing",
    "Equipment Finance",
    "Business Expansion",
    "New Project Setup",
    "Credit Enhancement",
    "Other"
  ];

  const heroData = {
    badge: "CMA Report Services",
    title: "Professional CMA Report Preparation",
    subtitle: "Credit Monitoring Arrangement for Bank Loans",
    description: "Get bank-compliant CMA reports prepared by expert CAs for your loan applications. Comprehensive financial analysis with accurate projections and ratio analysis. ✔Expert CA Team ✔Bank-Compliant Format ✔Quick Delivery ✔Ratio Analysis ✔Post-Submission Support ✔High Success Rate",
    rating: {
      score: "4.9/5",
      reviews: "(800+ CMA Reports Prepared)"
    },
    features: [
      "Expert CA Assistance",
      "5-Year Financial Analysis",
      "Comprehensive Ratios",
      "Quick Turnaround",
      "Bank-Compliant Format",
      "Post-Submission Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Consultation",
      consultationDescription: "Complete CMA report guidance"
    },
    trustIndicators: [
      {
        title: "800+ Reports",
        subtitle: "Successfully Prepared"
      },
      {
        title: "95% Approval",
        subtitle: "Success Rate"
      }
    ],
    form: {
      title: "Get CMA Report Quote",
      subtitle: "Expert Financial Analysis & Projections",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Loan Purpose"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select loan purpose",
        state: "Choose your state"
      },
      button: "Get CMA Report Quote",
      note: "Our CA experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for CMA report consultation"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        heroData={heroData}
        selectOptions={cmaOptions}
        selectFieldType="hearAbout"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Overview Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CMA Report Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A Credit Monitoring Arrangement (CMA) report is a comprehensive financial document that banks require 
              to assess your business&apos;s creditworthiness and repayment capacity for loans and credit facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CMA Components */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Components of CMA Report</h2>
            <p className="text-lg text-gray-600">
              Comprehensive financial analysis covering all aspects required by banks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cmaComponents.map((component, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {component.icon}
                  </div>
                  <CardTitle className="text-xl">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CMA Structure */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CMA Report Structure</h2>
            <p className="text-lg text-gray-600">
              Systematic presentation of financial data as per banking requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cmaStructure.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{section.section}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <p className="text-lg text-gray-600">
              Complete documentation required for accurate CMA report preparation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requiredDocuments.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.documents.map((doc, dIndex) => (
                      <li key={dIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ratio Analysis */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Ratio Analysis</h2>
            <p className="text-lg text-gray-600">
              Detailed financial ratios to demonstrate business performance and viability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ratioAnalysis.map((category, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.ratios.map((ratio, rIndex) => (
                      <li key={rIndex} className="flex items-start text-sm">
                        <PieChart className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{ratio}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CMA Report Preparation Process</h2>
            <p className="text-lg text-gray-600">
              Systematic approach to prepare comprehensive and accurate CMA reports
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits & Considerations */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-green-600" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <AlertCircle className="mr-3 h-6 w-6 text-orange-600" />
                  Important Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {considerations.map((consideration, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{consideration}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="CMA Report FAQ"
          subtitle="Get answers to common questions about CMA report preparation and requirements"
          faqs={faqData}
          ctaTitle="Need Professional CMA Report?"
          ctaDescription="Get bank-compliant CMA reports prepared by expert CAs to enhance your loan approval chances. Professional analysis with accurate projections and comprehensive ratio analysis."
        />
      </div>
    </div>
  )
}
