import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import PublicCompanyOverview from "@/components/services/PublicCompanyOverview";
import PublicCompanyRequirements from "@/components/services/PublicCompanyRequirements";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import PublicCompanyAdvantages from "@/components/services/PublicCompanyAdvantages";
import PublicCompanyComparison from "@/components/services/PublicCompanyComparison";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Public Limited Company Registration | Incorporate PLC | The Expert India',
  description: 'Register your Public Limited Company in India with expert CA/CS assistance. Complete documentation, filing, and ROC follow-up support for public company incorporation.',
  keywords: [
    'public limited company registration',
    'public limited company incorporation',
    'PLC registration',
    'public company formation',
    'public company incorporation',
    'unlisted public company',
    'listed company registration',
    'company incorporation services'
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

export default function PublicLimitedCompanyPage() {
  const heroData = {
    badge: "Public Limited Company Registration",
    title: "Online Public Limited Company Registration in India",
    subtitle: "Transparent & Lowest Pricing",
    description: "Get relaxed! Keep planning for your business growth & let India's recommended team of CA/CS register your Public Limited Company with extended assistance on Documentation, Preparation, Filing and subsequent Follow-ups with ROC & the MCA.",
    rating: {
      score: "4.9/5",
      reviews: "(800+ Reviews)"
    },
    features: [
      "Expert CA/CS Team",
      "ROC & MCA Follow-ups",
      "Complete Documentation",
      "Lowest Pricing"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert advice from CA/CS"
    },
    trustIndicators: [
      {
        title: "Min ₹5 Lakh",
        subtitle: "Authorized Capital"
      },
      {
        title: "7+ Members",
        subtitle: "Required"
      }
    ],
    form: {
      title: "Need Help with Public Limited Company Registration?",
      subtitle: "Fill Up the below Mentioned Form",
      fields: {
        name: "Name *",
        mobile: "Mobile *",
        email: "Email *",
        state: "State *"
      },
      placeholders: {
        name: "Your Name",
        mobile: "Your Phone Number (Without 0 or +91)",
        email: "Your Email Address",
        state: "State"
      },
      button: "Get Expert Consultation",
      note: "*Once you are Ready to Setup your Dream Company, you'll receive Rs 999 adjustment from your selected package from us",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const pricingPlans = [
    {
      id: "consultation",
      title: "Consultation Fee",
      price: "₹999",
      recommended: false,
      features: [
        "Expert advice from Highly Experienced CA/CS",
        "Complete guide for registration",
        "Process explanation",
        "Required Documents guidance",
        "Benefits and Tax Legal Compliance",
        "Timeframe details"
      ],
      excludes: []
    },
    {
      id: "basic",
      title: "BASIC",
      price: "₹16899",
      recommended: true,
      features: [
        "Registration of Public Limited company",
        "CIN",
        "MCA processing",
        "Spice +Part A, Spice +Part B",
        "Allotment of 3 DIN",
        "Current account opening in the nearest branch",
        "MOA & AOA Drafting"
      ],
      excludes: []
    },
    {
      id: "smart",
      title: "SMART",
      price: "₹39899",
      recommended: false,
      features: [
        "Register your Public Limited Company at Ministry of Corporate Affairs",
        "Drafting & Filing by CA/CS",
        "Expert advice by CA/CS",
        "MCA processing and CIN",
        "Company MOA, AOA",
        "Allotment of 3 DINs",
        "The 1st Board Resolution documentation",
        "Consent Letter drafting",
        "ADT-1 appointment of the Auditor"
      ],
      excludes: []
    },
    {
      id: "mega",
      title: "MEGA",
      price: "₹49899",
      recommended: false,
      features: [
        "Everything in Smart Plan",
        "Trademark filing",
        "Appointment of Auditor",
        "Financial Statements preparation",
        "MCA Annual Return filing"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "Which Act oversees the registration process for a Public Limited Company?",
      answer: "The Companies Act, 2013 of the Indian Govt. regulates and oversees the registration procedure for a Public Limited company. In addition, the Registrar of Companies (ROC) regulates the process with the Ministry of Corporate Affairs (MCA)."
    },
    {
      question: "Can a Public Limited Company in India raise its capital from the Stock Market?",
      answer: "Definitely! A Public Limited company can enroll itself in several stock exchanges in India and raise its capital from the stock market itself."
    },
    {
      question: "To register a Public Limited company, is there any requirement regarding the minimum paid up capital?",
      answer: "The key condition while registering a Public Limited company is the minimum paid-up share capital of Rs. 5 Lakhs. Though, it has been repealed by the Companies (Amendment) Act, 2015 of the Indian Govt."
    },
    {
      question: "In India, what are the Liabilities of a Public Limited Company?",
      answer: "A Public Limited Company's key liability lies on keeping transparency of its business operation and the flow of its funds. The organization is required to regularly publish the Audit Reports, Statutory credentials and its Annual Compliances with ROC/MCA, RBI, SEBI, etc."
    },    {
      question: "Do I need to be present physically to register a Public Limited Company?",
      answer: `Absolutely not! ${SITE_FULL_NAME}™ provides 360° guidance and professional assistance to complete the Public Company Registration process entirely on our digital platform. You just need a stable internet connection to furnish the documents as said by our CA panel.`
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <PublicCompanyOverview />
      <PublicCompanyRequirements />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="outline"
            title="Before Registering Your Company Directly under Govt. of India"
            description="Avail Consultations from our Experienced CAs @Rs 999! We will help you avail a Business Loan"
            primaryButton="Get Consultation"
            secondaryButton="Call Expert"
            badge="Special Offer"
          />
        </div>
      </section>

      <RequiredDocuments />
      <ServicePricing
        title="Select Packages"
        subtitle="Choose the best plan for your Public Limited Company registration needs"
        plans={pricingPlans}
        note="* Excluding DSC and Govt. Fees"
      />
      <PublicCompanyAdvantages />
      <PublicCompanyComparison />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Public Limited Company registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
