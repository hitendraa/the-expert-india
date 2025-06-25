import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import OPCOverview from "@/components/services/OPCOverview";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import OPCAdvantages from "@/components/services/OPCAdvantages";
import OPCComparison from "@/components/services/OPCComparison";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function OnePersonCompanyPage() {
  const heroData = {
    badge: "OPC Registration Services",
    title: "One Person Company (OPC) Registration",
    subtitle: "Online Process",
    description: `Register a one person company registration online in India within 7 – 10 days. Get expert help from ${SITE_FULL_NAME} in OPC registration.`,
    rating: {
      score: "4.9/5",
      reviews: "(1200+ Reviews)"
    },
    features: [
      "7-10 Days Process",
      "Expert CA/CS Team",
      "Online Registration",
      "Single Person Company"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert advice from CA/CS"
    },
    trustIndicators: [
      {
        title: "7-10 Days",
        subtitle: "Processing Time"
      },
      {
        title: "Only 1 Person",
        subtitle: "Required"
      }
    ],
    form: {
      title: "Need Help with One Person Company Registration?",
      subtitle: "Fill Up the below Mentioned Form",
      fields: {
        name: "Your Name *",
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
      title: "Basic Plan",
      price: "₹3999",
      recommended: true,
      features: [
        "Register your One Person Company at Ministry of Corporate Affairs",
        "Drafting & Filing by CA/CS",
        "Expert advice by CA/CS",
        "MCA processing and CIN",
        "Spice+ Part A, Spice + Part B",
        "Company PAN & TAN",
        "MOA & AOA",
        "Allotment of 1 DIN",
        "ESI and PF registration",
        "Current account opening in your nearest branch",
        "GST registration"
      ],
      excludes: []
    },
    {
      id: "smart",
      title: "Smart Plan",
      price: "₹16999",
      recommended: false,
      features: [
        "Everything in Basic Plan",
        "The 1st Board Resolution documentation",
        "Consent Letter drafting",
        "Appointment of the Auditor",
        "INC-20A commencement of business",
        "Financial statements preparation",
        "MCA annual return filing",
        "DIR-3 Director KYC"
      ],
      excludes: []
    },
    {
      id: "mega",
      title: "Mega Plan",
      price: "₹27999",
      recommended: false,
      features: [
        "Everything in Smart Plan",
        "1 Trademark Application",
        "Income tax return filing",
        "GST Return filing for 12 months"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "What is a one person company?",
      answer: "One Person Company is a category of company where the shareholder is a single person. These companies are created when the founder or owner is a single individual. The owner is not liable to the losses incurred by the company"
    },
    {
      question: "How long will it take to incorporate a One Person Company?",
      answer: `${SITE_FULL_NAME} can incorporate a One Person Company in 7-15 days. The time taken for incorporation will depend on submission of relevant documents by the client and speed of Government Approvals. To ensure speedy incorporation, please choose a unique name for your Company and ensure you have all the required documents prior to starting the incorporation process.`
    },
    {
      question: "What is the minimum number of a director to form OPC?",
      answer: "As the name suggests, a One Person Company can be started with one director."
    },
    {
      question: "Who is a nominee in a One Person Company?",
      answer: "A nominee is a person who in the event of death or disability of the subscriber of the One Person Company shall assume his position. Memorandum of Association of a One Person Company will mandatorily prescribe the name of the person."
    },
    {
      question: "Can OPC become a member of another private Limited company?",
      answer: "Yes, the Act has not made any restriction for a One Person Company to become a member of another Private Limited Company."
    },
    {
      question: "Is Foreign Direct Investment allowed for One Person Company?",
      answer: "No, FDI is not allowed for One Person Company. You may consider incorporating a Private Limited Company if you desire to bring FDI."
    },
    {
      question: "Whether an OPC can be converted to a Public Limited Company and vice versa?",
      answer: "A One person company can easily be converted to a Public or Private Limited Company."
    },
    {
      question: "What are the requirements to be a Director or Nominee in a OPC?",
      answer: "Only a natural person who is an Indian citizen and a resident in India is eligible to incorporate a One Person Company or be a nominee member. The Director or Nominee must also be over 18 years of age. A person can incorporate upto five One Person Companies."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <OPCOverview />
      
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

      <ServicePricing
        title="Select Packages"
        subtitle="Choose the best plan for your One Person Company registration needs"
        plans={pricingPlans}
        note="All plans include expert CA/CS guidance and complete documentation support"
      />
      <RequiredDocuments />
      <OPCComparison />
      <OPCAdvantages />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about One Person Company registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
