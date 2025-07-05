"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, IndianRupee, Clock, Building2, Calculator, Award, CheckCircle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const ProfessionalTaxPage = () => {
  const heroData = {
    badge: "Professional Tax Registration",
    title: "Professional Tax Registration & Compliance",
    subtitle: "State-Level Tax Registration for Businesses",
    description: "Register for Professional Tax with expert guidance and ensure complete compliance with state regulations. Get seamless registration, documentation support, and ongoing compliance assistance. ✔State Compliance ✔Expert Guidance ✔Complete Documentation ✔Ongoing Support",
    rating: {
      score: "4.9/5",
      reviews: "(950+ Businesses Registered)"
    },
    features: [
      "State-wise Registration",
      "Monthly Compliance",
      "Expert Documentation",
      "Penalty Avoidance",
      "Renewal Support",
      "Complete Assistance"
    ],
    pricing: {
      consultation: "₹1,999",
      consultationLabel: "Starting from",
      consultationDescription: "Complete professional tax registration"
    },
    trustIndicators: [
      {
        title: "100% Legal",
        subtitle: "State Compliant"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Register for Professional Tax",
      subtitle: "Ensure State Tax Compliance",
      fields: {
        name: "Business Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Business Type"
      },
      placeholders: {
        name: "Enter business name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select business type",
        state: "Choose your state"
      },
      button: "Start Registration",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const businessTypes = [
    "Sole Proprietorship",
    "Partnership Firm",
    "Private Limited Company",
    "LLP",
    "Professional Services",
    "Other"
  ];

  const overviewData = {
    title: "What is Professional Tax?",
    description: "Professional Tax is a state-level tax levied on professions, trades, callings, and employment. It's collected by state governments and local municipal bodies. Businesses and individuals earning above specified thresholds must register and pay professional tax as per state regulations."
  };

  const keyFeatures = [
    {
      icon: Building2,
      title: "State-Level Tax",
      description: "Regulated by individual state governments"
    },
    {
      icon: Users,
      title: "Mandatory for Employers",
      description: "Required for businesses with employees"
    },
    {
      icon: Calculator,
      title: "Slab-Based Rates",
      description: "Tax rates based on income/salary slabs"
    },
    {
      icon: Clock,
      title: "Monthly Compliance",
      description: "Regular monthly payment and filing"
    }
  ];

  const applicabilityConditions = [
    {
      category: "Individuals",
      condition: "Annual income above ₹2.5 lakhs",
      taxLiability: "Based on income slabs",
      registrationRequired: "Yes"
    },
    {
      category: "Businesses",
      condition: "Having employees drawing salary",
      taxLiability: "Per employee basis",
      registrationRequired: "Mandatory"
    },
    {
      category: "Professionals",
      condition: "Doctors, lawyers, CAs, consultants",
      taxLiability: "Based on practice income",
      registrationRequired: "Yes"
    },
    {
      category: "Companies",
      condition: "All registered companies",
      taxLiability: "Per employee + company tax",
      registrationRequired: "Mandatory"
    }
  ];

  const stateWiseRates = [
    {
      state: "West Bengal",
      maxRate: "₹2,500 per month",
      employeeRate: "₹150-200 per month",
      companyRate: "₹2,500 per month"
    },
    {
      state: "Karnataka",
      maxRate: "₹2,400 per month",
      employeeRate: "₹150-200 per month",
      companyRate: "₹2,400 per month"
    },
    {
      state: "Maharashtra",
      maxRate: "₹2,500 per month",
      employeeRate: "₹175 per month",
      companyRate: "₹2,500 per month"
    },
    {
      state: "Tamil Nadu",
      maxRate: "₹2,500 per month",
      employeeRate: "₹208 per month",
      companyRate: "₹2,500 per month"
    },
    {
      state: "Gujarat",
      maxRate: "₹2,500 per month",
      employeeRate: "₹150 per month",
      companyRate: "₹2,500 per month"
    },
    {
      state: "Telangana",
      maxRate: "₹2,500 per month",
      employeeRate: "₹200 per month",
      companyRate: "₹2,500 per month"
    }
  ];

  const requiredDocuments = [
    "Application form in prescribed format",
    "Company incorporation certificate",
    "PAN card of the business",
    "Address proof of business premises",
    "Bank account details and cancelled cheque",
    "Employee list with salary details",
    "Partnership deed (for partnerships)",
    "Memorandum and Articles of Association",
    "Rent agreement or property documents",
    "Previous year's income tax returns",
    "Salary certificate from employer (for individuals)",
    "Professional qualification certificates",
    "Shop and establishment license",
    "GST registration certificate"
  ];

  const registrationProcess = [
    {
      step: 1,
      title: "State Identification",
      description: "Determine applicable state based on business location"
    },
    {
      step: 2,
      title: "Eligibility Check",
      description: "Assess registration requirement based on income/employees"
    },
    {
      step: 3,
      title: "Document Preparation",
      description: "Collect and prepare all required documents"
    },
    {
      step: 4,
      title: "Application Submission",
      description: "File application with state commercial tax department"
    },
    {
      step: 5,
      title: "Verification Process",
      description: "Department verifies documents and business details"
    },
    {
      step: 6,
      title: "Registration Certificate",
      description: "Receive professional tax registration certificate"
    }
  ];

  const complianceRequirements = [
    {
      requirement: "Monthly Tax Payment",
      description: "Pay professional tax before 15th of next month",
      frequency: "Monthly",
      penalty: "10% per month"
    },
    {
      requirement: "Monthly Returns",
      description: "File monthly returns with employee details",
      frequency: "Monthly",
      penalty: "₹10 per day"
    },
    {
      requirement: "Annual Returns",
      description: "Submit annual reconciliation statement",
      frequency: "Annually",
      penalty: "₹100 per day"
    },
    {
      requirement: "Employee Addition",
      description: "Add new employees within 30 days",
      frequency: "As required",
      penalty: "₹50 per employee"
    },
    {
      requirement: "Address Change",
      description: "Notify address changes within 30 days",
      frequency: "As required",
      penalty: "₹500"
    }
  ];

  const exemptions = [
    {
      category: "Income-Based Exemptions",
      conditions: [
        "Annual income below ₹2.5 lakhs",
        "Agricultural income",
        "Pension income",
        "Disability allowance"
      ]
    },
    {
      category: "Organization-Based Exemptions",
      conditions: [
        "Charitable organizations",
        "Religious institutions",
        "Educational institutions",
        "Government organizations"
      ]
    },
    {
      category: "Special Categories",
      conditions: [
        "Senior citizens (varies by state)",
        "Physically challenged persons",
        "Ex-servicemen",
        "Widows and divorced women"
      ]
    }
  ];

  const benefits = [
    "Legal compliance with state tax laws",
    "Avoidance of penalties and interest",
    "Enhanced business credibility",
    "Smooth business operations",
    "Access to government benefits",
    "Professional standing in industry",
    "Eligibility for various licenses",
    "Banking and financial benefits",
    "Legal protection for business",
    "Compliance certificate for tenders"
  ];

  const penalties = [
    {
      violation: "Late payment of tax",
      penalty: "10% per month on outstanding amount"
    },
    {
      violation: "Non-filing of returns",
      penalty: "₹10 per day of delay"
    },
    {
      violation: "Operating without registration",
      penalty: "₹1,000 to ₹10,000 + backdated tax"
    },
    {
      violation: "Wrong information",
      penalty: "₹500 to ₹5,000"
    },
    {
      violation: "Non-deduction from salary",
      penalty: "Amount not deducted + 10% interest"
    }
  ];

  const faqs = [
    {
      question: "What is Professional Tax and who needs to pay it?",
      answer: "Professional Tax is a state-level tax on professions, trades, and employment. Individuals with annual income above ₹2.5 lakhs, businesses with employees, and all companies must register and pay professional tax as per state regulations."
    },
    {
      question: "Which states levy Professional Tax in India?",
      answer: "Currently, West Bengal, Karnataka, Maharashtra, Tamil Nadu, Gujarat, Telangana, Andhra Pradesh, Assam, Bihar, Jharkhand, Odisha, Tripura, and some union territories levy professional tax."
    },
    {
      question: "What are the Professional Tax rates for different states?",
      answer: "Rates vary by state with maximum limit of ₹2,500 per month. For employees, it ranges from ₹150-208 per month based on salary slabs. Companies pay the maximum rate of ₹2,500 per month."
    },
    {
      question: "What documents are required for Professional Tax registration?",
      answer: "Required documents include application form, incorporation certificate, PAN card, address proof, employee list, bank details, partnership deed/MOA, rent agreement, and professional qualification certificates."
    },
    {
      question: "When should Professional Tax be paid?",
      answer: "Professional Tax must be paid before the 15th of the following month. For example, April tax should be paid by May 15th. Late payment attracts penalty of 10% per month."
    },
    {
      question: "Are there any exemptions from Professional Tax?",
      answer: "Yes, exemptions include individuals with income below ₹2.5 lakhs, agricultural income, charitable organizations, educational institutions, senior citizens, and physically challenged persons (varies by state)."
    },
    {
      question: "What happens if Professional Tax is not paid on time?",
      answer: "Late payment attracts penalty of 10% per month on outstanding amount, plus interest charges. Non-compliance can lead to legal action and business operation restrictions."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with Professional Tax registration?`,
      answer: "We provide complete assistance including state-wise guidance, documentation support, application filing, compliance setup, monthly return filing, and ongoing support for renewals and compliance maintenance."
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
              <Building2 className="h-4 w-4 mr-2" />
              Tax Overview
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
              Understanding Professional Tax
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key characteristics and features of professional tax system
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

      {/* Applicability Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Applicability Conditions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Needs Professional Tax Registration?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different categories and their registration requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {applicabilityConditions.map((condition, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {condition.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Condition:</span>
                      <p className="text-gray-800">{condition.condition}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Tax Liability:</span>
                      <p className="text-gray-800">{condition.taxLiability}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Registration:</span>
                      <Badge className={condition.registrationRequired === "Mandatory" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}>
                        {condition.registrationRequired}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Rates Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
              <IndianRupee className="h-4 w-4 mr-2" />
              State-wise Tax Rates
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Professional Tax Rates by State
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current professional tax rates for major states in India
            </p>
          </div>

          <div className="overflow-x-auto max-w-6xl mx-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="p-4 text-left">State</th>
                  <th className="p-4 text-left">Max Rate</th>
                  <th className="p-4 text-left">Employee Rate</th>
                  <th className="p-4 text-left">Company Rate</th>
                </tr>
              </thead>
              <tbody>
                {stateWiseRates.map((rate, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{rate.state}</td>
                    <td className="p-4 text-gray-600">{rate.maxRate}</td>
                    <td className="p-4 text-gray-600">{rate.employeeRate}</td>
                    <td className="p-4 text-gray-600">{rate.companyRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Registration Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step Registration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete guide to professional tax registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {registrationProcess.map((step, index) => (
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

      {/* Documents & Compliance Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <FileText className="h-5 w-5 mr-3 flex-shrink-0" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Compliance Requirements
              </h2>
              {complianceRequirements.map((requirement, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-brand-primary text-lg">
                      {requirement.requirement}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{requirement.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <Badge className="bg-blue-100 text-blue-800">
                        {requirement.frequency}
                      </Badge>
                      <Badge className="bg-red-100 text-red-800">
                        Penalty: {requirement.penalty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exemptions Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Exemptions Available
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Professional Tax Exemptions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Categories eligible for professional tax exemptions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {exemptions.map((exemption, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {exemption.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exemption.conditions.map((condition, condIndex) => (
                      <li key={condIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Penalties Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <Award className="h-5 w-5 mr-3 flex-shrink-0" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Penalties for Non-Compliance
              </h2>
              {penalties.map((penalty, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
                  <CardHeader>
                    <CardTitle className="text-red-600 text-lg">
                      {penalty.violation}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-red-100 text-red-800">
                      {penalty.penalty}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about professional tax registration and compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Register for Professional Tax Today"
        ctaDescription="Ensure complete compliance with state tax regulations and avoid penalties. Our experts provide comprehensive assistance with professional tax registration, monthly compliance, and ongoing support."
      />
    </div>
  );
};

export default ProfessionalTaxPage;
