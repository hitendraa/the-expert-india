import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Home, Building, Shield, Clock, DollarSign, Award, AlertCircle, Factory, Warehouse } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Property Insurance | Home & Commercial Property Coverage | The Expert India',
  description: 'Comprehensive property insurance for residential and commercial properties. Protection against fire, theft, natural disasters, and structural damages.',
  keywords: [
    'property insurance',
    'home insurance',
    'building insurance',
    'fire insurance',
    'commercial property insurance',
    'property protection',
    'building coverage',
    'contents insurance'
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

const propertyTypes = [
  {
    icon: <Home className="h-8 w-8 text-blue-600" />,
    title: "Residential Property",
    description: "Complete protection for homes, apartments, and residential buildings against fire, theft, and natural disasters.",
    coverage: "Home & Contents"
  },
  {
    icon: <Building className="h-8 w-8 text-green-600" />,
    title: "Commercial Property",
    description: "Comprehensive coverage for offices, shops, and commercial buildings including business interruption.",
    coverage: "Commercial Buildings"
  },
  {
    icon: <Factory className="h-8 w-8 text-orange-600" />,
    title: "Industrial Property",
    description: "Specialized insurance for factories, warehouses, and industrial facilities with equipment coverage.",
    coverage: "Industrial Assets"
  },
  {
    icon: <Warehouse className="h-8 w-8 text-purple-600" />,
    title: "Storage & Warehouses",
    description: "Protection for storage facilities, warehouses, and goods stored within the premises.",
    coverage: "Storage & Inventory"
  }
]

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Comprehensive Coverage",
    description: "Protection against fire, theft, natural disasters, and accidental damages."
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Quick Claim Settlement",
    description: "Fast claim processing and settlement to help you recover quickly from losses."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-purple-600" />,
    title: "Affordable Premiums",
    description: "Cost-effective insurance solutions with flexible payment options."
  },
  {
    icon: <Award className="h-6 w-6 text-orange-600" />,
    title: "Expert Valuation",
    description: "Professional property valuation and coverage assessment services."
  }
]

const process = [
  {
    step: 1,
    title: "Property Assessment",
    description: "Evaluate your property value, location risks, and coverage requirements for accurate insurance planning."
  },
  {
    step: 2,
    title: "Coverage Selection",
    description: "Choose appropriate coverage types including building, contents, and additional protection options."
  },
  {
    step: 3,
    title: "Policy Customization",
    description: "Customize policy terms, deductibles, and add-ons based on your specific property needs."
  },
  {
    step: 4,
    title: "Policy Activation",
    description: "Complete documentation, premium payment, and activate comprehensive property protection."
  }
]

const coverageDetails = [
  "Fire, lightning, and explosion damages",
  "Theft, burglary, and vandalism",
  "Natural disasters (flood, earthquake, cyclone)",
  "Accidental damages to structure",
  "Contents and personal belongings",
  "Temporary accommodation expenses",
  "Loss of rent (for rental properties)",
  "Debris removal and reconstruction costs"
]

const exclusions = [
  "War, invasion, and terrorist activities",
  "Nuclear risks and radioactive contamination",
  "Normal wear and tear of property",
  "Damage due to negligence or poor maintenance",
  "Losses not reported within specified time",
  "Pre-existing structural defects",
  "Damage due to illegal activities",
  "Gradual deterioration and depreciation"
]

const addOnCovers = [
  {
    title: "Business Interruption",
    description: "Coverage for loss of income during property restoration"
  },
  {
    title: "Equipment Breakdown",
    description: "Protection against electrical and mechanical equipment failures"
  },
  {
    title: "Public Liability",
    description: "Coverage for third-party injuries on your property"
  },
  {
    title: "Loss of Rent",
    description: "Compensation for rental income loss during repairs"
  }
]

const faqData = [
  {
    question: "What is covered under property insurance?",
    answer: "Property insurance covers the building structure, contents, and additional living expenses in case of covered perils like fire, theft, natural disasters, and accidental damages."
  },
  {
    question: "How is the property insurance premium calculated?",
    answer: "Premium is calculated based on property value, location, construction type, occupancy, security measures, and selected coverage options."
  },
  {
    question: "What is the difference between building and contents insurance?",
    answer: "Building insurance covers the structure and fixtures, while contents insurance covers movable items like furniture, electronics, and personal belongings."
  },
  {
    question: "Are natural disasters covered in property insurance?",
    answer: "Standard property insurance covers most natural disasters. However, some specific perils like earthquakes and floods may require additional coverage."
  },
  {
    question: "How long does it take to settle property insurance claims?",
    answer: "Simple claims can be settled within 15-30 days, while complex claims involving major damages may take 60-90 days depending on assessment requirements."
  },
  {
    question: "Can I increase my property insurance coverage during the policy term?",
    answer: "Yes, you can increase coverage by paying additional premium, especially when you renovate, add new contents, or increase property value."
  }
]

export default function PropertyInsurancePage() {
  const insuranceOptions = [
    "Residential Property Insurance",
    "Commercial Property Insurance", 
    "Industrial Property Insurance",
    "Home Contents Insurance",
    "Fire Insurance",
    "Building Insurance",
    "Warehouse Insurance",
    "Other"
  ];

  const heroData = {
    badge: "Property Insurance Services",
    title: "Comprehensive Property Insurance",
    subtitle: "Protect Your Property & Peace of Mind",
    description: "Get complete property protection for residential and commercial buildings with comprehensive coverage. ✔Fire Protection ✔Theft Coverage ✔Natural Disaster Protection ✔Contents Insurance ✔Quick Claims ✔Expert Support",
    rating: {
      score: "4.9/5",
      reviews: "(3500+ Properties Protected)"
    },
    features: [
      "Fire Protection",
      "Theft Coverage",
      "Natural Disaster Protection",
      "Contents Insurance",
      "Quick Claims",
      "Expert Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Property Assessment",
      consultationDescription: "Complete property insurance consultation"
    },
    trustIndicators: [
      {
        title: "3500+ Properties",
        subtitle: "Successfully Protected"
      },
      {
        title: "20+ Insurers",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Property Insurance Quote",
      subtitle: "Protect Your Property Today",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Property Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select property type",
        state: "Choose your state"
      },
      button: "Get Property Insurance Quote",
      note: "Our property insurance experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for property insurance consultation"
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
        {/* Property Types */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Property Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance coverage for all types of properties with tailored protection plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyTypes.map((type, index) => (
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
              Why Choose Our Property Insurance
            </h2>
            <p className="text-lg text-gray-600">
              Expert property protection with comprehensive coverage and excellent service support.
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
              Get your property insured in 4 easy steps with professional guidance throughout.
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

        {/* Coverage & Add-ons */}
        <section className="bg-gray-50 -mx-4 px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Coverage Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-green-700">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  What&apos;s Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {coverageDetails.map((coverage, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{coverage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Add-on Covers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-700">
                  <Award className="h-6 w-6 mr-2" />
                  Add-on Covers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOnCovers.map((addon, index) => (
                    <div key={index} className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{addon.title}</h4>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Exclusions */}
        <section>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-red-700">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Policy Exclusions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {exclusions.map((exclusion, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{exclusion}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="Property Insurance FAQ"
          subtitle="Get answers to common questions about property insurance coverage and claims"
          faqs={faqData}
          ctaTitle="Protect Your Property Today"
          ctaDescription="Get comprehensive property insurance coverage to safeguard your residential or commercial property. Contact our experts for customized protection solutions."
        />
      </div>
    </div>
  )
}
