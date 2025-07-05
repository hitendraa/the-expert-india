import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Shield, Clock, DollarSign, FileText, Award, AlertCircle, Stethoscope, Hammer, Calculator, Briefcase } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Indemnity Insurance | PI Coverage for Professionals | The Expert India',
  description: 'Professional indemnity insurance for doctors, engineers, lawyers, and consultants. Protection against errors, omissions, and professional liability claims.',
  keywords: [
    'professional indemnity insurance',
    'PI insurance',
    'professional liability insurance',
    'errors and omissions insurance',
    'doctor indemnity insurance',
    'medical malpractice insurance',
    'professional negligence coverage',
    'consultant insurance'
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

const professionalCategories = [
  {
    icon: <Stethoscope className="h-8 w-8 text-red-600" />,
    title: "Medical Professionals",
    description: "Coverage for doctors, surgeons, specialists, and medical establishments against malpractice claims.",
    professions: "Physicians, Surgeons, Specialists"
  },
  {
    icon: <Hammer className="h-8 w-8 text-blue-600" />,
    title: "Engineers & Architects",
    description: "Protection for construction professionals against design errors and project-related liabilities.",
    professions: "Engineers, Architects, Designers"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-600" />,
    title: "Legal Professionals",
    description: "Indemnity coverage for lawyers, advocates, and legal practitioners against professional errors.",
    professions: "Lawyers, Advocates, Solicitors"
  },
  {
    icon: <Calculator className="h-8 w-8 text-purple-600" />,
    title: "Financial Consultants",
    description: "Coverage for accountants, financial advisors, and management consultants against advisory errors.",
    professions: "CAs, Financial Advisors, Consultants"
  }
]

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Comprehensive Protection",
    description: "Coverage for legal liability arising from professional errors and omissions."
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Retroactive Coverage",
    description: "Protection for claims arising from past professional services on continuous renewal."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-purple-600" />,
    title: "Legal Defense Costs",
    description: "Coverage for legal expenses and defense costs with insurer's prior consent."
  },
  {
    icon: <Award className="h-6 w-6 text-orange-600" />,
    title: "Group Discounts",
    description: "Special group policies available for professional associations with premium discounts."
  }
]

const policyScope = [
  "Errors and omissions in professional services",
  "Breach of professional duty of care",
  "Negligent acts or advice given professionally",
  "Unintentional breach of confidentiality",
  "Legal defense costs and expenses",
  "Civil liability claims from third parties",
  "Dishonesty of employees (if covered)",
  "Loss of documents under professional care"
]

const exclusions = [
  "Criminal acts or intentional violations",
  "Fraudulent or dishonest activities",
  "Contractual liability claims",
  "Claims arising from non-professional activities",
  "Fines, penalties, and punitive damages",
  "Claims not reported within policy period",
  "Pre-existing claims or circumstances",
  "War, terrorism, and nuclear risks"
]

const aoaRatios = [
  { ratio: "1:1", description: "AOA limit equals AOY limit" },
  { ratio: "1:2", description: "AOA limit is half of AOY limit" },
  { ratio: "1:3", description: "AOA limit is one-third of AOY limit" },
  { ratio: "1:4", description: "AOA limit is one-fourth of AOY limit" }
]

const claimProcess = [
  {
    step: 1,
    title: "Immediate Notification",
    description: "Inform the insurance company immediately upon becoming aware of any potential liability situation."
  },
  {
    step: 2,
    title: "Document Submission",
    description: "Submit all relevant documents, legal notices, and correspondence related to the claim."
  },
  {
    step: 3,
    title: "Legal Defense",
    description: "Insurance company arranges legal defense with panel lawyers or approved legal counsel."
  },
  {
    step: 4,
    title: "Settlement",
    description: "Settlement of valid claims within policy limits including legal costs and compensation."
  }
]

const faqData = [
  {
    question: "What is Professional Indemnity Insurance?",
    answer: "Professional Indemnity Insurance protects professionals against legal liability arising from errors, omissions, or negligence while providing professional services to clients."
  },
  {
    question: "Who needs Professional Indemnity Insurance?",
    answer: "Doctors, engineers, architects, lawyers, consultants, and other professionals who provide advice or services to clients need this coverage to protect against professional liability claims."
  },
  {
    question: "What is the difference between AOA and AOY limits?",
    answer: "AOA (Any One Accident) is the maximum payable per claim, while AOY (Any One Year) is the total limit for all claims in a policy year. The ratio can be selected from 1:1 to 1:4."
  },
  {
    question: "Does the policy cover legal defense costs?",
    answer: "Yes, the policy covers legal defense costs and expenses incurred with the insurer's prior consent, subject to the overall limit of indemnity selected."
  },
  {
    question: "What is retroactive coverage in PI insurance?",
    answer: "Retroactive coverage protects against claims arising from professional services provided before the policy start date, available on continuous renewal of the policy."
  },
  {
    question: "Are criminal liability claims covered?",
    answer: "No, only civil liability claims are covered. Criminal liability, intentional violations, and fraudulent acts are excluded from coverage."
  },
  {
    question: "Can I get group coverage for my professional association?",
    answer: "Yes, group policies are available for professional associations and organizations with special discounts based on the number of members covered."
  },
  {
    question: "How is the premium calculated for PI insurance?",
    answer: "Premium depends on the profession type, sum insured, turnover, number of years in practice, claims history, and risk profile of the professional."
  }
]

export default function ProfessionalIndemnityPage() {
  const insuranceOptions = [
    "Medical Professional Indemnity",
    "Engineering Professional Indemnity",
    "Legal Professional Indemnity", 
    "Consultant Professional Indemnity",
    "Architect Professional Indemnity",
    "CA Professional Indemnity",
    "Group Professional Indemnity",
    "Other"
  ];

  const heroData = {
    badge: "Professional Indemnity Insurance",
    title: "Professional Indemnity Insurance",
    subtitle: "Protect Your Professional Practice",
    description: "Comprehensive professional indemnity coverage for errors, omissions, and professional liability. ✔Retroactive Coverage ✔Legal Defense Costs ✔Group Discounts ✔Expert Claims Support ✔Continuous Protection ✔Flexible Limits",
    rating: {
      score: "4.9/5",
      reviews: "(1200+ Professionals Protected)"
    },
    features: [
      "Retroactive Coverage",
      "Legal Defense Costs",
      "Group Discounts",
      "Expert Claims Support",
      "Continuous Protection",
      "Flexible Limits"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Professional Risk Assessment",
      consultationDescription: "Complete professional indemnity consultation"
    },
    trustIndicators: [
      {
        title: "1200+ Professionals",
        subtitle: "Successfully Protected"
      },
      {
        title: "10+ Insurers",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Professional Indemnity Quote",
      subtitle: "Protect Your Professional Practice",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Professional Category"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select your profession",
        state: "Choose your state"
      },
      button: "Get Professional Indemnity Quote",
      note: "Our professional insurance experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for professional indemnity consultation"
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
        {/* Professional Categories */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Indemnity Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized professional indemnity insurance designed for various professional categories and their unique risk exposures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {category.professions}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gray-50 -mx-4 px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Professional Indemnity
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive protection designed specifically for professional liability risks.
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

        {/* Policy Scope & Limits */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-green-700">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Policy Scope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {policyScope.map((scope, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{scope}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-700">
                  <DollarSign className="h-6 w-6 mr-2" />
                  AOA to AOY Limit Ratios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aoaRatios.map((ratio, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <Badge variant="outline" className="font-bold text-lg">
                        {ratio.ratio}
                      </Badge>
                      <span className="text-gray-700">{ratio.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Claims Process */}
        <section className="bg-gray-50 -mx-4 px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Claims Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple and efficient claims process to protect your professional interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimProcess.map((step, index) => (
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

        {/* Policy Exclusions */}
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

        {/* Important Note */}
        <section>
          <Card className="bg-blue-50 border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-2">Important Information</h3>
                  <p className="text-blue-800 mb-3">
                    This policy is specifically designed for professionals to cover liability arising from errors and omissions 
                    committed while rendering professional services. The policy offers retroactive period benefits on continuous 
                    renewal, ensuring comprehensive protection for your professional practice.
                  </p>
                  <p className="text-blue-800">
                    For engineers, architects, lawyers, and consultants, the Any One Accident (AOA) limit is restricted to 
                    25% of the Any One Year (AOY) limit as per standard policy terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="Professional Indemnity FAQ"
          subtitle="Get answers to common questions about professional indemnity insurance and coverage"
          faqs={faqData}
          ctaTitle="Protect Your Professional Practice"
          ctaDescription="Get comprehensive professional indemnity insurance to safeguard your practice against liability claims. Contact our experts for customized professional protection solutions."
        />
      </div>
    </div>
  )
}
