import { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Heart, Users, FileText, Shield, CheckCircle, TrendingUp, AlertTriangle, Calculator } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'CSR Compliance Services | Corporate Social Responsibility | Section 135 | The Expert India',
  description: 'Ensure complete CSR compliance under Section 135 of the Companies Act, 2013. Expert assistance for policy formulation, project implementation, and regulatory reporting.',
  keywords: [
    'CSR compliance',
    'corporate social responsibility',
    'section 135 compliance',
    'CSR policy',
    'CSR spending',
    'CSR reporting',
    'CSR project implementation',
    'CSR committee'
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

const CSRCompliancePage = () => {
  const heroData = {
    badge: "CSR Compliance Services",
    title: "CSR Compliance Services",
    subtitle: "Corporate Social Responsibility Under Section 135",
    description: "Ensure complete CSR compliance under Section 135 of the Companies Act, 2013. Our experts help you formulate CSR policies, manage spending obligations, and maintain regulatory compliance.",
    rating: {
      score: "4.8/5",
      reviews: "Trusted by corporates"
    },
    features: [
      "CSR Policy Formulation",
      "CSR Committee Formation",
      "Mandatory 2% Spending",
      "Annual Action Plan",
      "Impact Assessment",
      "Compliance Reporting"
    ],
    pricing: {
      consultation: "Contact Us",
      consultationLabel: "For Quote",
      consultationDescription: "Get customized CSR compliance pricing"
    },
    trustIndicators: [
      {
        title: "Expert Consultants",
        subtitle: "CSR Compliance Specialists"
      },
      {
        title: "Full Compliance",
        subtitle: "Zero Penalties"
      }
    ],
    form: {
      title: "Get CSR Compliance Quote",
      subtitle: "Connect with our experts for comprehensive CSR compliance services",
      fields: {
        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",
        state: "Select Your State",
        hearAbout: "Company Type"
      },
      placeholders: {
        name: "Enter your name",
        mobile: "Enter mobile number",
        email: "Enter email address",
        hearAbout: "Select company type",
        state: "Choose your state"
      },
      button: "Get CSR Quote",
      note: "Our CSR experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions and Privacy Policy",
        commsLabel: "I agree to receive calls and SMS for CSR consultation"
      }
    }
  };

  const companyTypes = [
    "Private Limited Company",
    "Public Limited Company",
    "Section 8 Company",
    "Foreign Company",
    "Listed Company",
    "Other"
  ];

  const csrOverview = {
    title: "What is Corporate Social Responsibility?",
    description: "Corporate Social Responsibility (CSR) means the voluntary contributions made by companies to a better society and a cleaner environment. It is a concept whereby companies integrate social and other useful concerns in their business operations for the betterment of their stakeholders and society in general.",
    mandate: "Section 135 of the Companies Act, 2013 provides that certain companies must mandatorily contribute a certain amount towards CSR activities as a statutory obligation."
  };

  const csrApplicability = [
    {
      title: "Net Worth",
      amount: "₹500 Crore+",
      description: "Companies with net worth of more than ₹500 crore",
      icon: Building
    },
    {
      title: "Turnover",
      amount: "₹1000 Crore+",
      description: "Companies with turnover of more than ₹1000 crore",
      icon: TrendingUp
    },
    {
      title: "Net Profit",
      amount: "₹5 Crore+",
      description: "Companies with net profit of more than ₹5 crore",
      icon: Calculator
    }
  ];

  const csrBenefits = [
    {
      title: "Enhanced Public Image",
      description: "CSR improves public image by publicizing efforts towards a better society",
      icon: Heart
    },
    {
      title: "Increased Media Coverage",
      description: "Media visibility throws a positive light on the organization",
      icon: FileText
    },
    {
      title: "Enhanced Brand Value",
      description: "Building socially strong relationships with customers enhances brand value",
      icon: TrendingUp
    },
    {
      title: "Competitive Advantage",
      description: "Companies stand out from competition when involved in community activities",
      icon: Shield
    }
  ];

  const boardResponsibilities = [
    "Approve CSR policy after considering CSR Committee recommendations",
    "Disclose CSR Policy contents on company website",
    "Ensure only activities mentioned in policy are undertaken",
    "Ensure minimum 2% spending of average net profits of preceding three years",
    "Disclose CSR Committee composition in Board's Report",
    "Provide reasons for unspent amount and transfer details",
    "Monitor compliance with CSR provisions"
  ];

  const csrActivities = [
    {
      category: "Poverty & Health",
      activities: [
        "Eradicating poverty, hunger and malnutrition",
        "Promoting health care including preventive health care",
        "Contribution to Swachh Bharat Kosh",
        "Making available safe drinking water"
      ]
    },
    {
      category: "Education & Skills",
      activities: [
        "Improvement in education including special education",
        "Employment strengthening vocation skills",
        "Skill development for children, women, elderly",
        "Livelihood enhancement projects"
      ]
    },
    {
      category: "Gender Equality",
      activities: [
        "Improving gender equality",
        "Setting up homes and hostels for women and orphans",
        "Empowering women",
        "Setting up old age homes and day care centres"
      ]
    },
    {
      category: "Environment",
      activities: [
        "Safeguarding environmental sustainability",
        "Ecological balance and protection of flora and fauna",
        "Conservation of natural resources",
        "Contribution for rejuvenation of river Ganga"
      ]
    },
    {
      category: "Heritage & Culture",
      activities: [
        "Protection of national heritage, art and culture",
        "Restoration of historical buildings and sites",
        "Setting up public libraries",
        "Promotion of traditional arts and handicrafts"
      ]
    },
    {
      category: "Armed Forces",
      activities: [
        "Measures for armed forces veterans and war widows",
        "Support to Central Armed Police Forces veterans",
        "Benefits to dependents including widows",
        "Training and welfare programs"
      ]
    }
  ];

  const csrCommittee = {
    title: "CSR Committee Requirements",
    composition: [
      "Minimum 3 directors (2 for companies with only 2 directors)",
      "At least 1 independent director (where applicable)",
      "Foreign companies: 2 persons including 1 India resident",
      "Must meet at least twice in a year"
    ],
    duties: [
      "Formulate and recommend CSR policy to Board",
      "Recommend amount of expenditure for CSR activities",
      "Monitor CSR policy implementation",
      "Establish transparent monitoring mechanism",
      "Prepare annual action plan in April each year"
    ]
  };

  const complianceProcess = [
    {
      step: "1",
      title: "CSR Committee Formation",
      description: "Constitute CSR Committee with required directors",
      icon: Users,
      details: [
        "Minimum 3 directors (or 2 if only 2 directors)",
        "At least 1 independent director",
        "Meet at least twice per year",
        "Document committee formation"
      ]
    },
    {
      step: "2",
      title: "CSR Policy Development",
      description: "Formulate comprehensive CSR policy",
      icon: FileText,
      details: [
        "Include Schedule VII activities",
        "Define implementation approach",
        "Establish monitoring mechanism",
        "Get Board approval and publish on website"
      ]
    },
    {
      step: "3",
      title: "Annual Action Plan",
      description: "Prepare detailed annual action plan",
      icon: CheckCircle,
      details: [
        "Plan CSR activities for the year",
        "Budget allocation and timelines",
        "Identify implementing agencies",
        "Get Board approval"
      ]
    },
    {
      step: "4",
      title: "Implementation & Reporting",
      description: "Execute CSR activities and maintain compliance",
      icon: Shield,
      details: [
        "Ensure 2% spending obligation",
        "Monitor project implementation",
        "File Form CSR-2 with MCA",
        "Annual reporting in Board's Report"
      ]
    }
  ];

  const penalties = [
    {
      violation: "Company Non-Compliance",
      penalty: "₹1 crore or twice the unspent amount (whichever is less)",
      description: "For failure to comply with CSR spending, transfer or utilization"
    },
    {
      violation: "Officer Default",
      penalty: "₹2 lakh or one-tenth of unspent amount (whichever is less)",
      description: "For officers who default in CSR compliance"
    }
  ];

  const recentAmendments = [
    "CSR Committee exemption for companies with CSR obligation ≤ ₹50 lakhs",
    "Mandatory CFO certification for CSR fund utilization",
    "Filing of Form CSR-2 as addendum to annual filing",
    "Administrative overheads capped at 5% of total CSR expenditure",
    "Impact assessment mandatory for companies with average CSR ≥ ₹10 crore",
    "Excess CSR spending can be set off for 3 subsequent years"
  ];

  const faqs = [
    {
      question: "Which companies need to comply with CSR provisions?",
      answer: "Companies with net worth of ₹500+ crore, turnover of ₹1000+ crore, or net profit of ₹5+ crore in the preceding financial year must comply with CSR provisions under Section 135."
    },
    {
      question: "How much should companies spend on CSR activities?",
      answer: "Companies must spend at least 2% of their average net profits made during the immediately preceding three financial years as per their CSR policy."
    },
    {
      question: "What activities qualify as CSR activities?",
      answer: "Activities specified in Schedule VII of the Companies Act, 2013, including poverty eradication, education, healthcare, environmental sustainability, and other social welfare activities."
    },
    {
      question: "What happens if CSR amount is not spent?",
      answer: "Unspent CSR amount must be transferred to specified funds within 6 months (for non-ongoing projects) or to Unspent CSR Account within 30 days (for ongoing projects)."
    },
    {
      question: "Is CSR Committee mandatory for all companies?",
      answer: "CSR Committee is mandatory for companies covered under Section 135, except where CSR obligation is ≤ ₹50 lakhs (Board can handle functions directly)."
    },
    {
      question: "Can excess CSR spending be carried forward?",
      answer: "Yes, excess CSR spending can be set off against CSR obligation for the immediately succeeding three financial years, subject to compliance conditions."
    },
    {
      question: "What are the penalties for CSR non-compliance?",
      answer: "Companies face penalties up to ₹1 crore or twice the unspent amount (whichever is less), and officers face penalties up to ₹2 lakh or one-tenth of unspent amount."
    },
    {
      question: `How does ${SITE_FULL_NAME} help with CSR compliance?`,
      answer: "We provide end-to-end CSR compliance services including policy formulation, committee formation, annual action plans, implementation support, and regulatory reporting."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ServiceHero 
        heroData={heroData}
        selectOptions={companyTypes}
        selectFieldType="hearAbout"
      />

      {/* CSR Overview Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Heart className="h-4 w-4 mr-2" />
              CSR Overview
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {csrOverview.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {csrOverview.description}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {csrOverview.mandate}
            </p>
          </div>
        </div>
      </section>

      {/* CSR Applicability Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Building className="h-4 w-4 mr-2" />
              Applicability
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              CSR Applicability in India
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CSR provisions apply to companies meeting any of the following criteria in the preceding financial year
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {csrApplicability.map((criteria, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <criteria.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-700">
                    {criteria.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-gray-900 mt-2">
                    {criteria.amount}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Importance and Benefits of CSR
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CSR provides numerous benefits to companies beyond regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {csrBenefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <benefit.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Responsibilities Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Board Responsibilities
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Role of Board of Directors
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Key Board Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {boardResponsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CSR Activities Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
              <Heart className="h-4 w-4 mr-2" />
              Permitted Activities
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Permitted CSR Activities Under Schedule VII
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Companies can undertake activities specified in Schedule VII of the Companies Act, 2013
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {csrActivities.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-700">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Committee Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Users className="h-4 w-4 mr-2" />
              CSR Committee
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {csrCommittee.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  Committee Composition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {csrCommittee.composition.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  Committee Duties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {csrCommittee.duties.map((duty, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{duty}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Process Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Compliance Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step CSR Compliance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive process for ensuring complete CSR compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {complianceProcess.map((process, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 left-6 bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {process.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="flex items-center text-brand-primary">
                    <process.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    {process.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{process.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Penalties
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Fines and Penalties for Non-Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {penalties.map((penalty, index) => (
              <Card key={index} className="shadow-lg border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    {penalty.violation}
                  </CardTitle>
                  <div className="text-xl font-bold text-red-600 mt-2">
                    {penalty.penalty}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{penalty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Amendments Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Recent Updates
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Recent CSR Amendments (2021-2022)
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  Key Amendment Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recentAmendments.map((amendment, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{amendment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about CSR compliance"
        faqs={faqs}
        columns={2}
        ctaTitle="Get CSR Compliance Quote"
        ctaDescription="Ensure complete CSR compliance under Section 135 of the Companies Act. Connect with our experts for comprehensive CSR policy formulation, implementation, and regulatory compliance."
      />
    </div>
  );
};

export default CSRCompliancePage;
