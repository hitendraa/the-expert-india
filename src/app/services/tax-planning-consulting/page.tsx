"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Shield, Bell, FileText, Users, CheckCircle, X } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

const TaxPlanningConsultingPage = () => {
  const heroData = {
    badge: "Tax Consultancy & Advisory Services",
    title: "Get a Personal eCA",
    subtitle: "Tax Consultancy & Advisory Services",
    description: "From early income tax planning and filing to notice management and optimizing tax strategies, we guide you every step of the way with expert support.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by clients"
    },
    features: [
      "Advance Tax Calculation",
      "Tax Saving Strategies",
      "Notice Management",
      "Compliance Support",
      "Year-round Advisory",
      "Expert CA Consultation"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Starting Price",
      consultationDescription: "Expert tax consultation included"
    },
    trustIndicators: [
      {
        title: "Expert CAs",
        subtitle: "Trusted Service"
      },
      {
        title: "Tax Savings",
        subtitle: "Legal Methods"
      }
    ],
    form: {
      title: "Enter your details to help us connect with you",
      subtitle: "Get personalized tax consultation from expert CAs",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Expected Date and Time"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select preferred time",
        state: "Choose your state"
      },
      button: "Get Tax Consultation",
      note: "Our tax experts will call you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for consultation updates"
      }
    }
  };

  const consultationTimes = [
    "Morning (9 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 8 PM)",
    "Flexible Timing"
  ];

  const pricingPlans = [
    {
      id: "basic",
      title: "Basic Tax Consultation",
      price: "₹999",
      recommended: false,
      features: [
        "30-minute CA consultation",
        "Basic tax planning advice",
        "Tax regime selection guidance",
        "Email support",
        "Tax saving tips",
        "Single query resolution"
      ],
      excludes: []
    },
    {
      id: "premium",
      title: "Comprehensive Tax Advisory",
      price: "₹2,999",
      recommended: true,
      features: [
        "60-minute detailed consultation",
        "Advance tax calculation",
        "Investment tax planning",
        "Capital gains optimization",
        "Notice response support",
        "Priority phone support",
        "Follow-up consultation"
      ],
      excludes: []
    },
    {
      id: "yearly",
      title: "Year-round Tax Support",
      price: "₹9,999",
      recommended: false,
      features: [
        "Unlimited consultations",
        "Dedicated CA assignment",
        "Monthly tax reviews",
        "ITR filing included",
        "Notice management",
        "Tax law updates",
        "Priority support",
        "Business tax planning"
      ],
      excludes: []
    }
  ];

  const services = [
    {
      title: "Advance Tax Calculation",
      description: "Get ahead of your taxes with our precise calculations",
      icon: Calculator
    },
    {
      title: "Tax Saving on Salary Income",
      description: "Maximize your savings on your salary",
      icon: TrendingUp
    },
    {
      title: "Tax Saving on Capital Gains",
      description: "Optimize tax on your investment gains",
      icon: TrendingUp
    },
    {
      title: "Responding to Income Tax Notices",
      description: "Expert help when you need it most",
      icon: Shield
    },
    {
      title: "Pre-book ITR Filing for FY 2024-25",
      description: "Secure early filing slots for peace of mind",
      icon: FileText
    },
    {
      title: "Tailored Tax Regime Selection",
      description: "Choose the best tax regime for you",
      icon: Users
    },
    {
      title: "Timely Tax Filing Reminders",
      description: "Stay on top of your deadlines",
      icon: Bell
    },
    {
      title: "Stay Updated with Tax Laws",
      description: "Always be in the know",
      icon: FileText
    }
  ];

  const processSteps = [
    { step: "Book a Call with expert", description: "Schedule your consultation" },
    { step: "Explain Your Query", description: "Share your tax concerns" },
    { step: "Understand Pricing", description: "Know the consultation fees" },
    { step: "Pay the Fees", description: "Complete the payment" },
    { step: "Get personalized Consultation", description: "Receive expert advice" }
  ];

  const whyChooseUs = {
    sayNo: [
      "Tax Blunders",
      "Stress",
      "Confusion",
      "Running around CA offices",
      "Notices from Income Tax Department",
      "Spending hours figuring out taxes",
      "Penalties and legal complications",
      "Errors"
    ],
    sayYes: [
      "Personalized Experience",
      "Utilize benefits of Tax Expertise",
      "End-to-end Solutions",
      "10+ years of Industry Experience",
      "Saving taxes legally",
      "Compliance",
      "Peace of mind"
    ]
  };

  const faqs = [
    {
      question: "Why is it Important to Plan Taxes?",
      answer: "Tax planning involves using legal methods to minimize tax liability and maximize tax savings. Tax planning can help individuals and businesses save money, increase cash flow, and meet financial goals. Therefore, it is important to plan your taxes effectively."
    },
    {
      question: `How does ${SITE_FULL_NAME} assist in responding to income tax notices?`,
      answer: "Our team of experienced CAs provides expert guidance and support to help you respond to income tax notices promptly and accurately, ensuring compliance and peace of mind."
    },
    {
      question: "Why should I pre-book ITR filing for FY 2024-25?",
      answer: "Pre-booking your ITR filing ensures that you secure an early slot, avoiding last-minute rush and potential delays. It also allows us to provide personalized attention to your tax filing needs."
    },
    {
      question: "What should I do if I have questions about my tax planning?",
      answer: "You can reach out to our dedicated team of CAs anytime for personalized assistance and answers to your tax planning questions."
    },
    {
      question: "Is there a cost for these post-filing services?",
      answer: "Our post-filing services come with various pricing plans to suit your needs. Contact us for detailed information on the costs and benefits of each plan."
    },
    {
      question: `How to hire tax expert for year-round support at ${SITE_FULL_NAME}?`,
      answer: "Step 1: Book a Call With Our Expert, Step 2: Explain your Query, Step 3: Provide Necessary Documents, Step 4: Pay the Fees, Step 5: Get Personalized Consultation. After analyzing your tax situation, our tax consultants will provide you with the best tax solution."
    },
    {
      question: "What is the role of a tax advisory consultant?",
      answer: "A tax advisor helps minimize tax liability, capitalize on deductions, and manage your tax situation. Their responsibilities include tax planning, compliance and filing, tax advisory, representation with tax authorities, and keeping clients updated with latest tax laws and regulations."
    },
    {
      question: "What is the difference between tax advisory and consulting?",
      answer: "Tax advisory focuses on providing guidance and education on tax laws and compliance to help clients understand their obligations. Tax consulting offers broader scope, analyzing overall financial situation and recommending strategies including tax planning, business structuring, and financial optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={consultationTimes}
        selectFieldType="hearAbout"
      />

      {/* Trust Indicators */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Your Go-to Tax Consultants!
            </h2>
            <p className="text-lg text-gray-600">Excellence. Expertise. Experience.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              Tax Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Services Can You Get?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <service.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-sm font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">{service.description}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to get Tax Consultancy Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.step}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us!!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  Say &apos;NO&apos; to
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {whyChooseUs.sayNo.map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Say &apos;YES&apos; to
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {whyChooseUs.sayYes.map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="Tax Consultation & Advisory Plans"
        subtitle="Choose the right plan for your tax planning needs"
        plans={pricingPlans}
        note="All plans include expert CA consultation and personalized tax advice."
      />

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about tax planning and consultation"
        faqs={faqs}
        columns={2}
        ctaTitle="Get Tax Advice!"
        ctaDescription="Plan your taxes today with our expert tax consultants. Maximize savings and ensure compliance with personalized guidance."
      />
    </div>
  );
};

export default TaxPlanningConsultingPage;
