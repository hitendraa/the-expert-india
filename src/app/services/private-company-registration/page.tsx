import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import PrivateCompanyOverview from "@/components/services/PrivateCompanyOverview";
import EligibilitySection from "@/components/services/EligibilitySection";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import AdvantagesSection from "@/components/services/PrivateCompanyAdvantages";
import ComplianceSection from "@/components/services/PrivateCompanyCompliance";
import PrivateCompanyRegistrationProcess from "@/components/services/PrivateCompanyRegistrationProcess";
import PopularServices from "@/components/services/PopularServices";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function PrivateCompanyRegistrationPage() {
  const heroData = {
    badge: "MCA Registered",
    title: "Fastest Private Limited (Pvt. Ltd.)",
    subtitle: "Company Registration In India | Same Day Process",
    description: `Register your startup company as private limited with ${SITE_FULL_NAME} at the lowest Fees. ${SITE_FULL_NAME} is an MCA (Ministry of Corporate Affairs) & MSME registered company in India. Our experienced (10 Yrs+) CA/CS will draft & complete all the documentations on the same day.`,
    rating: {
      score: "4.9/5",
      reviews: "(2000+ Reviews)"
    },
    features: [
      "Same Day Process",
      "CA/CS Expert Team",
      "MCA Registered",
      "10+ Years Experience"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert guidance by CA/CS"
    },
    trustIndicators: [
      {
        title: "150,000+",
        subtitle: "Companies Registered"
      },
      {
        title: "90%",
        subtitle: "Success Rate"
      }
    ],
    form: {
      title: "Need Help with Company Registration?",
      subtitle: "Fill Up the below Mentioned Form",
      fields: {
        name: "Full Name *",
        mobile: "Mobile Number *",
        email: "Email Address *",
        state: "Select State *"
      },
      placeholders: {
        name: "Enter Your Name",
        mobile: "Enter Your Phone",
        email: "Enter Your Email",
        state: "Select State"
      },
      button: "Get Expert Consultation",
      note: "Our expert will call you within 15 minutes",
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
        "Expert advice by CA/CS",
        "Complete guidance",
        "Document review",
        "Process explanation"
      ],
      excludes: []
    },
    {
      id: "startup",
      title: "Start Up Plan",
      price: "₹2999+ Govt. Fee",
      recommended: false,
      features: [
        "Basic registration",
        "MCA filing",
        "DIN & DSC",
        "MOA & AOA drafting"
      ],
      excludes: []
    },
    {
      id: "basic",
      title: "Basic Plan",
      price: "₹7999+ Govt. Fee",
      recommended: true,
      features: [
        "Complete registration",
        "Company PAN & TAN",
        "CA/CS expert handling",
        "Same day processing",
        "All basic compliances"
      ],
      excludes: []
    },
    {
      id: "smart",
      title: "Smart Plan",
      price: "₹16999+ Govt. Fee",
      recommended: false,
      features: [
        "Everything in Basic",
        "ESI & PF registration",
        "Current account opening",
        "Digital signature",
        "Post-incorporation support"
      ],
      excludes: []
    },
    {
      id: "mega",
      title: "Mega Plan",
      price: "₹29999+ Govt. Fee",
      recommended: false,
      features: [
        "Everything in Smart",
        "Trademark registration",
        "FSSAI license",
        "GST registration",
        "Annual compliance"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "What is MOA and AOA?",
      answer: "MOA stands for Memorandum of Association whereas AOA stands for Articles of Association. Both the documents are important sources of information for shareholders and other stakeholders of a Company. MOA is used in providing information regarding Name, Aims, Objectives, registered office address, the clause regarding limited liability, minimum paid-up capital, Share capital of the Company. It helps understand the relationship of a Company with the others. AOAs on the other hand helps provide the necessary documents when the company is incorporated with the Registrar of Companies (ROC). AOA and MOA in conjunction are called the Constitution of the Company."
    },
    {
      question: "Can OPC be converted to Private Limited Company?",
      answer: "The One Person Company (OPC) may be transformed right into a Private Limited Company (PLC) as per Section 18 of the Companies Act, 2013 and the provisions of Companies (Incorporation) Rules of 2014. The conversion of OPC right into a private limited company will now no longer have an effect on the prevailing debts, liabilities, duties or contracts of the OPC. The necessities which are important for the conversion of OPC are changes withinside the Memorandum of Association (MOA) and Articles of Association (AOA) of the OPC."
    },
    {
      question: "Is company registration free in India?",
      answer: "The Ministry of corporate affairs (MCA), Government of India reduced the fee for registering a private limited company, but you cannot register your business for free. The charges are minimal but they are not free."
    },
    {
      question: "Why do companies get rejected during registration?",
      answer: "The registration of a company is a scrutinizing process and thus there are few companies that get rejected under certain rules. Some of the rules are: The name does not align with the principles or objectives of the company, A translated name of a reputed brand name, Phonetic resemblance to an existing company, Includes words that are offensive to any community. These are some of the major points out of many other points of rejection."
    },
    {
      question: "What are the types of company registrations available in India?",
      answer: "There are various types of company registrations that are available in India that one can register for: One Person Company (OPC), Private Limited Company, Public Limited Company, Limited Liability Partnership (LLP), Non-Profit Organizations."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <PrivateCompanyOverview />
      <EligibilitySection />
      <RequiredDocuments />
      <ServicePricing
        title="Our Professional Fees"
        subtitle="Choose the best plan for your company registration needs"
        plans={pricingPlans}
        note="All plans include expert CA/CS guidance and complete documentation support"
      />
      <AdvantagesSection />
      <ComplianceSection />
      <PrivateCompanyRegistrationProcess />
      <PopularServices />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Private Limited Company registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
