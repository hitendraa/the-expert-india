import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Shield, Clock, Building2, AlertTriangle, Award, CheckCircle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Labour License Registration | Contract Labour License | The Expert India',
  description: 'Get labour license and ensure compliance with labour laws. Our experts help you obtain contract labour licenses, principal employer licenses, and migrant worker licenses.',
  keywords: [
    'labour license',
    'contract labour act',
    'principal employer license',
    'migrant worker license',
    'labour compliance',
    'labour law registration',
    'employment registration',
    'workforce compliance',
    'labour license consultant'
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

function LabourLicensePage() {
  const heroData = {
    badge: "Labour License Registration",
    title: "Get Your Labour License & Compliance",
    subtitle: "Mandatory License for Establishments with Workers",
    description: "Obtain labour license under Contract Labour Act and other labour laws with expert guidance. Ensure complete compliance with employment regulations and worker safety standards. ✔Mandatory Compliance ✔Worker Protection ✔Legal Safety ✔Expert Support",
    rating: {
      score: "4.9/5",
      reviews: "(750+ Licenses Obtained)"
    },
    features: [
      "Contract Labour License",
      "Principal Employer License",
      "Migrant Worker License",
      "Complete Documentation",
      "Compliance Support",
      "Renewal Assistance"
    ],
    pricing: {
      consultation: "₹3,999",
      consultationLabel: "Starting from",
      consultationDescription: "Complete labour license registration"
    },
    trustIndicators: [
      {
        title: "100% Legal",
        subtitle: "Full Compliance"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Get Your Labour License",
      subtitle: "Ensure Legal Compliance",
      fields: {
        name: "Company Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "License Type"
      },
      placeholders: {
        name: "Enter company name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select license type",
        state: "Choose your state"
      },
      button: "Get My License",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const licenseTypes = [
    "Contract Labour License",
    "Principal Employer License",
    "Migrant Worker License",
    "Factory License",
    "Shop & Establishment",
    "Other"
  ];

  const overviewData = {
    title: "What is Labour License?",
    description: "Labour License is a mandatory registration under various labour laws including Contract Labour (Regulation and Abolition) Act, 1970, Inter-State Migrant Workmen Act, and Factory Act. It ensures proper working conditions, fair wages, and safety standards for workers employed in establishments."
  };

  const licenseCategories = [
    {
      title: "Contract Labour License",
      description: "Required for establishments employing 20+ contract workers",
      applicability: "Principal employers and contractors",
      validity: "1-5 years",
      threshold: "20+ contract workers"
    },
    {
      title: "Principal Employer License",
      description: "For establishments engaging contractors for work",
      applicability: "Companies hiring contractors",
      validity: "1-5 years",
      threshold: "Any contract work"
    },
    {
      title: "Migrant Worker License",
      description: "For employing workers from other states",
      applicability: "Interstate worker employment",
      validity: "1-5 years",
      threshold: "5+ migrant workers"
    },
    {
      title: "Factory License",
      description: "Manufacturing establishments with power/workers",
      applicability: "Manufacturing units",
      validity: "1-5 years",
      threshold: "10+ workers with power / 20+ without power"
    }
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Complete protection under labour laws"
    },
    {
      icon: Users,
      title: "Worker Safety",
      description: "Ensures proper working conditions and safety"
    },
    {
      icon: Building2,
      title: "Business Compliance",
      description: "Mandatory for business operations"
    },
    {
      icon: Clock,
      title: "Timely Processing",
      description: "Quick approval within 30-60 days"
    }
  ];

  const applicabilityConditions = [
    {
      act: "Contract Labour Act, 1970",
      threshold: "20+ contract workers employed for 120+ days",
      license: "Contract Labour License",
      coverage: "Both principal employer and contractor"
    },
    {
      act: "Inter-State Migrant Workers Act",
      threshold: "5+ migrant workers from other states",
      license: "Migrant Worker License",
      coverage: "Principal employer and contractor"
    },
    {
      act: "Factories Act, 1948",
      threshold: "10+ workers with power OR 20+ workers without power",
      license: "Factory License",
      coverage: "Manufacturing establishments"
    },
    {
      act: "Building & Construction Workers Act",
      threshold: "10+ construction workers",
      license: "Construction Worker License",
      coverage: "Construction establishments"
    }
  ];

  const requiredDocuments = [
    "Application form in prescribed format",
    "Company incorporation certificate",
    "Memorandum and Articles of Association",
    "Partnership deed (for partnerships)",
    "PAN card of the company",
    "Address proof of establishment",
    "Layout plan of the establishment",
    "List of contract workers with details",
    "Contractor agreement/work order",
    "Compliance certificate from contractor",
    "Bank guarantee or security deposit",
    "Factory license (if applicable)",
    "Environmental clearance (if required)",
    "Fire safety certificate",
    "Building plan approval"
  ];

  const registrationProcess = [
    {
      step: 1,
      title: "Eligibility Assessment",
      description: "Determine applicable labour laws and license requirements"
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Collect and prepare all required documents and certificates"
    },
    {
      step: 3,
      title: "Application Filing",
      description: "Submit application to respective labour department"
    },
    {
      step: 4,
      title: "Inspection & Verification",
      description: "Official inspection of premises and document verification"
    },
    {
      step: 5,
      title: "Security Deposit",
      description: "Submit required security deposit or bank guarantee"
    },
    {
      step: 6,
      title: "License Issuance",
      description: "Receive labour license certificate for operations"
    }
  ];

  const complianceRequirements = [
    {
      requirement: "Wage Payment",
      description: "Ensure timely payment of wages to all workers",
      frequency: "Monthly/Fortnightly"
    },
    {
      requirement: "Working Hours",
      description: "Maintain prescribed working hours and overtime limits",
      frequency: "Daily monitoring"
    },
    {
      requirement: "Safety Measures",
      description: "Implement safety protocols and provide safety equipment",
      frequency: "Continuous"
    },
    {
      requirement: "Medical Facilities",
      description: "Provide medical facilities and first aid arrangements",
      frequency: "Always available"
    },
    {
      requirement: "Record Maintenance",
      description: "Maintain registers of workers, wages, and attendance",
      frequency: "Daily updates"
    },
    {
      requirement: "Returns Filing",
      description: "File periodic returns and compliance reports",
      frequency: "Monthly/Quarterly"
    }
  ];

  const penalties = [
    {
      violation: "Operating without labour license",
      penalty: "₹10,000 to ₹50,000 fine + imprisonment up to 1 year"
    },
    {
      violation: "Non-payment of wages",
      penalty: "₹5,000 to ₹25,000 fine + compensation to workers"
    },
    {
      violation: "Violation of working hours",
      penalty: "₹2,000 to ₹10,000 fine per violation"
    },
    {
      violation: "Safety norm violations",
      penalty: "₹15,000 to ₹75,000 fine + license suspension"
    },
    {
      violation: "Non-maintenance of records",
      penalty: "₹1,000 to ₹5,000 fine per missing record"
    }
  ];

  const benefits = [
    "Legal authorization to employ workers",
    "Protection from labour law violations",
    "Enhanced business credibility and trust",
    "Access to government contracts and tenders",
    "Easier bank loan approvals",
    "Compliance with statutory requirements",
    "Worker welfare and safety assurance",
    "Avoidance of penalties and legal issues",
    "Smooth business operations",
    "Professional reputation enhancement"
  ];

  const renewalProcess = [
    {
      title: "Renewal Timeline",
      description: "Apply for renewal 3-6 months before expiry",
      importance: "Avoid operational disruption"
    },
    {
      title: "Updated Documents",
      description: "Submit updated compliance certificates and records",
      importance: "Current status verification"
    },
    {
      title: "Inspection Report",
      description: "Fresh inspection may be conducted for renewal",
      importance: "Compliance verification"
    },
    {
      title: "Fee Payment",
      description: "Pay renewal fees as prescribed by state government",
      importance: "Processing requirement"
    }
  ];

  const faqs = [
    {
      question: "What is Labour License and why is it mandatory?",
      answer: "Labour License is a mandatory registration under various labour laws like Contract Labour Act, Factory Act, and Interstate Migrant Workers Act. It ensures compliance with employment regulations, worker safety, and fair labor practices."
    },
    {
      question: "Which establishments need Labour License?",
      answer: "Establishments employing 20+ contract workers, 5+ migrant workers from other states, manufacturing units with 10+ workers (with power) or 20+ workers (without power), and construction sites with 10+ workers require labour licenses."
    },
    {
      question: "What are the different types of Labour Licenses?",
      answer: "Main types include Contract Labour License (for contract workers), Principal Employer License (for hiring contractors), Migrant Worker License (for interstate workers), Factory License (for manufacturing), and Construction Worker License."
    },
    {
      question: "What documents are required for Labour License registration?",
      answer: "Required documents include application form, incorporation certificate, MOA/AOA, PAN card, address proof, layout plan, worker list, contractor agreements, bank guarantee, and relevant clearance certificates."
    },
    {
      question: "How long does it take to get Labour License?",
      answer: "The processing time typically ranges from 30-60 days, depending on the type of license, state regulations, and completeness of documentation. Inspection and verification may add additional time."
    },
    {
      question: "What are the penalties for operating without Labour License?",
      answer: "Penalties include fines ranging from ₹10,000 to ₹75,000, imprisonment up to 1 year, license suspension, and compensation payments to affected workers, depending on the nature of violation."
    },
    {
      question: "What compliance requirements must be maintained?",
      answer: "Key requirements include timely wage payment, adherence to working hours, safety measures implementation, medical facility provision, proper record maintenance, and filing of periodic returns."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with Labour License registration?`,
      answer: "We provide complete assistance including eligibility assessment, documentation support, application filing, liaison with authorities, inspection coordination, compliance setup, and ongoing support for renewals and compliance maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={licenseTypes}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Building2 className="h-4 w-4 mr-2" />
              License Overview
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
              Why Labour License is Essential
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the importance and benefits of labour license compliance
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

      {/* License Categories Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              License Categories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Labour Licenses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different types of labour licenses based on business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {licenseCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Applicable to:</span>
                      <p className="text-gray-800">{category.applicability}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Validity:</span>
                      <Badge className="bg-blue-100 text-blue-800">{category.validity}</Badge>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Threshold:</span>
                    <p className="text-gray-800">{category.threshold}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applicability Conditions Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Applicability Conditions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              When is Labour License Required?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specific conditions under different labour laws requiring licenses
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {applicabilityConditions.map((condition, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {condition.act}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Threshold:</span>
                    <p className="text-gray-800">{condition.threshold}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">License Type:</span>
                    <Badge className="bg-green-100 text-green-800">{condition.license}</Badge>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Coverage:</span>
                    <p className="text-gray-800">{condition.coverage}</p>
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
              Complete guide to obtain labour license registration
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
                  <CardContent>
                    <Badge className="bg-blue-100 text-blue-800">
                      {requirement.frequency}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Renewal Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
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
                Renewal Process
              </h2>
              {renewalProcess.map((renewal, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-brand-primary text-lg">
                      {renewal.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{renewal.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-orange-100 text-orange-800">
                      {renewal.importance}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Penalties & Fines
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Penalties for Non-Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Avoid legal issues and penalties by maintaining proper labour law compliance
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {penalties.map((penalty, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-600 text-lg">
                    {penalty.violation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-red-100 text-red-800 text-sm">
                    {penalty.penalty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about labour license registration and compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Your Labour License Today"
        ctaDescription="Ensure complete compliance with labour laws and protect your business from legal issues. Our experts provide comprehensive assistance with labour license registration, compliance setup, and ongoing support."
      />
    </div>
  );
};

export default LabourLicensePage;
