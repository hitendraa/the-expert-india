"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, TrendingUp, Users, Building, CheckCircle, AlertTriangle, Globe, Zap } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const FinancialCompliancePage = () => {
  const heroData = {
    badge: "Financial Compliance Services",
    title: "Financial Compliance Services",
    subtitle: "Comprehensive Regulatory Adherence Solutions",
    description: "Ensure adherence to financial regulations and compliance standards with our comprehensive services. Navigate intricate compliance frameworks while maintaining operational integrity and stakeholder trust.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "Companies Act Compliance",
      "Income Tax Compliance",
      "GST Compliance",
      "FEMA Compliance",
      "Internal Audit",
      "Regulatory Updates"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized compliance pricing"
    },
    trustIndicators: [
      {
        title: "Expert Compliance",
        subtitle: "Regulatory Specialists"
      },
      {
        title: "Zero Penalties",
        subtitle: "Complete Adherence"
      }
    ],
    form: {
      title: "Get Financial Compliance Quote",
      subtitle: "Connect with our experts for comprehensive financial compliance services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Business Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select business type",
        state: "Choose your state"
      },
      button: "Get Compliance Quote",
      note: "Our compliance experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for compliance consultation"
      }
    }
  };

  const businessTypes = [
    "Private Limited Company",
    "Public Limited Company",
    "LLP",
    "Partnership Firm",
    "Sole Proprietorship",
    "Foreign Company",
    "Other"
  ];

  const complianceOverview = {
    title: "Financial Compliance Services Overview",
    description: "In today's dynamic business landscape, ensuring adherence to financial regulations and compliance standards is paramount for organizations seeking to maintain operational integrity and trust among stakeholders. As the regulatory environment continues to evolve, businesses face the challenge of navigating intricate compliance frameworks while striving for excellence in financial governance."
  };

  const keyRegulations = [
    {
      title: "Companies Act, 2013",
      description: "Governs incorporation, regulation, and winding up of companies in India",
      icon: Building,
      details: [
        "Legal requirements for financial reporting",
        "Audit and compliance mandates",
        "Corporate governance standards",
        "Director responsibilities and liabilities"
      ]
    },
    {
      title: "Income Tax Act, 1961",
      description: "Obligates businesses to comply with tax laws and regulations",
      icon: FileText,
      details: [
        "Timely filing of tax returns",
        "TDS provisions compliance",
        "Maintaining accurate financial records",
        "Tax planning and optimization"
      ]
    },
    {
      title: "Goods and Services Tax (GST) Act",
      description: "Revolutionized indirect tax regime by streamlining taxation system",
      icon: TrendingUp,
      details: [
        "GST registration and compliance",
        "Input tax credit management",
        "Timely GST return filings",
        "Tax rate compliance"
      ]
    },
    {
      title: "Foreign Exchange Management Act (FEMA)",
      description: "Regulates foreign exchange transactions and international trade",
      icon: Globe,
      details: [
        "Foreign investment regulations",
        "External trade compliance",
        "Foreign exchange management",
        "Cross-border transaction rules"
      ]
    }
  ];

  const complianceBenefits = [
    {
      title: "Cost Savings",
      description: "Significant cost savings by avoiding in-house compliance teams",
      icon: TrendingUp
    },
    {
      title: "Access to Expertise",
      description: "Specialized expertise in navigating complex regulatory frameworks",
      icon: Users
    },
    {
      title: "Core Business Focus",
      description: "Focus on core activities without compliance complexities",
      icon: Building
    },
    {
      title: "Enhanced Efficiency",
      description: "Improved efficiency in compliance processes and operations",
      icon: Zap
    }
  ];

  const complianceChallenges = [
    {
      challenge: "Changing Regulations",
      description: "Constant evolution of regulatory frameworks",
      solution: "Stay informed through official channels and expert guidance"
    },
    {
      challenge: "Data Security Concerns",
      description: "Protecting sensitive financial information",
      solution: "Implement encryption and robust access controls"
    },
    {
      challenge: "Internal Control Weaknesses",
      description: "Inadequate oversight and monitoring",
      solution: "Regular assessments and strong control mechanisms"
    }
  ];

  const bestPractices = [
    {
      title: "Regular Audits",
      description: "Conduct periodic audits to assess compliance effectiveness",
      icon: Shield,
      practices: [
        "Identify compliance gaps and errors",
        "Take prompt corrective actions",
        "Enhance overall compliance posture",
        "Ensure regulatory adherence"
      ]
    },
    {
      title: "Robust Internal Controls",
      description: "Establish strong control mechanisms for financial processes",
      icon: CheckCircle,
      practices: [
        "Mitigate financial risks",
        "Prevent fraudulent activities",
        "Define clear procedures and responsibilities",
        "Ensure transaction integrity"
      ]
    },
    {
      title: "Employee Training",
      description: "Invest in compliance training for staff awareness",
      icon: Users,
      practices: [
        "Foster culture of compliance",
        "Empower informed decision-making",
        "Adhere to established guidelines",
        "Contribute to compliance excellence"
      ]
    },
    {
      title: "Technology Integration",
      description: "Utilize compliance management software and tools",
      icon: Zap,
      practices: [
        "Streamlined tracking and monitoring",
        "Automated compliance processes",
        "Real-time compliance reporting",
        "Enhanced accuracy and efficiency"
      ]
    }
  ];

  const serviceSelection = [
    "Provider's expertise in financial compliance",
    "Industry experience and reputation",
    "Comprehensive service offerings",
    "Ability to cater to specific compliance challenges",
    "Track record in handling compliance issues",
    "Scalability of services",
    "Technology integration capabilities",
    "Data security and confidentiality measures"
  ];

  const futureTrends = [
    {
      title: "Technology Automation",
      description: "AI, ML, and RPA streamlining compliance processes",
      icon: Zap,
      trends: [
        "Automated compliance monitoring",
        "Enhanced accuracy and efficiency",
        "Reduced manual efforts",
        "Proactive compliance management"
      ]
    },
    {
      title: "ESG Compliance",
      description: "Focus on Environmental, Social, and Governance factors",
      icon: Globe,
      trends: [
        "Sustainability reporting",
        "Social responsibility compliance",
        "Ethical practice standards",
        "Stakeholder expectation alignment"
      ]
    },
    {
      title: "Global Economic Impact",
      description: "International regulations influencing Indian compliance",
      icon: TrendingUp,
      trends: [
        "Cross-border compliance strategies",
        "International best practices",
        "Global economic factor considerations",
        "Geopolitical shift adaptations"
      ]
    }
  ];

  const faqs = [
    {
      question: "How can financial compliance services benefit small businesses?",
      answer: "Financial compliance services offer small businesses access to expertise in navigating complex regulatory frameworks, ensuring timely compliance with laws, reducing operational risks, and enabling focus on core business activities without maintaining an internal compliance team."
    },
    {
      question: "What should businesses consider when selecting a financial compliance service provider?",
      answer: "Businesses should evaluate the provider's expertise, industry experience, service offerings, reputation, and ability to tailor solutions to their specific compliance needs when selecting a financial compliance service provider."
    },
    {
      question: "How can technology enhance financial compliance management?",
      answer: "Technology solutions like AI, machine learning, and automation tools streamline compliance processes, enhance accuracy, reduce manual efforts, and enable proactive monitoring, improving efficiency in financial compliance management."
    },
    {
      question: "What are the key regulations governing financial compliance in India?",
      answer: "Key regulations include Companies Act 2013, Income Tax Act 1961, GST Act, and FEMA, which govern corporate compliance, tax obligations, indirect taxes, and foreign exchange transactions respectively."
    },
    {
      question: "What trends are shaping the future of financial compliance services?",
      answer: "Key trends include adoption of RegTech solutions, emphasis on ESG compliance, integration of data analytics for predictive monitoring, and convergence of financial and non-financial disclosures for comprehensive reporting."
    },
    {
      question: "Why is staying updated on global economic trends crucial for compliance?",
      answer: "Indian businesses engaged in cross-border activities must align with international compliance standards influenced by global economic trends to navigate the evolving regulatory landscape effectively."
    },
    {
      question: "What are the common challenges in ensuring financial compliance?",
      answer: "Common challenges include keeping up with changing regulations, data security concerns, and internal control weaknesses. These can be addressed through expert guidance, robust security measures, and regular assessments."
    },
    {
      question: `How does ${SITE_FULL_NAME} ensure comprehensive compliance?`,
      answer: "We provide end-to-end financial compliance services including regulatory monitoring, policy implementation, internal controls, employee training, and technology integration for complete regulatory adherence."
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

      {/* Compliance Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Compliance Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {complianceOverview.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {complianceOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Regulations Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Key Regulations
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Key Regulations Governing Financial Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the regulatory framework is essential for maintaining compliance excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {keyRegulations.map((regulation, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <regulation.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {regulation.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{regulation.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {regulation.details.map((detail, detailIndex) => (
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

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of Outsourcing Financial Compliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage external expertise for comprehensive compliance management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {complianceBenefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Challenges
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Common Challenges in Ensuring Financial Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {complianceChallenges.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    {item.challenge}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Solution:</p>
                    <p className="text-sm text-green-700 mt-1">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Best Practices
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Best Practices for Effective Financial Compliance Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Implement proven strategies for comprehensive compliance excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <practice.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {practice.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{practice.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {practice.practices.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Service Selection Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Service Selection
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Choosing the Right Financial Compliance Service Provider
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  Key Factors to Consider
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceSelection.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Trends Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Future Trends
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Future Trends in Financial Compliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead with emerging trends shaping the compliance landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {futureTrends.map((trend, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <trend.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {trend.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{trend.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {trend.trends.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about financial compliance services"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Financial Compliance Quote"
        ctaDescription="Navigate the complex regulatory landscape with our comprehensive financial compliance services. Connect with our experts for tailored solutions that ensure complete regulatory adherence and operational integrity."
      />
    </div>
  );
};

export default FinancialCompliancePage;
