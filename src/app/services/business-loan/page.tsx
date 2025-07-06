import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, AlertTriangle, Award, Building, TrendingUp, DollarSign, Calendar, Briefcase, Target } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Business Loan Services | Quick Approval | Low Interest Rates | The Expert India',
  description: 'Get business loans with competitive interest rates and quick approval. Expert assistance for working capital, term loans, and business expansion financing.',
  keywords: [
    'business loan',
    'working capital loan',
    'term loan',
    'business financing',
    'MSME loan',
    'SME loan',
    'business credit',
    'commercial loan'
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

export default function BusinessLoanPage() {
  const heroData = {
    badge: "Business Loan Services",
    title: "Fuel Your Business Growth",
    subtitle: "Quick Business Loans with Competitive Rates",
    description: "Accelerate your business growth with our comprehensive business loan solutions. Get working capital, term loans, and expansion financing with competitive interest rates starting from 10.5%. ✔Quick Approval ✔Minimal Documentation ✔Flexible Repayment ✔Expert Guidance ✔Multiple Loan Options ✔MSME Support",
    rating: {
      score: "4.8/5",
      reviews: "(1800+ Loans Approved)"
    },
    features: [
      "Interest Rates from 10.5%",
      "Loan up to ₹50 Crores",
      "Quick Processing",
      "Minimal Documentation",
      "Flexible Tenure",
      "Expert Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Consultation",
      consultationDescription: "Complete loan assistance"
    },
    trustIndicators: [
      {
        title: "1800+ Loans",
        subtitle: "Successfully Approved"
      },
      {
        title: "40+ Lenders",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Your Business Loan",
      subtitle: "Expert Assistance & Best Rates",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Loan Amount"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select loan amount",
        state: "Choose your state"
      },
      button: "Apply for Business Loan",
      note: "Our business loan experts will contact you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business loan consultation"
      }
    }
  };

  const loanAmounts = [
    "₹1-5 Lakhs",
    "₹5-10 Lakhs",
    "₹10-25 Lakhs",
    "₹25-50 Lakhs",
    "₹50 Lakhs-1 Crore",
    "₹1-5 Crores",
    "Above ₹5 Crores"
  ];

  const overviewData = {
    title: "What is a Business Loan?",
    description: "A business loan is a financial product designed to meet the capital requirements of businesses across various stages of their lifecycle. Whether you need working capital to manage daily operations, term loans for expansion, or equipment financing for machinery, business loans provide the necessary funds to achieve your entrepreneurial goals with flexible repayment options."
  };

  const keyFeatures = [
    {
      icon: DollarSign,
      title: "Competitive Interest Rates",
      description: "Starting from 10.5% per annum with flexible rate options"
    },
    {
      icon: Calendar,
      title: "Flexible Tenure",
      description: "Repayment periods from 1 to 10 years based on loan type"
    },
    {
      icon: Briefcase,
      title: "High Loan Amount",
      description: "Finance up to ₹50 crores for business expansion needs"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval within 24-72 hours with minimal documentation"
    }
  ];

  const loanTypes = [
    {
      type: "Working Capital Loan",
      description: "For day-to-day business operations and cash flow management",
      features: [
        "Cover operational expenses",
        "Manage cash flow gaps",
        "Flexible repayment options",
        "Quick approval process"
      ],
      tenure: "Up to 12 months",
      amount: "₹1 lakh to ₹50 crores",
      interestRate: "10.5% - 18% p.a."
    },
    {
      type: "Term Loan",
      description: "For business expansion, equipment purchase, and infrastructure",
      features: [
        "Long-term financing solutions",
        "Fixed monthly installments",
        "Competitive interest rates",
        "Tax benefits available"
      ],
      tenure: "1 to 10 years",
      amount: "₹5 lakhs to ₹50 crores",
      interestRate: "11% - 16% p.a."
    },
    {
      type: "Equipment Financing",
      description: "For purchasing machinery, vehicles, and business equipment",
      features: [
        "Finance up to 90% of equipment cost",
        "Quick approval process",
        "Flexible repayment tenure",
        "No additional collateral required"
      ],
      tenure: "3 to 7 years",
      amount: "₹2 lakhs to ₹5 crores",
      interestRate: "12% - 18% p.a."
    },
    {
      type: "Invoice Financing",
      description: "Get funds against pending invoices and receivables",
      features: [
        "Instant liquidity against invoices",
        "No collateral required",
        "Quick processing",
        "Improve cash flow cycle"
      ],
      tenure: "30 to 120 days",
      amount: "₹1 lakh to ₹10 crores",
      interestRate: "13% - 24% p.a."
    },
    {
      type: "MSME Loan",
      description: "Special schemes for Micro, Small, and Medium Enterprises",
      features: [
        "Government-backed schemes",
        "Subsidized interest rates",
        "Collateral-free options",
        "Priority sector lending"
      ],
      tenure: "1 to 7 years",
      amount: "₹50,000 to ₹10 crores",
      interestRate: "9.5% - 15% p.a."
    },
    {
      type: "Trade Finance",
      description: "For import/export and international trade financing",
      features: [
        "Letter of credit facilities",
        "Bank guarantees",
        "Export credit support",
        "Foreign exchange services"
      ],
      tenure: "30 days to 3 years",
      amount: "₹5 lakhs to ₹25 crores",
      interestRate: "10% - 16% p.a."
    }
  ];

  const eligibilityCriteria = [
    {
      category: "Business Vintage",
      details: [
        "Minimum 2 years in operation",
        "Consistent business performance",
        "Profitable track record"
      ]
    },
    {
      category: "Annual Turnover",
      details: [
        "Minimum ₹40 lakhs per annum",
        "Regular cash flow",
        "Growth trajectory preferred"
      ]
    },
    {
      category: "Credit Score",
      details: [
        "CIBIL score 650 and above",
        "Clean credit history",
        "No defaults or settlements"
      ]
    },
    {
      category: "Business Type",
      details: [
        "Proprietorship, Partnership, LLP",
        "Private/Public Limited Company",
        "All sectors considered"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Business Assessment",
      description: "Evaluate your business needs and loan requirements with our experts"
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Gather necessary business and financial documents for application"
    },
    {
      step: 3,
      title: "Lender Matching",
      description: "Match your profile with the most suitable lenders and loan products"
    },
    {
      step: 4,
      title: "Application Submission",
      description: "Submit applications to multiple lenders for best rates and terms"
    },
    {
      step: 5,
      title: "Credit Evaluation",
      description: "Lenders assess creditworthiness and business viability"
    },
    {
      step: 6,
      title: "Approval & Disbursal",
      description: "Receive loan approval and funds disbursed to your account"
    }
  ];

  const requiredDocuments = [
    {
      category: "Identity & Address",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Passport/Voter ID",
        "Utility Bills",
        "Office Address Proof"
      ]
    },
    {
      category: "Business Documents",
      documents: [
        "Business Registration Certificate",
        "GST Registration",
        "Trade License",
        "Partnership Deed/MOA/AOA",
        "Udyam Registration"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "ITR (3 years)",
        "Audited Financial Statements",
        "Bank Statements (12 months)",
        "GST Returns",
        "Provisional/Projected Financials"
      ]
    },
    {
      category: "Additional Documents",
      documents: [
        "Business Plan",
        "Cash Flow Projections",
        "Collateral Documents",
        "Existing Loan Details",
        "Quotations (for equipment loans)"
      ]
    }
  ];

  const lenderPartners = [
    {
      lender: "SBI",
      loanTypes: "Term Loan, Working Capital",
      interestRate: "10.5% - 15%",
      maxAmount: "₹50 Crores"
    },
    {
      lender: "HDFC Bank",
      loanTypes: "Business Loan, Equipment Finance",
      interestRate: "11% - 16%",
      maxAmount: "₹40 Crores"
    },
    {
      lender: "ICICI Bank",
      loanTypes: "Working Capital, Trade Finance",
      interestRate: "11.5% - 17%",
      maxAmount: "₹30 Crores"
    },
    {
      lender: "Axis Bank",
      loanTypes: "MSME Loan, Invoice Financing",
      interestRate: "12% - 18%",
      maxAmount: "₹25 Crores"
    },
    {
      lender: "Kotak Mahindra",
      loanTypes: "Term Loan, Working Capital",
      interestRate: "12.5% - 17%",
      maxAmount: "₹20 Crores"
    },
    {
      lender: "Bajaj Finserv",
      loanTypes: "Business Loan, Equipment Finance",
      interestRate: "13% - 30%",
      maxAmount: "₹45 Lakhs"
    }
  ];

  const businessTips = [
    {
      tip: "Maintain Good Credit Score",
      description: "Keep personal and business credit scores above 700 for better rates and approval chances"
    },
    {
      tip: "Prepare Financial Documents",
      description: "Keep audited financials, tax returns, and bank statements updated and readily available"
    },
    {
      tip: "Compare Multiple Offers",
      description: "Evaluate different lenders for interest rates, processing fees, and repayment terms"
    },
    {
      tip: "Choose Right Loan Type",
      description: "Select the most suitable loan product based on your specific business needs"
    },
    {
      tip: "Plan Cash Flow",
      description: "Ensure you have adequate cash flow to service EMIs without affecting operations"
    },
    {
      tip: "Read Terms Carefully",
      description: "Understand all charges, prepayment options, and penalty clauses before signing"
    }
  ];

  const usePurposes = [
    {
      category: "Business Expansion",
      purposes: [
        "Opening new branches/outlets",
        "Market expansion initiatives",
        "Product line diversification",
        "Geographic expansion",
        "Franchise development"
      ]
    },
    {
      category: "Working Capital",
      purposes: [
        "Inventory management",
        "Raw material purchase",
        "Salary and operational expenses",
        "Seasonal business requirements",
        "Cash flow management"
      ]
    },
    {
      category: "Equipment & Infrastructure",
      purposes: [
        "Machinery and equipment purchase",
        "Technology upgrades",
        "Office setup and renovation",
        "Vehicle purchase",
        "IT infrastructure development"
      ]
    },
    {
      category: "Strategic Initiatives",
      purposes: [
        "Mergers and acquisitions",
        "Research and development",
        "Marketing and advertising",
        "Digital transformation",
        "Export business development"
      ]
    }
  ];

  const benefits = [
    "Quick approval within 24-72 hours",
    "Competitive interest rates starting from 10.5%",
    "Flexible repayment tenure options",
    "Minimal documentation and paperwork",
    "No hidden charges or prepayment penalties",
    "Tax benefits on interest payments",
    "Collateral-free options available",
    "Multiple loan products under one roof",
    "Expert guidance throughout the process",
    "Relationship manager support post-disbursal"
  ];

  const warnings = [
    {
      title: "Over-borrowing Risk",
      warning: "Borrow only what you need and can comfortably repay. Over-leveraging can strain your business cash flow and affect operations"
    },
    {
      title: "Hidden Charges",
      warning: "Be aware of processing fees, documentation charges, and other costs that can significantly increase the effective interest rate"
    },
    {
      title: "Personal Guarantee",
      warning: "Many business loans require personal guarantees from promoters, making you personally liable for the debt"
    },
    {
      title: "Collateral Requirements",
      warning: "Some loans may require business assets or property as collateral, which could be at risk in case of default"
    },
    {
      title: "Variable Interest Rates",
      warning: "Floating rate loans can increase over time. Factor in potential rate increases while planning your finances"
    }
  ];

  const faqs = [
    {
      question: "What types of business loans are available for different business needs?",
      answer: "We offer various business loan types including working capital loans, term loans, equipment financing, invoice financing, MSME loans, and trade finance. Each serves different purposes from daily operations to long-term expansion needs."
    },
    {
      question: "What are the current business loan interest rates and how are they determined?",
      answer: "Business loan interest rates range from 10.5% to 30% per annum, depending on factors like loan type, business profile, credit score, tenure, and lender policies. MSME loans typically have lower rates due to government subsidies."
    },
    {
      question: "What documents are required for business loan application?",
      answer: "Key documents include business registration, GST registration, ITR (3 years), audited financials, bank statements, identity/address proofs, and business plan. Specific requirements may vary based on loan type and lender."
    },
    {
      question: "How long does it take to get business loan approval and disbursal?",
      answer: "Business loan approval typically takes 24-72 hours after document submission. Disbursal can happen within 1-7 working days depending on the lender, loan amount, and completeness of documentation."
    },
    {
      question: "What is the minimum business vintage required for loan eligibility?",
      answer: "Most lenders require a minimum business vintage of 2 years with consistent operations and profitability. Some lenders may consider businesses with 1 year vintage for specific loan products or with strong financial backing."
    },
    {
      question: "Can I get a business loan without collateral or security?",
      answer: "Yes, many lenders offer unsecured business loans up to certain limits based on business turnover, credit score, and financial strength. MSME loans and working capital loans often don't require collateral."
    },
    {
      question: "What is the maximum loan amount I can get for my business?",
      answer: "Business loan amounts can range from ₹50,000 to ₹50 crores depending on your business turnover, financial strength, loan type, and lender policies. Working capital is typically 20-30% of annual turnover."
    },
    {
      question: "How does The Expert India help with business loan applications?",
      answer: "We provide end-to-end assistance including needs assessment, documentation support, lender matching, application processing, rate negotiation, and post-approval support to ensure you get the best business loan deal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={loanAmounts}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Briefcase className="h-4 w-4 mr-2" />
              Business Loan Overview
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
              Why Choose Our Business Loan Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive business financing solutions tailored to your growth needs
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

      {/* Loan Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Loan Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Business Loans Available
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right business loan type based on your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {loanTypes.map((loanType, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {loanType.type}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{loanType.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Features:</span>
                    <ul className="mt-2 space-y-1">
                      {loanType.features.map((feature, fIndex) => (
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
                      <span className="text-gray-800 ml-2">{loanType.tenure}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Amount:</span>
                      <span className="text-gray-800 ml-2">{loanType.amount}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Interest:</span>
                      <span className="text-green-600 font-semibold ml-2">{loanType.interestRate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Eligibility Criteria
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Business Loan Eligibility Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check if your business meets the basic eligibility criteria for loan approval
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
              How to Apply for Business Loan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple step-by-step process to get your business loan approved
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
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Required Documents
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Documents Required for Business Loan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete list of documents needed for smooth loan processing
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

      {/* Lender Partners Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Lender Partners
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Lending Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare rates and terms from leading banks and financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {lenderPartners.map((lender, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {lender.lender}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Loan Types:</span>
                    <p className="text-sm text-gray-800">{lender.loanTypes}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Interest Rate:</span>
                    <span className="text-green-600 font-semibold">{lender.interestRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Max Amount:</span>
                    <span className="text-gray-800">{lender.maxAmount}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Purposes Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Target className="h-4 w-4 mr-2" />
              Use Purposes
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Business Loan Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Various ways to utilize business loans for growth and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {usePurposes.map((purpose, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {purpose.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {purpose.purposes.map((item, pIndex) => (
                      <li key={pIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
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

      {/* Tips Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Expert Tips
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Business Loan Tips & Advice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional advice to help you make informed borrowing decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {businessTips.map((tipItem, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {tipItem.tip}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tipItem.description}</p>
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
                  Key Benefits of Business Loans
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

      {/* Warnings Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Important Warnings
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Things to Watch Out For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important considerations and potential risks to be aware of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {warnings.map((warning, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                    {warning.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{warning.warning}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about business loans, interest rates, and application process"
        faqs={faqs}
        columns={2}
        ctaTitle="Accelerate Your Business Growth Today"
        ctaDescription="Fuel your business ambitions with our comprehensive loan solutions. Get expert guidance, competitive rates, and quick approval to take your business to the next level."
      />
    </div>
  );
};
