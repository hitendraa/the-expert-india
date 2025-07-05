import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Car, Truck, Shield, Clock, DollarSign, Building, Award, AlertCircle } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Motor Insurance | Car & Bike Insurance | Vehicle Protection | The Expert India',
  description: 'Get comprehensive motor insurance for cars, bikes, and commercial vehicles. Compare policies from leading insurers with instant quotes and easy claims.',
  keywords: [
    'motor insurance',
    'car insurance',
    'bike insurance',
    'vehicle insurance',
    'two wheeler insurance',
    'commercial vehicle insurance',
    'third party insurance',
    'comprehensive coverage'
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

const vehicleTypes = [
  {
    icon: <Car className="h-8 w-8 text-blue-600" />,
    title: "Car Insurance",
    description: "Comprehensive coverage for private cars with own damage, third party liability, and additional benefits.",
    coverage: "Third Party & Comprehensive"
  },
  {
    icon: <Truck className="h-8 w-8 text-green-600" />,
    title: "Two Wheeler Insurance",
    description: "Complete protection for motorcycles and scooters with affordable premiums and quick claims.",
    coverage: "Liability & Own Damage"
  },
  {
    icon: <Building className="h-8 w-8 text-orange-600" />,
    title: "Commercial Vehicle",
    description: "Specialized insurance for goods carriers, passenger vehicles, and commercial fleets.",
    coverage: "Fleet & Individual"
  }
]

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Comprehensive Coverage",
    description: "Protection against accidents, theft, natural disasters, and third-party liabilities."
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Quick Claims Process",
    description: "Hassle-free claim settlement with cashless garages and 24/7 support."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-purple-600" />,
    title: "Affordable Premiums",
    description: "Competitive rates with discounts for safe driving and no-claim bonuses."
  },
  {
    icon: <Award className="h-6 w-6 text-orange-600" />,
    title: "Add-on Benefits",
    description: "Optional covers like zero depreciation, engine protection, and roadside assistance."
  }
]

const process = [
  {
    step: 1,
    title: "Choose Vehicle Type",
    description: "Select your vehicle category and provide basic details like registration number and model."
  },
  {
    step: 2,
    title: "Compare Quotes",
    description: "Get instant quotes from multiple insurers and compare coverage options and premiums."
  },
  {
    step: 3,
    title: "Select Policy",
    description: "Choose the best policy based on your needs and budget with expert guidance."
  },
  {
    step: 4,
    title: "Complete Purchase",
    description: "Make payment online and receive your policy documents instantly via email."
  }
]

const benefits = [
  "Legal compliance with Motor Vehicle Act",
  "Protection against financial liability",
  "Coverage for own vehicle damage",
  "Personal accident cover for owner-driver",
  "Roadside assistance services",
  "Cashless garage network",
  "No-claim bonus benefits",
  "Easy online renewals"
]

const exclusions = [
  "Driving under influence of alcohol/drugs",
  "Driving without valid license",
  "Using vehicle for commercial purposes (if not declared)",
  "War, nuclear risks, and terrorist activities",
  "Mechanical or electrical breakdown",
  "Consequential losses",
  "Depreciation of vehicle parts",
  "Damages due to overloading"
]

const faqData = [
  {
    question: "What is the difference between third-party and comprehensive motor insurance?",
    answer: "Third-party insurance covers only damages to other vehicles and property, while comprehensive insurance covers both third-party liabilities and damages to your own vehicle."
  },
  {
    question: "Is motor insurance mandatory in India?",
    answer: "Yes, at least third-party motor insurance is mandatory under the Motor Vehicle Act. Driving without valid insurance can result in fines and legal penalties."
  },
  {
    question: "What is No Claim Bonus (NCB)?",
    answer: "NCB is a discount on premium given for claim-free years. It can range from 20% to 50% and belongs to the policyholder, not the vehicle."
  },
  {
    question: "How can I renew my motor insurance?",
    answer: "You can renew online through our platform, insurer websites, or visit our office. It's recommended to renew before expiry to avoid coverage gaps."
  },
  {
    question: "What documents are required for motor insurance?",
    answer: "You need vehicle registration certificate, previous policy copy, driving license, and identity proof. For new vehicles, include invoice and temporary registration."
  },
  {
    question: "Can I transfer my NCB to a new vehicle?",
    answer: "Yes, NCB can be transferred to a new vehicle of the same category owned by the same person within certain time limits as per insurer rules."
  }
]

export default function MotorInsurancePage() {
  const insuranceOptions = [
    "Car Insurance",
    "Two Wheeler Insurance",
    "Commercial Vehicle Insurance",
    "Third Party Insurance",
    "Comprehensive Insurance",
    "Renew Existing Policy",
    "Other"
  ];

  const heroData = {
    badge: "Motor Insurance Services",
    title: "Comprehensive Motor Insurance",
    subtitle: "Protect Your Vehicle & Drive Worry-Free",
    description: "Get comprehensive motor insurance coverage for cars, bikes, and commercial vehicles. ✔Compare Multiple Insurers ✔Instant Policy Issuance ✔24/7 Claims Support ✔Cashless Garage Network ✔No-Claim Bonus ✔Easy Renewals",
    rating: {
      score: "4.9/5",
      reviews: "(5000+ Policies Issued)"
    },
    features: [
      "Compare Multiple Insurers",
      "Instant Policy Issuance",
      "24/7 Claims Support", 
      "Cashless Garage Network",
      "No-Claim Bonus",
      "Easy Renewals"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Insurance Consultation",
      consultationDescription: "Complete motor insurance guidance"
    },
    trustIndicators: [
      {
        title: "5000+ Policies",
        subtitle: "Successfully Issued"
      },
      {
        title: "15+ Insurers",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Motor Insurance Quote",
      subtitle: "Protect Your Vehicle Today",
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
      button: "Get Motor Insurance Quote",
      note: "Our motor insurance experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for motor insurance consultation"
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
        {/* Vehicle Types Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Insurance for Every Vehicle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right insurance coverage for your vehicle type with tailored benefits and competitive premiums.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((type, index) => (
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
              Why Choose Our Motor Insurance
            </h2>
            <p className="text-lg text-gray-600">
              Get comprehensive protection with additional benefits and superior service quality.
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
              Get your motor insurance in just 4 easy steps with instant policy issuance.
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

        {/* Benefits & Coverage */}
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
          title="Motor Insurance FAQ"
          subtitle="Get answers to common questions about motor insurance policies and coverage"
          faqs={faqData}
          ctaTitle="Get Motor Insurance Today"
          ctaDescription="Protect your vehicle with comprehensive motor insurance coverage. Compare policies from leading insurers and get the best protection for your vehicle."
        />
      </div>
    </div>
  )
}
