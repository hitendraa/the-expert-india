import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Phone, Mail, MapPin, Clock, DollarSign, Shield, Users, TrendingUp, FileText, Truck, Factory, Building, Laptop, Wrench, Zap, Award, AlertCircle } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Equipment Finance | Business Equipment Loan Services | The Expert India',
  description: 'Get equipment finance for machinery, vehicles, technology, and industrial equipment. Quick approvals, competitive rates, and flexible repayment options for business growth.',
  keywords: [
    'equipment finance',
    'machinery loan',
    'vehicle finance',
    'equipment financing',
    'business equipment loan',
    'industrial equipment finance',
    'technology finance',
    'asset finance',
    'equipment lease',
    'machinery purchase loan'
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

const equipmentTypes = [
  {
    icon: <Factory className="h-8 w-8" />,
    title: "Industrial Machinery",
    description: "Manufacturing equipment, CNC machines, textile machinery, printing equipment, and production line machinery."
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Commercial Vehicles",
    description: "Trucks, buses, tractors, construction vehicles, delivery vans, and specialized transport equipment."
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "IT & Technology",
    description: "Computers, servers, software, telecommunication equipment, and advanced technology systems."
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Construction Equipment",
    description: "Excavators, cranes, bulldozers, concrete mixers, and other heavy construction machinery."
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Tools & Equipment",
    description: "Specialized tools, workshop equipment, diagnostic equipment, and professional-grade instruments."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Power & Energy",
    description: "Generators, solar panels, transformers, UPS systems, and renewable energy equipment."
  }
]

const loanFeatures = [
  {
    icon: <DollarSign className="h-6 w-6 text-green-600" />,
    title: "Competitive Interest Rates",
    description: "Starting from 10.50% per annum with flexible rate options"
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "Quick Processing",
    description: "Fast approval and disbursal within 5-7 working days"
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    title: "High Loan Amount",
    description: "Finance up to 90% of equipment value with minimal down payment"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
    title: "Flexible Tenure",
    description: "Repayment tenure from 1 to 7 years based on equipment type"
  },
  {
    icon: <FileText className="h-6 w-6 text-red-600" />,
    title: "Minimal Documentation",
    description: "Simple documentation process with digital submission"
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: "Expert Guidance",
    description: "Dedicated relationship manager for personalized service"
  }
]

const eligibilityCriteria = [
  "Business should be operational for minimum 2 years",
  "Annual turnover of ₹50 lakhs or above",
  "Good credit score (650+) and clean repayment history",
  "Positive cash flow and profitability for last 2 years",
  "Valid business registration and licenses",
  "Age of applicant between 25-65 years"
]

const processSteps = [
  {
    step: "01",
    title: "Application Submission",
    description: "Submit your equipment finance application with basic business details and equipment specifications."
  },
  {
    step: "02",
    title: "Document Verification",
    description: "Our team verifies your business documents, financial statements, and equipment quotations."
  },
  {
    step: "03",
    title: "Credit Assessment",
    description: "Comprehensive evaluation of your business creditworthiness and repayment capacity."
  },
  {
    step: "04",
    title: "Equipment Evaluation",
    description: "Technical and commercial evaluation of the equipment to be financed."
  },
  {
    step: "05",
    title: "Loan Approval",
    description: "Final approval with loan terms, interest rate, and repayment schedule."
  },
  {
    step: "06",
    title: "Documentation & Disbursal",
    description: "Complete loan documentation and direct payment to equipment supplier."
  }
]

const requiredDocuments = [
  "Business registration certificate and licenses",
  "GST registration certificate and returns",
  "Income Tax Returns for last 3 years",
  "Bank statements for last 12 months",
  "Financial statements (P&L, Balance Sheet)",
  "Equipment quotation and specifications",
  "KYC documents of directors/partners",
  "Property documents (if collateral required)"
]

const lenderPartners = [
  "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank",
  "Kotak Mahindra Bank", "Yes Bank", "IndusInd Bank", "IDFC First Bank",
  "Bajaj Finserv", "Tata Capital", "L&T Finance", "Mahindra Finance",
  "IIFL Finance", "Aditya Birla Finance", "Hero FinCorp", "Cholamandalam Finance"
]

const industrySupport = [
  {
    title: "Manufacturing",
    description: "Production machinery, automation equipment, quality control instruments"
  },
  {
    title: "Healthcare",
    description: "Medical equipment, diagnostic machines, laboratory instruments"
  },
  {
    title: "Agriculture",
    description: "Tractors, harvesters, irrigation systems, processing equipment"
  },
  {
    title: "Transportation",
    description: "Commercial vehicles, logistics equipment, fleet management systems"
  },
  {
    title: "Hospitality",
    description: "Kitchen equipment, furniture, HVAC systems, POS systems"
  },
  {
    title: "Retail",
    description: "Store fixtures, POS systems, security equipment, refrigeration units"
  }
]

const benefits = [
  "Preserve working capital for operations",
  "Tax benefits under depreciation",
  "Improve operational efficiency",
  "Access to latest technology",
  "Structured repayment options",
  "Professional equipment maintenance support"
]

const warnings = [
  "Equipment acts as primary security for the loan",
  "Default may result in equipment repossession",
  "Insurance coverage mandatory throughout loan tenure",
  "Equipment modification requires lender approval",
  "Early prepayment may attract charges",
  "Interest rates subject to credit profile"
]

const faqData = [
  {
    question: "What types of equipment can be financed?",
    answer: "We finance a wide range of equipment including industrial machinery, vehicles, IT equipment, construction machinery, medical equipment, and specialized tools across various industries."
  },
  {
    question: "What is the maximum loan amount available?",
    answer: "Equipment finance can range from ₹5 lakhs to ₹50 crores, with financing up to 90% of the equipment value depending on the type and your business profile."
  },
  {
    question: "What is the typical interest rate for equipment finance?",
    answer: "Interest rates start from 10.50% per annum and vary based on your credit profile, business financials, equipment type, and loan tenure."
  },
  {
    question: "Can I finance used equipment?",
    answer: "Yes, used equipment can be financed, but the equipment should not be more than 3-5 years old and must meet lender's valuation criteria."
  },
  {
    question: "Is collateral required for equipment finance?",
    answer: "Usually, the equipment itself serves as primary security. Additional collateral may be required for high-value loans or based on credit assessment."
  },
  {
    question: "How long does the approval process take?",
    answer: "With complete documentation, equipment finance approval typically takes 5-7 working days, and disbursement happens within 2-3 days post-approval."
  },
  {
    question: "Can I prepay the equipment loan?",
    answer: "Yes, prepayment is allowed after a minimum period (usually 6-12 months). Prepayment charges may apply as per lender's policy."
  },
  {
    question: "What happens if equipment becomes obsolete?",
    answer: "You remain liable for loan repayment regardless of equipment condition. It's advisable to choose equipment with good resale value and opt for technology upgrade clauses."
  }
]

export default function EquipmentFinancePage() {
  const heroData = {
    badge: "Equipment Finance Services",
    title: "Equipment Finance Solutions",
    subtitle: "Transform Your Business with Modern Equipment",
    description: "Get competitive financing for machinery, vehicles, and technology with flexible repayment options. ✔Quick Approval ✔Up to 90% Financing ✔Competitive Rates ✔Minimal Documentation ✔Flexible Tenure ✔Expert Support",
    rating: {
      score: "4.8/5",
      reviews: "(1500+ Equipment Financed)"
    },
    features: [
      "Interest Rates from 10.5%",
      "Up to 90% Equipment Value",
      "Quick Processing",
      "Minimal Documentation",
      "Flexible Tenure",
      "Expert Support"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Consultation",
      consultationDescription: "Complete equipment finance assistance"
    },
    trustIndicators: [
      {
        title: "1500+ Equipment",
        subtitle: "Successfully Financed"
      },
      {
        title: "25+ Lenders",
        subtitle: "Partner Network"
      }
    ],
    form: {
      title: "Get Equipment Finance Quote",
      subtitle: "Expert Assistance & Best Rates",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Equipment Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select equipment type",
        state: "Choose your state"
      },
      button: "Get Equipment Finance Quote",
      note: "Our equipment finance experts will contact you within 30 minutes",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for equipment finance consultation"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero heroData={heroData} />

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Overview Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Finance Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Equipment finance is a specialized business loan designed to help you acquire machinery, vehicles, 
              technology, and other essential equipment without depleting your working capital.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanFeatures.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Equipment Types */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Types We Finance</h2>
            <p className="text-lg text-gray-600">
              From heavy machinery to advanced technology, we provide financing solutions for all types of business equipment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-blue-600">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
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
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Finance Process</h2>
            <p className="text-lg text-gray-600">
              Simple and streamlined process to get your equipment financed quickly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industry Support */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Specialized equipment financing solutions across diverse industry sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySupport.map((industry, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lender Partners */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center flex items-center justify-center">
                <Users className="mr-3 h-6 w-6 text-blue-600" />
                Our Lending Partners
              </CardTitle>
              <CardDescription className="text-center">
                We work with leading banks and NBFCs to offer you the best equipment finance options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {lenderPartners.map((partner, index) => (
                  <Badge key={index} variant="outline" className="justify-center p-3 text-center">
                    {partner}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits & Warnings */}
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
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
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
                {warnings.map((warning, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{warning}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">Get Equipment Finance Today</CardTitle>
              <CardDescription className="text-center text-lg">
                Ready to finance your business equipment? Contact our experts for personalized assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <span className="font-semibold">Call Us</span>
                  <span className="text-gray-600">+91-XXXX-XXXX-XX</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="h-8 w-8 text-blue-600" />
                  <span className="font-semibold">Email Us</span>
                  <span className="text-gray-600">info@theexpertindia.com</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <span className="font-semibold">Visit Us</span>
                  <span className="text-gray-600">Multiple Locations</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ 
          title="Equipment Finance FAQ"
          subtitle="Get answers to common questions about equipment finance, interest rates, and application process"
          faqs={faqData}
          ctaTitle="Ready to Finance Your Equipment?"
          ctaDescription="Get competitive equipment finance solutions tailored to your business needs. Apply now for quick approval and competitive rates."
        />
      </div>
    </div>
  )
}
