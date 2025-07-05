import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Heart, Shield, Users, Clock, DollarSign, Building, AlertCircle } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Health Insurance Plans | Medical Coverage | Family Health Protection | The Expert India',
  description: 'Get comprehensive health insurance coverage for individuals and families. Compare plans from leading insurers with cashless treatment and expert guidance.',
  keywords: [
    'health insurance',
    'medical insurance',
    'family health cover',
    'cashless treatment',
    'individual health plan',
    'group health insurance',
    'health protection',
    'medical coverage'
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

const healthPlans = [
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: "Individual Health Plans",
    description: "Personal health coverage with comprehensive medical benefits and cashless treatment options.",
    coverage: "₹3 Lakhs - ₹1 Crore"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Family Floater Plans",
    description: "Single policy covering entire family with shared sum insured and convenient premium payment.",
    coverage: "₹5 Lakhs - ₹2 Crores"
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: "Critical Illness Cover",
    description: "Additional protection against major illnesses like cancer, heart disease, and organ transplant.",
    coverage: "₹10 Lakhs - ₹5 Crores"
  }
]

const keyFeatures = [
  {
    icon: <Heart className="h-6 w-6 text-red-600" />,
    title: "Cashless Treatment",
    description: "Network hospitals for hassle-free cashless medical treatment"
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "Quick Claims",
    description: "Fast claim processing and settlement within 30 days"
  },
  {
    icon: <DollarSign className="h-6 w-6 text-green-600" />,
    title: "Tax Benefits",
    description: "Premium deductions up to ₹1.5 lakhs under Section 80D"
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    title: "Expert Support",
    description: "Dedicated health insurance advisors for guidance"
  }
]

const coverage = [
  "Hospitalization expenses (Room rent, ICU charges)",
  "Pre and post hospitalization expenses",
  "Daycare procedures and treatments",
  "Emergency ambulance services",
  "Annual health check-ups",
  "Alternative treatments (Ayurveda, Homeopathy)"
]

const exclusions = [
  "Pre-existing diseases (waiting period applies)",
  "Cosmetic and aesthetic treatments",
  "Dental treatments (unless due to accident)",
  "Pregnancy-related expenses (waiting period)",
  "Self-inflicted injuries and substance abuse",
  "War and nuclear risks"
]

const providers = [
  "ICICI Lombard", "HDFC ERGO", "Bajaj Allianz", "Star Health",
  "New India Assurance", "Oriental Insurance", "Care Health", "Niva Bupa",
  "SBI General", "TATA AIG", "Reliance General", "Max Bupa"
]

const faqData = [
  {
    question: "What is the difference between individual and family floater plans?",
    answer: "Individual plans provide separate coverage for each person, while family floater plans offer shared coverage for the entire family under one policy with a single premium."
  },
  {
    question: "What is cashless treatment and how does it work?",
    answer: "Cashless treatment allows you to get medical treatment at network hospitals without paying upfront. The insurance company settles bills directly with the hospital."
  },
  {
    question: "Are pre-existing diseases covered in health insurance?",
    answer: "Pre-existing diseases are covered after a waiting period (typically 2-4 years). The waiting period varies by insurer and disease type."
  },
  {
    question: "What is the claim settlement process?",
    answer: "For cashless claims, get pre-authorization from the hospital. For reimbursement claims, submit bills and documents within the specified time limit for processing."
  }
]

export default function HealthInsurancePage() {
  const insuranceOptions = [
    "Individual Health Plan",
    "Family Floater Plan",
    "Critical Illness Cover",
    "Senior Citizen Plan",
    "Group Health Insurance",
    "Top-up Plans",
    "Other"
  ];

  const heroData = {
    badge: "Health Insurance Services",
    title: "Comprehensive Health Insurance Plans",
    subtitle: "Protect Your Health & Wealth",
    description: "Get comprehensive health insurance coverage for medical emergencies and treatments. ✔Cashless Treatment ✔Tax Benefits ✔Quick Claims ✔Expert Support ✔Network Hospitals ✔Family Coverage",
    rating: {
      score: "4.8/5",
      reviews: "(3000+ Policies Issued)"
    },
    features: [
      "Cashless Treatment",
      "Tax Benefits",
      "Quick Claims",
      "Expert Support",
      "Network Hospitals",
      "Family Coverage"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Health Consultation",
      consultationDescription: "Complete health insurance guidance"
    },
    trustIndicators: [
      {
        title: "3000+ Policies",
        subtitle: "Successfully Issued"
      },
      {
        title: "12+ Insurers",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Health Insurance Quote",
      subtitle: "Protect Your Family's Health",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Plan Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select plan type",
        state: "Choose your state"
      },
      button: "Get Health Insurance Quote",
      note: "Our health insurance experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for health insurance consultation"
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
        {/* Overview Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Insurance Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Health insurance provides financial protection against medical expenses, ensuring quality healthcare 
              without compromising your savings during medical emergencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Health Plans */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Health Insurance Plans</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {healthPlans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <Badge variant="outline" className="mt-2">{plan.coverage}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coverage & Exclusions */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                  What&apos;s Covered
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {coverage.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <AlertCircle className="mr-3 h-6 w-6 text-red-600" />
                  What&apos;s Not Covered
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {exclusions.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Insurance Providers */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center flex items-center justify-center">
                <Building className="mr-3 h-6 w-6 text-blue-600" />
                Our Health Insurance Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {providers.map((provider, index) => (
                  <Badge key={index} variant="outline" className="justify-center p-3 text-center">
                    {provider}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="Health Insurance FAQ"
          subtitle="Get answers to common questions about health insurance plans and coverage"
          faqs={faqData}
          ctaTitle="Protect Your Health Today"
          ctaDescription="Get comprehensive health insurance coverage for you and your family. Compare plans from leading insurers and choose the best protection for your health needs."
        />
      </div>
    </div>
  )
}
