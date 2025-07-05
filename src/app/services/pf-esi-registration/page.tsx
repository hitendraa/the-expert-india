"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Shield, Clock, Heart, IndianRupee, Award, CheckCircle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const PFESIRegistrationPage = () => {
  const heroData = {
    badge: "PF & ESI Registration",
    title: "Complete PF & ESI Registration Services",
    subtitle: "Mandatory Employee Benefits Registration",
    description: "Register for Provident Fund (PF) and Employee State Insurance (ESI) schemes with expert guidance. Ensure compliance with labor laws and provide essential benefits to your employees. ✔Mandatory Compliance ✔Employee Benefits ✔Legal Protection ✔Expert Assistance",
    rating: {
      score: "4.9/5",
      reviews: "(650+ Companies Registered)"
    },
    features: [
      "PF Registration (20+ employees)",
      "ESI Registration (10+ employees)",
      "Complete Documentation",
      "Compliance Support",
      "Employee Benefits Setup",
      "Ongoing Assistance"
    ],
    pricing: {
      consultation: "₹2,499",
      consultationLabel: "Starting from",
      consultationDescription: "Complete PF & ESI registration"
    },
    trustIndicators: [
      {
        title: "100% Legal",
        subtitle: "Compliant Registration"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Register for PF & ESI Schemes",
      subtitle: "Ensure Employee Benefits Compliance",
      fields: {
        name: "Company Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Employee Count"
      },
      placeholders: {
        name: "Enter company name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select employee count",
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

  const employeeCounts = [
    "10-20 employees",
    "20-50 employees",
    "50-100 employees",
    "100+ employees",
    "Planning to hire",
    "Other"
  ];

  const overviewData = {
    title: "PF & ESI Registration Overview",
    description: "Provident Fund (PF) and Employee State Insurance (ESI) are mandatory social security schemes for Indian companies. PF registration is required for organizations with 20 or more employees, while ESI registration is mandatory for establishments with 10 or more employees earning up to ₹15,000 per month."
  };

  const schemeComparison = [
    {
      scheme: "EPF (Employee Provident Fund)",
      threshold: "20+ employees",
      contribution: "12% employee + 12% employer",
      salaryLimit: "₹15,000+ (voluntary above this)",
      benefits: "Retirement corpus, emergency withdrawals, tax exemption"
    },
    {
      scheme: "ESI (Employee State Insurance)",
      threshold: "10+ employees",
      contribution: "0.75% employee + 3.25% employer",
      salaryLimit: "Up to ₹15,000 per month",
      benefits: "Medical care, sickness benefits, maternity benefits"
    }
  ];

  const pfBenefits = [
    {
      icon: IndianRupee,
      title: "Fixed Interest Returns",
      description: "Pre-fixed interest rate of around 8.5% on deposits"
    },
    {
      icon: Shield,
      title: "Retirement Security",
      description: "Builds healthy retirement corpus for employees"
    },
    {
      icon: FileText,
      title: "Tax Exemption",
      description: "Earnings from EPF are exempted from taxation"
    },
    {
      icon: Heart,
      title: "Emergency Withdrawals",
      description: "Partial withdrawals allowed for emergencies"
    }
  ];

  const esiBenefits = [
    {
      benefit: "Sickness Benefits",
      description: "70% of salary for certified illness up to 91 days per year",
      coverage: "Employee"
    },
    {
      benefit: "Medical Benefits",
      description: "Comprehensive medical care and treatment",
      coverage: "Employee & Family"
    },
    {
      benefit: "Maternity Benefits",
      description: "Paid maternity leave for pregnant women",
      coverage: "Female Employees"
    },
    {
      benefit: "Disability Benefits",
      description: "90% salary as monthly payment in case of disability",
      coverage: "Employee & Dependents"
    },
    {
      benefit: "Death Benefits",
      description: "90% salary to dependents in case of work-related death",
      coverage: "Employee Dependents"
    },
    {
      benefit: "Funeral Expenses",
      description: "Coverage for funeral and last rite expenses",
      coverage: "Employee Family"
    }
  ];

  const applicableEstablishments = [
    {
      category: "Commercial Establishments",
      types: [
        "Shops and retail stores",
        "Hotels and restaurants (sales only)",
        "Cinema halls and theaters",
        "Road motor transport establishments",
        "Newspaper establishments"
      ]
    },
    {
      category: "Educational & Medical",
      types: [
        "Private educational institutions",
        "Corporate hospitals",
        "Nursing homes",
        "Diagnostic centers",
        "Pathological laboratories"
      ]
    },
    {
      category: "Service Organizations",
      types: [
        "IT companies and software firms",
        "Consulting organizations",
        "Financial services companies",
        "Professional service providers",
        "Administrative offices"
      ]
    }
  ];

  const registrationRequirements = [
    {
      title: "PF Registration",
      timeline: "Within 1 month of reaching 20 employees",
      mandatory: "Yes (for 20+ employees)",
      voluntary: "Yes (for smaller organizations)"
    },
    {
      title: "ESI Registration",
      timeline: "Within 15 days of reaching 10 employees",
      mandatory: "Yes (for 10+ employees)",
      voluntary: "No"
    }
  ];

  const requiredDocuments = [
    "Company incorporation certificate",
    "PAN card of the company",
    "Address proof of establishment",
    "Bank account details and cancelled cheque",
    "Employee details with salary information",
    "Employer's digital signature certificate",
    "Partnership deed or MOA & AOA",
    "Rent agreement or property documents",
    "Salary register and attendance records",
    "Factory license (if applicable)"
  ];

  const registrationProcess = [
    {
      step: 1,
      title: "Eligibility Assessment",
      description: "Determine PF/ESI applicability based on employee count and salary"
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Gather required company and employee documentation"
    },
    {
      step: 3,
      title: "Online Application",
      description: "Submit applications on respective portals with required details"
    },
    {
      step: 4,
      title: "Verification Process",
      description: "Officials verify submitted information and documents"
    },
    {
      step: 5,
      title: "Advance Contribution",
      description: "Pay required advance contributions (6 months for ESI)"
    },
    {
      step: 6,
      title: "Registration Completion",
      description: "Receive registration numbers and start compliance"
    }
  ];

  const complianceRequirements = [
    {
      aspect: "Monthly Returns",
      pf: "ECR filing by 15th of next month",
      esi: "Return filing by 15th of next month"
    },
    {
      aspect: "Contribution Payment",
      pf: "By 15th of next month",
      esi: "By 15th of next month"
    },
    {
      aspect: "Annual Returns",
      pf: "Annual return by 30th April",
      esi: "Annual return by 30th April"
    },
    {
      aspect: "Employee Addition",
      pf: "Add new employees within 30 days",
      esi: "Add new employees within 30 days"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between PF and ESI registration?",
      answer: "PF registration is mandatory for organizations with 20+ employees and provides retirement benefits, while ESI registration is required for establishments with 10+ employees earning up to ₹15,000 and provides medical and sickness benefits."
    },
    {
      question: "When should a company register for PF and ESI?",
      answer: "PF registration must be done within one month of reaching 20 employees, while ESI registration should be completed within 15 days of employing 10 or more eligible employees."
    },
    {
      question: "What are the contribution rates for PF and ESI?",
      answer: "For PF: 12% from employee + 12% from employer on basic salary. For ESI: 0.75% from employee + 3.25% from employer on gross salary up to ₹15,000 per month."
    },
    {
      question: "Can small companies register voluntarily for PF?",
      answer: "Yes, organizations with less than 20 employees can register voluntarily for PF scheme. However, once registered, compliance becomes mandatory even if employee count falls below 20."
    },
    {
      question: "What benefits do employees get under ESI scheme?",
      answer: "ESI provides sickness benefits (70% salary for up to 91 days), medical benefits for employee and family, maternity benefits, disability benefits, death benefits, and funeral expense coverage."
    },
    {
      question: "What documents are required for PF and ESI registration?",
      answer: "Required documents include company incorporation certificate, PAN card, address proof, bank details, employee information, digital signature, partnership deed/MOA, and salary records."
    },
    {
      question: "What happens if a company fails to register for PF/ESI?",
      answer: "Non-compliance can result in penalties, interest charges, legal action, and difficulty in obtaining various business licenses and clearances from government authorities."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with PF and ESI registration?`,
      answer: "We provide complete assistance including eligibility assessment, documentation support, online application filing, compliance setup, employee enrollment, and ongoing support for returns and payments."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={employeeCounts}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Registration Overview
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

      {/* Scheme Comparison Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Scheme Comparison
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              PF vs ESI: Key Differences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the differences between PF and ESI schemes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {schemeComparison.map((scheme, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {scheme.scheme}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Threshold:</span>
                      <p className="text-gray-800">{scheme.threshold}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Contribution:</span>
                      <p className="text-gray-800">{scheme.contribution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Salary Limit:</span>
                      <p className="text-gray-800">{scheme.salaryLimit}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Key Benefits:</span>
                      <p className="text-gray-800">{scheme.benefits}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PF Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
              <IndianRupee className="h-4 w-4 mr-2" />
              PF Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of PF Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key advantages of Provident Fund scheme for employees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pfBenefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-600">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESI Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <Heart className="h-4 w-4 mr-2" />
              ESI Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of ESI Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits under Employee State Insurance scheme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {esiBenefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-lg">
                    {benefit.benefit}
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 w-fit">
                    {benefit.coverage}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable Establishments Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Applicable Establishments
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Needs PF & ESI Registration?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Types of establishments covered under PF and ESI schemes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {applicableEstablishments.map((establishment, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {establishment.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {establishment.types.map((type, typeIndex) => (
                      <li key={typeIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{type}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Registration Requirements
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              When to Register?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Timeline and requirements for PF and ESI registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {registrationRequirements.map((requirement, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {requirement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Timeline:</span>
                      <Badge className="bg-red-100 text-red-800">
                        {requirement.timeline}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Mandatory:</span>
                      <span className="text-gray-800">{requirement.mandatory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Voluntary:</span>
                      <span className="text-gray-800">{requirement.voluntary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Complete guide to PF and ESI registration
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
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-medium text-gray-600">Aspect</th>
                      <th className="text-left p-3 font-medium text-gray-600">PF</th>
                      <th className="text-left p-3 font-medium text-gray-600">ESI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complianceRequirements.map((compliance, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 font-medium text-gray-800">{compliance.aspect}</td>
                        <td className="p-3 text-gray-600">{compliance.pf}</td>
                        <td className="p-3 text-gray-600">{compliance.esi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about PF and ESI registration and compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Register for PF & ESI Today"
        ctaDescription="Ensure compliance with labor laws and provide essential benefits to your employees. Our experts provide complete assistance with PF and ESI registration, documentation, and ongoing compliance support."
      />
    </div>
  );
};

export default PFESIRegistrationPage;
