import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Shield, Heart, Users, FileText, Calculator, Building, Target, Award, TrendingUp, AlertCircle } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Life Insurance Policies | Term & Investment Plans | The Expert India',
  description: 'Get comprehensive life insurance coverage with term plans, ULIPs, endowment policies, and investment-linked insurance. Expert guidance for family financial security.',
  keywords: [
    'life insurance',
    'term insurance',
    'ULIP',
    'endowment policy',
    'investment insurance',
    'family protection',
    'life cover',
    'insurance planning',
    'financial security',
    'insurance advisor'
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

const insuranceTypes = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Term Life Insurance",
    description: "Pure protection plans offering high coverage at affordable premiums with flexible tenure options.",
    features: ["High Coverage", "Low Premium", "Tax Benefits", "Flexible Terms"]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    title: "ULIPs",
    description: "Unit Linked Insurance Plans combining life cover with investment in equity and debt funds.",
    features: ["Investment + Insurance", "Market Returns", "Fund Switching", "Transparency"]
  },
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: "Endowment Plans",
    description: "Traditional insurance plans providing guaranteed returns with life coverage and maturity benefits.",
    features: ["Guaranteed Returns", "Maturity Benefits", "Bonus Additions", "Loan Facility"]
  },
  {
    icon: <Target className="h-8 w-8 text-purple-600" />,
    title: "Whole Life Insurance",
    description: "Lifetime coverage with investment component and cash value accumulation over time.",
    features: ["Lifetime Coverage", "Cash Value", "Loan Against Policy", "Estate Planning"]
  }
]

const keyFeatures = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Comprehensive Coverage",
    description: "Wide range of life insurance products from leading insurers"
  },
  {
    icon: <Calculator className="h-6 w-6 text-green-600" />,
    title: "Premium Calculator",
    description: "Instant premium calculation and plan comparison tools"
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    title: "Expert Advisory",
    description: "Certified insurance advisors for personalized guidance"
  },
  {
    icon: <FileText className="h-6 w-6 text-orange-600" />,
    title: "Easy Documentation",
    description: "Hassle-free documentation and quick policy issuance"
  }
]

const coverageOptions = [
  {
    amount: "₹25 Lakhs",
    premium: "₹500/month",
    suitable: "Young professionals, basic coverage"
  },
  {
    amount: "₹50 Lakhs", 
    premium: "₹800/month",
    suitable: "Growing families, moderate income"
  },
  {
    amount: "₹1 Crore",
    premium: "₹1,200/month", 
    suitable: "Established professionals, comprehensive cover"
  },
  {
    amount: "₹2+ Crores",
    premium: "₹2,000+/month",
    suitable: "High income individuals, premium protection"
  }
]

const eligibilityCriteria = [
  "Age: 18-65 years (varies by product)",
  "Good health and medical underwriting",
  "Regular income source for premium payment",
  "Indian resident with valid documents",
  "No adverse insurance history",
  "Compliance with insurance regulations"
]

const requiredDocuments = [
  "Age proof (Birth certificate, PAN, Passport)",
  "Identity proof (Aadhaar, PAN, Driving License)",
  "Address proof (Utility bills, Bank statement)",
  "Income proof (Salary slips, ITR, Bank statements)",
  "Medical reports (if required by insurer)",
  "Photographs and proposal form"
]

const processSteps = [
  {
    step: "01",
    title: "Needs Assessment",
    description: "Analyze your financial goals, family needs, and insurance requirements."
  },
  {
    step: "02", 
    title: "Plan Comparison",
    description: "Compare different insurance products and choose the best suitable plan."
  },
  {
    step: "03",
    title: "Application Submission",
    description: "Complete proposal form with required documents and premium payment."
  },
  {
    step: "04",
    title: "Medical Examination",
    description: "Undergo medical tests if required based on age and sum assured."
  },
  {
    step: "05",
    title: "Policy Issuance",
    description: "Receive policy document after approval and verification process."
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "Continuous support for premium payments, claims, and policy servicing."
  }
]

const insuranceProviders = [
  "LIC of India", "HDFC Life", "ICICI Prudential", "SBI Life",
  "Bajaj Allianz", "Max Life", "Tata AIA", "Bharti AXA",
  "Reliance Nippon", "Kotak Life", "PNB MetLife", "Canara HSBC",
  "Aegon Life", "Exide Life", "Future Generali", "Star Union Dai-ichi"
]

const benefits = [
  "Financial security for family in case of unfortunate events",
  "Tax benefits under Section 80C and 10(10D)",
  "Wealth creation through investment-linked products",
  "Loan facility against policy cash value",
  "Inflation protection with increasing cover options",
  "Peace of mind and stress-free financial planning"
]

const considerations = [
  "Premium payment commitment for entire policy term",
  "Medical examination may be required for high coverage",
  "Policy conditions and exclusions apply",
  "Surrender charges for early policy termination",
  "Market risks in investment-linked products",
  "Claim settlement depends on policy terms"
]

const faqData = [
  {
    question: "What is the difference between term insurance and endowment plans?",
    answer: "Term insurance provides pure life cover with no maturity benefit, offering high coverage at low premiums. Endowment plans combine insurance with savings, providing maturity benefits but at higher premiums."
  },
  {
    question: "How much life insurance coverage do I need?",
    answer: "Generally, life cover should be 10-15 times your annual income. Consider factors like outstanding loans, family expenses, children's education, and future financial goals while determining coverage amount."
  },
  {
    question: "Can I buy multiple life insurance policies?",
    answer: "Yes, you can buy multiple life insurance policies from same or different insurers. However, total coverage should be justified by your income and financial obligations."
  },
  {
    question: "What are the tax benefits of life insurance?",
    answer: "Premiums paid qualify for deduction under Section 80C (up to ₹1.5 lakhs). Death benefits and maturity proceeds are tax-free under Section 10(10D) subject to conditions."
  },
  {
    question: "Is medical examination mandatory for life insurance?",
    answer: "Medical examination depends on age, sum assured, and insurer's underwriting guidelines. Generally required for higher coverage amounts or applicants above certain age."
  },
  {
    question: "What happens if I stop paying premiums?",
    answer: "Policy may lapse if premiums are not paid within grace period. Some policies become paid-up with reduced benefits. ULIPs may continue if fund value covers charges."
  },
  {
    question: "How long does it take to get a life insurance policy?",
    answer: "With complete documentation, policies can be issued within 7-15 days. If medical examination is required, it may take 15-30 days depending on reports."
  },
  {
    question: "Can I change my life insurance policy after purchase?",
    answer: "Limited changes are allowed like address update, beneficiary change, premium payment mode. Major changes like sum assured increase require fresh underwriting."
  }
]

export default function LifeInsurancePage() {
  const insuranceOptions = [
    "Term Life Insurance",
    "ULIP", 
    "Endowment Plan",
    "Whole Life Insurance",
    "Child Education Plan",
    "Pension Plan",
    "Group Insurance",
    "Other"
  ];

  const heroData = {
    badge: "Life Insurance Services", 
    title: "Comprehensive Life Insurance Solutions",
    subtitle: "Secure Your Family's Financial Future",
    description: "Protect your loved ones with comprehensive life insurance coverage. Choose from term plans, ULIPs, endowment policies with expert guidance. ✔High Coverage ✔Tax Benefits ✔Expert Advisory ✔Quick Processing ✔Multiple Options ✔Ongoing Support",
    rating: {
      score: "4.9/5",
      reviews: "(2000+ Policies Issued)"
    },
    features: [
      "High Life Coverage",
      "Tax Benefits",
      "Expert Advisory", 
      "Quick Processing",
      "Multiple Options",
      "Ongoing Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Insurance Consultation",
      consultationDescription: "Complete insurance planning guidance"
    },
    trustIndicators: [
      {
        title: "2000+ Policies",
        subtitle: "Successfully Issued"
      },
      {
        title: "16+ Insurers",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Life Insurance Quote",
      subtitle: "Expert Guidance & Best Plans",
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
      button: "Get Insurance Quote",
      note: "Our insurance experts will contact you within 2 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for insurance consultation"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Life Insurance Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Life insurance provides financial protection for your family in case of unfortunate events, 
              ensuring their lifestyle and future goals remain secure even in your absence.
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

        {/* Insurance Types */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Life Insurance</h2>
            <p className="text-lg text-gray-600">
              Choose from various life insurance products designed to meet different financial goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {insuranceTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {type.icon}
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coverage Options */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coverage Options</h2>
            <p className="text-lg text-gray-600">
              Flexible coverage amounts to suit different income levels and family needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageOptions.map((option, index) => (
              <Card key={index} className="text-center border-2 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">{option.amount}</CardTitle>
                  <p className="text-gray-600">Starting from</p>
                  <p className="text-lg font-semibold text-green-600">{option.premium}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{option.suitable}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Eligibility & Documents */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{criteria}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-blue-600" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Purchase Process</h2>
            <p className="text-lg text-gray-600">
              Simple and transparent process to get your life insurance policy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Insurance Providers */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center flex items-center justify-center">
                <Building className="mr-3 h-6 w-6 text-blue-600" />
                Our Insurance Partners
              </CardTitle>
              <p className="text-center text-gray-600">
                Access to leading life insurance companies for comprehensive coverage options
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {insuranceProviders.map((provider, index) => (
                  <Badge key={index} variant="outline" className="justify-center p-3 text-center">
                    {provider}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits & Considerations */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-green-600" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <AlertCircle className="mr-3 h-6 w-6 text-orange-600" />
                  Important Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {considerations.map((consideration, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{consideration}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="Life Insurance FAQ"
          subtitle="Get answers to common questions about life insurance policies and coverage options"
          faqs={faqData}
          ctaTitle="Secure Your Family's Future Today"
          ctaDescription="Get comprehensive life insurance coverage with expert guidance. Compare plans from leading insurers and choose the best protection for your loved ones."
        />
      </div>
    </div>
  )
}
