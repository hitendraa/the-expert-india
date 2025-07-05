"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, CheckCircle, Gift, Users, Building, TrendingUp, Clock } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const EightyG12ARegistrationPage = () => {
  const heroData = {
    badge: "80G & 12A Registration",
    title: "80G & 12A Registration Services",
    subtitle: "Tax Exemption for NGOs & Charitable Organizations",
    description: "Get tax exemption certificates for your NGO under Section 12A and 80G of the Income Tax Act. Enable your organization to receive tax-exempt income and provide donors with tax deduction benefits.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by NGOs"
    },
    features: [
      "Section 12A Registration",
      "Section 80G Registration",
      "Tax Exemption Benefits",
      "Donor Tax Deductions",
      "Government Grants Eligibility",
      "FCRA Registration Benefits"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized pricing for your NGO"
    },
    trustIndicators: [
      {
        title: "Expert Consultants",
        subtitle: "NGO Registration Specialists"
      },
      {
        title: "Fast Processing",
        subtitle: "Quick Approvals"
      }
    ],
    form: {
      title: "Get 80G & 12A Registration Quote",
      subtitle: "Connect with our experts for NGO tax exemption registration services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Organization Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select organization type",
        state: "Choose your state"
      },
      button: "Get Registration Quote",
      note: "Our NGO experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for registration consultation"
      }
    }
  };

  const organizationTypes = [
    "Charitable Trust",
    "Religious Trust",
    "Society",
    "Section 8 Company",
    "NGO",
    "Other"
  ];

  const registrationOverview = {
    title: "80G & 12A Registration Overview",
    description: "India's NGOs are registered for a range of social, humanitarian, and developmental objectives. One of the main benefits of registering an NGO in 2025 is getting tax exemptions, especially through two major certifications—12A and 80G under the Income Tax Act. These certifications not only lower the tax liability of the company but also motivate contributors by providing tax deductions.",
    importance: "Whether you are starting a nonprofit, donating to one, or actively running one, you have to know how 12A and 80G registrations operate and why they are absolutely vital for financial stability and credibility."
  };

  const registration12A = {
    title: "12A Registration",
    description: "12A registration is an exemption taken by most trusts at one time, including incorporation after the exemption from income tax inclusion. Section 8 Companies, trusts and NGOs that have 12A registration enjoy an exemption from paying income tax on the surplus income of the Trust or NGO.",
    details: "12A is exempt from paying income tax based on registration, trusts, NGOs, and other Section 8 companies. NGOs are organizations for charitable and non-profit activities. However, they have income, and if not registered under Section 12A of the Income Tax Act, they will have to pay tax at the usual rates."
  };

  const benefits12A = [
    {
      title: "Income Tax Exemption",
      description: "Income will be exempted from taxation",
      icon: Shield
    },
    {
      title: "Government Grants Eligibility",
      description: "Organisation becomes eligible to receive government, abroad and various private sector grants",
      icon: Gift
    },
    {
      title: "FCRA Registration Benefits",
      description: "Benefits of FCRA Registration become available",
      icon: Building
    },
    {
      title: "80G Registration Eligibility",
      description: "Organizations registered under 12A are also eligible for availing of benefits under section 80G",
      icon: CheckCircle
    }
  ];

  const registration80G = {
    title: "80G Registration",
    description: "80G Registration under Section 80G of the Income Tax Act provides benefits to the donor of an NGO. The donor gets financial benefits in the taxable amount of their income. The Income Tax Department issued the 80G certificate to a non-governmental organization (NGO), a charitable trust, or a section 8 company.",
    benefit: "The donor receives a tax rebate of 50% on donating to such an organization, as they become eligible to withdraw such amount from their total gross income."
  };

  const benefits80G = [
    {
      title: "Donor Tax Deduction",
      description: "A donor can avail deduction from their taxable income",
      icon: TrendingUp
    },
    {
      title: "Attracts Donors",
      description: "Attracts the donor to donate due to tax benefits",
      icon: Users
    },
    {
      title: "Foreign Contributions",
      description: "Getting an 80G Registration also facilitates seeking foreign contributions",
      icon: Building
    },
    {
      title: "Government Funding",
      description: "Only an NGO with 12A and 80G registration is eligible for government funding",
      icon: Gift
    },
    {
      title: "Enhanced Credibility",
      description: "80G registration gives your NGO a promising prospect, enhancing its goodwill and confidence",
      icon: Shield
    }
  ];

  const eligibility12A = [
    "Charitable Trusts",
    "Religious Trusts",
    "Societies",
    "Section 8 Companies",
    "Not applicable to Private or Family Trust"
  ];

  const eligibility80G = [
    "Donations made to charities are prescribed under category 80G",
    "The NGO shall be duly registered under the Act",
    "Prior requirement is obtaining registration under Section 12A"
  ];

  const documents12A = [
    "Documental confirmation of the creation of the Trust or NGO (Trust Deed of a Trust; Registration Certificate and MOA of a society)",
    "Section 8 companies require certificate of incorporation and copies of the MoA and AoA",
    "Form 10A",
    "Three-year bank account statement of the Trust",
    "PAN of the organization"
  ];

  const documents80G = [
    "MoA and Registration certificate (Section 8 companies and Societies) / Trust Deed (Trust)",
    "No objection certificate from the owner of the property where registered office is situated",
    "Form 10G",
    "Copy of the PAN of the NGO",
    "Copy of Utility Bills (electricity bills, water bills or House Tax Receipt)",
    "List of the donors, along with their addresses and PAN",
    "Income tax returns and book of accounts for the past three years",
    "List of welfare activities and progress report for the last 3 years",
    "Detailed list of Board of Trustees and original RC, MoA, or Trust Deed"
  ];

  const registrationProcess = [
    {
      step: "1",
      title: "12A Registration Application",
      description: "Submit Form 10A to Income Tax Commissioner",
      icon: FileText,
      details: [
        "One-time registration process",
        "NGO must be registered under Income Tax first",
        "Application in Form 10A to Income Tax Commissioner",
        "Include all required documents and trustee details"
      ]
    },
    {
      step: "2",
      title: "80G Registration Application",
      description: "Apply for 80G certificate after 12A approval",
      icon: Gift,
      details: [
        "Prior requirement: 12A registration",
        "Apply to Commissioner of Income Tax (Exemption)",
        "Submit Form 10G with required documents",
        "On-premise inspection by Income Tax department"
      ]
    },
    {
      step: "3",
      title: "Verification & Inspection",
      description: "Income Tax officials verify documents and premises",
      icon: Shield,
      details: [
        "Document verification process",
        "On-site inspection of NGO office",
        "Additional documents may be requested",
        "Satisfactory verification required for approval"
      ]
    },
    {
      step: "4",
      title: "Certificate Issuance",
      description: "Receive 12A and 80G certificates",
      icon: CheckCircle,
      details: [
        "Written order by Commissioner",
        "Certificate issued upon satisfaction",
        "Process takes 3-4 months typically",
        "Registration valid for specified period"
      ]
    }
  ];

  const ngoRegistrationTypes = [
    {
      title: "Trust Act",
      description: "Register under Trust Act with minimum 2 trustees",
      requirements: [
        "Minimum 2 trustees required",
        "Trust deed document needed",
        "Apply to charity commissioner or registrar's office",
        "Various state Trust Acts available"
      ]
    },
    {
      title: "Society Act",
      description: "Register as society with minimum 7 members",
      requirements: [
        "Minimum 7 members required",
        "Memorandum of Association needed",
        "Rules & Regulations document essential",
        "State-specific Society Acts apply"
      ]
    },
    {
      title: "Section 8 Company Act",
      description: "Register under Companies Act with minimum 3 members",
      requirements: [
        "Minimum 3 members required",
        "MOA & AOA documents needed",
        "No stamp paper required",
        "Regulation documents essential"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I register for a 12A certificate?",
      answer: "To obtain registration under Section 12A, an application in Form 10A for registration of a charitable or religious trust or institution can be made. The application shall be addressed to the Commissioner of Income Tax with necessary documents and should be made in online mode."
    },
    {
      question: "How can I get registration under 80G?",
      answer: "Process includes submitting Registration Certificate, MOA/Trust Deed, NOC from property owner, PAN copy, utility bills, donor list, income tax returns, welfare activities proof, and trustee details to the Income Tax Commissioner."
    },
    {
      question: "What are 12A and 80G registration?",
      answer: "Both apply to NGOs and charitable organizations. 80G Registration provides benefits to donors of an NGO, while Section 12A Registration helps an NGO get income exempted from Tax."
    },
    {
      question: "Who can apply for an 80G certificate?",
      answer: "A non-profit organization or NGO, charitable trust, or Section 8 Company can apply for 80G registration after obtaining certification under section 12A."
    },
    {
      question: "Is NGO Darpan ID mandatory for 12A registration?",
      answer: "NGO Darpan registration is mandatory if you want to raise funding from Government departments. It's optional for initial FCRA Registration but required for government funding."
    },
    {
      question: "What does the section 80G Certificate exactly mean?",
      answer: "The Section 80G Certificate is issued by the Income Tax Department to NGO, Section 8 Company, or Trust, enabling donors to claim tax deductions on their donations."
    },
    {
      question: "How long does the registration process take?",
      answer: "The registration procedure may take 3 to 4 months from application submission to certificate issuance, depending on document verification and inspection completion."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with 80G & 12A registration?`,
      answer: "We provide end-to-end assistance with document preparation, application filing, liaison with Income Tax department, and ensure compliance with all regulatory requirements for successful registration."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={organizationTypes}
        selectFieldType="hearAbout"
      />

      {/* Registration Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Registration Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {registrationOverview.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {registrationOverview.description}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {registrationOverview.importance}
            </p>
          </div>
        </div>
      </section>

      {/* 12A Registration Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              12A Registration
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {registration12A.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {registration12A.description}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {registration12A.details}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {benefits12A.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <benefit.icon className="h-5 w-5 mr-3 flex-shrink-0" />
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

      {/* 80G Registration Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Gift className="h-4 w-4 mr-2" />
              80G Registration
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {registration80G.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {registration80G.description}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {registration80G.benefit}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits80G.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <benefit.icon className="h-5 w-5 mr-3 flex-shrink-0" />
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

      {/* Eligibility Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700">
                  12A Registration Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {eligibility12A.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  80G Registration Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {eligibility80G.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Required Documents
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Documents Required
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700">
                  12A Registration Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {documents12A.map((doc, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  80G Registration Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {documents80G.map((doc, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Registration Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step Registration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive process for obtaining both 12A and 80G registration certificates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {registrationProcess.map((process, index) => (
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

      {/* NGO Registration Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              NGO Registration Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Register an NGO?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The registration process of an NGO in India can be done in three ways under different Acts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ngoRegistrationTypes.map((type, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-700">
                    {type.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
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
        subtitle="Get answers to common questions about 80G & 12A registration"
        faqs={faqs}
        columns={2}
        ctaTitle="Get 80G & 12A Registration Quote"
        ctaDescription="Get tax exemption certificates for your NGO and enable donors to claim tax deductions. Connect with our experts for comprehensive registration services and government compliance."
      />
    </div>
  );
};

export default EightyG12ARegistrationPage;
