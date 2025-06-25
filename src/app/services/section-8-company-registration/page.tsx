import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import Section8Overview from "@/components/services/Section8Overview";
import Section8Benefits from "@/components/services/Section8Benefits";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import Section8Advantages from "@/components/services/Section8Advantages";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function Section8CompanyPage() {
  const heroData = {
    badge: "Section 8 Company Registration",
    title: "Apply for Section 8 Company Online & Get Approved By Central Govt. Of India",
    subtitle: "",
    description: `Launch Your Section 8 foundation by our Company Registration Experts at ${SITE_FULL_NAME}. With the best CAs/CSs Panel to handhold you through the entire process, the Drafting till Completion - all documentation of a Section 8 Incorporation is on us.`,
    rating: {
      score: "4.9/5",
      reviews: "(600+ Reviews)"
    },
    features: [
      "Expert CA/CS Panel",
      "Complete Documentation",
      "MCA Registration",
      "Non-Profit Setup"
    ],
    pricing: {
      consultation: "₹999",
      consultationLabel: "Consultation Fee",
      consultationDescription: "Expert advice from CA/CS"
    },
    trustIndicators: [
      {
        title: "No Min Capital",
        subtitle: "Required"
      },
      {
        title: "Zero Stamp",
        subtitle: "Duty"
      }
    ],
    form: {
      title: "Need Help with Section 8 Company Registration?",
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
      title: "Basic Plan",
      price: "₹8999",
      recommended: true,
      features: [
        "Register your Section 8 company at Ministry of Corporate Affairs",
        "Drafting & Filing by CA/CS",
        "Expert advice by CA/CS",
        "MCA processing and CIN",
        "RD license",
        "Company PAN & TAN",
        "MOA",
        "AOA",
        "Allotment of 2 DIN",
        "Estimated Income & Expenditure Account for the next 3years (mandatory for Sec-8 company registration)"
      ],
      excludes: []
    },
    {
      id: "smart",
      title: "Smart Plan",
      price: "₹19999",
      recommended: false,
      features: [
        "Everything in Basic Plan",
        "Financial statements preparation",
        "MCA annual return filing",
        "MCA annual return filing and DIR-3 Director KYC",
        "Auditor Appointment"
      ],
      excludes: []
    },
    {
      id: "mega",
      title: "Mega Plan",
      price: "₹29999",
      recommended: false,
      features: [
        "Everything in Smart Plan",
        "Trademark application",
        "Income tax return filing"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "What is a Section 8 Company?",
      answer: "A company is referred to as Section 8 Company when it registered as a Non-Profit Organization (NPO) or Non-Governmental organizations (NGOs) i.e. when it has motive of promoting arts, commerce, education, charity, protection of environment, sports, science, research, social welfare, religion and intends to use its profits (if any) or other income for under section 8(1a, 1b, 1c) of the Companies Act, 2013."
    },
    {
      question: "What are the Required Documents for Section 8 Company Registration?",
      answer: "As per the Companies Act, 2013 of the Indian Govt. the following documents are required while registering a Section 8 company: Photocopy of PAN Card, Photocopy of Aadhaar Card, Address Proof (Bank Statement, Electricity Bill, Telephone Bill), Two passport size Photograph, Ownership Proof House Tax, NOC (From owners if rented)."
    },
    {
      question: "What is the Eligibility to be Incorporated as a Section 8 company?",
      answer: "Any Non-Profit Organization (NPO) can be incorporated as a Sec 8 company that is being associated with: Education, Charity, Arts, Social Welfare, Environmental Protection, Religion, Research, Sports."
    },
    {
      question: "Can a Sec 8 Company be incorporated both as Public & Private Company?",
      answer: "A Sec. 8 company can be incorporated as a Public or Private Company. As per the Companies Act, 2013, it depends on the numbers of responsible people on the board. Private Company: 2 Directors, 2 members Public Company: 3 Directors, 7 members."
    },
    {
      question: "Can a One Person Company (OPC) become a member of a Section-8 Company?",
      answer: "No. Following the legal directives of the Company (Incorporation) Rules, 2014 of the Indian Govt. a One Person Company (OPC) cannot become a member or be associated with a Sec. 8 company."
    },
    {
      question: "To which Ministry of Indian Govt. a Section 8 Company is Registered?",
      answer: "A Sec. 8 company is registered under the Ministry of Corporate Affairs (MCA) of the Indian Govt. Apart from that, a Sec. 8 company is mandated to follow the norms of the Reserve Bank of India (RBI) in the transaction related matters."
    },
    {
      question: "Can Section 8 Companies be a Holding Identity of Another Company?",
      answer: "Yes. A registered Sec 8 Entity under the Companies Act, 2013, can be a holding identity of another company and if needed, can promote the company as well."
    },
    {
      question: "Can Section 8 carry out MicroFinance Activities?",
      answer: "Yes. A registered Sec. 8 company in India can operate microfinance activities. But, as per the provisions of the Reserve Bank of India (RBI), the financial activities should be for the backing of social welfare."
    },
    {
      question: "Is it Mandatory for a Section 8 Company to Appoint an Independent Director?",
      answer: "No. As per the Companies Act, 2013 of the Indian Govt. a Sec. 8 Company is not mandated to appoint an Independent Director."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <Section8Overview />
      <Section8Benefits />
      
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

      <Section8Advantages />
      <RequiredDocuments />
      <ServicePricing
        title="Select Packages"
        subtitle="Choose the best plan for your Section 8 Company registration needs"
        plans={pricingPlans}
        note="* Excluding DSC and Govt. Fees"
      />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Section 8 Company registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
