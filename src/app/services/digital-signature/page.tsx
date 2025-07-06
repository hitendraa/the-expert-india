import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Clock, FileText, Lock, Award, Key, Download } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Digital Signature Certificate (DSC) | Class 2 & Class 3 | The Expert India',
  description: 'Get your Digital Signature Certificate (DSC) - Class 2 & Class 3 for secure online transactions. Expert assistance for individuals and organizations. Apply now!',
  keywords: [
    'digital signature certificate',
    'DSC',
    'class 2 DSC',
    'class 3 DSC',
    'digital signature online',
    'e-filing',
    'secure transactions',
    'electronic signature'
  ],
  authors: [{ name: SITE_FULL_NAME }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function DigitalSignaturePage() {
  const heroData = {
    badge: "Digital Signature Certificate",
    title: "Get Your Digital Signature Certificate (DSC)",
    subtitle: "Secure Digital Authentication for Online Forms",
    description: "Obtain your Digital Signature Certificate with expert guidance for government filings, e-tenders, and secure document signing. Get Class 3 DSC for all statutory compliances and online transactions. ✔Government Approved ✔Secure Authentication ✔Expert Support ✔Quick Processing",
    rating: {
      score: "4.9/5",
      reviews: "(1200+ DSCs Issued)"
    },
    features: [
      "Class 3 DSC Certificates",
      "Government Approved CAs",
      "1-2 Years Validity",
      "USB Token Included",
      "Download Support",
      "Renewal Assistance"
    ],
    pricing: {
      consultation: "₹1,299",
      consultationLabel: "Starting from",
      consultationDescription: "Complete DSC with USB token"
    },
    trustIndicators: [
      {
        title: "100% Secure",
        subtitle: "Government Approved"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Guidance"
      }
    ],
    form: {
      title: "Get Your Digital Signature Certificate",
      subtitle: "Secure Digital Authentication",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "DSC Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select DSC type",
        state: "Choose your state"
      },
      button: "Get My DSC",
      note: "Our experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const dscTypes = [
    "Class 3 - Individual",
    "Class 3 - Organization",
    "Sign Only",
    "Sign & Encrypt",
    "DGFT (Export/Import)",
    "Other"
  ];

  const overviewData = {
    title: "What is a Digital Signature Certificate (DSC)?",
    description: "A Digital Signature Certificate (DSC) is a secure digital key issued by Certifying Authorities (CA) for validating and certifying the identity of the certificate holder. DSCs use public key encryption technology and are essential for signing electronic documents, emails, and online government forms with legal validity."
  };

  const keyAdvantages = [
    {
      icon: Shield,
      title: "Authentication",
      description: "Authenticates personal information when conducting business online"
    },
    {
      icon: Clock,
      title: "Time & Cost Saving",
      description: "Digitally sign PDFs instantly without physical presence"
    },
    {
      icon: Lock,
      title: "Data Integrity",
      description: "Signed documents cannot be altered, ensuring security"
    },
    {
      icon: CheckCircle,
      title: "Document Authenticity",
      description: "Provides confidence about signer's authenticity to receivers"
    }
  ];

  const dscClassifications = [
    {
      type: "Sign",
      description: "For signing documents and forms",
      usage: "GST returns, ITR filing, MCA forms, web-based services",
      features: ["Document integrity validation", "User identity authentication", "Untampered document assurance"]
    },
    {
      type: "Encrypt",
      description: "For encrypting files and confidential data",
      usage: "E-commerce documents, legal documents, e-tender filing",
      features: ["File encryption capability", "Confidential data protection", "Secure document upload"]
    },
    {
      type: "Sign and Encrypt",
      description: "Combined signing and encryption purposes",
      usage: "Government forms, applications, confidential exchanges",
      features: ["Dual functionality", "Government document filing", "Data confidentiality maintenance"]
    }
  ];

  const dscClasses = [
    {
      class: "Class 1",
      target: "Individual/Private Subscribers",
      purpose: "Confirm user's name and email in CA database",
      status: "Basic verification",
      usage: "Personal use, email verification"
    },
    {
      class: "Class 2",
      target: "Authority Signatories",
      purpose: "E-filing forms on government portals",
      status: "Discontinued from 01.01.2021",
      usage: "Replaced by Class 3 certificates"
    },
    {
      class: "Class 3",
      target: "Online Tenders/E-auctions",
      purpose: "High-level authentication for tenders and government forms",
      status: "Currently Active",
      usage: "ROC forms, customs, ITR, GST, patents, trademarks"
    }
  ];

  const statutoryCompliance = [
    {
      authority: "Income Tax Department",
      requirement: "Mandatory for audited entities filing ITR",
      forms: "Income tax returns, audit reports"
    },
    {
      authority: "Ministry of Corporate Affairs",
      requirement: "Mandatory for all company filings",
      forms: "Annual returns, board resolutions, compliance reports"
    },
    {
      authority: "GST Portal",
      requirement: "Required for GST registration and filings",
      forms: "GST applications, returns, amendments"
    },
    {
      authority: "Customs Department",
      requirement: "Required for import/export documentation",
      forms: "Customs declarations, DGFT applications"
    }
  ];

  const certifyingAuthorities = [
    "eMudhra",
    "Capricorn CA",
    "Pantasign",
    "(n)Code Solutions",
    "IDSign",
    "SafeScrypt",
    "NIC Certifying Authority",
    "TCS Certifying Authority"
  ];

  const requiredDocuments = [
    "Aadhaar card (mandatory)",
    "PAN card (mandatory)",
    "Passport-sized photograph",
    "Address proof (Utility bill/Bank statement)",
    "Identity proof (Voter ID/Passport/Driving License)",
    "Form 16 or Salary Certificate (for individuals)",
    "Company incorporation certificate (for organizations)",
    "Authorized signatory list (for companies)",
    "Board resolution (for companies)",
    "Partnership deed (for partnerships)"
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Choose Certifying Authority",
      description: "Select from government-approved CAs and DSC class"
    },
    {
      step: 2,
      title: "Fill Application Form",
      description: "Complete online form with personal and contact details"
    },
    {
      step: 3,
      title: "Document Upload",
      description: "Upload required documents or choose Aadhaar eKYC"
    },
    {
      step: 4,
      title: "Payment & Submission",
      description: "Make payment and submit the DSC application"
    },
    {
      step: 5,
      title: "Verification Process",
      description: "CA verifies application and documents"
    },
    {
      step: 6,
      title: "DSC Issuance",
      description: "Download DSC electronically with USB token"
    }
  ];

  const downloadProcess = [
    {
      ca: "eMudhra",
      steps: [
        "Install ePass2003India setup from USB token",
        "Set up new PIN for USB token security",
        "Use ePass2003 token manager",
        "Visit eMudhra website, enter application number",
        "Enter challenge code and token password",
        "Click 'Agree and Download' to complete"
      ]
    },
    {
      ca: "Capricorn",
      steps: [
        "Visit Capricorn website",
        "Click 'Download DSC' button",
        "Enter Order ID and PIN code",
        "Enter download key from mobile",
        "Select FIPS Token",
        "Click 'Download' to complete"
      ]
    },
    {
      ca: "Pantasign",
      steps: [
        "Download PantaCharge utility",
        "Extract and open PantaCharge.exe",
        "Enter application number and passcode",
        "Login and click 'Download Certificate'",
        "Enter token password",
        "Click 'OK' to download DSC"
      ]
    }
  ];

  const benefits = [
    "Legal validity for digital documents",
    "Mandatory compliance for government filings",
    "Enhanced security with encryption technology",
    "Time and cost savings in document processing",
    "Remote signing capability without physical presence",
    "Tamper-proof document integrity",
    "Instant document authentication",
    "Reduced paperwork and storage requirements",
    "Environmental benefits through digital processes",
    "Global acceptance for digital transactions"
  ];

  const useCases = [
    {
      category: "Government Filings",
      applications: [
        "Income Tax Return filing",
        "GST registration and returns",
        "MCA annual filings",
        "Customs and DGFT applications",
        "Patent and trademark filing"
      ]
    },
    {
      category: "Business Operations",
      applications: [
        "E-tender participation",
        "Online auction bidding",
        "Digital contract signing",
        "Banking and financial transactions",
        "Insurance claim processing"
      ]
    },
    {
      category: "Professional Services",
      applications: [
        "Legal document authentication",
        "CA and auditor certifications",
        "Medical prescription signing",
        "Educational certificate verification",
        "Consultancy report signing"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is a Digital Signature Certificate and why is it needed?",
      answer: "A Digital Signature Certificate (DSC) is a secure digital key that validates the identity of the certificate holder. It's mandatory for filing government forms, income tax returns, GST applications, and participating in e-tenders. DSCs ensure document authenticity and security."
    },
    {
      question: "What are the different classes of DSC available?",
      answer: "There are three classes: Class 1 (basic email verification), Class 2 (discontinued from 2021), and Class 3 (high-level authentication for government forms and e-tenders). Currently, Class 3 is used for all statutory compliances."
    },
    {
      question: "What documents are required for DSC application?",
      answer: "Required documents include Aadhaar card, PAN card, passport-sized photo, address proof, and identity proof. For organizations, additional documents like incorporation certificate, authorized signatory list, and board resolution are needed."
    },
    {
      question: "How long is a DSC valid and can it be renewed?",
      answer: "DSCs are typically valid for 1-2 years from the date of issuance. They can be renewed before the expiry period by applying through the same Certifying Authority with updated documents."
    },
    {
      question: "What is the difference between Sign, Encrypt, and Sign & Encrypt DSC?",
      answer: "Sign DSC is for document signing only, Encrypt DSC is for data encryption only, and Sign & Encrypt DSC provides both functionalities. Most users opt for Sign & Encrypt for comprehensive digital security needs."
    },
    {
      question: "How to download DSC after approval?",
      answer: "Download process varies by CA but generally involves installing token software, visiting CA website, entering application details and challenge codes, setting token password, and downloading the certificate to USB token."
    },
    {
      question: "Which Certifying Authorities are approved for DSC issuance?",
      answer: "Government-approved CAs include eMudhra, Capricorn, Pantasign, (n)Code Solutions, IDSign, SafeScrypt, NIC CA, and TCS CA. All are authorized by Controller of Certifying Authorities (CCA)."
    },
    {
      question: "How does The Expert India help with DSC procurement?",
      answer: "We provide complete assistance including CA selection, application form filling, document preparation, submission support, download guidance, and renewal reminders to ensure seamless DSC procurement and usage."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={dscTypes}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Key className="h-4 w-4 mr-2" />
              DSC Overview
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

      {/* Key Advantages Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Key Advantages
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Benefits of Digital Signature Certificate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the advantages and benefits of using DSC for digital transactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {keyAdvantages.map((advantage, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <advantage.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                  <CardTitle className="text-brand-primary">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DSC Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              DSC Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Digital Signature Certificates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different types of DSCs based on functionality and usage requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {dscClassifications.map((classification, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {classification.type}
                  </CardTitle>
                  <p className="text-gray-600">{classification.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-600">Usage:</span>
                    <p className="text-sm text-gray-800">{classification.usage}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Features:</span>
                    <ul className="mt-2 space-y-1">
                      {classification.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DSC Classes Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-600 hover:bg-green-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              DSC Classes
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Classes of Digital Signature Certificates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different classes of DSCs based on authentication levels and usage
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {dscClasses.map((dscClass, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-brand-primary text-xl">
                      {dscClass.class}
                    </CardTitle>
                    <Badge className={dscClass.status === "Currently Active" ? "bg-green-100 text-green-800" : dscClass.status === "Discontinued from 01.01.2021" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}>
                      {dscClass.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="font-medium text-gray-600">Target:</span>
                    <p className="text-gray-800">{dscClass.target}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Purpose:</span>
                    <p className="text-gray-800">{dscClass.purpose}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Usage:</span>
                    <p className="text-gray-800">{dscClass.usage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Compliance Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Statutory Compliance
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              DSC for Government Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mandatory DSC requirements for various government departments and filings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {statutoryCompliance.map((compliance, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {compliance.authority}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{compliance.requirement}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <span className="font-medium text-gray-600">Forms:</span>
                    <p className="text-gray-800">{compliance.forms}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Application Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Apply for DSC
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process to obtain your Digital Signature Certificate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {applicationProcess.map((step, index) => (
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

      {/* Documents & CAs Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
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
                Approved Certifying Authorities
              </h2>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">
                    Government Approved CAs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {certifyingAuthorities.map((ca, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 justify-center">
                        {ca}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 mb-4">
              <Download className="h-4 w-4 mr-2" />
              Download Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Download DSC
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download process for popular Certifying Authorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {downloadProcess.map((process, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-xl">
                    {process.ca}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm">
                        <span className="bg-brand-primary/10 text-brand-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Use Cases
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              DSC Applications & Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Various applications and use cases for Digital Signature Certificates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {useCase.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{application}</span>
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
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary text-center justify-center">
                  <Award className="h-5 w-5 mr-3 flex-shrink-0" />
                  Key Benefits of DSC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Digital Signature Certificate procurement and usage"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Your Digital Signature Certificate Today"
        ctaDescription="Secure your digital transactions and ensure compliance with government regulations. Our experts provide complete assistance with DSC procurement, download support, and renewal guidance."
      />
    </div>
  );
};
