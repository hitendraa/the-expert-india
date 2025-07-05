import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertTriangle, Clock, DollarSign, Shield, Users, FileText, Building, Target, Award, TrendingUp } from 'lucide-react'
import ServiceHero from '@/components/common/ServiceHero'
import ServiceFAQ from '@/components/common/ServiceFAQ'
import { SITE_FULL_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Project Financing | Infrastructure & Business Project Loans | The Expert India',
  description: 'Get project financing for infrastructure, manufacturing, and business expansion projects. Competitive rates, flexible terms, and expert guidance for large-scale investments.',
  keywords: [
    'project financing',
    'infrastructure loan',
    'business project loan',
    'project funding',
    'capital investment',
    'expansion financing',
    'infrastructure finance',
    'project loan'
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

const projectTypes = [
  {
    icon: <Building className="h-8 w-8 text-blue-600" />,
    title: "Infrastructure Projects",
    description: "Roads, bridges, power plants, water treatment facilities, and public infrastructure development."
  },
  {
    icon: <Target className="h-8 w-8 text-green-600" />,
    title: "Manufacturing Projects",
    description: "New manufacturing units, production line expansion, industrial plant setup, and capacity enhancement."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    title: "Business Expansion",
    description: "Office expansion, retail outlets, warehouses, distribution centers, and commercial real estate."
  }
]

const keyFeatures = [
  {
    icon: <DollarSign className="h-6 w-6 text-green-600" />,
    title: "High Funding Amount",
    description: "Project financing from ₹10 crores to ₹500+ crores"
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "Long Tenure",
    description: "Repayment tenure up to 15-20 years for infrastructure projects"
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    title: "Flexible Structure",
    description: "Customized financing structure based on project cash flows"
  },
  {
    icon: <Users className="h-6 w-6 text-orange-600" />,
    title: "Expert Advisory",
    description: "Dedicated project finance team with sector expertise"
  }
]

const eligibilityCriteria = [
  "Detailed project report with feasibility study",
  "Promoter contribution minimum 25-30%",
  "Experienced management team with track record",
  "Environmental and regulatory approvals",
  "Tie-up agreements for raw materials and off-take",
  "Financial projections and cash flow analysis"
]

const requiredDocuments = [
  "Comprehensive project report",
  "Financial projections and cash flow statements",
  "Environmental clearance certificates",
  "Land documents and approvals",
  "Technology agreements and contracts",
  "Promoter financial statements and KYC",
  "Banking history and credit reports",
  "Insurance coverage details"
]

const processSteps = [
  {
    step: "01",
    title: "Project Assessment",
    description: "Detailed evaluation of project viability, technical feasibility, and financial projections."
  },
  {
    step: "02",
    title: "Due Diligence",
    description: "Comprehensive due diligence covering technical, financial, legal, and environmental aspects."
  },
  {
    step: "03",
    title: "Structuring",
    description: "Design optimal financing structure considering project cash flows and risk factors."
  },
  {
    step: "04",
    title: "Approval & Documentation",
    description: "Credit approval, legal documentation, and security arrangements completion."
  }
]

const benefits = [
  "Large-scale funding for ambitious projects",
  "Flexible repayment linked to project cash flows",
  "Expert guidance throughout project lifecycle",
  "Access to consortium lending arrangements",
  "Competitive interest rates for viable projects",
  "Support for infrastructure and manufacturing sectors"
]

const considerations = [
  "Detailed project documentation required",
  "Longer approval timelines due to complexity",
  "Promoter contribution and guarantees necessary",
  "Project completion and performance risks",
  "Regulatory compliance throughout project tenure",
  "Market and technology risk assessments"
]

const faqData = [
  {
    question: "What is the minimum project size for project financing?",
    answer: "Typically, project financing is available for projects worth ₹10 crores and above, though this can vary based on the sector and project complexity."
  },
  {
    question: "How long does the project financing approval process take?",
    answer: "The approval process usually takes 3-6 months depending on project complexity, documentation completeness, and due diligence requirements."
  },
  {
    question: "What promoter contribution is required?",
    answer: "Most lenders require a minimum promoter contribution of 25-30% of the total project cost, which can be in the form of equity or quasi-equity."
  },
  {
    question: "Can greenfield projects get financing?",
    answer: "Yes, both greenfield (new) and brownfield (expansion) projects can be financed, though greenfield projects may require more detailed feasibility studies."
  },
  {
    question: "What sectors are covered under project financing?",
    answer: "Project financing covers infrastructure, power, manufacturing, healthcare, education, hospitality, and other capital-intensive sectors."
  },
  {
    question: "Is collateral required for project financing?",
    answer: "Yes, project financing typically requires comprehensive security including project assets, promoter guarantees, and sometimes additional collateral."
  }
]

export default function ProjectFinancingPage() {
  const projectOptions = [
    "Infrastructure Development",
    "Manufacturing Unit", 
    "Power Project",
    "Real Estate Development",
    "Healthcare Facility",
    "Educational Institution",
    "Hospitality Project",
    "Other"
  ];

  const heroData = {
    badge: "Project Financing Services",
    title: "Project Financing Solutions",
    subtitle: "Fund Your Large-Scale Business Projects",
    description: "Secure financing for infrastructure, manufacturing, and expansion projects with customized solutions. ✔High Funding Amount ✔Flexible Terms ✔Expert Advisory ✔Long Tenure ✔Competitive Rates ✔Sector Expertise",
    rating: {
      score: "4.9/5",
      reviews: "(500+ Projects Financed)"
    },
    features: [
      "₹10+ Crores Funding",
      "15-20 Years Tenure",
      "Flexible Structure",
      "Expert Advisory",
      "Competitive Rates",
      "Sector Expertise"
    ],
    pricing: {
      consultation: "FREE",
      consultationLabel: "Project Consultation",
      consultationDescription: "Complete project finance guidance"
    },
    trustIndicators: [
      {
        title: "500+ Projects",
        subtitle: "Successfully Financed"
      },
      {
        title: "₹5000+ Cr",
        subtitle: "Total Funding Arranged"
      }
    ],
    form: {
      title: "Get Project Financing Quote",
      subtitle: "Expert Assistance for Large Projects",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number", 
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Project Type"
      },
      placeholders: {
        name: "Enter your full name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select project type",
        state: "Choose your state"
      },
      button: "Get Project Finance Quote",
      note: "Our project finance experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for project finance consultation"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        heroData={heroData}
        selectOptions={projectOptions}
        selectFieldType="hearAbout"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Overview Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Financing Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Project financing is specialized funding for large-scale capital investments, where the project&apos;s 
              cash flows serve as the primary source of repayment and the project assets act as collateral.
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

        {/* Project Types */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Projects We Finance</h2>
            <p className="text-lg text-gray-600">
              Comprehensive financing solutions for diverse project categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
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

        {/* Eligibility & Documents */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                  Eligibility Requirements
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
                  Required Documentation
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Financing Process</h2>
            <p className="text-lg text-gray-600">
              Structured approach to evaluate and finance your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
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
                  <AlertTriangle className="mr-3 h-6 w-6 text-orange-600" />
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
          title="Project Financing FAQ"
          subtitle="Get answers to common questions about project financing and application process"
          faqs={faqData}
          ctaTitle="Ready to Finance Your Project?"
          ctaDescription="Transform your vision into reality with our comprehensive project financing solutions. Get expert guidance and competitive funding for your next big project."
        />
      </div>
    </div>
  )
}
