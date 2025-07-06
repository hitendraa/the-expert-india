import { Metadata } from 'next';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, FileText, Shield, AlertTriangle, Building2, Calculator, Calendar } from 'lucide-react';
import ServiceHero from '@/components/common/ServiceHero';
import ServiceFAQ from '@/components/common/ServiceFAQ';
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'FSSAI Annual Return Filing | Food Safety Compliance | The Expert India',
  description: 'Expert assistance for timely and accurate FSSAI annual return submission. Complete preparation and filing support to meet deadlines and avoid penalties for food businesses.',
  keywords: [
    'FSSAI annual return',
    'food safety compliance',
    'annual return filing',
    'FSSAI compliance',
    'food business return',
    'regulatory compliance',
    'FSSAI documentation',
    'food safety reporting'
  ],
  authors: [{ name: SITE_FULL_NAME }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const FSSAIAnnualReturnPage = () => {
  const heroData = {
    badge: "FSSAI Annual Return Filing",
    title: "Expert assistance for timely and accurate FSSAI annual return submission",
    subtitle: "",
    description: "Ensure regulatory compliance with professional FSSAI annual return filing. Our food safety experts handle all aspects of preparation and submission to meet deadlines and avoid penalties. ✔Complete Return Preparation ✔Timely Submission ✔Expert Food Safety Guidance ✔Document Verification & Review",
    rating: {
      score: "4.9/5",
      reviews: "(1500+ Returns Filed)"
    },
    features: [
      "Complete Annual Return Preparation",
      "Timely Submission & Compliance",
      "Expert Food Safety Guidance", 
      "Document Verification & Review"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "Professional Filing Service",
      consultationDescription: "Expert annual return preparation and submission"
    },
    trustIndicators: [
      {
        title: "31st May",
        subtitle: "Annual Filing Deadline"
      },
      {
        title: "Penalty Risk",
        subtitle: "For Non-compliance"
      }
    ],
    form: {
      title: "Need Professional Help with FSSAI Annual Return Filing?",
      subtitle: "Get Expert Assistance",
      fields: {
        name: "Name",
        mobile: "Mobile",
        email: "Email",
        state: "Select State"
      },
      placeholders: {
        name: "Name",
        mobile: "Mobile (Without 0 or +91)",
        email: "Email",
        state: "State"
      },
      button: "Get Expert Consultation",
      note: "*Ensure timely filing and avoid penalties",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const processSteps = [
    {
      step: 1,
      title: "Document Collection",
      description: "Gather all required financial records, production data, and compliance certificates for the reporting period."
    },
    {
      step: 2,
      title: "Data Compilation",
      description: "Compile production volumes, sales figures, employee details, and safety compliance records."
    },
    {
      step: 3,
      title: "Return Preparation",
      description: "Prepare the annual return with accurate data and ensure compliance with FSSAI requirements."
    },
    {
      step: 4,
      title: "Review & Verification",
      description: "Thorough review of the return for accuracy and completeness before submission."
    },
    {
      step: 5,
      title: "Online Submission",
      description: "Submit the annual return through the FSSAI portal and obtain acknowledgment."
    },
    {
      step: 6,
      title: "Fee Payment",
      description: "Process the applicable fees and maintain records for future reference."
    }
  ];

  const requiredDocuments = [
    "Copy of FSSAI License",
    "Financial statements for the reporting period",
    "Production and sales data",
    "Employee strength details",
    "Details of food safety management system",
    "Compliance certificates",
    "Product category details",
    "Manufacturing capacity information",
    "Quality control lab reports (if applicable)",
    "Export/import details (if applicable)"
  ];

  const keyBenefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Legal Compliance",
      description: "Ensure full compliance with FSSAI regulations and avoid penalties"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Timely Submission",
      description: "Meet all deadlines and maintain good standing with authorities"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "Accurate Reporting",
      description: "Professional preparation ensuring accuracy and completeness"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
      title: "Expert Support",
      description: "Guidance from food safety compliance professionals"
    }
  ];

  const licenseeCategories = [
    {
      category: "State License",
      turnoverRange: "Up to ₹12 Crores",
      dueDate: "31st May",
      applicableTo: "Medium scale food businesses"
    },
    {
      category: "Central License",
      turnoverRange: "Above ₹20 Crores",
      dueDate: "31st May",
      applicableTo: "Large scale food businesses, importers, 100% EOU"
    }
  ];

  const complianceChecklist = [
    "Annual return filed within prescribed timeline",
    "All financial data accurately reported",
    "Production and sales figures verified",
    "Employee details updated",
    "Food safety management system status reported",
    "Compliance with hygiene and safety standards documented",
    "Product category information current",
    "Manufacturing capacity details accurate",
    "Quality control measures documented",
    "Export/import activities reported (if applicable)"
  ];

  const faqData = [
    {
      question: "What is FSSAI Annual Return and who needs to file it?",
      answer: "FSSAI Annual Return is a mandatory compliance document that food business operators with State or Central licenses must file annually. It provides detailed information about business operations, production, sales, and compliance status to FSSAI authorities."
    },
    {
      question: "When is the deadline for filing FSSAI Annual Return?",
      answer: "The annual return must be filed by 31st May of each year for the previous financial year. Late filing may result in penalties and compliance issues."
    },
    {
      question: "What information needs to be included in the annual return?",
      answer: "The return includes business turnover, production capacity, number of employees, food safety management system details, compliance status, product categories, and other operational information as required by FSSAI."
    },
    {
      question: "What are the consequences of not filing the annual return?",
      answer: "Non-filing of annual return may result in penalties, suspension of license, and legal action. It can also affect license renewal and create compliance issues for the business."
    },
    {
      question: "Can I file the annual return myself or do I need professional help?",
      answer: "While you can file it yourself, professional assistance ensures accuracy, compliance, and timely submission. Our experts help avoid errors and ensure all requirements are met properly."
    },
    {
      question: "What documents are required for filing the annual return?",
      answer: "Required documents include FSSAI license copy, financial statements, production and sales data, employee details, compliance certificates, and other business operation records as specified by FSSAI."
    },
    {
      question: "Is there any fee for filing the annual return?",
      answer: "Yes, there may be applicable fees for filing the annual return. The exact amount depends on the license category and business type. We handle all fee payments as part of our service."
    },
    {
      question: "How long does the annual return filing process take?",
      answer: "The process typically takes 3-5 business days once all required documents and information are provided. We ensure timely preparation and submission to meet deadlines."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <ServiceHero heroData={heroData} />

      {/* Overview Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete FSSAI Annual Return Filing Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure regulatory compliance with professional FSSAI annual return filing. 
            Our experts handle all aspects of preparation and submission for your peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyBenefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* License Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Annual Return Requirements by License Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {licenseeCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Turnover Range:</span>
                      <Badge variant="outline">{category.turnoverRange}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Due Date:</span>
                      <Badge className="bg-red-100 text-red-800">{category.dueDate}</Badge>
                    </div>
                    <div className="pt-2">
                      <span className="font-medium">Applicable to:</span>
                      <p className="text-gray-600 mt-1">{category.applicableTo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Annual Return Filing Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Required Documents & Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold">Document Checklist</h3>
                </div>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold">Compliance Checklist</h3>
                </div>
                <ul className="space-y-3">
                  {complianceChecklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Deadlines */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Important Deadline Notice
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            FSSAI Annual Return must be filed by <span className="font-bold text-red-600">31st May</span> each year. 
            Late filing may result in penalties and compliance issues.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg">Reporting Period</h3>
                <p className="text-gray-600">Previous Financial Year</p>
              </div>
              <div>
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg">Filing Deadline</h3>
                <p className="text-gray-600">31st May Each Year</p>
              </div>
              <div>
                <Calculator className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg">Processing Time</h3>
                <p className="text-gray-600">3-5 Business Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        faqs={faqData}
        title="Frequently Asked Questions about FSSAI Annual Return"
        subtitle="Get answers to common questions about FSSAI annual return filing process and requirements."
      />
    </div>
  );
};

export default FSSAIAnnualReturnPage;
