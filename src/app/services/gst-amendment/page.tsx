"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Edit, CheckCircle, Clock, Shield, Users, Building, AlertTriangle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const GSTAmendmentPage = () => {
  const heroData = {
    badge: "GST Registration Amendment",
    title: "GST Registration Amendment",
    subtitle: "Professional GST Amendment Services",
    description: "Get expert assistance for GST registration amendments to keep your business information accurate and compliant. Our professionals handle all types of amendments including core and non-core field changes with seamless portal filing.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "Core Field Amendments",
      "Non-Core Field Updates",
      "Business Name Changes",
      "Address Modifications",
      "Promoter Information Updates",
      "Complete Compliance Support"
    ],
    pricing: {
      consultation: "₹1,999",
      consultationLabel: "Starting from",
      consultationDescription: "Professional GST amendment service"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "Amendment Specialists"
      },
      {
        title: "Quick Processing",
        subtitle: "15-Day Timeline"
      }
    ],
    form: {
      title: "Get GST Amendment Service",
      subtitle: "Connect with our GST experts for professional registration amendment services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Amendment Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select amendment type",
        state: "Choose your state"
      },
      button: "Get Amendment Service",
      note: "Our GST experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for GST consultation"
      }
    }
  };

  const amendmentTypes = [
    "Business Name Change",
    "Address Modification",
    "Promoter/Director Changes",
    "Contact Details Update",
    "Bank Account Changes",
    "Business Activity Updates",
    "Other Field Changes"
  ];

  const amendmentOverview = {
    title: "GST Registration Amendment Overview",
    description: "GST registration amendment refers to the process of making changes or updates to the details provided during GST registration. These changes could include alterations to business information, contact details, or other crucial particulars. By keeping GST registration details current, businesses can maintain compliance with tax regulations and avoid potential penalties."
  };

  const amendmentCategories = [
    {
      title: "Core Field Amendments",
      description: "Critical information requiring official approval",
      icon: Shield,
      timeline: "15 working days approval",
      approval: "Required",
      details: [
        "Legal name of the business (no PAN change)",
        "Principal place of business",
        "Additional place of business",
        "Addition/deletion of stakeholders",
        "Promoters, partners, Karta changes",
        "Managing committee or CEO changes"
      ]
    },
    {
      title: "Non-Core Field Amendments",
      description: "General information with automatic processing",
      icon: Edit,
      timeline: "Immediate processing",
      approval: "Not Required",
      details: [
        "Bank account details updates",
        "Business information adjustments",
        "Goods and services list updates",
        "State-specific details (same state)",
        "Authorized signatories changes",
        "Minor location adjustments"
      ]
    }
  ];

  const specificAmendments = [
    {
      title: "Business Name Change",
      description: "Updating legal business name in GST registration",
      icon: Building,
      color: "text-blue-600",
      process: [
        "Submit FORM GST REG-14 within 15 days",
        "Provide justification for name change",
        "Officer review and approval process",
        "Amendment effective from event date"
      ]
    },
    {
      title: "Address Change",
      description: "Modifying principal or additional business locations",
      icon: Building,
      color: "text-green-600",
      process: [
        "File FORM GST REG-14 for address change",
        "Provide proof of new address",
        "Own premises: Property tax receipt/electricity bill",
        "Rented premises: Lease agreement + owner documents"
      ]
    },
    {
      title: "Promoter Information",
      description: "Adding, deleting, or updating stakeholder details",
      icon: Users,
      color: "text-purple-600",
      process: [
        "Application within 15 days of change",
        "Submit relevant identity proofs",
        "Officer approval within 15 days",
        "Update partners, directors, or trustees"
      ]
    },
    {
      title: "Contact Details Update",
      description: "Changing mobile number or email ID",
      icon: Edit,
      color: "text-orange-600",
      process: [
        "Online verification process on GST portal",
        "OTP verification for security",
        "Immediate update without application",
        "Authorized signatory digital signature required"
      ]
    }
  ];

  const amendmentProcess = [
    {
      step: "1",
      title: "Application Filing",
      description: "Submit amendment application on GST Common Portal",
      icon: FileText,
      details: [
        "Select core or non-core amendment type",
        "Choose specific field to amend",
        "Edit required details in selected field",
        "Upload supporting documents where necessary"
      ]
    },
    {
      step: "2",
      title: "Documentation & Verification",
      description: "Provide reason and verify the application",
      icon: Shield,
      details: [
        "Provide justification for amendment",
        "Specify date of change occurrence",
        "Verify using DSC, e-signature, or EVC",
        "Receive Application Reference Number (ARN)"
      ]
    },
    {
      step: "3",
      title: "Review Process",
      description: "Officer review for core amendments or automatic processing",
      icon: Clock,
      details: [
        "Core amendments: Tax officer review",
        "Non-core amendments: Automatic processing",
        "15 working days for officer approval",
        "Additional information request if needed"
      ]
    },
    {
      step: "4",
      title: "Approval & Update",
      description: "Final approval and certificate update",
      icon: CheckCircle,
      details: [
        "Approval order generation",
        "Updated registration certificate",
        "Changes effective from event date",
        "Notification to registered contact details"
      ]
    }
  ];

  const eligibilityCriteria = [
    {
      category: "Eligible Taxpayers",
      description: "Who can file GST registration amendments",
      icon: CheckCircle,
      color: "text-green-600",
      eligibleTypes: [
        "New registrants and normal taxpayers",
        "TDS/TCS registrants and notified persons",
        "Non-resident taxable persons",
        "GST practitioners",
        "Online database service providers"
      ]
    },
    {
      category: "Amendment Limitations",
      description: "Details that cannot be amended",
      icon: AlertTriangle,
      color: "text-red-600",
      eligibleTypes: [
        "PAN card details (requires new registration)",
        "Business type requiring new PAN",
        "Moving between states (new GSTIN needed)",
        "Primary authorized signatory (without adding new)"
      ]
    }
  ];

  const timelineRequirements = [
    {
      title: "Notification Deadline",
      description: "Inform changes within 15 days of event occurrence",
      icon: Clock,
      timeframe: "15 days"
    },
    {
      title: "Officer Approval",
      description: "Tax officer review and approval timeline",
      icon: Shield,
      timeframe: "15 working days"
    },
    {
      title: "Additional Information",
      description: "Response time for additional documentation",
      icon: FileText,
      timeframe: "7 days"
    },
    {
      title: "Automatic Amendment",
      description: "Auto-approval if officer doesn't respond",
      icon: CheckCircle,
      timeframe: "Auto after deadline"
    }
  ];

  const faqs = [
    {
      question: "What is GST registration amendment?",
      answer: "GST registration amendment refers to making changes or updating the information provided during the initial GST registration. It allows registered taxpayers to modify details such as address, contact information, business structure, authorized signatory, etc."
    },
    {
      question: "Why do I need to amend my GST registration?",
      answer: "There are various reasons why you need to amend your GST registration. Some common scenarios include changes in business address, contact details, addition or removal of partners, directors, or authorized signatories, change in business name, or any other modification that affects the information provided during registration."
    },
    {
      question: "What documents are required for a GST registration amendment?",
      answer: "The documents required for a GST registration amendment may vary depending on the nature of the changes you are making. Commonly required documents include proof of address (such as utility bills, rent agreement, or ownership documents), identity proof (such as PAN card, Aadhaar card, or passport), and other relevant supporting documents specific to the changes being made."
    },
    {
      question: "Is there a time limit for filing a GST registration amendment?",
      answer: "Yes, there is a time limit for filing a GST registration amendment. Any changes in the registration should be filed within 15 days from the change date. It is essential to update the registration promptly to avoid any non-compliance issues."
    },
    {
      question: "What happens after the GST registration amendment is approved?",
      answer: "Once the GST registration amendment is approved, the updated details will reflect in your GST registration certificate and on the GST portal. Ensuring that the amended details are accurate and match your business operations is essential."
    },
    {
      question: "Are there any fees for filing a GST registration amendment?",
      answer: "No, there are no specific fees for filing a GST registration amendment. However, you may need to pay for professional services if you choose to engage a consultant or expert to assist with the amendment process."
    },
    {
      question: "Can I amend my GST registration multiple times?",
      answer: "Yes, you can amend your GST registration multiple times per the requirement. There is no specific limit on the number of amendments you can make. However, ensuring the accuracy of the information provided during the initial registration is advisable to minimize the need for frequent amendments."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with GST amendments?`,
      answer: "We provide comprehensive GST amendment services including application preparation, document verification, portal filing, and compliance support. Our experts ensure smooth processing of both core and non-core field amendments while maintaining regulatory compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={amendmentTypes}
        selectFieldType="hearAbout"
      />

      {/* Amendment Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Edit className="h-4 w-4 mr-2" />
              GST Amendment Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {amendmentOverview.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {amendmentOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Amendment Categories Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Amendment Categories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of GST Registration Amendments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding core and non-core field amendments with different approval requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {amendmentCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <category.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {category.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                  <div className="flex gap-2 mt-3">
                    <Badge className="bg-blue-100 text-blue-800">
                      {category.timeline}
                    </Badge>
                    <Badge className={`${category.approval === "Required" ? "bg-orange-100 text-orange-800" : "bg-green-100 text-green-800"}`}>
                      Approval {category.approval}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Specific Amendments Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Edit className="h-4 w-4 mr-2" />
              Specific Amendments
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Common GST Amendment Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed process for specific types of GST registration amendments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {specificAmendments.map((amendment, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${amendment.color}`}>
                    <amendment.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {amendment.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{amendment.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {amendment.process.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amendment Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Amendment Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GST Registration Amendment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process for filing GST registration amendments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {amendmentProcess.map((process, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-6 bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {process.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="flex items-center text-brand-primary">
                    <process.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {process.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{process.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
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

      {/* Eligibility Criteria Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Eligibility & Limitations
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Amendment Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding who can file amendments and what limitations exist
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${criteria.color}`}>
                    <criteria.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {criteria.category}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{criteria.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criteria.eligibleTypes.map((type, typeIndex) => (
                      <li key={typeIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Timeline Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Timeline Requirements
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GST Amendment Time Limits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key deadlines and timelines for GST registration amendment process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {timelineRequirements.map((timeline, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <timeline.icon className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                  <CardTitle className="text-brand-primary">
                    {timeline.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{timeline.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-brand-primary/10 rounded-lg p-3">
                    <span className="text-lg font-bold text-brand-primary">
                      {timeline.timeframe}
                    </span>
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
        subtitle="Get answers to common questions about GST registration amendments"
        faqs={faqs}
        columns={2}
        ctaTitle="Get GST Amendment Service"
        ctaDescription="Need help with GST registration amendments? Our GST experts provide comprehensive support for all types of amendments, ensuring compliance and smooth processing through the GST portal."
      />
    </div>
  );
};

export default GSTAmendmentPage;
