import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import FSSAIOverview from "@/components/services/FSSAIOverview";
import FSSAIBenefits from "@/components/services/FSSAIBenefits";
import FSSAIPenalties from "@/components/services/FSSAIPenalties";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import FSSAIEligibility from "@/components/services/FSSAIEligibility";
import CTA from "@/components/common/CTA";

export default function FSSAIRegistrationPage() {
  const heroData = {
    badge: "FSSAI Food License Registration",
    title: "Our Expert consultation will help you to get the food licence from the Government",
    subtitle: "",
    description: "FSSAI News Update: Food Businesses Can Now Be Fined Rs. 5 Lakh & 6 Months Jail for Not Having Food License. FoSCos registration or license is required for all entities involved in the manufacture, distribution and transportation of food products. ✔Support all states ✔3 Types of License: Local, State & Central ✔Application in Same (Priority) ✔10yrs Experienced FoSCos Expert ✔Lowest Fees than Other Portals",
    rating: {
      score: "4.9/5",
      reviews: "(2000+ Reviews)"
    },
    features: [
      "Support all states",
      "3 Types of License",
      "10yrs Experienced Expert",
      "Lowest Fees"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert advice from Food License Expert"
    },
    trustIndicators: [
      {
        title: "Rs. 5 Lakh",
        subtitle: "Fine for Non-compliance"
      },
      {
        title: "6 Months",
        subtitle: "Jail Term Risk"
      }
    ],
    form: {
      title: "Need Consultation & Legal Support regarding FSSAI/ FoSCos Food License Registration?",
      subtitle: "Apply Now",
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
      button: "Get Expert Consultation",
      note: "*Get your food license approved with expert guidance",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const pricingPlans = [
    {
      id: "basic",
      title: "Basic FSSAI Registration",
      price: "₹1999",
      recommended: true,
      features: [
        "For annual turnover less than Rs. 12 Lakhs",
        "Valid for 1 year",
        "Expert consultation",
        "Complete documentation",
        "Government fees included",
        "Online application processing"
      ],
      excludes: [],
      note: "Valid for 1 year (Other durations: 2yr-₹2499, 3yr-₹2999, 4yr-₹3499, 5yr-₹3999)"
    },
    {
      id: "state",
      title: "State FSSAI License",
      price: "₹3499",
      recommended: false,
      features: [
        "For annual turnover Rs. 12 Lakhs - Rs. 20 Crores",
        "Valid for 1 year",
        "Expert consultation and filing",
        "Complete documentation support",
        "State authority processing",
        "Compliance guidance"
      ],
      excludes: ["Government fees (additional)"]
    },
    {
      id: "central",
      title: "Central FSSAI License",
      price: "₹4499",
      recommended: false,
      features: [
        "For annual turnover more than Rs. 20 Crores",
        "Valid for 1 year",
        "Expert consultation and filing",
        "Complete documentation support",
        "Central authority processing",
        "Import-export eligible",
        "Multi-state operations"
      ],
      excludes: ["Government fees (additional)"]
    }
  ];

  const faqData = [
    {
      question: "What is the full form of FSSAI?",
      answer: "The full form of FSSAI is the Food Safety and Standards Authority of India."
    },
    {
      question: "What is FoSCos?",
      answer: "Food Safety Compliance System (FoSCoS) is built using latest technology with a vision to have modern one stop pan-India IT platform for food safety regulatory needs, its launched by FSSAI. FoSCoS shall also be integrated with other platforms of Government of India such as GST, PAN, MCA etc. further ease out the processes for businesses and also ensure a 360 degree profiling of businesses."
    },
    {
      question: "Why Register Under FSSAI and get FoSCos License?",
      answer: "The FSSAI Registration is the legal process for all Food Business Operators (FBOs) in India to apply for getting the certificate that the available sold food is safe for human consumption."
    },
    {
      question: "What are the types of FoSCos Food Licenses?",
      answer: "Based on the annual turnover of the food business, the types of FoSCos Food licenses are: Basic FSSAI Registration - Annual turnover of less than Rs. 12 Lakhs, State FSSAI License - Annual turnover between Rs. 12 Lakhs - Rs. 20 Crores, Central FSSAI License - Annual turnover more than Rs. 20 Crores."
    },
    {
      question: "What is the validity period for the FSSAI FoSCos License?",
      answer: "The FSSAI FoSCos License is valid for the period from 1 to 5 years. Hereafter, the particular FBO needs to apply for FSSAI License renewal."
    },
    {
      question: "Do I need to issue a different FoSCos License for the different states?",
      answer: "Yes, you have to take a Central FSSAI license for the main branch or head office and the State FSSAI licenses for any specific state. To assure a stable food business operation across the various states of the country."
    },
    {
      question: "I am planning to sell some Homemade food items online on a small scale, do I need to get a FSSAI enabled FoSCos License?",
      answer: "Yes. You require having an FSSAI registration to sale homemade stuff on an online platform particularly if your business is on a small scale, and the annual turnover is among 0-12 Lakhs."
    },
    {
      question: "What will happen if I forget to renew my Food License?",
      answer: "In case of forgetting to make a renewal of a food license, you have to pay a penalty of Rs. 100 per day within the specified validity time. Following that, your existing food license can be cancelled and need to apply for a fresh license."
    },
    {
      question: "Is the FoSCos license needed for a catering business authorized by the Central Government?",
      answer: "It is mandatory for all catering establishments in India. Even the Indian Railways, Defense units, and Airports require this license as well."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <FSSAIOverview />
      <FSSAIBenefits />
      <FSSAIPenalties />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="outline"
            title="Don't Risk Rs. 5 Lakh Fine & 6 Months Jail"
            description="Get your FSSAI Food License registered with our expert consultation to avoid penalties and legal issues"
            primaryButton="Get FSSAI License"
            secondaryButton="Call Expert"
            badge="Urgent Notice"
          />
        </div>
      </section>

      <RequiredDocuments />
      <FSSAIEligibility />
      <ServicePricing
        title="FSSAI License Packages"
        subtitle="Choose the right FSSAI license based on your business turnover"
        plans={pricingPlans}
        note="* Government fees included in Basic plan only"
      />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about FSSAI Food License registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
