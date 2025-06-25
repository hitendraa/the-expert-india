import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import FSSAIRenewalOverview from "@/components/services/FSSAIRenewalOverview";
import FSSAIBenefits from "@/components/services/FSSAIBenefits";
import FSSAIRenewalPenalty from "@/components/services/FSSAIRenewalPenalty";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import FSSAIEligibility from "@/components/services/FSSAIEligibility";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function FSSAIRenewalPage() {
  const heroData = {
    badge: "FSSAI Food License Renewal",
    title: `Renew Your FSSAI Food License with ${SITE_FULL_NAME}`,
    subtitle: "",
    description: "FSSAI license is mandatory to be renewed before the expiry validity time, otherwise, apply for a new license.",
    rating: {
      score: "4.9/5",
      reviews: "(1800+ Reviews)"
    },
    features: [
      "Quick Renewal Process",
      "Expert Assistance",
      "Penalty Avoidance", 
      "All License Types"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert renewal guidance"
    },
    trustIndicators: [
      {
        title: "Before Expiry",
        subtitle: "Renew in Time"
      },
      {
        title: "Avoid Penalty",
        subtitle: "Rs. 100/Day"
      }
    ],
    form: {
      title: "Need Help with FSSAI Food License Renewal?",
      subtitle: "Fill Up the below Mentioned Form",
      fields: {
        name: "Name",
        mobile: "Mobile",
        email: "Email",
        state: "Select State"
      },
      placeholders: {
        name: "Name",
        mobile: "Mobile (Without 0 or +91)",
        email: "Email",
        state: "State"
      },
      button: "Get Renewal Assistance",
      note: "*Renew before expiry to avoid penalties",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const pricingPlans = [
    {
      id: "basic-renewal",
      title: "Basic FSSAI Renewal",
      price: "₹1999",
      recommended: true,
      features: [
        "For Basic FSSAI Registration renewal",
        "Annual turnover less than Rs. 12 Lakhs",
        "Expert consultation",
        "Complete renewal documentation",
        "Government fees included",
        "Online application processing"
      ],
      excludes: [],
      note: "Valid for 1 year (Other durations: 2yr-₹2499, 3yr-₹2999, 4yr-₹3499, 5yr-₹3999)"
    },
    {
      id: "state-renewal",
      title: "State FSSAI License Renewal",
      price: "₹3499",
      recommended: false,
      features: [
        "For State FSSAI License renewal",
        "Annual turnover Rs. 12 Lakhs - Rs. 20 Crores",
        "Expert consultation and filing",
        "Complete renewal documentation",
        "State authority processing",
        "Compliance support"
      ],
      excludes: ["Government fees (additional)"]
    },
    {
      id: "central-renewal",
      title: "Central FSSAI License Renewal",
      price: "₹4499",
      recommended: false,
      features: [
        "For Central FSSAI License renewal",
        "Annual turnover more than Rs. 20 Crores",
        "Expert consultation and filing",
        "Complete renewal documentation",
        "Central authority processing",
        "Multi-state operations support"
      ],
      excludes: ["Government fees (additional)"]
    }
  ];

  const faqData = [
    {
      question: "What is enforcement of FSS Act, 2006?",
      answer: "Responsibility to ensure compliance of FSSAI Act, 2006 rules and regulations made by the Food Service Operators."
    },
    {
      question: "Is there any provision of transferring FSSAI license?",
      answer: "If a FSSAI license holder is deceased, the license can be shifted to the heir or the legal representative of the dead person. The representative or the family member must apply to the concerned authority to transfer the license in his/her name."
    },
    {
      question: "Do I require FSSAI license if I am selling homemade stuff online on a small scale?",
      answer: "Yes, you do require an FSSAI registration if you have a business on a small scale and the turnover is between 0-12 lakhs."
    },
    {
      question: "What is the penalty for violation of regulations associated with the labeling on food items?",
      answer: "The highest penalty regarding violation of regulations associated with the labeling on food items is up to 10 lakhs."
    },
    {
      question: "Do I need to get Basic FSSAI registration or State or Central license?",
      answer: "FSSAI registration depends on the turnover and the type of business. Usually, if your annual turnover is below Rs 12 lakhs, then you need to acquire Basic Fssai Registration. Else, you need State or Central license."
    },
    {
      question: "What is the validity of my FSSAI Registration/license?",
      answer: "The validity of FSSAI registration varies from 1 to 5 years. A person needs to apply for FSSAI renewal accordingly."
    },
    {
      question: "Under what circumstances they can suspend the license?",
      answer: "If a food service operator fails to abide by an improvement notice, his license may be canceled."
    },
    {
      question: "What is the validity period of License?",
      answer: "According to Regulation 2.1.7 (1) of FSS Regulations 2011, a license shall be valid for a period of 1 to 5 years as chosen by the Food Business Operator. The validity will start from the date of issue of license."
    },
    {
      question: "In which language, labeling particulars need to be declared?",
      answer: "English or Hindi in Devnagari script."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <FSSAIRenewalOverview />
      <FSSAIRenewalPenalty />
      <FSSAIBenefits />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="outline"
            title="Don't Risk Your Business - Renew Before Expiry"
            description="Avoid Rs. 100/day penalty and business shutdown. Renew your FSSAI license with our expert assistance"
            primaryButton="Renew FSSAI License"
            secondaryButton="Call Expert"
            badge="Urgent Renewal"
          />
        </div>
      </section>

      <FSSAIEligibility />
      <RequiredDocuments />
      <ServicePricing
        title="FSSAI License Renewal Packages"
        subtitle="Choose the right renewal package based on your existing license type"
        plans={pricingPlans}
        note="* Government fees included in Basic renewal only"
      />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about FSSAI Food License renewal"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
