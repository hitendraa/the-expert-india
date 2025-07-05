"use client";

import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, FileText, TrendingUp, Users, Clock } from "lucide-react";

const ITRFilingPage = () => {
  const heroData = {
    badge: "Income Tax Return Filing",
    title: "Make Your ITR Filing Quick and Easy",
    subtitle: "Professional ITR Filing Services",
    description: "Enjoy our comprehensive solution for income tax efiling. Save money and time with an accurate and efficient filing process.",
    rating: {
      score: "4.9/5",
      reviews: "50,000+ successful filings"
    },
    features: [
      "Pre-fill Data from IT Department",
      "Auto-read Data from Form-16",
      "Maximize Tax Savings",
      "Expert Assistance",
      "Data Security and Privacy",
      "Comprehensive Reporting"
    ],
    pricing: {
      consultation: "₹499",
      consultationLabel: "Starting Price",
      consultationDescription: "Professional ITR filing included"
    },
    trustIndicators: [
      {
        title: "Fast Filing",
        subtitle: "Quick Processing"
      },
      {
        title: "100% Secure",
        subtitle: "Data Protection"
      }
    ],
    form: {
      title: "Get Expert ITR Filing",
      subtitle: "File your income tax return with professional guidance",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Annual Income Range"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "+91 XXXXX XXXXX",
        email: "your@email.com",
        hearAbout: "Select income range",
        state: "Choose your state"
      },
      button: "Get ITR Filing Support",
      note: "Our tax experts will call you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for ITR filing updates"
      }
    }
  };

  const incomeRanges = [
    "Up to ₹5 Lakhs",
    "₹5 - ₹10 Lakhs",
    "₹10 - ₹25 Lakhs",
    "₹25 - ₹50 Lakhs",
    "Above ₹50 Lakhs"
  ];

  const pricingPlans = [
    {
      id: "basic",
      title: "Basic ITR Filing",
      price: "₹499",
      recommended: false,
      features: [
        "ITR-1 (Sahaj) filing",
        "Salary income up to ₹50 lakhs",
        "House property income",
        "Basic tax computation",
        "Form 16 integration",
        "Expert review",
        "E-filing support"
      ],
      excludes: []
    },
    {
      id: "standard",
      title: "Standard ITR Filing",
      price: "₹999",
      recommended: true,
      features: [
        "ITR-2 filing",
        "Multiple income sources",
        "Capital gains computation",
        "Tax optimization advice",
        "Advance tax calculation",
        "Expert consultation",
        "Priority support",
        "Refund tracking"
      ],
      excludes: []
    },
    {
      id: "premium",
      title: "Premium ITR Filing",
      price: "₹1,999",
      recommended: false,
      features: [
        "ITR-3 filing",
        "Business income",
        "Professional income",
        "Complex tax scenarios",
        "Tax planning consultation",
        "Audit support",
        "Dedicated expert",
        "Year-round support"
      ],
      excludes: []
    }
  ];

  const faqs = [
    {
      question: "What is ITR filing?",
      answer: "E-filing of income tax returns refers to the process of filing ITR (Income Tax Return) online. In other words, it is the process of submitting your tax returns electronically."
    },
    {
      question: "What are the documents required to file ITR?",
      answer: "Following documents are required: Form 16, Aadhar and PAN Card, Salary Slips, Bank interest certificates, TDS certificate issued by banks and others, Annual Information Statement, Proofs of tax-saving investment, Capital gains statement, Details of foreign assets and investments, Form 26AS."
    },
    {
      question: "What are the benefits of filing an ITR?",
      answer: "Benefits include: Easy loan approval, Income and Address Proof, Quick Visa Processing, Speedy income tax refund, Acts as proof of income and address, Losses can be Carried Forward, For buying term insurance, Avoid penalty on non-filing of income tax returns."
    },
    {
      question: "Which income tax return should I select for e-filing?",
      answer: "There are 7 ITR forms in India: ITR 1 (Sahaj) for residents with income up to Rs 50 lakh from salary, ITR 2 for individuals with income above Rs 50 lakh, ITR 3 for business/profession income, ITR 4 (Sugam) for presumptive business income, ITR 5 for entities like LLPs, ITR 6 for companies, ITR 7 for trusts and political parties."
    },
    {
      question: "Can I File my ITR Myself?",
      answer: "Yes, taxpayers can file their ITR themselves either through the income tax department's website or through professional platforms. Our AI-integrated DIY ITR filing software automatically extracts details, selects appropriate ITR form, computes tax liability, and files your ITR."
    },
    {
      question: "What if I missed filing my ITR?",
      answer: "If you missed the income tax filing due date, you can still file a belated return with penalty. The last date to file a belated return is 31 December of the relevant assessment year."
    },
    {
      question: "What is the late fee for ITR Filing?",
      answer: "Section 234F mandates penalties for late filing. The penalty can be up to Rs. 5000 for income above Rs. 5 lakhs and Rs. 1000 for income below Rs. 5 lakhs. No penalty if income is below the basic exemption limit."
    },
    {
      question: "Can I file a revised return after 31st July?",
      answer: "Yes, if you discover an error in your filed ITR, you can correct it by filing a revised return. The last date to revise your return is 31 December of the relevant assessment year."
    },
    {
      question: "Is it compulsory to do the e-filing of ITR?",
      answer: "Yes, e-filing of ITR is mandatory if the gross total income exceeds the basic exemption limit. Under the new tax regime, individuals under 60 years need to file if income exceeds Rs. 4 lakhs (post budget 2025)."
    },
    {
      question: "Can I do ITR filing without Form 16?",
      answer: "Yes, you can file your ITR without Form 16. TDS details can be found using Form 26AS, and income details can be found using AIS/TIS. Alternatively, you can ask your employer to issue Form-16."
    },
    {
      question: "What is the basic exemption limit for filing an ITR?",
      answer: "Under the new tax regime (FY 2025-26), income up to Rs. 4 lakhs is tax-free. Under the old regime, it's Rs. 2.5 lakhs for individuals under 60 years. For salaried individuals opting for new regime, income up to Rs. 12.75 lakhs will be tax-free with increased Section 87A rebate."
    },
    {
      question: "What is the last date to e-verify income tax return?",
      answer: "The time limit for e-verification of ITR is 30 days from the date of filing the return of income. However, where the return is filed on or before 31.07.2022, the earlier time limit of 120 days will continue to apply."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={incomeRanges}
        selectFieldType="hearAbout"
      />

      {/* Deadline and Penalties Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Important Deadlines
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Deadline and Penalties
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The time limit to file an updated return u/s 139 (8A) is extended to 4 years from 2 years starting April 2025 
              (as announced in budget 2025-26) from the end of the relevant assessment year but with additional penalties.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold">
                  Additional Tax Penalties for Late Filing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">ITR-U filed within</th>
                        <th className="text-left p-3 font-semibold">Additional Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">12 months from the end of the relevant AY</td>
                        <td className="p-3">25% of additional tax (tax + interest)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">24 months from the end of the relevant AY</td>
                        <td className="p-3">50% of additional tax (tax + interest)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">36 months from the end of the relevant AY</td>
                        <td className="p-3">60% of additional tax (tax + interest)</td>
                      </tr>
                      <tr>
                        <td className="p-3">48 months from the end of the relevant AY</td>
                        <td className="p-3">70% of additional tax (tax + interest)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revised Return Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Revised Return
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Made a Mistake in Your Filed ITR? File a Revised Return
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Eligibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Anyone who has filed an original or belated income tax return under Section 139(1) and 139(4) respectively can file a revised return.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Filing Process</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Select &apos;Revised return&apos; and enter correct information. Our experts are available to help you with the process.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Reasons</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Correction of errors, Missed Tax Deductions, Missed Income Declaration, Personal information modifications, etc.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Deadline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  File your revised return by December 31 of the relevant assessment year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Belated Return Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Belated Return
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Missed the Income Tax Return Filing Deadline? Here&apos;s How to File a Belated Return
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Eligibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Taxpayers who miss the deadline for filing a return by 31st July can opt to file a belated return by December 31.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Deadline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You can file a belated return on or before 31st December of the relevant assessment year.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Impact on Refunds</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You can still claim a refund when filing a belated return under Section 139(4). Ensure bank account pre-validation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-brand-primary" />
                  <CardTitle className="text-lg">Penalties & Interest</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Late fee: ₹5,000 for income above ₹5 lakhs, ₹1,000 below ₹5 lakhs. Plus 1% monthly interest on unpaid tax.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Slabs Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Tax Slabs
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Basic Exemption Limits for Filing ITR
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold text-green-700">
                  New Tax Regime (FY 2025-26)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">₹0 - ₹4 lakh</span>
                    <span className="text-sm font-medium">Nil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹4 - ₹8 lakh</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹8 - ₹12 lakh</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹12 - ₹16 lakh</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹16 - ₹20 lakh</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹20 - ₹24 lakh</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Above ₹24 lakh</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold text-blue-700">
                  New Regime (FY 2024-25)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Up to ₹3 lakh</span>
                    <span className="text-sm font-medium">Nil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹3 - ₹7 lakh</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹7 - ₹10 lakh</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹10 - ₹12 lakh</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹12 - ₹15 lakh</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Above ₹15 lakh</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold text-orange-700">
                  Old Regime (All Years)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Up to ₹2.5 lakh</span>
                    <span className="text-sm font-medium">Nil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹2.5 - ₹5 lakh</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">₹5 - ₹10 lakh</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Above ₹10 lakh</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <h3 className="font-semibold text-green-800 mb-2">Budget 2025 Update:</h3>
              <p className="text-sm text-green-700">
                For salaried individuals opting for the new tax regime, income up to Rs. 12,75,000 will be tax-free. 
                The Section 87A rebate has been increased to Rs. 60,000, providing significant tax relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="Professional ITR Filing Services"
        subtitle="Choose the right plan for your tax filing needs"
        plans={pricingPlans}
        note="All plans include expert review, e-filing support, and refund tracking. Government fees are additional."
      />

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about ITR filing"
        faqs={faqs}
        columns={2}
        ctaTitle="Ready to File Your ITR?"
        ctaDescription="Get expert assistance for hassle-free income tax return filing. Our tax professionals ensure accurate filing and maximum refunds."
      />
    </div>
  );
};

export default ITRFilingPage;
