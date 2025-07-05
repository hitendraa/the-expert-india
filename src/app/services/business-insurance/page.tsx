import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Building, Shield, Users, Clock, DollarSign, Award, AlertCircle, Factory, Truck, Laptop } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Business Insurance | Commercial Insurance Policies | The Expert India',
  description: 'Comprehensive business insurance solutions including property, liability, cyber, and equipment coverage. Protect your business with tailored commercial insurance policies.',
  keywords: [
    'business insurance',
    'commercial insurance',
    'business liability insurance',
    'property insurance',
    'cyber insurance',
    'business protection',
    'commercial coverage',
    'business risk management'
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

const businessInsuranceTypes = [
  {
    icon: <Building className="h-8 w-8 text-blue-600" />,
    title: "Property Insurance",
    description: "Protection for business premises, equipment, inventory, and assets against fire, theft, and natural disasters.",
    coverage: "Buildings & Contents"
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "General Liability",
    description: "Coverage against third-party claims for bodily injury, property damage, and legal expenses.",
    coverage: "Third Party Protection"
  },
  {
    icon: <Laptop className="h-8 w-8 text-purple-600" />,
    title: "Cyber Insurance",
    description: "Protection against cyber attacks, data breaches, and digital business interruption risks.",
    coverage: "Digital Protection"
  },
  {
    icon: <Factory className="h-8 w-8 text-orange-600" />,
    title: "Equipment Insurance",
    description: "Coverage for machinery, equipment breakdown, and business interruption due to equipment failure.",
    coverage: "Equipment & Machinery"
  },
  {
    icon: <Truck className="h-8 w-8 text-red-600" />,
    title: "Commercial Vehicle",
    description: "Insurance for business vehicles including goods carriers and passenger vehicles.",
    coverage: "Fleet Insurance"
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: "Group Insurance",
    description: "Employee benefits including group health, personal accident, and life insurance coverage.",
    coverage: "Employee Benefits"
  }
]

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Comprehensive Coverage",
    description: "All-in-one business protection covering property, liability, and operational risks."
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Quick Claim Settlement",
    description: "Fast claim processing to minimize business disruption and ensure quick recovery."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-purple-600" />,
    title: "Competitive Premiums",
    description: "Cost-effective insurance solutions tailored to your business size and industry."
  },
  {
    icon: <Award className="h-6 w-6 text-orange-600" />,
    title: "Expert Risk Assessment",
    description: "Professional risk evaluation and customized coverage recommendations."
  }
]

const process = [
  {
    step: 1,
    title: "Business Assessment",
    description: "Evaluate your business operations, assets, and risk exposure for comprehensive coverage planning."
  },
  {
    step: 2,
    title: "Coverage Selection",
    description: "Choose appropriate insurance types and coverage limits based on your business needs."
  },
  {
    step: 3,
    title: "Policy Customization",
    description: "Customize policy terms, deductibles, and add-ons to match your specific requirements."
  },
  {
    step: 4,
    title: "Implementation",
    description: "Complete documentation, premium payment, and receive comprehensive policy coverage."
  }
]

const benefits = [
  "Financial protection against business losses",
  "Legal compliance with regulatory requirements",
  "Business continuity during unexpected events",
  "Protection of business assets and inventory",
  "Coverage for employee-related liabilities",
  "Risk transfer to insurance providers",
  "Tax benefits on premium payments",
  "Peace of mind for business operations"
]

const exclusions = [
  "War, invasion, and terrorist activities",
  "Nuclear risks and radioactive contamination",
  "Losses due to fraudulent activities",
  "Intentional damage or criminal acts",
  "Normal wear and tear of equipment",
  "Losses not reported within time limits",
  "Pre-existing conditions or damages",
  "Business losses due to market conditions"
]

const faqData = [
  {
    question: "What types of businesses need business insurance?",
    answer: "All businesses, regardless of size, should have business insurance. It's particularly important for businesses with physical premises, employees, equipment, or those serving customers directly."
  },
  {
    question: "What is the difference between business insurance and personal insurance?",
    answer: "Business insurance covers commercial risks, business property, liability, and operations, while personal insurance covers individual assets and personal liability risks."
  },
  {
    question: "How much business insurance coverage do I need?",
    answer: "Coverage needs depend on your business size, industry, assets value, and risk exposure. A professional risk assessment can help determine appropriate coverage limits."
  },
  {
    question: "Is business insurance tax deductible?",
    answer: "Yes, business insurance premiums are generally tax-deductible as a business expense, helping reduce your overall tax liability."
  },
  {
    question: "How quickly can business insurance claims be settled?",
    answer: "Simple claims can be settled within 7-15 days, while complex claims may take 30-60 days depending on the nature and documentation requirements."
  },
  {
    question: "Can I modify my business insurance policy during the term?",
    answer: "Yes, most policies allow modifications for coverage changes, adding new risks, or updating business information with appropriate premium adjustments."
  }
]

export default function BusinessInsurancePage() {
  const insuranceOptions = [
    "Property Insurance",
    "General Liability Insurance",
    "Cyber Insurance",
    "Equipment Insurance",
    "Commercial Vehicle Insurance",
    "Group Insurance",
    "Professional Indemnity",
    "Other"
  ];

  const heroData = {
    badge: "Business Insurance Services",
    title: "Comprehensive Business Insurance",
    subtitle: "Protect Your Business & Secure Your Future",
    description: "Get complete business protection with tailored insurance solutions for all commercial risks. ✔Property Protection ✔Liability Coverage ✔Cyber Security ✔Equipment Insurance ✔Quick Claims ✔Expert Support",
    rating: {
      score: "4.8/5",
      reviews: "(2000+ Businesses Protected)"
    },
    features: [
      "Property Protection",
      "Liability Coverage",
      "Cyber Security",
      "Equipment Insurance",
      "Quick Claims",
      "Expert Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Business Risk Assessment",
      consultationDescription: "Complete business insurance consultation"
    },
    trustIndicators: [
      {
        title: "2000+ Businesses",
        subtitle: "Successfully Protected"
      },
      {
        title: "15+ Insurers",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Business Insurance Quote",
      subtitle: "Protect Your Business Today",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Insurance Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select insurance type",
        state: "Choose your state"
      },
      button: "Get Business Insurance Quote",
      note: "Our business insurance experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for business insurance consultation"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        heroData={heroData}
        selectOptions={insuranceOptions}
        selectFieldType="hearAbout"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Business Insurance Types */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance coverage designed to protect every aspect of your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessInsuranceTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {type.coverage}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gray-50 -mx-4 px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Business Insurance
            </h2>
            <p className="text-lg text-gray-600">
              Expert protection solutions designed specifically for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Insurance Process */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Insurance Process
            </h2>
            <p className="text-lg text-gray-600">
              Get your business insured in 4 easy steps with expert guidance throughout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits & Exclusions */}
        <section className="bg-gray-50 -mx-4 px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-green-700">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Exclusions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-red-700">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Policy Exclusions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="Business Insurance FAQ"
          subtitle="Get answers to common questions about business insurance and commercial coverage"
          faqs={faqData}
          ctaTitle="Protect Your Business Today"
          ctaDescription="Get comprehensive business insurance coverage to safeguard your operations, assets, and employees. Contact our experts for customized business protection solutions."
        />
      </div>
    </div>
  )
}
