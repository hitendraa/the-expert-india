import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock, Users, FileText, AlertTriangle, Award, Building, Percent, Target, Factory, HeartHandshake, Coins } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'

export const metadata: Metadata = {
  title: 'MSME Loan Services | Mudra Loan | CGTMSE | Low Interest Rates | The Expert India',
  description: 'Get MSME loans with government subsidies and guarantees. Mudra loans, CGTMSE schemes, and collateral-free financing for micro, small, and medium enterprises.',
  keywords: 'MSME loan, mudra loan, CGTMSE, micro finance, small business loan, medium enterprise loan, government subsidy loan, collateral free loan',
}

export default function MSMELoanPage() {
  const heroData = {
    badge: "MSME Loan Services",
    title: "MSME Loans with Government Support",
    subtitle: "Mudra Loans & CGTMSE Schemes",
    description: "Empower your MSME with government-backed loan schemes. Get Mudra loans, CGTMSE guarantees, and subsidized financing with competitive interest rates starting from 7.5%. ✔Government Schemes ✔Collateral-Free Options ✔Quick Approval ✔Subsidized Rates ✔Expert Guidance ✔MSME Registration Support",
    rating: {
      score: "4.9/5",
      reviews: "(2200+ MSME Loans Approved)"
    },
    features: [
      "Interest Rates from 7.5%",
      "Loan up to ₹10 Crores",
      "Collateral-Free Options",
      "Government Subsidies",
      "Quick Processing",
      "Expert Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Consultation",
      consultationDescription: "Complete MSME loan assistance"
    },
    trustIndicators: [
      {
        title: "2200+ MSME",
        subtitle: "Loans Approved"
      },
      {
        title: "Government",
        subtitle: "Approved Schemes"
      }
    ],
    form: {
      title: "Get Your MSME Loan",
      subtitle: "Government-Backed Financing",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Business Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select business type",
        state: "Choose your state"
      },
      button: "Apply for MSME Loan",
      note: "Our MSME loan experts will contact you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for MSME loan consultation"
      }
    }
  };

  const businessTypes = [
    "Manufacturing",
    "Trading",
    "Service Business",
    "Agriculture Allied",
    "Food Processing",
    "Textile",
    "IT/Software",
    "Healthcare",
    "Other"
  ];

  const overviewData = {
    title: "What are MSME Loans?",
    description: "MSME (Micro, Small, and Medium Enterprises) loans are specialized financial products designed to support businesses at different stages of growth. These government-backed schemes include Mudra loans, CGTMSE guarantees, and various subsidized financing options that provide collateral-free funding with preferential interest rates to promote entrepreneurship and economic development."
  };

  const keyFeatures = [
    {
      icon: HeartHandshake,
      title: "Government Support",
      description: "Backed by government schemes with subsidies and guarantees"
    },
    {
      icon: Shield,
      title: "Collateral-Free",
      description: "No collateral required for loans up to ₹2 crores under CGTMSE"
    },
    {
      icon: Percent,
      title: "Subsidized Rates",
      description: "Lower interest rates compared to regular business loans"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval with simplified documentation process"
    }
  ];

  const msmeCategories = [
    {
      category: "Micro Enterprise",
      investment: "Up to ₹1 Crore",
      turnover: "Up to ₹5 Crores",
      employees: "Up to 10 (Manufacturing) / 5 (Service)",
      loanAmount: "₹10 Lakhs to ₹2 Crores",
      interestRate: "7.5% - 12%",
      schemes: ["Mudra Shishu", "Mudra Kishor", "PMEGP", "Stand-Up India"]
    },
    {
      category: "Small Enterprise",
      investment: "₹1-10 Crores",
      turnover: "₹5-50 Crores",
      employees: "10-50 (Manufacturing) / 5-50 (Service)",
      loanAmount: "₹2 Crores to ₹5 Crores",
      interestRate: "8% - 14%",
      schemes: ["CGTMSE", "Technology Upgradation", "Export Promotion", "Credit Enhancement"]
    },
    {
      category: "Medium Enterprise",
      investment: "₹10-50 Crores",
      turnover: "₹50-250 Crores",
      employees: "50-250",
      loanAmount: "₹5 Crores to ₹10 Crores",
      interestRate: "9% - 15%",
      schemes: ["Cluster Development", "Technology Development", "Market Development", "R&D Support"]
    }
  ];

  const governmentSchemes = [
    {
      scheme: "Pradhan Mantri Mudra Yojana",
      description: "Collateral-free loans for micro enterprises and small businesses",
      categories: [
        {
          name: "Shishu",
          amount: "Up to ₹50,000",
          purpose: "Starting new business or expanding existing micro business"
        },
        {
          name: "Kishor",
          amount: "₹50,001 to ₹5 Lakhs",
          purpose: "Growing established businesses with expansion needs"
        },
        {
          name: "Tarun",
          amount: "₹5 Lakhs to ₹10 Lakhs",
          purpose: "Established businesses requiring significant growth capital"
        }
      ],
      benefits: ["No collateral required", "Lower interest rates", "Government subsidy", "Easy processing"]
    },
    {
      scheme: "Credit Guarantee Trust for Micro and Small Enterprises (CGTMSE)",
      description: "Credit guarantee scheme for collateral-free loans",
      coverage: "Up to ₹2 Crores without collateral",
      guarantee: "75-85% guarantee coverage",
      sectors: "All sectors except retail trade and educational institutions",
      benefits: ["No collateral security", "No third-party guarantee", "Reduced documentation", "Quick approval"]
    },
    {
      scheme: "Prime Minister's Employment Generation Programme (PMEGP)",
      description: "Credit-linked subsidy scheme for setting up new enterprises",
      subsidy: "15-35% of project cost",
      maxLoan: "₹25 Lakhs (Manufacturing) / ₹10 Lakhs (Service)",
      eligibility: "18+ years with minimum 8th pass qualification",
      benefits: ["Capital subsidy", "Margin money assistance", "Training support", "Marketing assistance"]
    },
    {
      scheme: "Stand-Up India Scheme",
      description: "Facilitate loans for SC/ST and women entrepreneurs",
      loanRange: "₹10 Lakhs to ₹1 Crore",
      purpose: "Greenfield enterprises in manufacturing, services, or trading",
      support: "Handholding support for 2 years",
      benefits: ["Dedicated support", "Skill development", "Market linkage", "Technology support"]
    }
  ];

  const eligibilityCriteria = [
    {
      category: "Business Registration",
      details: [
        "Valid MSME registration (Udyam)",
        "Business operational for minimum 6 months",
        "Registered under applicable acts"
      ]
    },
    {
      category: "Financial Requirements",
      details: [
        "Minimum annual turnover as per category",
        "Positive cash flow",
        "Acceptable debt-to-equity ratio"
      ]
    },
    {
      category: "Credit Score",
      details: [
        "CIBIL score 650 and above",
        "Clean credit history",
        "No wilful defaults"
      ]
    },
    {
      category: "Sector Eligibility",
      details: [
        "Manufacturing, trading, service sectors",
        "Agriculture and allied activities",
        "Excludes speculative activities"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "MSME Registration",
      description: "Get Udyam registration for your business if not already registered"
    },
    {
      step: 2,
      title: "Scheme Selection",
      description: "Choose appropriate government scheme based on your business needs"
    },
    {
      step: 3,
      title: "Documentation",
      description: "Prepare required documents including business plan and financials"
    },
    {
      step: 4,
      title: "Application Submission",
      description: "Submit application through bank or financial institution"
    },
    {
      step: 5,
      title: "Verification & Approval",
      description: "Bank verifies documents and approves loan under government scheme"
    },
    {
      step: 6,
      title: "Disbursal & Monitoring",
      description: "Loan disbursed with ongoing monitoring and support"
    }
  ];

  const requiredDocuments = [
    {
      category: "Business Documents",
      documents: [
        "Udyam Registration Certificate",
        "Business Registration Certificate",
        "GST Registration",
        "Trade License",
        "Partnership Deed/MOA/AOA"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "ITR (2-3 years)",
        "Financial Statements",
        "Bank Statements (12 months)",
        "Project Report/Business Plan",
        "Cash Flow Projections"
      ]
    },
    {
      category: "Identity & Address",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Passport Size Photos",
        "Signature Verification"
      ]
    },
    {
      category: "Scheme Specific",
      documents: [
        "Caste Certificate (if applicable)",
        "Experience Certificate",
        "Technical Qualification",
        "Land Documents",
        "Quotations for Equipment"
      ]
    }
  ];

  const bankingPartners = [
    {
      bank: "State Bank of India",
      schemes: "Mudra, CGTMSE, PMEGP",
      interestRate: "7.5% - 11%",
      speciality: "Largest MSME lender"
    },
    {
      bank: "Punjab National Bank",
      schemes: "All Government Schemes",
      interestRate: "8% - 12%",
      speciality: "MSME focused products"
    },
    {
      bank: "Bank of Baroda",
      schemes: "Mudra, Stand-Up India",
      interestRate: "8.5% - 11.5%",
      speciality: "Export oriented MSMEs"
    },
    {
      bank: "HDFC Bank",
      schemes: "Private sector Mudra",
      interestRate: "9% - 13%",
      speciality: "Quick processing"
    },
    {
      bank: "ICICI Bank",
      schemes: "Mudra, CGTMSE",
      interestRate: "9.5% - 14%",
      speciality: "Technology solutions"
    },
    {
      bank: "Canara Bank",
      schemes: "All schemes available",
      interestRate: "8% - 11.5%",
      speciality: "Rural and semi-urban focus"
    }
  ];

  const sectorSupport = [
    {
      sector: "Manufacturing",
      support: [
        "Technology upgradation schemes",
        "Cluster development programs",
        "Quality certification support",
        "Export promotion assistance",
        "Energy efficiency financing"
      ]
    },
    {
      sector: "Food Processing",
      support: [
        "PMFME scheme benefits",
        "Cold storage financing",
        "Processing equipment loans",
        "Packaging and branding support",
        "Market linkage assistance"
      ]
    },
    {
      sector: "Textiles & Handloom",
      support: [
        "Weaver credit card",
        "Technology upgradation fund",
        "Design development support",
        "Market development assistance",
        "Export incentives"
      ]
    },
    {
      sector: "IT & Software",
      support: [
        "Software technology parks",
        "Incubation center support",
        "Skill development programs",
        "Export promotion schemes",
        "Innovation funding"
      ]
    }
  ];

  const benefits = [
    "Lower interest rates due to government subsidies",
    "Collateral-free loans up to ₹2 crores under CGTMSE",
    "Credit guarantee coverage reduces bank risk",
    "Simplified documentation and faster processing",
    "Capital subsidy under various schemes",
    "Handholding support and mentoring",
    "Priority sector lending benefits",
    "Technology and skill development support",
    "Market linkage and export assistance",
    "Tax benefits and exemptions available"
  ];

  const msmeSupport = [
    {
      support: "Technology Development",
      description: "Assistance for technology upgradation and innovation",
      benefits: [
        "Technology upgradation fund",
        "R&D support schemes",
        "Patent registration assistance",
        "Technical consultancy"
      ]
    },
    {
      support: "Market Development",
      description: "Support for market expansion and promotion",
      benefits: [
        "Trade fair participation",
        "Export promotion assistance",
        "Buyer-seller meets",
        "E-commerce platform support"
      ]
    },
    {
      support: "Skill Development",
      description: "Training and skill enhancement programs",
      benefits: [
        "Entrepreneurship development",
        "Technical skill training",
        "Management development",
        "Digital literacy programs"
      ]
    },
    {
      support: "Infrastructure Support",
      description: "Common facility centers and infrastructure",
      benefits: [
        "Industrial parks",
        "Common facility centers",
        "Incubation centers",
        "Testing laboratories"
      ]
    }
  ];

  const warnings = [
    {
      title: "Scheme Compliance",
      warning: "Ensure proper utilization of funds as per scheme guidelines. Misuse can lead to penalty and loan recall"
    },
    {
      title: "Documentation Accuracy",
      warning: "Provide accurate information in applications. False declarations can result in loan rejection and legal consequences"
    },
    {
      title: "Repayment Discipline",
      warning: "Maintain timely repayments to preserve credit rating and eligibility for future government schemes"
    },
    {
      title: "Business Viability",
      warning: "Ensure your business model is viable and sustainable. Government support doesn't guarantee business success"
    },
    {
      title: "Regulatory Changes",
      warning: "Government schemes may change periodically. Stay updated with latest guidelines and modifications"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between Mudra loan categories - Shishu, Kishor, and Tarun?",
      answer: "Shishu covers loans up to ₹50,000 for starting businesses, Kishor covers ₹50,001 to ₹5 lakhs for growing businesses, and Tarun covers ₹5-10 lakhs for established businesses needing expansion capital. All are collateral-free with government backing."
    },
    {
      question: "What is CGTMSE and how does it benefit MSME borrowers?",
      answer: "CGTMSE (Credit Guarantee Trust for Micro and Small Enterprises) provides guarantee coverage of 75-85% to banks for loans up to ₹2 crores without collateral. This reduces bank risk and enables collateral-free lending to MSMEs."
    },
    {
      question: "Do I need Udyam registration to apply for MSME loans?",
      answer: "Yes, Udyam registration is mandatory for availing MSME loan schemes and benefits. It's free, online, and helps classify your business under micro, small, or medium enterprise category for appropriate scheme benefits."
    },
    {
      question: "What are the interest rates for different MSME loan schemes?",
      answer: "Interest rates vary by scheme and lender: Mudra loans start from 7.5%, CGTMSE loans range 8-14%, and specialized schemes may have subsidized rates. Government schemes typically offer 1-3% lower rates than regular business loans."
    },
    {
      question: "Can I get subsidy along with MSME loans?",
      answer: "Yes, schemes like PMEGP offer 15-35% capital subsidy, Stand-Up India provides handholding support, and sector-specific schemes offer various subsidies and incentives based on business type and location."
    },
    {
      question: "What is the maximum loan amount available under MSME schemes?",
      answer: "Loan amounts vary by scheme: Mudra up to ₹10 lakhs, CGTMSE up to ₹2 crores without collateral, PMEGP up to ₹25 lakhs for manufacturing, and specialized schemes may go up to ₹10 crores for medium enterprises."
    },
    {
      question: "How long does MSME loan approval take?",
      answer: "MSME loan approval typically takes 15-30 days for complete applications. Mudra loans may be approved faster (7-15 days), while larger amounts under CGTMSE or specialized schemes may take 30-45 days."
    },
    {
      question: "How does The Expert India assist with MSME loan applications?",
      answer: "We provide comprehensive support including Udyam registration, scheme selection, documentation assistance, application processing, bank liaison, and post-approval compliance guidance to ensure successful MSME loan approval and utilization."
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
              <Factory className="h-4 w-4 mr-2" />
              MSME Loan Overview
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
              Why Choose MSME Loan Schemes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Government-backed financing solutions designed specifically for MSMEs
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

      {/* MSME Categories Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              MSME Categories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              MSME Classification & Loan Eligibility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different categories of MSMEs and their corresponding loan schemes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {msmeCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Investment:</span>
                    <p className="text-sm text-gray-800">{category.investment}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Turnover:</span>
                    <p className="text-sm text-gray-800">{category.turnover}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Employees:</span>
                    <p className="text-sm text-gray-800">{category.employees}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Loan Amount:</span>
                    <p className="text-green-600 font-semibold">{category.loanAmount}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Interest Rate:</span>
                    <p className="text-green-600 font-semibold">{category.interestRate}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Key Schemes:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {category.schemes.map((scheme, sIndex) => (
                        <Badge key={sIndex} className="bg-blue-100 text-blue-800 text-xs">
                          {scheme}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
              <HeartHandshake className="h-4 w-4 mr-2" />
              Government Schemes
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Major MSME Support Schemes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Government-backed schemes providing financial and non-financial support
            </p>
          </div>

          <div className="space-y-6 max-w-7xl mx-auto">
            {governmentSchemes.map((scheme, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {scheme.scheme}
                  </CardTitle>
                  <p className="text-gray-600">{scheme.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {scheme.categories && (
                    <div>
                      <span className="font-medium text-gray-600">Categories:</span>
                      <div className="grid md:grid-cols-3 gap-4 mt-2">
                        {scheme.categories.map((cat, cIndex) => (
                          <div key={cIndex} className="bg-gray-50 p-3 rounded">
                            <h4 className="font-semibold text-brand-primary">{cat.name}</h4>
                            <p className="text-green-600 font-semibold text-sm">{cat.amount}</p>
                            <p className="text-xs text-gray-600">{cat.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {scheme.coverage && (
                      <div>
                        <span className="font-medium text-gray-600">Coverage:</span>
                        <p className="text-sm text-gray-800">{scheme.coverage}</p>
                      </div>
                    )}
                    {scheme.guarantee && (
                      <div>
                        <span className="font-medium text-gray-600">Guarantee:</span>
                        <p className="text-sm text-gray-800">{scheme.guarantee}</p>
                      </div>
                    )}
                    {scheme.subsidy && (
                      <div>
                        <span className="font-medium text-gray-600">Subsidy:</span>
                        <p className="text-sm text-gray-800">{scheme.subsidy}</p>
                      </div>
                    )}
                    {scheme.maxLoan && (
                      <div>
                        <span className="font-medium text-gray-600">Max Loan:</span>
                        <p className="text-sm text-gray-800">{scheme.maxLoan}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="font-medium text-gray-600">Benefits:</span>
                    <div className="grid md:grid-cols-2 gap-2 mt-2">
                      {scheme.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Eligibility Criteria
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              MSME Loan Eligibility Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Basic eligibility criteria for MSME loan schemes and government support
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
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Application Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Apply for MSME Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process to apply for government-backed MSME financing
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
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Required Documents
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Documents Required for MSME Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete documentation required for MSME loan applications
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

      {/* Banking Partners Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Banking Partners
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              MSME Financing Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading banks offering MSME loan schemes with government backing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {bankingPartners.map((bank, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {bank.bank}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-600">Schemes:</span>
                    <p className="text-sm text-gray-800">{bank.schemes}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Interest Rate:</span>
                    <span className="text-green-600 font-semibold">{bank.interestRate}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Speciality:</span>
                    <p className="text-sm text-gray-800">{bank.speciality}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Support Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Target className="h-4 w-4 mr-2" />
              Sector Support
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sector-Specific MSME Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized support and schemes for different industry sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sectorSupport.map((sector, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {sector.sector}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sector.support.map((item, sIndex) => (
                      <li key={sIndex} className="flex items-start text-sm">
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

      {/* MSME Support Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 mb-4">
              <Coins className="h-4 w-4 mr-2" />
              Additional Support
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Beyond Financing: MSME Support Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support beyond just financing for MSME growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {msmeSupport.map((support, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {support.support}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{support.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {support.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                  Key Benefits of MSME Loans
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
              Important Considerations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key points to consider when applying for MSME loans and schemes
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
        subtitle="Get answers to common questions about MSME loans, government schemes, and application process"
        faqs={faqs}
        columns={2}
        ctaTitle="Empower Your MSME Today"
        ctaDescription="Access government-backed financing and support schemes designed specifically for MSMEs. Get expert guidance for Mudra loans, CGTMSE benefits, and comprehensive business development support."
      />
    </div>
  );
};
