import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building2, CheckCircle, Shield, IndianRupee, Award, Users, CreditCard, Zap } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'MSME Udyam Registration | Free Government Registration | The Expert India',
  description: 'Get your MSME Udyam Registration certificate with expert assistance. Free government registration with access to subsidies, loans, and other benefits for micro, small, and medium enterprises.',
  keywords: [
    'msme udyam registration',
    'udyam registration',
    'msme registration',
    'small business registration',
    'government msme benefits',
    'msme certificate',
    'udyam certificate',
    'msme subsidies',
    'business registration'
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

function MSMEUdyamRegistrationPage() {
  const heroData = {
    badge: "MSME Udyam Registration",
    title: "Get Your MSME Udyam Registration",
    subtitle: "Official Government Recognition for Your Business",
    description: "Register your MSME under the Udyam Registration scheme and unlock government benefits, subsidies, and schemes. Complete online registration with expert guidance. ✔Free Government Registration ✔Permanent Registration Number ✔Access to Benefits ✔Expert Assistance",
    rating: {
      score: "4.9/5",
      reviews: "(2000+ MSMEs Registered)"
    },
    features: [
      "Free Government Registration",
      "Permanent Registration Number",
      "Access to Government Benefits",
      "Expert Assistance",
      "Complete Online Process",
      "Instant Certificate"
    ],
    pricing: {
      consultation: "₹499",
      consultationLabel: "Professional Service Fee",
      consultationDescription: "Expert assistance for MSME registration"
    },
    trustIndicators: [
      {
        title: "100% Online",
        subtitle: "Paperless Registration"
      },
      {
        title: "Government Recognized",
        subtitle: "Official MSME Certificate"
      }
    ],
    form: {
      title: "Get Your MSME Udyam Registration",
      subtitle: "Register Your Business for Government Benefits",
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
      button: "Start MSME Registration",
      note: "Our MSME experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for MSME consultation"
      }
    }
  };

  const businessTypes = [
    "Manufacturing Business",
    "Service Business",
    "Trading Business",
    "Processing Business",
    "Production Business",
    "Other Business"
  ];

  const overviewData = {
    title: "What is Udyam Registration?",
    description: "Udyam Registration is a government registration procedure launched by the Ministry of Micro, Small and Medium Enterprises (MoMSME) to classify and identify MSMEs in India. It provides an easy, paperless registration process with a single-window system, giving businesses a permanent Udyam Registration Number (URN) and certificate to access various government schemes and benefits."
  };

  const keyBenefits = [
    {
      icon: CreditCard,
      title: "Collateral Free Loans",
      description: "Access loans without collateral through Credit Guarantee Fund Scheme"
    },
    {
      icon: IndianRupee,
      title: "Government Subsidies",
      description: "Reduced interest rates, subsidies, and credit guarantee schemes"
    },
    {
      icon: FileText,
      title: "Tender Benefits",
      description: "Special consideration in government tenders and procurement"
    },
    {
      icon: Shield,
      title: "Payment Protection",
      description: "Legal support for timely payments under MSMED Act"
    }
  ];

  const msmeClassification = [
    {
      category: "Micro Enterprises",
      investment: "Up to ₹1 Crore",
      turnover: "Up to ₹5 Crore",
      description: "Small-scale businesses with minimal investment",
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Small Enterprises", 
      investment: "₹1 Crore to ₹10 Crore",
      turnover: "₹5 Crore to ₹50 Crore",
      description: "Medium-scale businesses with moderate investment",
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Medium Enterprises",
      investment: "₹10 Crore to ₹50 Crore", 
      turnover: "₹50 Crore to ₹250 Crore",
      description: "Large-scale businesses with substantial investment",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const eligibilityCriteria = [
    "Any person aged 18 years and above",
    "No formal education requirement for projects up to ₹10 Lakhs (manufacturing) or ₹5 Lakhs (service)",
    "Minimum 8th standard education for higher project costs",
    "Self Help Groups (SHGs) including BPL groups",
    "Registered Societies under Societies Registration Act, 1860",
    "Production Co-operative Societies",
    "Charitable Trusts",
    "Existing units not availed subsidies under other schemes"
  ];

  const registrationFeatures = [
    {
      title: "100% Online Process",
      description: "Complete paperless registration through government portal",
      icon: Zap
    },
    {
      title: "Permanent Registration",
      description: "No renewal required, valid for lifetime",
      icon: Shield
    },
    {
      title: "Free of Cost",
      description: "Government registration is completely free",
      icon: IndianRupee
    },
    {
      title: "Self Declaration Based",
      description: "Based on self-declaration, no document upload required",
      icon: FileText
    },
    {
      title: "Single Window System",
      description: "All processes handled through single portal",
      icon: Building2
    },
    {
      title: "Dynamic QR Code",
      description: "Certificate with QR code for easy verification",
      icon: Award
    }
  ];

  const requiredInformation = [
    "Aadhaar number of owner/authorized signatory",
    "PAN card details",
    "Business information (name, type, activities)",
    "Business address details",
    "Bank account information",
    "Investment and turnover details",
    "Employment information",
    "GSTIN (if applicable)"
  ];

  const registrationBenefits = [
    "Access to government schemes and subsidies",
    "Priority lending with reduced interest rates",
    "Collateral-free loans up to ₹2 crores",
    "Exemptions in direct tax laws",
    "Special consideration in government tenders",
    "Protection against delayed payments",
    "Easy access to credit facilities",
    "Eligibility for various MSME schemes",
    "Market development assistance",
    "Technology upgradation support"
  ];

  const importantPoints = [
    {
      title: "Mandatory Requirements",
      points: [
        "PAN is mandatory for registration",
        "GSTIN required as per CGST Act 2017",
        "Only one registration per enterprise",
        "Re-registration required for existing EM-II/UAM holders"
      ]
    },
    {
      title: "Registration Features",
      points: [
        "Paperless and free registration process",
        "No documents upload required",
        "Automatic data extraction from government databases",
        "Multiple activities can be added in single registration"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is Udyam Registration?",
      answer: "Udyam Registration is an Indian government certificate of recognition for Micro, Small, and Medium Enterprises (MSMEs). It has replaced the previous Udyog Aadhaar registration and provides a unique identification number and certificate to help businesses avail numerous benefits, subsidies, and schemes."
    },
    {
      question: "Who is eligible for Udyam Registration?",
      answer: "Any individual or entity such as proprietorships, partnerships, LLPs, private limited companies, co-operative societies and trusts engaged in manufacturing, production, processing, or services are eligible, provided they fall within the investment and turnover thresholds for Micro, Small or Medium Enterprises."
    },
    {
      question: "Is Aadhaar mandatory for Udyam Registration?",
      answer: "Yes, Aadhaar is mandatory. For proprietorship, the owner's Aadhaar is required. For partnerships or companies, the Aadhaar of the authorized signatory (partner or director) is needed to complete the registration process."
    },
    {
      question: "What documents are required for Udyam Registration?",
      answer: "Udyam Registration is completely online and paperless. You typically need: Aadhaar number, PAN card, company information (name, form, activity, address), and bank details. No physical documents need to be uploaded as the system automatically draws details from interconnected databases."
    },
    {
      question: "What are the benefits of Udyam Registration?",
      answer: "Benefits include access to government subsidies and MSME programs, priority lending with lower interest rates, eligibility for collateral-free loans, easier access to government tenders, and protection against late payments under MSMED Act."
    },
    {
      question: "Is there any fee for Udyam Registration?",
      answer: "No, the government registration process is completely free. There are no costs or fees to pay to anyone for the official registration. However, you may choose to take professional assistance for the application process."
    },
    {
      question: "How long is Udyam Registration valid?",
      answer: "Udyam Registration is permanent and does not require renewal. Once registered, you receive a permanent Udyam Registration Number (URN) that remains valid throughout the business lifecycle."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with Udyam Registration?`,
      answer: "We provide expert assistance with the entire Udyam Registration process, ensuring accurate classification, proper documentation, and successful registration. Our team guides you through eligibility assessment, application filing, and helps you understand and access available benefits."
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
              MSME Overview
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

      {/* Key Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Key Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of Udyam Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock government schemes, subsidies, and financial benefits for your MSME
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                  <CardTitle className="text-brand-primary">
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

      {/* MSME Classification Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              MSME Classification
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              MSME Categories Based on Investment & Turnover
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand the classification criteria for Micro, Small, and Medium Enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {msmeClassification.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className={`${category.color} mb-3 w-fit`}>
                    {category.category}
                  </Badge>
                  <CardTitle className="text-brand-primary">
                    {category.category}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">Investment:</span>
                      <p className="text-brand-primary font-semibold">{category.investment}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">Annual Turnover:</span>
                      <p className="text-brand-primary font-semibold">{category.turnover}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Features Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Registration Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Udyam Registration Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, efficient, and user-friendly registration process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {registrationFeatures.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-brand-primary">
                    <feature.icon className="h-5 w-5 mr-3 flex-shrink-0" />
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

      {/* Eligibility & Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <Users className="h-5 w-5 mr-3 flex-shrink-0" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <FileText className="h-5 w-5 mr-3 flex-shrink-0" />
                  Required Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredInformation.map((info, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits List Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Complete Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              All Benefits of Udyam Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive list of benefits available to registered MSMEs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {registrationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Points Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Important Points to Remember
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {importantPoints.map((section, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
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
        subtitle="Get answers to common questions about MSME Udyam Registration process and benefits"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Your MSME Registration"
        ctaDescription="Ready to register your MSME and unlock government benefits? Our experts provide complete assistance with Udyam Registration and help you access all available schemes."
      />
    </div>
  );
};

export default MSMEUdyamRegistrationPage;
