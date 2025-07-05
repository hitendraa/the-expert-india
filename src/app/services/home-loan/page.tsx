import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock, Users, FileText, AlertTriangle, Award, Home, TrendingUp, Building, DollarSign, Calendar } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'

export const metadata: Metadata = {
  title: 'Home Loan Services | Low Interest Rates | Expert Assistance | The Expert India',
  description: 'Get the best home loan deals with lowest interest rates. Expert assistance for home loan application, documentation, and approval. Compare top banks and NBFCs.',
  keywords: 'home loan, home loan interest rates, home loan application, mortgage loan, property loan, housing loan, loan against property',
}

export default function HomeLoanPage() {
  const heroData = {
    badge: "Home Loan Services",
    title: "Get Your Dream Home Loan",
    subtitle: "Lowest Interest Rates & Expert Assistance",
    description: "Secure your dream home with our expert home loan services. Get competitive interest rates starting from 8.5% with flexible repayment options. ✔Bank Tie-ups ✔Quick Approval ✔Minimal Documentation ✔Expert Guidance ✔Post-Approval Support ✔Best Rates Guarantee",
    rating: {
      score: "4.9/5",
      reviews: "(2500+ Loans Approved)"
    },
    features: [
      "Interest Rates from 8.5%",
      "Loan up to ₹5 Crores",
      "Tenure up to 30 Years",
      "Quick Processing",
      "Minimal Documentation",
      "Expert Guidance"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Consultation",
      consultationDescription: "Complete loan assistance"
    },
    trustIndicators: [
      {
        title: "2500+ Loans",
        subtitle: "Successfully Approved"
      },
      {
        title: "50+ Banks",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Your Home Loan",
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
      button: "Apply for Home Loan",
      note: "Our loan experts will contact you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for loan consultation"
      }
    }
  };

  const loanAmounts = [
    "₹10-25 Lakhs",
    "₹25-50 Lakhs",
    "₹50 Lakhs-1 Crore",
    "₹1-2 Crores",
    "₹2-5 Crores",
    "Above ₹5 Crores"
  ];

  const overviewData = {
    title: "What is a Home Loan?",
    description: "A home loan is a secured loan provided by banks and financial institutions to help individuals purchase, construct, or renovate residential properties. The property itself serves as collateral, making it one of the most affordable borrowing options with competitive interest rates and flexible repayment terms."
  };

  const keyFeatures = [
    {
      icon: DollarSign,
      title: "Competitive Interest Rates",
      description: "Starting from 8.5% with both fixed and floating rate options"
    },
    {
      icon: Calendar,
      title: "Flexible Tenure",
      description: "Repayment periods up to 30 years for comfortable EMIs"
    },
    {
      icon: Shield,
      title: "High Loan Amount",
      description: "Finance up to 90% of property value, loans up to ₹5 crores"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval and disbursal with minimal documentation"
    }
  ];

  const loanTypes = [
    {
      type: "Home Purchase Loan",
      description: "For buying ready-to-move-in properties",
      features: [
        "Finance up to 90% of property value",
        "Competitive interest rates",
        "Flexible repayment options",
        "Quick processing and approval"
      ],
      eligibility: "Salaried/Self-employed individuals"
    },
    {
      type: "Home Construction Loan",
      description: "For constructing houses on owned land",
      features: [
        "Stage-wise disbursal",
        "Finance up to 80% of total cost",
        "Conversion to home loan post-construction",
        "Lower interest during construction"
      ],
      eligibility: "Must own land with clear title"
    },
    {
      type: "Home Improvement Loan",
      description: "For renovation and improvement of existing homes",
      features: [
        "Quick approval process",
        "Minimal documentation",
        "Competitive interest rates",
        "Flexible repayment terms"
      ],
      eligibility: "Existing property owners"
    },
    {
      type: "Loan Against Property",
      description: "For business or personal needs against property",
      features: [
        "Higher loan amounts",
        "Lower interest rates",
        "Flexible end-use",
        "Longer repayment tenure"
      ],
      eligibility: "Property owners with clear title"
    }
  ];

  const eligibilityCriteria = [
    {
      category: "Age Requirement",
      details: [
        "Minimum: 21 years",
        "Maximum: 65 years (at loan maturity)",
        "Co-applicant allowed for better eligibility"
      ]
    },
    {
      category: "Income Criteria",
      details: [
        "Minimum monthly income: ₹25,000",
        "Stable employment/business history",
        "Income should cover EMI comfortably"
      ]
    },
    {
      category: "Employment Status",
      details: [
        "Salaried: 2+ years work experience",
        "Self-employed: 3+ years business vintage",
        "Professional: Valid practice certificate"
      ]
    },
    {
      category: "Credit Score",
      details: [
        "Minimum CIBIL score: 650",
        "Higher scores get better rates",
        "Clean credit history preferred"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your requirements and get expert advice on loan options"
    },
    {
      step: 2,
      title: "Documentation",
      description: "Submit required documents for income, identity, and property verification"
    },
    {
      step: 3,
      title: "Property Verification",
      description: "Bank conducts technical and legal verification of the property"
    },
    {
      step: 4,
      title: "Credit Assessment",
      description: "Bank evaluates creditworthiness and repayment capacity"
    },
    {
      step: 5,
      title: "Loan Approval",
      description: "Receive loan sanction letter with approved amount and terms"
    },
    {
      step: 6,
      title: "Documentation & Disbursal",
      description: "Complete legal formalities and receive loan amount"
    }
  ];

  const requiredDocuments = [
    {
      category: "Identity & Address Proof",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Passport",
        "Voter ID",
        "Driving License",
        "Utility Bills"
      ]
    },
    {
      category: "Income Documents",
      documents: [
        "Salary slips (3 months)",
        "Bank statements (6 months)",
        "Form 16/ITR (2 years)",
        "Employment certificate",
        "Appointment letter"
      ]
    },
    {
      category: "Property Documents",
      documents: [
        "Sale agreement",
        "Property papers",
        "NOC from builder",
        "Approved building plan",
        "Property tax receipts"
      ]
    },
    {
      category: "Business Documents (Self-employed)",
      documents: [
        "Business registration",
        "Financial statements",
        "Bank statements",
        "ITR (3 years)",
        "GST registration"
      ]
    }
  ];

  const bankPartners = [
    {
      bank: "SBI",
      interestRate: "8.50% - 9.65%",
      processingFee: "0.35% of loan amount",
      maxTenure: "30 years"
    },
    {
      bank: "HDFC Bank",
      interestRate: "8.60% - 9.50%",
      processingFee: "0.50% of loan amount",
      maxTenure: "30 years"
    },
    {
      bank: "ICICI Bank",
      interestRate: "8.65% - 9.50%",
      processingFee: "0.50% of loan amount",
      maxTenure: "30 years"
    },
    {
      bank: "Axis Bank",
      interestRate: "8.75% - 9.60%",
      processingFee: "1% of loan amount",
      maxTenure: "30 years"
    },
    {
      bank: "Kotak Mahindra",
      interestRate: "8.70% - 9.40%",
      processingFee: "0.50% of loan amount",
      maxTenure: "20 years"
    },
    {
      bank: "LIC Housing Finance",
      interestRate: "8.50% - 9.25%",
      processingFee: "0.50% of loan amount",
      maxTenure: "30 years"
    }
  ];

  const loanTips = [
    {
      tip: "Compare Interest Rates",
      description: "Even a 0.25% difference can save lakhs over the loan tenure"
    },
    {
      tip: "Check Processing Fees",
      description: "Factor in all charges including processing fees and other costs"
    },
    {
      tip: "Maintain Good Credit Score",
      description: "A score above 750 can help you get better interest rates"
    },
    {
      tip: "Choose Right Tenure",
      description: "Balance between EMI affordability and total interest outgo"
    },
    {
      tip: "Make Prepayments",
      description: "Use bonuses or windfalls to reduce principal and save interest"
    },
    {
      tip: "Read Terms Carefully",
      description: "Understand all clauses including prepayment and foreclosure charges"
    }
  ];

  const benefits = [
    "Tax benefits under Section 80C and 24(b)",
    "Lower interest rates compared to personal loans",
    "Flexible repayment tenure up to 30 years",
    "High loan-to-value ratio up to 90%",
    "Step-up and step-down EMI options",
    "Balance transfer for better rates",
    "Partial prepayment options available",
    "Professional valuation and legal verification",
    "Insurance options for loan protection",
    "Expert guidance throughout the process"
  ];

  const warnings = [
    {
      title: "Hidden Charges",
      warning: "Be aware of processing fees, legal charges, and other hidden costs that can add to your loan expense"
    },
    {
      title: "Interest Rate Changes",
      warning: "Floating rates can increase over time. Understand the rate reset clause and its impact on EMIs"
    },
    {
      title: "Foreclosure Penalties",
      warning: "Some banks charge penalties for early loan closure. Check foreclosure terms before signing"
    },
    {
      title: "Insurance Pressure",
      warning: "Banks may push expensive insurance products. Compare and choose only necessary covers"
    },
    {
      title: "Property Legal Issues",
      warning: "Ensure clear property title and approvals. Legal issues can affect loan approval and future resale"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum and maximum home loan amount I can get?",
      answer: "Home loan amounts typically range from ₹1 lakh to ₹5 crores or more, depending on your income, credit score, and the bank's policy. Most banks finance up to 80-90% of the property value for purchase loans."
    },
    {
      question: "What are the current home loan interest rates?",
      answer: "Current home loan interest rates range from 8.50% to 9.65% per annum, depending on the lender, loan amount, tenure, and your credit profile. Rates can be fixed or floating, with floating rates being more common."
    },
    {
      question: "How much EMI will I have to pay for my home loan?",
      answer: "EMI depends on loan amount, interest rate, and tenure. For example, a ₹30 lakh loan at 9% for 20 years would have an EMI of approximately ₹26,992. Use online EMI calculators for accurate calculations."
    },
    {
      question: "What documents are required for home loan application?",
      answer: "Key documents include identity proof, address proof, income documents (salary slips, bank statements, ITR), property documents, and employment proof. Self-employed individuals need additional business documents."
    },
    {
      question: "How long does it take to get home loan approval?",
      answer: "Home loan approval typically takes 7-15 working days after document submission, depending on the lender and completeness of documentation. Property verification may add additional time."
    },
    {
      question: "Can I prepay my home loan without penalties?",
      answer: "Most banks allow prepayment of floating rate home loans without penalties. For fixed rate loans, penalties may apply. Check your loan agreement for specific prepayment terms and charges."
    },
    {
      question: "What is the difference between fixed and floating interest rates?",
      answer: "Fixed rates remain constant throughout the loan tenure, while floating rates change with market conditions. Floating rates are typically lower initially but can increase, while fixed rates offer EMI predictability."
    },
    {
      question: "How does The Expert India help with home loan applications?",
      answer: "We provide end-to-end assistance including loan comparison, documentation support, application processing, bank liaison, status tracking, and post-approval guidance to ensure smooth loan approval and disbursal."
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
              <Home className="h-4 w-4 mr-2" />
              Home Loan Overview
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
              Why Choose Our Home Loan Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive home loan solutions with competitive rates and expert guidance
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
              Types of Home Loans Available
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right home loan type based on your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {loanTypes.map((loanType, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {loanType.type}
                  </CardTitle>
                  <p className="text-gray-600">{loanType.description}</p>
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
                  <div>
                    <span className="font-medium text-gray-600">Eligibility:</span>
                    <p className="text-sm text-gray-800">{loanType.eligibility}</p>
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
              Home Loan Eligibility Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check if you meet the basic eligibility criteria for home loan approval
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
              How to Apply for Home Loan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple step-by-step process to get your home loan approved
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
              Documents Required for Home Loan
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

      {/* Bank Partners Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Bank Partners
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Banking Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare interest rates and terms from leading banks and financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {bankPartners.map((bank, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {bank.bank}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Interest Rate:</span>
                    <span className="text-green-600 font-semibold">{bank.interestRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Processing Fee:</span>
                    <span className="text-gray-800">{bank.processingFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Max Tenure:</span>
                    <span className="text-gray-800">{bank.maxTenure}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Expert Tips
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Home Loan Tips & Advice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional advice to help you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {loanTips.map((tipItem, index) => (
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
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary text-center justify-center">
                  <Award className="h-5 w-5 mr-3 flex-shrink-0" />
                  Key Benefits of Home Loans
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
              Important considerations and potential pitfalls to avoid
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
        subtitle="Get answers to common questions about home loans, interest rates, and application process"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Your Dream Home Loan Today"
        ctaDescription="Turn your dream of homeownership into reality with our expert home loan services. Compare rates, get personalized assistance, and secure the best deal for your needs."
      />
    </div>
  );
};
