import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, FileText, Clock, Building, Users, AlertTriangle, Target, Eye, Star } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Food Safety Compliance Services | FSSAI Compliance | The Expert India',
  description: 'Ensure your food business meets all safety standards and regulations. Comprehensive compliance solutions including HACCP implementation, food safety audits, and training programs.',
  keywords: [
    'food safety compliance',
    'HACCP implementation',
    'food safety audit',
    'food business compliance',
    'food safety training',
    'food safety standards',
    'food regulations',
    'food safety management'
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

export default function FoodSafetyCompliancePage() {
  const heroData = {
    badge: "Food Safety Compliance",
    title: "Comprehensive Food Safety Compliance Solutions",
    subtitle: "Ensure your food business meets all safety standards and regulations",
    description: "Stay compliant with food safety regulations and standards. Our experts provide comprehensive compliance solutions including HACCP implementation, food safety audits, training programs, and ongoing compliance monitoring to ensure your business operates safely and legally.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by food businesses"
    },
    features: [
      "HACCP Implementation",
      "Food Safety Audits",
      "Compliance Training",
      "Documentation Support",
      "Ongoing Monitoring",
      "Regulatory Updates"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized compliance solutions"
    },
    trustIndicators: [
      {
        title: "Expert Compliance",
        subtitle: "Food Safety Specialists"
      },
      {
        title: "Regulatory Updates",
        subtitle: "Always Current"
      }
    ],
    form: {
      title: "Get Food Safety Compliance Support",
      subtitle: "Ensure your business meets all food safety standards",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        state: "Choose your state"
      },
      button: "Get Compliance Quote",
      note: "Our experts will help you achieve complete food safety compliance",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const complianceServices = [
    {
      title: "HACCP Implementation",
      description: "Hazard Analysis Critical Control Points system setup and management",
      icon: Target,
      features: [
        "Hazard analysis and risk assessment",
        "Critical control points identification",
        "Monitoring procedures setup",
        "Corrective action protocols",
        "Verification and validation",
        "Documentation and record keeping"
      ]
    },
    {
      title: "Food Safety Audits",
      description: "Comprehensive audits to assess compliance with food safety standards",
      icon: Eye,
      features: [
        "Internal food safety audits",
        "Pre-certification audits",
        "Supplier audits",
        "Compliance gap analysis",
        "Audit report and recommendations",
        "Follow-up audit support"
      ]
    },
    {
      title: "Training & Education",
      description: "Food safety training programs for staff and management",
      icon: Users,
      features: [
        "Food handler training",
        "HACCP training programs",
        "Supervisor certification",
        "Customized training modules",
        "Online training platforms",
        "Certification management"
      ]
    },
    {
      title: "Documentation & Systems",
      description: "Complete documentation support for compliance requirements",
      icon: FileText,
      features: [
        "Food safety management system",
        "Standard operating procedures",
        "Compliance checklists",
        "Record keeping systems",
        "Policy development",
        "Digital compliance tools"
      ]
    }
  ];

  const complianceAreas = [
    {
      title: "FSSAI Compliance",
      description: "Ensure compliance with FSSAI regulations and food safety standards",
      requirements: [
        "FSSAI license maintenance",
        "Food safety plan implementation",
        "Labeling compliance",
        "Hygiene standards maintenance"
      ]
    },
    {
      title: "ISO 22000 Standards",
      description: "International food safety management system certification",
      requirements: [
        "Food safety management system",
        "Hazard analysis implementation",
        "Prerequisite programs",
        "Continuous improvement processes"
      ]
    },
    {
      title: "BRC/SQF Standards",
      description: "Global food safety standards for retail and supply chains",
      requirements: [
        "Quality management systems",
        "Product safety protocols",
        "Site security measures",
        "Traceability systems"
      ]
    },
    {
      title: "Export Compliance",
      description: "Meet international food safety requirements for exports",
      requirements: [
        "Country-specific regulations",
        "Export certification support",
        "International standards compliance",
        "Documentation for export"
      ]
    }
  ];

  const complianceProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "Comprehensive assessment of current food safety practices",
      icon: Eye
    },
    {
      step: "2",
      title: "Gap Analysis",
      description: "Identify gaps in compliance and create improvement plan",
      icon: Target
    },
    {
      step: "3",
      title: "Implementation",
      description: "Implement food safety systems and training programs",
      icon: Building
    },
    {
      step: "4",
      title: "Monitoring",
      description: "Ongoing monitoring and compliance maintenance",
      icon: Shield
    }
  ];

  const benefits = [
    "Ensure consumer safety and prevent foodborne illnesses",
    "Maintain compliance with regulatory requirements",
    "Reduce risk of product recalls and legal issues",
    "Enhance brand reputation and customer trust",
    "Improve operational efficiency and quality",
    "Access to international markets and certifications",
    "Reduce insurance costs and liability risks",
    "Competitive advantage in the marketplace"
  ];

  const riskFactors = [
    {
      risk: "Contamination",
      description: "Biological, chemical, or physical contamination of food products",
      prevention: "Proper hygiene, sanitation, and contamination controls"
    },
    {
      risk: "Temperature Control",
      description: "Improper storage and handling temperatures",
      prevention: "Cold chain management and temperature monitoring"
    },
    {
      risk: "Cross-contamination",
      description: "Transfer of harmful substances between food products",
      prevention: "Segregation protocols and cleaning procedures"
    },
    {
      risk: "Poor Hygiene",
      description: "Inadequate personal and facility hygiene practices",
      prevention: "Hygiene training and sanitation programs"
    }
  ];

  const faqData = [
    {
      question: "What is food safety compliance?",
      answer: "Food safety compliance refers to adhering to all regulations, standards, and best practices designed to ensure food is safe for consumption. This includes FSSAI regulations, HACCP principles, and international food safety standards."
    },
    {
      question: "Why is food safety compliance important?",
      answer: "Food safety compliance protects consumers from foodborne illnesses, ensures regulatory compliance, prevents legal issues, maintains brand reputation, and enables access to domestic and international markets."
    },
    {
      question: "What is HACCP and do I need it?",
      answer: "HACCP (Hazard Analysis Critical Control Points) is a systematic approach to food safety. It's required for many food businesses and helps identify, evaluate, and control food safety hazards throughout the production process."
    },
    {
      question: "How often should food safety audits be conducted?",
      answer: "Internal audits should be conducted regularly (monthly or quarterly), while external audits depend on certification requirements. Annual audits are typically required for maintaining certifications."
    },
    {
      question: "What training do food handlers need?",
      answer: "Food handlers need basic food safety training covering personal hygiene, safe food handling practices, temperature control, and contamination prevention. Training should be updated regularly."
    },
    {
      question: "What are the consequences of non-compliance?",
      answer: "Non-compliance can result in penalties, license suspension, product recalls, legal action, reputation damage, and in severe cases, closure of business operations."
    },
    {
      question: "How do you help with international food safety standards?",
      answer: "We provide guidance on international standards like ISO 22000, BRC, SQF, and country-specific requirements for export markets, including documentation and certification support."
    },
    {
      question: "What documentation is required for food safety compliance?",
      answer: "Required documentation includes food safety plans, HACCP plans, SOPs, training records, audit reports, supplier verifications, and various monitoring and verification records."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero heroData={heroData} />

      {/* Compliance Services Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Food Safety Compliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to ensure your food business meets all safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <Target className="h-4 w-4 mr-2" />
              Compliance Areas
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Key Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help you comply with various food safety standards and regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{area.title}</CardTitle>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {area.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Compliance Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systematic approach to achieving and maintaining food safety compliance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {complianceProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {process.step}
                  </div>
                  <process.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Risk Management
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Common Food Safety Risk Factors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identify and prevent common food safety risks in your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {riskFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    {factor.risk}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-sm text-green-800 mb-1">Prevention:</h4>
                    <p className="text-sm text-green-700">{factor.prevention}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
                <Star className="h-4 w-4 mr-2" />
                Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Benefits of Food Safety Compliance
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Shield className="h-5 w-5 mr-2" />
                    Why Choose Our Compliance Services?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Expert Knowledge</h4>
                        <p className="text-sm text-blue-700">Deep understanding of food safety regulations and standards</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Customized Solutions</h4>
                        <p className="text-sm text-blue-700">Tailored compliance programs for your specific business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Ongoing Support</h4>
                        <p className="text-sm text-blue-700">Continuous monitoring and support to maintain compliance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Common questions about food safety compliance"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
