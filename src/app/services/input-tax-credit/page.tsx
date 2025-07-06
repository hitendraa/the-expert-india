import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertTriangle, TrendingUp, Shield, Clock, Users, FileText, Calculator, Eye, Target, Search, RefreshCw, DollarSign, Building, Scale, Zap } from 'lucide-react'
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Input Tax Credit Services | ITC Reconciliation & Compliance | The Expert India',
  description: 'Expert Input Tax Credit (ITC) management services for businesses. Maximize tax credits with professional claiming, reconciliation, and compliance assistance.',
  keywords: [
    'input tax credit',
    'ITC services',
    'GST credit',
    'ITC reconciliation',
    'GSTR-2A GSTR-2B matching',
    'credit optimization',
    'ITC compliance',
    'tax credit management'
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

function ITCPage() {
  const heroData = {
    badge: "GST Compliance Services",
    title: "Input Tax Credit (ITC) Services",
    subtitle: "Expert ITC Management & Compliance",
    description: "Maximize your tax credits with expert ITC management. Professional assistance with claiming, reconciliation, and compliance to optimize your GST benefits.",
    rating: {
      score: "4.9/5",
      reviews: "Trusted by businesses"
    },
    features: [
      "ITC Claiming & Reconciliation",
      "2A-2B Matching Services",
      "Credit Optimization",
      "Compliance Management",
      "Reversal & Recovery",
      "Expert Consultation"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Customized ITC pricing"
    },
    trustIndicators: [
      {
        title: "GST Experts",
        subtitle: "Certified Professionals"
      },
      {
        title: "100% Compliance",
        subtitle: "Maximum ITC Benefits"
      }
    ],
    form: {
      title: "Get ITC Services",
      subtitle: "Connect with our experts for comprehensive Input Tax Credit solutions",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter your mobile number",
        email: "Enter your email address",
        state: "Choose your state"
      },
      button: "Request ITC Consultation",
      note: "Get expert assistance for Input Tax Credit management",
      terms: {
        termsLabel: "I agree to the Terms and Conditions",
        commsLabel: "I agree to receive updates via WhatsApp/SMS"
      }
    }
  };

  const faqData = [
    {
      question: "What is Input Tax Credit (ITC) in GST?",
      answer: "Input Tax Credit is the tax paid on inputs (goods or services) used for business purposes that can be set off against the output tax liability. It helps reduce the overall GST burden and eliminates the cascading effect of taxes."
    },
    {
      question: "What are the conditions for claiming ITC?",
      answer: "To claim ITC, you must be GST registered, possess tax invoice/debit note, have received goods/services, made payment to supplier, and the supplier must have filed their returns. The inputs must be used for business purposes."
    },
    {
      question: "What is the time limit for claiming ITC?",
      answer: "ITC can be claimed up to the due date of GSTR-3B for September following the financial year or filing of annual return, whichever is earlier. This typically gives about 18 months from the invoice date."
    },
    {
      question: "What is GSTR-2A and how does it relate to ITC?",
      answer: "GSTR-2A is an auto-populated return showing your purchases based on supplier filings. It helps verify eligible ITC and ensures that you only claim credit for supplies where the supplier has paid tax to the government."
    },
    {
      question: "When is ITC reversal required?",
      answer: "ITC reversal is required when goods/services are used for non-business purposes, for exempt supplies, when tax invoices are not available, or when the supplier hasn't filed returns or paid taxes to the government."
    },
    {
      question: "Can ITC be claimed on motor vehicles?",
      answer: "Generally, ITC cannot be claimed on motor vehicles except for specific purposes like transportation of passengers for hire, imparting training for driving, or when the motor vehicle is used for further supply of such vehicles."
    },
    {
      question: "What happens if ITC is wrongly claimed?",
      answer: "Wrongly claimed ITC must be reversed along with interest. If detected during audit or investigation, penalties may also apply. It's important to ensure proper compliance and verification before claiming ITC."
    },
    {
      question: "How do you help with ITC reconciliation?",
      answer: "We provide comprehensive ITC reconciliation services including matching your purchase records with GSTR-2A, identifying discrepancies, ensuring supplier compliance, and preparing reconciliation reports for accurate ITC claims."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <ServiceHero heroData={heroData} />

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Understanding Input Tax Credit (ITC)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Input Tax Credit allows businesses to claim credit for GST paid on purchases, reducing overall tax liability and improving cash flow management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">What is ITC?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Input Tax Credit is the tax paid on inputs used for business purposes that can be set off against output tax liability, effectively reducing your total GST payment.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduces tax burden, improves cash flow, eliminates cascading effect of taxes, and ensures compliance with GST regulations for business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proper ITC management ensures GST compliance, avoids penalties, and maintains accurate books of accounts for regulatory requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* ITC Eligibility */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                ITC Eligibility Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-900">Eligible Conditions:</h4>
                  <div className="space-y-3">
                    {[
                      "Registered under GST",
                      "Tax invoice/debit note possession",
                      "Payment made to supplier",
                      "Returns filed by supplier",
                      "Goods/services received",
                      "Used for business purposes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-900">Ineligible Items:</h4>
                  <div className="space-y-3">
                    {[
                      "Personal consumption items",
                      "Exempted supplies",
                      "Motor vehicles (except specified)",
                      "Food, beverages, outdoor catering",
                      "Goods lost/stolen/destroyed",
                      "Blocked credits under law"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ITC Types Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Input Tax Credit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different types of ITC helps in proper claiming and compliance management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Input Credit",
                description: "Credit on inputs used in manufacture/supply of goods/services",
                icon: Building,
                color: "blue"
              },
              {
                title: "Capital Goods Credit",
                description: "Credit on capital goods used for business purposes",
                icon: Target,
                color: "green"
              },
              {
                title: "Input Service Credit",
                description: "Credit on input services used for business operations",
                icon: Users,
                color: "purple"
              },
              {
                title: "Deemed Credit",
                description: "Credit available through specific provisions in law",
                icon: Scale,
                color: "orange"
              }
            ].map((type, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-${type.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${type.color}-200 transition-colors`}>
                    <type.icon className={`w-8 h-8 text-${type.color}-600`} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ITC Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ITC Claiming Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step process for claiming Input Tax Credit effectively and compliantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Document Verification",
                  description: "Verify tax invoices, debit notes, and ensure supplier compliance",
                  icon: FileText
                },
                {
                  step: "2",
                  title: "Eligibility Assessment",
                  description: "Check eligibility conditions and business purpose requirements",
                  icon: Search
                },
                {
                  step: "3",
                  title: "Credit Calculation",
                  description: "Calculate available credit based on eligible purchases",
                  icon: Calculator
                },
                {
                  step: "4",
                  title: "Return Filing",
                  description: "File GST returns with proper ITC claims and reconciliation",
                  icon: RefreshCw
                }
              ].map((step, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <step.icon className="w-5 h-5 text-blue-600" />
                          <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert ITC Management</h3>
                      <p className="text-gray-600 mb-6">
                        Our experts ensure maximum ITC utilization while maintaining full GST compliance.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-700">Quick Processing</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-700">Expert Review</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-700">Compliance Assured</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ITC Reconciliation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ITC Reconciliation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive reconciliation services to ensure accurate ITC claiming and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2A-2B Reconciliation",
                description: "Match your purchase records with supplier filing data for accurate ITC claims",
                features: ["Auto-populate verification", "Mismatch identification", "Compliance reporting"],
                icon: Eye,
                color: "blue"
              },
              {
                title: "Credit Availability",
                description: "Track available ITC from various sources and ensure optimal utilization",
                features: ["Real-time tracking", "Utilization optimization", "Expiry management"],
                icon: TrendingUp,
                color: "green"
              },
              {
                title: "Reversal & Recovery",
                description: "Manage ITC reversals and recovery procedures as per GST law requirements",
                features: ["Reversal calculations", "Recovery procedures", "Timeline management"],
                icon: RefreshCw,
                color: "purple"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-${service.color}-200 transition-colors`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Time Limits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ITC Time Limits & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding time limits and compliance requirements for Input Tax Credit claims.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-blue-600" />
                  Time Limits for ITC
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Normal ITC Claim</h4>
                    <p className="text-gray-600">Due date of GSTR-3B for September following the financial year or filing of annual return, whichever is earlier.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Amendment Period</h4>
                    <p className="text-gray-600">ITC can be amended through GSTR-1 within the prescribed time limits for corrections.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Special Cases</h4>
                    <p className="text-gray-600">Capital goods ITC and specific scenarios may have different time limit provisions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-purple-600" />
                  Compliance Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                    <p className="text-gray-600">Maintain proper tax invoices, debit notes, and supporting documents for ITC claims.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Reconciliation</h4>
                    <p className="text-gray-600">Regular reconciliation of purchase records with GSTR-2A and supplier filings.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Audit Trail</h4>
                    <p className="text-gray-600">Maintain complete audit trail for all ITC transactions and utilization.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ 
        faqs={faqData}
        title="Frequently Asked Questions"
        subtitle="Common questions about Input Tax Credit services"
      />
    </div>
  )
}

export default ITCPage
