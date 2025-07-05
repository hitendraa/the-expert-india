"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Clock, DollarSign, CheckCircle, AlertTriangle, Calculator, CreditCard, Users, Award } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const PersonalLoanPage = () => {
  const heroData = {
    badge: "Personal Loan Services",
    title: "Get Personal Loan with Best Interest Rates",
    subtitle: "Quick & Easy Personal Loan Approval",
    description: "Get instant personal loan approval with competitive interest rates and flexible repayment options. Expert assistance for loan documentation, application processing, and approval guidance. ✔Quick Approval ✔Best Rates ✔Minimal Documentation ✔Expert Support",
    rating: {
      score: "4.9/5",
      reviews: "(2500+ Loans Approved)"
    },
    features: [
      "Competitive Interest Rates",
      "Quick Approval Process",
      "Flexible Repayment Terms",
      "Minimal Documentation",
      "Expert Loan Guidance",
      "Multiple Bank Options"
    ],
    pricing: {
      consultation: "Free",
      consultationLabel: "Consultation",
      consultationDescription: "Loan assistance & guidance"
    },
    trustIndicators: [
      {
        title: "RBI Approved",
        subtitle: "Licensed Partners"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Apply for Personal Loan",
      subtitle: "Get Best Interest Rates",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Loan Amount Required"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select loan amount",
        state: "Choose your state"
      },
      button: "Apply for Loan",
      note: "Our loan experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for loan consultation"
      }
    }
  };

  const loanAmounts = [
    "₹50,000 - ₹1 Lakh",
    "₹1 Lakh - ₹3 Lakhs",
    "₹3 Lakhs - ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "Above ₹25 Lakhs"
  ];

  const overviewData = {
    title: "What is a Personal Loan?",
    description: "A personal loan is an unsecured loan that can be used for various personal financial needs without requiring collateral. These loans offer flexibility in usage, quick processing, and competitive interest rates, making them ideal for debt consolidation, medical emergencies, home renovation, education expenses, or any other personal financial requirement."
  };

  const keyFeatures = [
    {
      icon: DollarSign,
      title: "Competitive Interest Rates",
      description: "Get personal loans starting from 10.49% per annum with attractive interest rates"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval and disbursal within 24-48 hours of document verification"
    },
    {
      icon: FileText,
      title: "Minimal Documentation",
      description: "Simple documentation process with digital verification and online application"
    },
    {
      icon: Shield,
      title: "No Collateral Required",
      description: "Unsecured loan with no need for security or collateral against the loan amount"
    }
  ];

  const loanTypes = [
    {
      type: "Instant Personal Loan",
      amount: "₹10,000 - ₹5 Lakhs",
      tenure: "6 months - 5 years",
      features: ["Instant approval", "Minimal documentation", "Quick disbursal", "Digital process"],
      bestFor: "Emergency expenses, immediate cash needs"
    },
    {
      type: "Salary Based Personal Loan",
      amount: "₹50,000 - ₹25 Lakhs",
      tenure: "1 year - 7 years",
      features: ["Higher loan amounts", "Lower interest rates", "Longer tenure", "Salary account benefits"],
      bestFor: "Large expenses, debt consolidation, major purchases"
    },
    {
      type: "Self-Employed Personal Loan",
      amount: "₹1 Lakh - ₹20 Lakhs",
      tenure: "1 year - 5 years",
      features: ["Income flexibility", "Business income consideration", "Customized rates", "Flexible documentation"],
      bestFor: "Business owners, professionals, freelancers"
    },
    {
      type: "Pre-Approved Personal Loan",
      amount: "₹25,000 - ₹15 Lakhs",
      tenure: "6 months - 6 years",
      features: ["Pre-approved limits", "Instant disbursal", "Existing customer benefits", "No additional verification"],
      bestFor: "Existing bank customers with good credit history"
    }
  ];

  const eligibilityCriteria = [
    {
      criteria: "Age",
      salaried: "21 - 60 years",
      selfEmployed: "25 - 65 years",
      details: "Minimum and maximum age limits for loan eligibility"
    },
    {
      criteria: "Income",
      salaried: "₹15,000+ per month",
      selfEmployed: "₹2 Lakhs+ annually",
      details: "Minimum income requirements for loan approval"
    },
    {
      criteria: "Credit Score",
      salaried: "650 and above",
      selfEmployed: "650 and above",
      details: "CIBIL score requirement for best interest rates"
    },
    {
      criteria: "Employment",
      salaried: "2+ years experience",
      selfEmployed: "3+ years in business",
      details: "Work experience and business vintage requirements"
    },
    {
      criteria: "Documentation",
      salaried: "Salary slips, bank statements",
      selfEmployed: "ITR, bank statements, business proof",
      details: "Required documents for income verification"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Verify your eligibility criteria and loan amount qualification online"
    },
    {
      step: 2,
      title: "Choose Loan Option",
      description: "Select the best personal loan option based on your requirements"
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Fill the application form with accurate personal and financial details"
    },
    {
      step: 4,
      title: "Document Verification",
      description: "Upload required documents for income and identity verification"
    },
    {
      step: 5,
      title: "Credit Assessment",
      description: "Bank reviews your credit profile and approves the loan amount"
    },
    {
      step: 6,
      title: "Loan Disbursal",
      description: "Approved loan amount is disbursed to your bank account within 24-48 hours"
    }
  ];

  const requiredDocuments = {
    identity: [
      "Aadhaar Card",
      "PAN Card",
      "Passport",
      "Voter ID Card",
      "Driving License"
    ],
    income: [
      "Last 3 months salary slips",
      "Last 6 months bank statements",
      "Form 16 or ITR (last 2 years)",
      "Employment certificate",
      "Offer letter (for new joiners)"
    ],
    address: [
      "Utility bills (electricity/gas)",
      "Bank account statements",
      "Rental agreement",
      "Property documents",
      "Aadhaar Card"
    ]
  };

  const usePurposes = [
    {
      purpose: "Debt Consolidation",
      description: "Combine multiple debts into single loan with lower interest rate"
    },
    {
      purpose: "Medical Emergency",
      description: "Cover unexpected medical expenses and healthcare costs"
    },
    {
      purpose: "Home Renovation",
      description: "Finance home improvement and renovation projects"
    },
    {
      purpose: "Wedding Expenses",
      description: "Manage wedding and ceremonial expenses"
    },
    {
      purpose: "Education",
      description: "Fund higher education and skill development courses"
    },
    {
      purpose: "Travel & Vacation",
      description: "Finance dream vacation and travel expenses"
    },
    {
      purpose: "Business Needs",
      description: "Support small business requirements and working capital"
    },
    {
      purpose: "Consumer Durables",
      description: "Purchase appliances, electronics, and household items"
    }
  ];

  const bankPartners = [
    {
      bank: "HDFC Bank",
      interestRate: "10.75% - 21.00%",
      loanAmount: "₹50,000 - ₹25 Lakhs",
      tenure: "12 - 60 months",
      features: ["Quick approval", "Attractive rates", "Flexible tenure"]
    },
    {
      bank: "ICICI Bank",
      interestRate: "10.50% - 19.00%",
      loanAmount: "₹50,000 - ₹20 Lakhs",
      tenure: "12 - 72 months",
      features: ["Instant approval", "Digital process", "Pre-approved offers"]
    },
    {
      bank: "Axis Bank",
      interestRate: "10.49% - 22.00%",
      loanAmount: "₹1 Lakh - ₹15 Lakhs",
      tenure: "12 - 60 months",
      features: ["No collateral", "Quick disbursal", "Competitive rates"]
    },
    {
      bank: "SBI",
      interestRate: "11.05% - 15.40%",
      loanAmount: "₹25,000 - ₹20 Lakhs",
      tenure: "6 - 72 months",
      features: ["Lower rates", "Trusted bank", "Flexible repayment"]
    }
  ];

  const benefits = [
    "No collateral or security required",
    "Flexible loan amounts from ₹10,000 to ₹25 Lakhs",
    "Competitive interest rates starting from 10.49%",
    "Quick approval and disbursal within 24-48 hours",
    "Minimal documentation and digital process",
    "Flexible repayment tenure up to 7 years",
    "No restrictions on end-use of funds",
    "Part-prepayment and foreclosure options available",
    "Tax benefits available for specific purposes",
    "Expert guidance throughout the loan process"
  ];

  const tips = [
    {
      tip: "Maintain Good Credit Score",
      description: "Keep CIBIL score above 750 for better interest rates and quick approval"
    },
    {
      tip: "Compare Interest Rates",
      description: "Compare rates across multiple banks to get the best deal"
    },
    {
      tip: "Check Hidden Charges",
      description: "Review processing fees, prepayment charges, and other costs"
    },
    {
      tip: "Borrow Responsibly",
      description: "Take loan amount that you can comfortably repay within the tenure"
    },
    {
      tip: "Read Terms Carefully",
      description: "Understand all terms and conditions before signing the agreement"
    },
    {
      tip: "Maintain Documents",
      description: "Keep all required documents ready for faster processing"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum and maximum personal loan amount available?",
      answer: "Personal loan amounts typically range from ₹10,000 to ₹25 Lakhs, depending on your income, credit profile, and the lending bank's policies. The exact amount you're eligible for depends on your repayment capacity and credit score."
    },
    {
      question: "What are the current personal loan interest rates?",
      answer: "Personal loan interest rates currently range from 10.49% to 22% per annum, depending on the bank, your credit score, income, and employment type. Customers with higher credit scores get better interest rates."
    },
    {
      question: "How long does personal loan approval take?",
      answer: "Personal loan approval typically takes 24-48 hours for pre-approved customers and 3-7 working days for new applicants, depending on document verification and credit assessment by the bank."
    },
    {
      question: "What documents are required for personal loan application?",
      answer: "Required documents include identity proof (Aadhaar, PAN), income proof (salary slips, bank statements, ITR), address proof, employment proof, and photographs. Self-employed applicants need additional business documents."
    },
    {
      question: "Can I prepay my personal loan without penalty?",
      answer: "Most banks allow part-prepayment and foreclosure of personal loans. However, some banks may charge prepayment penalties ranging from 2-4% of the outstanding amount. Check with your lender for specific terms."
    },
    {
      question: "What is the minimum CIBIL score required for personal loan?",
      answer: "While the minimum CIBIL score varies by bank, a score of 650 and above is generally required. A score of 750+ significantly improves your chances of approval and helps secure better interest rates."
    },
    {
      question: "Can I get a personal loan if I am self-employed?",
      answer: "Yes, self-employed individuals can get personal loans. You'll need to provide ITR for the last 2 years, bank statements for 6-12 months, business proof, and other income verification documents."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with personal loan applications?`,
      answer: "We provide end-to-end assistance including eligibility check, documentation support, application processing, bank selection, interest rate comparison, and approval guidance to ensure you get the best personal loan deal."
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
              <CreditCard className="h-4 w-4 mr-2" />
              Personal Loan Overview
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
              Why Choose Personal Loan?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the key advantages and features of personal loans
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
              <FileText className="h-4 w-4 mr-2" />
              Loan Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Personal Loans Available
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from various personal loan options based on your profile and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {loan.type}
                  </CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">{loan.amount}</Badge>
                    <Badge className="bg-blue-100 text-blue-800">{loan.tenure}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Best For:</span>
                    <p className="text-sm text-gray-800">{loan.bestFor}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Features:</span>
                    <ul className="mt-2 space-y-1">
                      {loan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              Personal Loan Eligibility Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check your eligibility for personal loans based on employment type
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-brand-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Criteria</th>
                        <th className="px-6 py-4 text-left">Salaried</th>
                        <th className="px-6 py-4 text-left">Self-Employed</th>
                        <th className="px-6 py-4 text-left">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibilityCriteria.map((criteria, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 font-medium text-gray-900">{criteria.criteria}</td>
                          <td className="px-6 py-4 text-gray-700">{criteria.salaried}</td>
                          <td className="px-6 py-4 text-gray-700">{criteria.selfEmployed}</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">{criteria.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
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
              How to Apply for Personal Loan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple step-by-step process to get your personal loan approved quickly
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

      {/* Documents & Use Purposes Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Required Documents
              </h2>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">Identity Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requiredDocuments.identity.map((doc, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">Income Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requiredDocuments.income.map((doc, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">Address Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {requiredDocuments.address.map((doc, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Loan Use Purposes
              </h2>
              
              <div className="space-y-4">
                {usePurposes.map((purpose, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-brand-primary mb-2">{purpose.purpose}</h4>
                      <p className="text-sm text-gray-600">{purpose.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              Bank Partners
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Banking Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare personal loan offers from top banks and financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {bankPartners.map((bank, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">{bank.bank}</CardTitle>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800 text-center">
                      {bank.interestRate}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 text-center">
                      {bank.loanAmount}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Tenure:</span>
                    <span className="text-gray-800 ml-2">{bank.tenure}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Key Features:</span>
                    <ul className="mt-2 space-y-1">
                      {bank.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Expert Tips
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Personal Loan Tips & Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important tips to get the best personal loan deal and avoid common mistakes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-brand-primary mb-3">{tip.tip}</h4>
                  <p className="text-sm text-gray-600">{tip.description}</p>
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
                  Key Benefits of Personal Loan
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Loan Guidelines</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Borrow only what you can afford to repay comfortably</p>
                    <p>• Compare interest rates and charges across multiple lenders</p>
                    <p>• Read all terms and conditions carefully before signing</p>
                    <p>• Maintain a good credit score for better loan terms</p>
                    <p>• Avoid taking multiple loans simultaneously</p>
                    <p>• Make timely EMI payments to maintain good credit history</p>
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
        subtitle="Get answers to common questions about personal loans, interest rates, and application process"
        faqs={faqs}
        columns={2}
        ctaTitle="Apply for Personal Loan Today"
        ctaDescription="Get the best personal loan deals with competitive interest rates and quick approval. Our loan experts will help you choose the right loan option and guide you through the entire process."
      />
    </div>
  );
};

export default PersonalLoanPage;
