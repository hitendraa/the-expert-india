"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, CheckCircle, X, Scale, ClipboardCheck } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const StatutoryAuditPage = () => {
  const heroData = {
    badge: "Statutory Audit Services",
    title: "Statutory Audit Services",
    subtitle: "Comprehensive Financial Compliance",
    description: "Ensure legal compliance with our comprehensive statutory audit services. Our expert CAs conduct thorough audits of your financial records to meet regulatory requirements.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "Complete Financial Audit",
      "Regulatory Compliance",
      "Expert CA Services",
      "Detailed Audit Report",
      "Risk Assessment",
      "Professional Guidance"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized audit pricing"
    },
    trustIndicators: [
      {
        title: "Expert CAs",
        subtitle: "Qualified Auditors"
      },
      {
        title: "Compliance",
        subtitle: "Legal Requirements"
      }
    ],
    form: {
      title: "Get Statutory Audit Quote",
      subtitle: "Connect with our expert CAs for comprehensive audit services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Company Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select company type",
        state: "Choose your state"
      },
      button: "Get Audit Quote",
      note: "Our audit experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for audit consultation"
      }
    }
  };

  const companyTypes = [
    "Private Limited Company",
    "Public Limited Company",
    "LLP (Limited Liability Partnership)",
    "Partnership Firm",
    "Sole Proprietorship",
    "Other"
  ];

  const auditMeaning = {
    title: "Statutory Audit Meaning",
    description: "A statutory audit is a compulsory audit of the financial records of a business conducted by an external entity. This audit is made compulsory under the law or statute that governs a company's ethics and principles.",
    process: "It is done by checking bank accounts, transactions, ledgers, financial statement, booking records and various critical documents which are submitted for government records and tax purpose."
  };

  const qualifications = [
    {
      title: "Who Qualifies for Statutory Audit Appointment",
      icon: CheckCircle,
      items: [
        "Chartered Accountants (CA)",
        "Independent external auditors",
        "Auditors with relevant experience",
        "Professionals meeting statutory requirements"
      ]
    },
    {
      title: "Who Doesn't Qualify",
      icon: X,
      items: [
        "Company employees",
        "Internal auditors",
        "Related party members",
        "Non-qualified professionals"
      ]
    }
  ];

  const auditComparison = [
    {
      aspect: "Nature & Scope",
      internal: "Fixed by management",
      statutory: "Fixed by Law"
    },
    {
      aspect: "Compulsory",
      internal: "Not compulsory",
      statutory: "Compulsory by statute"
    },
    {
      aspect: "Appointment",
      internal: "Appointed by management",
      statutory: "Appointed by shareholders"
    },
    {
      aspect: "Independence",
      internal: "Employee of company",
      statutory: "Independent person"
    },
    {
      aspect: "Qualification",
      internal: "Need not be CA",
      statutory: "Must be Chartered Accountant"
    },
    {
      aspect: "Removal",
      internal: "Can be removed anytime",
      statutory: "Only by shareholders per Companies Act"
    },
    {
      aspect: "Meetings",
      internal: "Not required to attend shareholder meetings",
      statutory: "Right to attend annual general meeting"
    }
  ];

  const auditProcess = [
    {
      title: "Internal Control Verification",
      description: "Review processing pattern from purchase order to customer delivery",
      icon: Shield,
      details: [
        "Verify company/firm processing patterns",
        "Check reversal of accounting entries",
        "Assess internal controls in bookkeeping",
        "Identify potential accounting errors"
      ]
    },
    {
      title: "Statutory Compliances",
      description: "Ensure all regulatory requirements are met",
      icon: Scale,
      details: [
        "GST Compliance verification",
        "Input tax credit validation",
        "ROC compliance checking",
        "TDS compliance review"
      ]
    }
  ];

  const gstCompliance = [
    {
      title: "Input Tax Credit",
      checks: [
        "Verify eligibility and invoice type (B2B/B2C)",
        "Ensure invoices are paid within 180 days",
        "Check Non-GST invoice volume from vendors",
        "Reconcile monthly E-ledger balance with books"
      ]
    },
    {
      title: "Output Tax Liability",
      checks: [
        "Check invoice series from new financial year",
        "Verify tax levied per destination of goods",
        "Verify HSN/SAC-wise recording for ICFR compliance",
        "Confirm RCM tax payment where applicable",
        "Match E-way bills with invoices",
        "Monitor credit notes and GST returns impact"
      ]
    }
  ];

  const tdsCompliance = [
    "Ensure Form 26AS matches with Form 16A",
    "Verify tax payable according to returns and challans",
    "Review Dividend Distribution Tax if applicable",
    "Check Gratuity, Leaves, Bonus, ESIC, and PF encashment"
  ];

  const rocCompliance = [
    "Form ADT-1: Appointment of Auditor",
    "Form AOC-4: Filing of statement of accounts",
    "Form MGT-7: Filing of Annual Returns",
    "Form MGT-14: Filing of resolution and agreement to ROC",
    "Form CRA-4: Filing of cost auditor report (if applicable)",
    "INC-22: Director KYC",
    "DPT-3 and MSME compliance form"
  ];

  const faqs = [
    {
      question: "What is a statutory audit?",
      answer: "A statutory audit is a compulsory audit of financial records conducted by an external entity as required by law or statute governing a company's ethics and principles."
    },
    {
      question: "Who can conduct a statutory audit?",
      answer: "Only qualified Chartered Accountants (CAs) who are independent and meet statutory requirements can conduct statutory audits."
    },
    {
      question: "What's the difference between internal and statutory audit?",
      answer: "Internal audit is conducted by company employees and is not compulsory, while statutory audit is compulsory by law, conducted by independent CAs appointed by shareholders."
    },
    {
      question: "What documents are required for statutory audit?",
      answer: "Bank accounts, transactions, ledgers, financial statements, booking records, and various critical documents submitted for government records and tax purposes."
    },
    {
      question: "How long does a statutory audit take?",
      answer: "The duration depends on company size and complexity. Our team will provide a timeline after assessing your specific requirements."
    },
    {
      question: "What are the key compliance areas covered?",
      answer: "GST compliance, TDS compliance, ROC compliance, internal control verification, and statutory compliance as per applicable laws."
    },
    {
      question: `How does ${SITE_FULL_NAME} ensure audit quality?`,
      answer: "Our experienced CAs follow systematic audit procedures, ensure regulatory compliance, and provide detailed audit reports with professional guidance."
    },
    {
      question: "What happens if non-compliance is found?",
      answer: "We provide detailed recommendations for corrective actions and guide you through the compliance process to meet regulatory requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={companyTypes}
        selectFieldType="hearAbout"
      />

      {/* Audit Meaning Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Audit Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {auditMeaning.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {auditMeaning.description}
            </p>
            <p className="text-base text-gray-600">
              {auditMeaning.process}
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Who Qualifies for Statutory Audit Appointment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className={`flex items-center ${index === 0 ? 'text-green-700' : 'text-red-700'}`}>
                    <qualification.icon className="h-5 w-5 mr-2" />
                    {qualification.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {qualification.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm">
                        <qualification.icon className={`h-4 w-4 mr-2 flex-shrink-0 ${index === 0 ? 'text-green-500' : 'text-red-500'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Difference Between Internal Audit and Statutory Audit
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Aspect
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-700">
                      Internal Audit
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-700">
                      Statutory Audit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {auditComparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                        {row.aspect}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {row.internal}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {row.statutory}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              Audit Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Audit Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {auditProcess.map((process, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <process.icon className="h-5 w-5 mr-2" />
                    {process.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GST Compliance Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GST Compliance Checklist
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {gstCompliance.map((compliance, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-brand-primary">
                    {compliance.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {compliance.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {check}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TDS & ROC Compliance Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  TDS Compliance Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tdsCompliance.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  ROC Compliance Forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {rocCompliance.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-base text-gray-600 italic">
              This audit process ensures compliance, accuracy, and risk mitigation in financial reporting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about statutory audit services"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Statutory Audit Quote"
        ctaDescription="Ensure regulatory compliance with our comprehensive statutory audit services. Connect with our expert CAs for professional audit solutions."
      />
    </div>
  );
};

export default StatutoryAuditPage;
