import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, CheckCircle, TrendingUp, Building, FileText, AlertTriangle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Internal Audit Services | Corporate Governance | Risk Management | The Expert India',
  description: 'Comprehensive internal audit services to strengthen operations, enhance governance, and improve performance. Expert auditors providing independent reviews for businesses.',
  keywords: [
    'internal audit',
    'operational efficiency',
    'risk management',
    'compliance verification',
    'financial process audit',
    'corporate governance',
    'performance evaluation',
    'business audit'
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

function InternalAuditPage() {
  const heroData = {
    badge: "Internal Audit Services",
    title: "Internal Audit Services",
    subtitle: "Comprehensive Internal Review & Assessment",
    description: "Strengthen your organization's operations with our comprehensive internal audit services. Our expert auditors provide independent reviews to enhance governance, identify risks, and improve performance.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "Operational Efficiency Review",
      "Risk Management Assessment",
      "Compliance Verification",
      "Financial Process Audit",
      "IT Systems Review",
      "Performance Evaluation"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized audit pricing"
    },
    trustIndicators: [
      {
        title: "Expert Auditors",
        subtitle: "Qualified Professionals"
      },
      {
        title: "Comprehensive Review",
        subtitle: "All Business Areas"
      }
    ],
    form: {
      title: "Get Internal Audit Quote",
      subtitle: "Connect with our expert auditors for comprehensive internal review services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Audit Type Required"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select audit type",
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

  const auditTypes = [
    "Operational Audit",
    "Compliance Audit",
    "Financial Audit",
    "IT Audit",
    "Environmental Audit",
    "Forensic Audit",
    "Performance Audit"
  ];

  const auditDefinition = {
    title: "What Is Internal Audit?",
    description: "An internal audit is a methodical and independent review of an organisation's operations, processes, and internal controls. It determines whether the corporation is managing risk, creating a profit, and complying with legal rules. Internal audits provide valuable records to enhance general commercial enterprise governance, identify fraud, and enhance overall performance."
  };

  const internalAuditTypes = [
    {
      title: "Operational Audit",
      description: "Evaluates the efficiency of an enterprise's internal operations and activities",
      icon: TrendingUp,
      details: [
        "Assesses how money, time, and labour are utilized",
        "Identifies inefficiencies and delays",
        "Finds opportunities for higher productivity",
        "Optimizes resource allocation"
      ]
    },
    {
      title: "Compliance Audit",
      description: "Ensures adherence to all applicable laws, regulations, and industry standards",
      icon: Shield,
      details: [
        "Checks compliance with legal requirements",
        "Verifies adherence to industry guidelines",
        "Prevents legal penalties and reputational damage",
        "Aligns processes with internal standards"
      ]
    },
    {
      title: "Financial Audit",
      description: "Ensures credibility and validity of financial transactions and records",
      icon: FileText,
      details: [
        "Verifies compliance with accounting standards (GAAP/IFRS)",
        "Detects fraud, misstatements, or errors",
        "Provides transparency in financial reporting",
        "Ensures accuracy of financial statements"
      ]
    },
    {
      title: "IT Audit (Information Systems Audit)",
      description: "Checks information technology infrastructure and cybersecurity measures",
      icon: Shield,
      details: [
        "Ensures IT systems are reliable and secure",
        "Verifies compliance with data protection policies",
        "Protects against cyber attacks and data breaches",
        "Safeguards confidential business and customer data"
      ]
    },
    {
      title: "Environmental Audit",
      description: "Quantifies environmental impact and compliance with environmental policies",
      icon: Building,
      details: [
        "Evaluates pollution control measures",
        "Assesses energy consumption and waste management",
        "Ensures compliance with environmental regulations",
        "Enhances corporate social responsibility"
      ]
    },
    {
      title: "Forensic Audit",
      description: "Specialized audit to examine financial fraud and illegal activities",
      icon: AlertTriangle,
      details: [
        "Investigates financial fraud and embezzlement",
        "Analyzes transaction history and financial records",
        "Provides evidence for legal proceedings",
        "Strengthens financial security measures"
      ]
    },
    {
      title: "Performance Audit",
      description: "Evaluates how efficiently an organization achieves its strategic goals",
      icon: TrendingUp,
      details: [
        "Analyzes key performance indicators (KPIs)",
        "Assesses resource performance and efficiency",
        "Ensures accountability and continuous improvement",
        "Optimizes service delivery processes"
      ]
    }
  ];

  const auditProcess = [
    {
      step: "1",
      title: "Planning",
      description: "Establish audit objectives, scope, and methodology",
      icon: FileText,
      details: [
        "Define audit objectives and scope",
        "Identify key risks and focus areas",
        "Collect relevant documentation",
        "Develop structured audit plan with timelines"
      ]
    },
    {
      step: "2",
      title: "Fieldwork",
      description: "Gather data through interviews, documentation, and testing",
      icon: Search,
      details: [
        "Conduct interviews with key personnel",
        "Examine documents and records",
        "Observe processes and procedures",
        "Test internal controls and sample transactions"
      ]
    },
    {
      step: "3",
      title: "Reporting",
      description: "Compile formal audit report with findings and recommendations",
      icon: FileText,
      details: [
        "Document audit findings and risks",
        "Provide recommendations for improvement",
        "Submit report to senior management",
        "Assist decision-makers with corrective actions"
      ]
    },
    {
      step: "4",
      title: "Follow-up and Monitoring",
      description: "Verify implementation of corrective actions",
      icon: CheckCircle,
      details: [
        "Confirm corrective actions are implemented",
        "Monitor ongoing compliance improvements",
        "Ensure sustainable best practices",
        "Maintain continuous improvement culture"
      ]
    }
  ];

  const auditAdvantages = [
    {
      title: "Enhances Operational Efficiency",
      description: "Reveals inefficiencies, rationalizes processes and increases productivity",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Strengthened Risk Management",
      description: "Assists companies in identifying and responding to risks linked to fraud, compliance, and operational failure",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "Facilitates Regulatory Compliance",
      description: "Maintains compliance with laws, industry standards, and internal guidelines to avoid legal problems and fines",
      icon: CheckCircle,
      color: "text-purple-600"
    },
    {
      title: "Improves Internal Controls",
      description: "Assesses and enhances organizational controls to keep finances accurate, prevent fraud, and avoid security breaches",
      icon: Shield,
      color: "text-orange-600"
    },
    {
      title: "Enhances Financial Precision",
      description: "Ensures the correctness and uniformity of financial records, reducing discrepancies and mishandling",
      icon: FileText,
      color: "text-red-600"
    },
    {
      title: "Protects Against Fraud",
      description: "Identifies potential fraudulent activity and weaknesses in financial and business procedures",
      icon: AlertTriangle,
      color: "text-yellow-600"
    }
  ];

  const faqs = [
    {
      question: "What is internal audit and why is it important?",
      answer: "Internal audit is a methodical and independent review of an organization's operations, processes, and internal controls. It helps manage risk, ensure compliance, identify fraud, and enhance overall business governance and performance."
    },
    {
      question: "What types of internal audits do you offer?",
      answer: "We offer comprehensive internal audit services including operational audit, compliance audit, financial audit, IT audit, environmental audit, forensic audit, and performance audit."
    },
    {
      question: "How long does an internal audit take?",
      answer: "The duration depends on the scope, complexity, and size of your organization. Our team will provide a detailed timeline after assessing your specific requirements during the planning phase."
    },
    {
      question: "What's the difference between internal and external audit?",
      answer: "Internal audit is conducted by internal or hired auditors to improve operations and controls, while external audit is performed by independent auditors primarily for financial statement validation and regulatory compliance."
    },
    {
      question: "How often should internal audits be conducted?",
      answer: "The frequency depends on your industry, risk profile, and regulatory requirements. Generally, annual audits are recommended, with more frequent reviews for high-risk areas."
    },
    {
      question: "What happens after the internal audit is completed?",
      answer: "We provide a comprehensive report with findings, recommendations, and corrective actions. We also offer follow-up services to ensure recommendations are implemented and improvements are sustained."
    },
    {
      question: `How does ${SITE_FULL_NAME} ensure audit quality?`,
      answer: "Our qualified auditors follow systematic audit procedures, maintain independence, and provide detailed reporting with actionable recommendations for continuous improvement."
    },
    {
      question: "Can internal audit help prevent fraud?",
      answer: "Yes, internal audits are highly effective in identifying potential fraudulent activities, weaknesses in financial procedures, and control gaps that could lead to fraud."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={auditTypes}
        selectFieldType="hearAbout"
      />

      {/* Audit Definition Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Search className="h-4 w-4 mr-2" />
              Audit Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {auditDefinition.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {auditDefinition.description}
            </p>
          </div>
        </div>
      </section>

      {/* Internal Audit Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Audit Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Internal Audit Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit services tailored to your specific business needs and industry requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {internalAuditTypes.map((auditType, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <auditType.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {auditType.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{auditType.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {auditType.details.map((detail, detailIndex) => (
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

      {/* Audit Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Search className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Internal Audit Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive and effective internal audit services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {auditProcess.map((process, index) => (
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

      {/* Advantages Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Advantages Of Internal Audits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how internal audits can transform your business operations and strengthen your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {auditAdvantages.map((advantage, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className={`flex items-center ${advantage.color}`}>
                    <advantage.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about internal audit services"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Internal Audit Quote"
        ctaDescription="Strengthen your organization's operations with our comprehensive internal audit services. Connect with our expert auditors for professional assessment and recommendations."
      />
    </div>
  );
};

export default InternalAuditPage;
