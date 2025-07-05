"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Building2, CheckCircle, Shield, Clock, Award, HandHeart } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const PartnershipFirmPage = () => {
  const heroData = {
    badge: "Partnership Firm Registration",
    title: "Register Your Partnership Firm",
    subtitle: "Professional Partnership Business Formation",
    description: "Start your partnership business with complete legal compliance. Get expert assistance for partnership deed drafting, registration, and all required licenses. ✔Partnership Deed Drafting ✔Complete Registration ✔Expert Legal Guidance ✔Tax Registration Support",
    rating: {
      score: "4.9/5",
      reviews: "(800+ Partnerships Registered)"
    },
    features: [
      "Partnership Deed Drafting",
      "Complete Registration Process",
      "Expert Legal Guidance",
      "Tax Registration Support",
      "Compliance Management",
      "Business License Assistance"
    ],
    pricing: {
      consultation: "₹1,999",
      consultationLabel: "Starting from",
      consultationDescription: "Complete partnership firm setup"
    },
    trustIndicators: [
      {
        title: "100% Legal",
        subtitle: "Compliant Partnership Setup"
      },
      {
        title: "Expert Support",
        subtitle: "Professional Legal Guidance"
      }
    ],
    form: {
      title: "Start Your Partnership Firm",
      subtitle: "Get Expert Legal Assistance",
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
      button: "Start Partnership Registration",
      note: "Our legal experts will contact you within 1 hour",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business consultation"
      }
    }
  };

  const businessTypes = [
    "Trading Partnership",
    "Service Partnership",
    "Manufacturing Partnership",
    "Professional Services",
    "Consultancy Partnership",
    "Other Business"
  ];

  const overviewData = {
    title: "What is Partnership Firm?",
    description: "A partnership firm is a business structure where two or more individuals come together to carry on a business with shared profits and losses. It's governed by the Partnership Act of 1932 and offers flexibility in management while allowing partners to combine their skills, resources, and expertise for business success."
  };

  const keyFeatures = [
    {
      icon: Users,
      title: "Shared Ownership",
      description: "Multiple partners share ownership, responsibilities, and profits"
    },
    {
      icon: HandHeart,
      title: "Shared Capital",
      description: "Partners contribute capital and share financial burden"
    },
    {
      icon: FileText,
      title: "Partnership Deed",
      description: "Legal document defining terms and conditions of partnership"
    },
    {
      icon: Clock,
      title: "Quick Formation",
      description: "Faster setup process compared to company registration"
    }
  ];

  const advantages = [
    "Easy formation and dissolution",
    "Shared financial burden and resources",
    "Combined skills and expertise",
    "Flexible management structure",
    "Better decision-making with multiple perspectives",
    "Increased credibility compared to sole proprietorship",
    "Tax benefits and profit sharing",
    "Lower compliance requirements than companies"
  ];

  const disadvantages = [
    "Unlimited liability of partners",
    "Potential for conflicts between partners",
    "Limited life of the firm",
    "Difficulty in raising capital",
    "Shared profits reduce individual earnings",
    "Joint and several liability for debts",
    "Lack of separate legal entity",
    "Challenges in transferring ownership"
  ];

  const partnershipTypes = [
    {
      type: "General Partnership",
      description: "All partners have equal rights and unlimited liability",
      suitableFor: "Traditional businesses with equal participation",
      liability: "Unlimited"
    },
    {
      type: "Limited Partnership",
      description: "Combination of general and limited partners",
      suitableFor: "Investment-based businesses",
      liability: "Mixed (General: Unlimited, Limited: Limited)"
    },
    {
      type: "Partnership at Will",
      description: "No fixed term, can be dissolved by any partner",
      suitableFor: "Flexible business arrangements",
      liability: "Unlimited"
    },
    {
      type: "Particular Partnership",
      description: "Formed for specific business or venture",
      suitableFor: "Project-based businesses",
      liability: "Unlimited"
    }
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Partner Selection",
      description: "Choose partners and define roles, responsibilities, and profit sharing"
    },
    {
      step: 2,
      title: "Partnership Deed Drafting",
      description: "Prepare comprehensive partnership deed with all terms and conditions"
    },
    {
      step: 3,
      title: "Document Collection",
      description: "Gather required documents from all partners"
    },
    {
      step: 4,
      title: "Firm Registration",
      description: "Register the partnership firm with concerned authorities"
    },
    {
      step: 5,
      title: "Tax Registrations",
      description: "Obtain PAN, GST, and other required tax registrations"
    },
    {
      step: 6,
      title: "Bank Account Opening",
      description: "Open partnership firm bank account and start operations"
    }
  ];

  const requiredDocuments = [
    "Partnership deed (stamp paper)",
    "PAN cards of all partners",
    "Aadhaar cards of all partners",
    "Address proof of all partners",
    "Address proof of business premises",
    "Passport size photographs of partners",
    "Bank account statements",
    "Educational certificates (if required)",
    "Experience certificates (if applicable)",
    "Property documents (if premises owned)"
  ];

  const partnershipDeedContents = [
    "Name and address of the firm",
    "Names and addresses of all partners",
    "Nature of business to be carried",
    "Capital contribution by each partner",
    "Profit and loss sharing ratio",
    "Duties and rights of partners",
    "Salary/commission to partners",
    "Interest on capital and drawings",
    "Admission and retirement of partners",
    "Dissolution terms and conditions"
  ];

  const registrationRequirements = [
    {
      title: "Minimum Partners",
      requirement: "Minimum 2 partners required",
      details: "No maximum limit under Partnership Act"
    },
    {
      title: "Partnership Deed",
      requirement: "Written partnership deed on stamp paper",
      details: "Stamp duty varies by state (₹100-₹1000)"
    },
    {
      title: "Business Name",
      requirement: "Unique firm name",
      details: "Should not be similar to existing firms"
    },
    {
      title: "Registration Fee",
      requirement: "Nominal registration fee",
      details: "Varies by state and capital amount"
    }
  ];

  const faqs = [
    {
      question: "What is a partnership firm and how is it different from a company?",
      answer: "A partnership firm is a business structure where 2 or more individuals jointly operate a business. Unlike companies, partnerships don't have separate legal entity status, have unlimited liability, and are governed by the Partnership Act 1932 rather than Companies Act."
    },
    {
      question: "Is partnership firm registration mandatory?",
      answer: "Registration of partnership firm is optional under the Partnership Act 1932. However, unregistered firms cannot file suits against third parties and face certain legal limitations. Registration provides legal recognition and protection."
    },
    {
      question: "What should be included in a partnership deed?",
      answer: "Partnership deed should include firm name, partner details, business nature, capital contribution, profit sharing ratio, partner duties and rights, salary/commission terms, interest on capital, admission/retirement procedures, and dissolution terms."
    },
    {
      question: "What are the liability implications for partners?",
      answer: "Partners in a general partnership have unlimited liability, meaning their personal assets can be used to settle business debts. Each partner is jointly and severally liable for the firm's obligations and actions of other partners."
    },
    {
      question: "Can a partnership firm be converted to a company?",
      answer: "Yes, a partnership firm can be converted to a Private Limited Company or LLP. The conversion process involves dissolving the partnership and incorporating a new entity, transferring assets, and obtaining necessary approvals."
    },
    {
      question: "What taxes are applicable to partnership firms?",
      answer: "Partnership firms are taxed at 30% on income above ₹3 lakhs. Partners are also taxed on their share of profits. GST registration is required if turnover exceeds ₹40 lakhs. Professional tax and other local taxes may also apply."
    },
    {
      question: "How can new partners be added to an existing firm?",
      answer: "New partners can be admitted with consent of all existing partners. The partnership deed should be amended to include the new partner's details, capital contribution, profit sharing ratio, and other terms. Proper documentation and registration updates are required."
    },
    {
      question: `How does ${SITE_FULL_NAME} assist with partnership firm registration?`,
      answer: "We provide complete partnership firm setup services including partnership deed drafting, registration assistance, tax registrations, bank account opening guidance, and ongoing compliance support to ensure your partnership operates smoothly and legally."
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
              Partnership Overview
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
              Partnership Firm Characteristics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the fundamental features of partnership business structure
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

      {/* Partnership Types Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Partnership Types
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Types of Partnership Firms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right partnership structure for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-primary">
                    {type.type}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Suitable for:</span>
                      <span className="text-gray-600">{type.suitableFor}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Liability:</span>
                      <Badge className="bg-blue-100 text-blue-800">{type.liability}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages vs Disadvantages Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Pros & Cons
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Advantages vs Disadvantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare the benefits and limitations of partnership firm structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Shield className="h-5 w-5 mr-3 flex-shrink-0" />
                  Disadvantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Shield className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{disadvantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
              Partnership Firm Registration Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete guide to register your partnership firm legally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {registrationSteps.map((step, index) => (
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

      {/* Documentation Section */}
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

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-primary">
                  <HandHeart className="h-5 w-5 mr-3 flex-shrink-0" />
                  Partnership Deed Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {partnershipDeedContents.map((content, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{content}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Requirements Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Registration Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {registrationRequirements.map((req, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <CardTitle className="text-brand-primary text-lg">
                    {req.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-medium text-gray-900">{req.requirement}</p>
                    <p className="text-sm text-gray-600">{req.details}</p>
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
        subtitle="Get answers to common questions about partnership firm registration and operations"
        faqs={faqs}
        columns={2}
        ctaTitle="Start Your Partnership Firm"
        ctaDescription="Ready to register your partnership firm? Our legal experts provide complete assistance with partnership deed drafting, registration, and compliance requirements."
      />
    </div>
  );
};

export default PartnershipFirmPage;
