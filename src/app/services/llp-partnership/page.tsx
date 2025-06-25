import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import LLPOverview from "@/components/services/LLPOverview";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import LLPAdvantages from "@/components/services/LLPAdvantages";
import LLPComparison from "@/components/services/LLPComparison";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function LLPPartnershipPage() {
  const heroData = {
    badge: "LLP Registration Services",
    title: "Fast LLP Registration Services",
    subtitle: "In India",
    description: `Apply for LLP Registration Online at lowest fees in India by ${SITE_FULL_NAME}. Easy Process and Documentation. Register for Limited Liability Partnership Now!`,
    rating: {
      score: "4.9/5",
      reviews: "(1500+ Reviews)"
    },
    features: [
      "Easy Process",
      "Expert Documentation",
      "Lowest Fees",
      "Fast Registration"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert advice from CA/CS"
    },
    trustIndicators: [
      {
        title: "12-15 Days",
        subtitle: "Processing Time"
      },
      {
        title: "No Min Capital",
        subtitle: "Required"
      }
    ],
    form: {
      title: "Need Help with LLP Partnership Registration?",
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
        "Expert advice from Highly Experienced CA/CS",
        "Complete guide for registration",
        "Process explanation",
        "Required Documents guidance",
        "Benefits and Tax compliance info",
        "Timeframe details"
      ],
      excludes: []
    },
    {
      id: "basic",
      title: "Basic",
      price: "₹5499",
      recommended: true,
      features: [
        "Registering a LLP with Ministry of Corporate affairs",
        "LLPIN",
        "PAN",
        "TAN",
        "MCA processing",
        "FILIP",
        "Allotment of 2 DPIN",
        "GST registration"
      ],
      excludes: []
    },
    {
      id: "smart",
      title: "Smart",
      price: "₹14999",
      recommended: false,
      features: [
        "Everything in Basic",
        "Income tax return filing",
        "Form 11 (Annual return of LLP)",
        "Form 8 (Statement of Accounts)",
        "DIR-3 eKYC of Directors"
      ],
      excludes: []
    },
    {
      id: "mega",
      title: "Mega",
      price: "₹24999",
      recommended: false,
      features: [
        "Everything in Smart",
        "Trademark application",
        "12 months filing of GST return",
        "DIR-3 eKYC of Directors"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "Which Act of the Indian Govt. oversees the LLP registration process in the country?",
      answer: "The Limited Liability Partnership (LLP) registration in India is overseen by the provisions of the Limited Liability Partnership Act, 2008 with the guidelines of the Ministry of Corporate Affairs (MCA)."
    },
    {
      question: "Can a LLP get foreign investors?",
      answer: "Definitely! The registered LLPs in India can legally allure the foreign investments from the angel investors. As per the experts, it is one of the biggest benefits to incorporate a LLP in the country."
    },
    {
      question: "How much time does it take to register a LLP in India?",
      answer: `Generally, the authority takes around 12-15 days to complete the registration process of a LLP. The expert CA panel of ${SITE_FULL_NAME} always makes an effort to get done with the procedure within the given timeline.`
    },
    {
      question: "What is the minimum requirement of capital to register a LLP?",
      answer: "Unlike the other formats of company registration, there is no minimum capital requirement to incorporate a LLP in India. As per the market experts, this is one of the notable beneficial approaches for registering a LLP."
    },
    {
      question: "Can a LLP be a partner in another LLP?",
      answer: "Yes. A LLP can be partner in another LLP as it is formed as a separate legal entity as per the provisions of the Limited Liability Partnership Act, 2008."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <LLPOverview />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="outline"
            title="Before Registering Your Company Directly under Govt. of India"
            description="Avail Consultations from our Experienced CAs @Rs 999! We will help you avail a Business Loan. *Once you are Ready to Setup your Dream Company, you'll receive Rs 999 adjustment from your selected package from us"
            primaryButton="Get Consultation"
            secondaryButton="Call Expert"
            badge="Special Offer"
          />
        </div>
      </section>

      <RequiredDocuments />
      <ServicePricing
        title="Select Packages"
        subtitle="Choose the best plan for your LLP registration needs"
        plans={pricingPlans}
        note="* Excluding DSC and Govt. Fees"
      />
      <LLPComparison />
      <LLPAdvantages />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about LLP Partnership registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
