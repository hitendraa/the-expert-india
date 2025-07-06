import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, AlertTriangle, Award, Building, TrendingUp, DollarSign, BarChart, Factory, RefreshCw, Banknote, Wallet } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: 'Working Capital Loan | Cash Flow Finance | Quick Approval | The Expert India',
  description: 'Get working capital loans for business operations, inventory management, and cash flow requirements. Quick approval with competitive interest rates and flexible repayment.',
  keywords: [
    'working capital loan',
    'cash flow finance',
    'business operations loan',
    'inventory financing',
    'overdraft facility',
    'short term loan',
    'business funding',
    'working capital finance'
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

export default function WorkingCapitalLoanPage() {
  const heroData = {
    badge: "Working Capital Loan",
    title: "Working Capital Loans for Business Operations",
    subtitle: "Manage Cash Flow & Operational Expenses",
    description: "Secure your business operations with working capital loans designed for inventory management, operational expenses, and cash flow requirements. Get competitive interest rates starting from 10.5% with flexible repayment options. ✔Quick Approval ✔Flexible Repayment ✔Multiple Options ✔Expert Guidance ✔Minimal Documentation ✔Cash Flow Support",
    rating: {
      score: "4.8/5",
      reviews: "(1500+ Working Capital Loans)"
    },
    features: [
      "Interest Rates from 10.5%",
      "Loan up to ₹25 Crores",
      "Flexible Repayment",
      "Quick Processing",
      "Multiple Options",
      "Expert Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Consultation",
      consultationDescription: "Complete working capital assistance"
    },
    trustIndicators: [
      {
        title: "1500+ Loans",
        subtitle: "Successfully Approved"
      },
      {
        title: "Quick",
        subtitle: "48-72 Hours Approval"
      }
    ],
    form: {
      title: "Get Working Capital Loan",
      subtitle: "Support Your Business Operations",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Loan Requirement"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select loan requirement",
        state: "Choose your state"
      },
      button: "Apply for Working Capital",
      note: "Our working capital experts will contact you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for working capital consultation"
      }
    }
  };

  const loanRequirements = [
    "Inventory Financing",
    "Operational Expenses",
    "Supplier Payments",
    "Salary & Wages",
    "Raw Material Purchase",
    "Seasonal Requirements",
    "Order Fulfillment",
    "Other"
  ];

  const overviewData = {
    title: "What is a Working Capital Loan?",
    description: "A working capital loan is a short-term financing solution designed to meet the day-to-day operational expenses of a business. It helps bridge the gap between cash inflows and outflows, ensuring smooth business operations by funding inventory purchases, supplier payments, salaries, and other operational costs without disrupting the business cycle."
  };

  const keyFeatures = [
    {
      icon: RefreshCw,
      title: "Flexible Repayment",
      description: "Choose from various repayment options based on cash flow patterns"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval within 48-72 hours with minimal documentation"
    },
    {
      icon: Wallet,
      title: "Multiple Formats",
      description: "Available as term loans, overdrafts, and revolving credit facilities"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Interest rates starting from 10.5% per annum"
    }
  ];

  const workingCapitalTypes = [
    {
      type: "Cash Credit/Overdraft",
      description: "Revolving credit facility against current assets",
      features: [
        "Withdraw funds as per requirement",
        "Interest charged only on utilized amount",
        "Flexible repayment schedule",
        "Renewal annually"
      ],
      tenure: "12 months (renewable)",
      interestRate: "10.5% - 16% p.a.",
      collateral: "Current assets as security",
      suitableFor: "Businesses with fluctuating working capital needs"
    },
    {
      type: "Working Capital Term Loan",
      description: "Fixed amount loan for specific working capital requirements",
      features: [
        "Lump sum disbursement",
        "Fixed monthly installments",
        "Lower interest rates",
        "Structured repayment"
      ],
      tenure: "6 months to 3 years",
      interestRate: "11% - 15% p.a.",
      collateral: "Business assets or guarantees",
      suitableFor: "Businesses with predictable working capital needs"
    },
    {
      type: "Letter of Credit",
      description: "Trade finance instrument for supplier payments",
      features: [
        "Guaranteed payment to suppliers",
        "Improved supplier relationships",
        "Better payment terms",
        "International trade support"
      ],
      tenure: "30-180 days",
      interestRate: "10% - 14% p.a.",
      collateral: "Trade documents and guarantees",
      suitableFor: "Import/export businesses"
    },
    {
      type: "Invoice Discounting",
      description: "Immediate funds against pending invoices",
      features: [
        "Quick liquidity against receivables",
        "No additional collateral required",
        "Customer relationship preserved",
        "Flexible tenure options"
      ],
      tenure: "30-90 days",
      interestRate: "12% - 18% p.a.",
      collateral: "Invoice and customer agreements",
      suitableFor: "Service businesses with large receivables"
    },
    {
      type: "Supply Chain Finance",
      description: "Financing for supply chain operations",
      features: [
        "End-to-end supply chain support",
        "Vendor financing options",
        "Inventory management support",
        "Technology-enabled solutions"
      ],
      tenure: "30-365 days",
      interestRate: "11% - 16% p.a.",
      collateral: "Supply chain agreements",
      suitableFor: "Manufacturing and trading businesses"
    },
    {
      type: "Channel Financing",
      description: "Financing for dealers and distributors",
      features: [
        "Support for channel partners",
        "Inventory stocking assistance",
        "Sales growth facilitation",
        "Structured repayment terms"
      ],
      tenure: "3-12 months",
      interestRate: "12% - 17% p.a.",
      collateral: "Inventory and guarantees",
      suitableFor: "Companies with dealer/distributor networks"
    }
  ];

  const eligibilityCriteria = [
    {
      category: "Business Vintage",
      details: [
        "Minimum 2 years in operation",
        "Consistent business track record",
        "Profitable operations"
      ]
    },
    {
      category: "Financial Health",
      details: [
        "Positive cash flow patterns",
        "Adequate current assets",
        "Reasonable debt-to-equity ratio"
      ]
    },
    {
      category: "Credit Profile",
      details: [
        "CIBIL score 650 and above",
        "Clean credit history",
        "No willful defaults"
      ]
    },
    {
      category: "Documentation",
      details: [
        "Audited financial statements",
        "Bank statements (12 months)",
        "Valid business registrations"
      ]
    }
  ];

  const assessmentFactors = [
    {
      factor: "Current Assets",
      description: "Inventory, receivables, and cash holdings",
      importance: "Primary security for working capital facilities"
    },
    {
      factor: "Operating Cycle",
      description: "Time taken to convert inventory to cash",
      importance: "Determines loan tenure and repayment structure"
    },
    {
      factor: "Cash Flow Pattern",
      description: "Monthly inflows and outflows analysis",
      importance: "Helps determine repayment capability"
    },
    {
      factor: "Business Seasonality",
      description: "Seasonal variations in business operations",
      importance: "Influences loan structuring and limits"
    },
    {
      factor: "Industry Dynamics",
      description: "Industry-specific working capital requirements",
      importance: "Affects risk assessment and pricing"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Working Capital Assessment",
      description: "Analyze your working capital requirements and cash flow patterns"
    },
    {
      step: 2,
      title: "Financial Evaluation",
      description: "Review financial statements, bank statements, and business operations"
    },
    {
      step: 3,
      title: "Loan Structuring",
      description: "Design appropriate working capital solution based on your needs"
    },
    {
      step: 4,
      title: "Documentation",
      description: "Complete loan documentation and security arrangements"
    },
    {
      step: 5,
      title: "Approval & Sanction",
      description: "Credit approval and loan sanction letter issuance"
    },
    {
      step: 6,
      title: "Facility Activation",
      description: "Working capital facility activation and fund utilization"
    }
  ];

  const requiredDocuments = [
    {
      category: "Business Documents",
      documents: [
        "Business Registration Certificate",
        "GST Registration",
        "Trade License",
        "Partnership Deed/MOA/AOA",
        "Shop & Establishment License"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "Audited Financial Statements (3 years)",
        "Provisional/Management Accounts",
        "Bank Statements (12-18 months)",
        "ITR (3 years)",
        "Cash Flow Projections"
      ]
    },
    {
      category: "Operational Documents",
      documents: [
        "Stock Statements",
        "Receivables Aging",
        "Payables Schedule",
        "Sales/Purchase Invoices",
        "Inventory Reports"
      ]
    },
    {
      category: "Security Documents",
      documents: [
        "Asset Valuation Reports",
        "Property Documents",
        "Insurance Policies",
        "Guarantor Documents",
        "Hypothecation Agreements"
      ]
    }
  ];

  const industrySpecific = [
    {
      industry: "Manufacturing",
      requirements: [
        "Raw material financing",
        "Work-in-progress funding",
        "Finished goods inventory",
        "Supplier payment support",
        "Seasonal demand management"
      ],
      challenges: "Long production cycles, inventory management",
      solutions: "CC/OD facilities, supplier financing, inventory funding"
    },
    {
      industry: "Trading",
      requirements: [
        "Inventory procurement",
        "Stock holding costs",
        "Distributor/dealer support",
        "Seasonal stock building",
        "Payment cycle management"
      ],
      challenges: "Rapid inventory turnover, price fluctuations",
      solutions: "Letter of credit, invoice discounting, channel financing"
    },
    {
      industry: "Services",
      requirements: [
        "Salary and operational costs",
        "Receivables financing",
        "Project working capital",
        "Equipment and technology",
        "Business development costs"
      ],
      challenges: "Extended receivable cycles, project-based income",
      solutions: "Invoice discounting, working capital term loans"
    },
    {
      industry: "Retail",
      requirements: [
        "Inventory stocking",
        "Seasonal merchandise",
        "Store operational costs",
        "Marketing and promotion",
        "Expansion working capital"
      ],
      challenges: "Seasonal variations, changing consumer preferences",
      solutions: "Inventory financing, overdraft facilities"
    }
  ];

  const lenderOptions = [
    {
      lender: "Public Sector Banks",
      advantages: "Lower interest rates, government backing",
      products: "CC/OD, Term loans, LC facilities",
      interestRange: "10.5% - 14%",
      processing: "15-30 days"
    },
    {
      lender: "Private Banks",
      advantages: "Quick processing, technology-enabled",
      products: "All working capital products",
      interestRange: "11% - 16%",
      processing: "7-15 days"
    },
    {
      lender: "NBFCs",
      advantages: "Flexible criteria, faster approval",
      products: "Invoice discounting, short-term loans",
      interestRange: "12% - 24%",
      processing: "3-7 days"
    },
    {
      lender: "Fintech Lenders",
      advantages: "Digital processes, instant approval",
      products: "Invoice financing, revenue-based funding",
      interestRange: "15% - 36%",
      processing: "1-3 days"
    }
  ];

  const optimizationTips = [
    {
      tip: "Efficient Inventory Management",
      description: "Maintain optimal inventory levels to reduce carrying costs and improve cash flow"
    },
    {
      tip: "Accelerate Receivables Collection",
      description: "Implement efficient collection processes and offer early payment discounts"
    },
    {
      tip: "Negotiate Better Payment Terms",
      description: "Extend payable periods with suppliers while maintaining good relationships"
    },
    {
      tip: "Seasonal Planning",
      description: "Plan working capital requirements in advance for seasonal business variations"
    },
    {
      tip: "Monitor Cash Flow",
      description: "Implement robust cash flow forecasting and monitoring systems"
    },
    {
      tip: "Choose Right Facility",
      description: "Select appropriate working capital product based on your business cycle"
    }
  ];

  const benefits = [
    "Immediate access to funds for operational needs",
    "Flexible repayment options aligned with cash flows",
    "Interest charged only on utilized amounts (CC/OD)",
    "Preserve business relationships with timely payments",
    "Scale operations without equity dilution",
    "Manage seasonal business fluctuations effectively",
    "Improve supplier relationships with prompt payments",
    "Take advantage of bulk purchase discounts",
    "Maintain adequate inventory levels",
    "Support business growth and expansion plans"
  ];

  const riskFactors = [
    {
      risk: "Over-leveraging",
      impact: "Excessive debt burden affecting cash flows",
      mitigation: "Careful assessment of repayment capacity and debt limits"
    },
    {
      risk: "Interest Rate Volatility",
      impact: "Fluctuating interest costs affecting profitability",
      mitigation: "Consider fixed-rate options or rate hedging strategies"
    },
    {
      risk: "Asset Quality Deterioration",
      impact: "Reduced collateral value affecting credit limits",
      mitigation: "Regular monitoring and maintenance of asset quality"
    },
    {
      risk: "Business Cycle Risk",
      impact: "Seasonal or cyclical downturns affecting repayment",
      mitigation: "Proper cash flow planning and contingency reserves"
    },
    {
      risk: "Regulatory Changes",
      impact: "New regulations affecting business operations",
      mitigation: "Stay updated with regulatory changes and compliance"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between working capital loan and term loan?",
      answer: "Working capital loans are short-term financing for operational expenses like inventory and receivables, typically with flexible repayment. Term loans are long-term funding for capital expenditure with fixed installments over several years."
    },
    {
      question: "How is working capital loan amount determined?",
      answer: "Loan amount is typically calculated as a percentage of current assets (inventory + receivables) minus current liabilities. Most banks provide 20-25% of annual turnover or 75-80% of current assets as working capital limit."
    },
    {
      question: "What are the different types of working capital facilities available?",
      answer: "Main types include Cash Credit/Overdraft (revolving facility), Working Capital Term Loan (fixed amount), Letter of Credit (trade finance), Invoice Discounting (against receivables), and Supply Chain Finance."
    },
    {
      question: "Is collateral required for working capital loans?",
      answer: "Most working capital facilities require collateral in the form of current assets (inventory, receivables), business assets, or personal guarantees. Some NBFCs offer collateral-free options for smaller amounts."
    },
    {
      question: "How quickly can I get working capital loan approval?",
      answer: "Approval timelines vary by lender: Public sector banks (15-30 days), Private banks (7-15 days), NBFCs (3-7 days), and Fintech lenders (1-3 days). Complete documentation speeds up the process."
    },
    {
      question: "Can I repay working capital loan before the due date?",
      answer: "Yes, most working capital facilities allow prepayment. CC/OD facilities have no prepayment penalties as you pay interest only on utilized amounts. Term loans may have prepayment charges depending on the lender."
    },
    {
      question: "What interest rate can I expect for working capital loans?",
      answer: "Interest rates range from 10.5% to 36% depending on the lender, loan type, business profile, and credit score. Banks typically offer 10.5%-16%, NBFCs 12%-24%, and fintech lenders 15%-36%."
    },
    {
      question: "How does The Expert India help with working capital loan applications?",
      answer: "We provide comprehensive assistance including working capital assessment, lender matching, documentation support, application processing, and post-approval relationship management to ensure optimal working capital solutions for your business."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={loanRequirements}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Banknote className="h-4 w-4 mr-2" />
              Working Capital Overview
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
              Why Choose Working Capital Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible financing solutions designed for your operational cash flow needs
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

      {/* Working Capital Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <RefreshCw className="h-4 w-4 mr-2" />
              Working Capital Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Working Capital Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right working capital solution based on your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {workingCapitalTypes.map((wcType, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {wcType.type}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{wcType.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Features:</span>
                    <ul className="mt-2 space-y-1">
                      {wcType.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Tenure:</span>
                      <span className="text-gray-800 ml-2">{wcType.tenure}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Interest:</span>
                      <span className="text-green-600 font-semibold ml-2">{wcType.interestRate}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Collateral:</span>
                      <span className="text-gray-800 ml-2 text-xs">{wcType.collateral}</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Suitable For:</span>
                    <p className="text-xs text-gray-800">{wcType.suitableFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Assessment Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div>
              <div className="text-center mb-6">
                <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  Eligibility Criteria
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Working Capital Loan Eligibility
                </h3>
              </div>
              <div className="grid gap-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-brand-primary text-lg">
                        {criteria.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {criteria.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-start text-sm">
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

            <div>
              <div className="text-center mb-6">
                <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
                  <BarChart className="h-4 w-4 mr-2" />
                  Assessment Factors
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Key Assessment Parameters
                </h3>
              </div>
              <div className="space-y-4">
                {assessmentFactors.map((factor, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-brand-primary text-lg">
                        {factor.factor}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-700">{factor.importance}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Application Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Apply for Working Capital Loan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process to get your working capital financing approved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {applicationProcess.map((step, index) => (
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

      {/* Documents Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Required Documents
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Documentation for Working Capital Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete documentation required for working capital loan assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {requiredDocuments.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {category.category}
                  </CardTitle>
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
        </div>
      </section>

      {/* Industry Specific Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 mb-4">
              <Factory className="h-4 w-4 mr-2" />
              Industry Specific
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Working Capital Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored working capital solutions for different industry sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {industrySpecific.map((industry, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {industry.industry}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Requirements:</span>
                    <ul className="mt-2 space-y-1">
                      {industry.requirements.map((req, rIndex) => (
                        <li key={rIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Challenges:</span>
                    <p className="text-sm text-gray-800">{industry.challenges}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Solutions:</span>
                    <p className="text-sm text-gray-800">{industry.solutions}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lender Options Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Lender Options
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Working Capital Financing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare different lender types and their working capital offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {lenderOptions.map((lender, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {lender.lender}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{lender.advantages}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Products:</span>
                    <p className="text-sm text-gray-800">{lender.products}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Interest Range:</span>
                    <p className="text-green-600 font-semibold text-sm">{lender.interestRange}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Processing Time:</span>
                    <p className="text-sm text-gray-800">{lender.processing}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Tips Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Optimization Tips
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Working Capital Management Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Best practices to optimize your working capital management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {optimizationTips.map((tip, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {tip.tip}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  Key Benefits of Working Capital Loans
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

      {/* Risk Factors Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Risk Factors
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Working Capital Loan Risks & Mitigation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding and managing risks associated with working capital financing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {riskFactors.map((risk, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                    {risk.risk}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{risk.impact}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <span className="font-medium text-gray-600">Mitigation:</span>
                    <p className="text-gray-700 text-sm">{risk.mitigation}</p>
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
        subtitle="Get answers to common questions about working capital loans, types, and application process"
        faqs={faqs}
        columns={2}
        ctaTitle="Optimize Your Working Capital Today"
        ctaDescription="Ensure smooth business operations with our comprehensive working capital financing solutions. Get expert guidance to choose the right facility and manage your cash flow effectively."
      />
    </div>
  );
};
