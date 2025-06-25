import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import GSTOverview from "@/components/services/GSTOverview";
import GSTBenefits from "@/components/services/GSTBenefits";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import GSTTypes from "@/components/services/GSTTypes";
import GSTRequirements from "@/components/services/GSTRequirements";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function GSTRegistrationPage() {
  const heroData = {
    badge: "GST Registration Services",
    title: "GST Registration with the Experts of " + SITE_FULL_NAME + " | One Day Process",
    subtitle: "Get 360° Online Assistance from India's recommended Business Taxation Experts",
    description: "Get 360° Online Assistance from India's recommended Business Taxation Experts in GST Registration to Filing the Mandatory GST Returns Annually",
    rating: {
      score: "4.8/5",
      reviews: "(1,200+ Reviews)"
    },
    features: [
      "Expert GST Team",
      "One Day Process",
      "Complete Documentation",
      "Online Assistance"
    ],
    pricing: {
      consultation: "₹799",
      consultationLabel: "Starting From",
      consultationDescription: "GST registration services"
    },
    trustIndicators: [
      {
        title: "1-5 Days",
        subtitle: "Quick Process"
      },
      {
        title: "24/7",
        subtitle: "Expert Support"
      }
    ],
    form: {
      title: "Need Help with GST Registration?",
      subtitle: "Fill Up the below Mentioned Form",
      fields: {
        name: "Applicant Full Name / आवेदक का पूर्ण नाम",
        mobile: "Mobile / मोबाइल",
        email: "Email Address / ईमेल पता",
        state: "State / राज्य"
      },
      placeholders: {
        name: "Applicant Full Name",
        mobile: "98XXXXXXXX (Without 0 or +91)",
        email: "your@gmail.com",
        state: "State"
      },
      button: "Get GST Registration",
      note: "*Get your GST registration completed quickly with our expert assistance",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const pricingPlans = [
    {
      id: "startup",
      title: "Start Up",
      price: "₹799",
      recommended: false,
      features: [
        "Application filing for GSTIN",
        "Generate ARN & TRN number",
        "Call, Chat, Email Support",
        "Personally assigned GST Expert",
        "Consultation Available in 3 Languages including English"
      ],
      excludes: []
    },
    {
      id: "basic",
      title: "Basic",
      price: "₹2,499",
      recommended: true,
      features: [
        "GST Registration absolutely FREE",
        "GST Return Filing for 3 Months",
        "Call, Chat, Email Support",
        "Personally assigned GST Expert",
        "Consultation Available in 3 Languages including English"
      ],
      excludes: []
    },
    {
      id: "standard",
      title: "Standard",
      price: "₹4,999",
      recommended: false,
      features: [
        "GST Registration absolutely FREE",
        "GST Return Filing for 6 Months",
        "Call, Chat, Email Support",
        "Personally assigned GST Expert",
        "Consultation Available in 3 Languages including English"
      ],
      excludes: []
    },
    {
      id: "premium",
      title: "Premium",
      price: "₹7,999",
      recommended: false,
      features: [
        "GST Registration absolutely FREE",
        "GST Return Filing for 12 Months",
        "Call, Chat, Email Support",
        "Personally assigned GST Expert",
        "Consultation Available in 3 Languages including English"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "What is GST?",
      answer: "GST or Goods and Service Tax is a kind of indirect tax for India and applicable on the supply of products and providing of services. It is a comprehensive and multi-staged assessing; comprehensive because it has subsumed all the indirect taxes except a few and multistage because it is implicated at every step within the generation prepare."
    },
    {
      question: "What is the need of GST?",
      answer: "It is a mandate issued by Govt. of India who basically try to save tax and keep oneself from the cascading effect of tax. It is necessary to pay GST for all the tax payers who is registered under GST regime."
    },
    {
      question: "What is the full form of CGST, SGST, IGST?",
      answer: "The full form of CGST– Central Goods and Service Tax | SGST– State Goods and Service Tax | IGST– Integrated Goods and Service Tax"
    },
    {
      question: "What is the difference between CGST, SGST and IGST?",
      answer: "CGST and IGST are levied by Central Govt. and SGST is levied by State Govt. CGST and SGST are paid for Intra-State Supply and IGST is paid for inter-State supply."
    },
    {
      question: "What is the limit to be considered under the GST law?",
      answer: "The limit to be considered under GST law differs on the basis of different categories: Manufacturing Sector – 40 lakhs, Service sector – 20 lakhs, In North Eastern states – 10 lakhs"
    },
    {
      question: "Do I need to visit the GST Department with papers for any purpose?",
      answer: `No, you don't. ${SITE_FULL_NAME} looks after each and every procedure. You don't need to visit any Govt. office. You just have to simply register on our official website and get your GST registration done at ease`
    },
    {
      question: "What is the GST tax rate?",
      answer: "Goods and Services are categorized into five categories of tax slabs for collection of tax- 0%, 5%, 12%, 18% and 28%."
    },
    {
      question: "What are the penalties for not registering under GST?",
      answer: "In case of delay in GST filing, the penalty of Rs. 200/- is charged per day. When GST Return is not filed, then 10% of the due tax will be the penalty amount or Rs. 10000, whichever is earlier. When someone commits fraud, then there will be a penalty which is 100% of the due tax or Rs. 10000 – whichever is earlier."
    },
    {
      question: "What is Composition Scheme?",
      answer: "Composition Scheme is a easy process under the GST law for all the taxpayers who can avoid difficult formalities pay the GST at a fixed rate based on the turnover. The taxpayers, whose revenue is less than Rs. 1.5 crores, can opt for this scheme."
    },
    {
      question: "What is the GST Turnover Limit?",
      answer: "In case of sale of goods, if the business exceeds 40 lakhs, in case of service provider if it exceeds 20 lakhs, and in case of Special category states if it exceeds 10 lakhs, then one has to register for GST."
    },
    {
      question: "Is PAN mandatory for the registration of GST?",
      answer: "PAN is mandatory for general taxpayers and also the casual taxpayers entitled under GST."
    },
    {
      question: "How long does it take to obtain GSTIN?",
      answer: "GSTIN is allotted within 24 hours after submitting GST application with all necessary documents on Govt. portal."
    },
    {
      question: "Do I need to be physically present during the GST registration?",
      answer: `${SITE_FULL_NAME} offers the entire GST Registration service online. You don't need to be physically present during the registration. You only need a device (phone/computer), internet and required documents.`
    },
    {
      question: "When Digital Signature is required for the GST Registration?",
      answer: "DSC is required in case of private limited company, LLP etc. In case of proprietorship firm or partnership firm, DSC is not required."
    },
    {
      question: "Do I need a bank account for the GST registration?",
      answer: "Yes you do need a personal saving account or current account. If you are starting a new business and have a personal saving account, then it can be provided and after the registration is done, you can apply for the new current account depending on the GST certificate."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <GSTOverview />
      <GSTBenefits />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="gradient"
            title="Need Expert Guidance for GST Registration?"
            description="Get professional assistance from our GST experts for quick and hassle-free registration"
            primaryButton="Get Expert Help"
            secondaryButton="Call GST Expert"
            badge="Expert Assistance"
          />
        </div>
      </section>

      <RequiredDocuments />
      <GSTTypes />
      <GSTRequirements />
      <ServicePricing
        title="GST Registration Packages"
        subtitle="Choose the right GST registration plan for your business needs"
        plans={pricingPlans}
        note="* Professional Fees"
      />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about GST registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
