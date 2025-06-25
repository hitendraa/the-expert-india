import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import IECOverview from "@/components/services/IECOverview";
import IECRequirements from "@/components/services/IECRequirements";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import IECBenefits from "@/components/services/IECBenefits";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function IECRegistrationPage() {
  const heroData = {
    badge: "Import Export Code Registration",
    title: "Apply for Import Export Code (IEC) Online",
    subtitle: "Register with DGFT - Government of India",
    description: `Apply for Import Export Code (IEC) Online with the help of ${SITE_FULL_NAME}. Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India. IEC expert of ${SITE_FULL_NAME}™ will file with the DGFT office on your behalf.`,
    rating: {
      score: "4.9/5",
      reviews: "(1,000+ Reviews)"
    },
    features: [
      "DGFT Approved Process",
      "Expert IEC Filing",
      "Quick Processing",
      "Government Compliant"
    ],
    pricing: {
      consultation: "₹1,999",
      consultationLabel: "Professional Fees",
      consultationDescription: "Complete IEC registration support"
    },
    trustIndicators: [
      {
        title: "1-5 Days",
        subtitle: "Processing Time"
      },
      {
        title: "Lifetime Validity",
        subtitle: "Once Obtained"
      }
    ],
    form: {
      title: "Apply for Consultancy & Legal support with Import Export License (IEC) Registration",
      subtitle: "Get expert assistance for your IEC registration",
      fields: {
        name: "Name *",
        mobile: "Mobile Number *",
        email: "Email Address *",
        state: "Select State *"
      },
      placeholders: {
        name: "Your Name",
        mobile: "Your Phone Number (Without 0 or +91)",
        email: "Your Email Address",
        state: "State"
      },
      button: "Get Expert Consultation",
      note: "*Get professional assistance from our IEC experts",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const pricingPlans = [
    {
      id: "iec-registration",
      title: "IEC Registration",
      price: "₹1,999",
      recommended: true,
      features: [
        "Complete IEC Application Filing",
        "DGFT Registration Process",
        "Expert Documentation Support",
        "Online Form Submission",
        "Professional Fee Included",
        "Government Fee Support (₹500 Extra)",
        "1-5 Working Days Processing"
      ],
      excludes: [
        "Government fees (₹500 additional)",
        "DSC if required"
      ]
    }
  ];

  const faqData = [
    {
      question: "What Is IEC Code?",
      answer: "IEC (Import Export Code) is mandatory for anyone who is looking to start his/her import/export business in India. It is issued by the DGFT (Director General of Foreign Trade). IEC is a 10-digit code which has lifetime validity."
    },
    {
      question: `How to Apply For IEC Code through ${SITE_FULL_NAME}?`,
      answer: `The application process for getting an IEC Code is very easy and convenient. Just follow the steps and complete the process of getting IEC Code:
      • Fill the form & make the payment – Registration Form
      • Get in touch with our IEC experts
      • Complete all the documents related compliance requirements
      • Get your IEC Code in just a single day`
    },
    {
      question: "What Documents Are Required To Get IEC Code Online?",
      answer: "• Photograph of the applicant\n• Copy PAN Card\n• Bank certificate/cancelled cheque\n• A copy of Aadhar/Voter ID\n• Address proof of the office premise"
    },
    {
      question: "What Is The Fee Applicable For IEC Code?",
      answer: "Professional Fee Rs. 1999 (If your aadhaar is linked with your mobile or if you have DSC)\nIf your mobile number is not linked with aadhaar then you must have DSC (Digital Signature Certificate) –\nA nominal fee of Rs. 500 is paid to the government."
    },
    {
      question: "How Many Days It Will Take To Get IEC Code Online?",
      answer: "It generally takes only 1 day to get your Import Export Code/IEC License. But in certain cases, it may take another day since it is based on final approval from DGFT. So it takes 1-5 working days to get your Import Export License registration certificate."
    },
    {
      question: "Can I Import Without IEC Code Registration?",
      answer: "No, you cannot import legally if you do not possess a valid Import Export Code Registration Certificate. As per current notification by DGFT (Directorate General of Foreign Trade), No export or import shall be made by any person without obtaining an IEC unless specifically exempted."
    },
    {
      question: "Is it mandatory to update IEC every year?",
      answer: "All IEC holders are now legally required to update and validate their IEC Details, even if there are no changes, from April to June once every year through Online system, failing which their IEC shall be de-activated and no import or export activity will be possible."
    },
    {
      question: "Can a person/entity have more than 1 IEC Code?",
      answer: "No. Only 1 IEC is issued to a person/entity. So if more than 1 IEC code is issued, then the same should be surrendered to the Regional Office for cancellation."
    },
    {
      question: "Is there any tax levied based on IE Code?",
      answer: "IE Code is not a tax registration. However, certain customs duty may be levied depending on the product."
    },
    {
      question: "Can individuals/proprietors obtain IE Code?",
      answer: "Anyone who is acting as sole proprietor of a business can obtain IE code Registration."
    },
    {
      question: "What is the penalty levied for not registering for IE code?",
      answer: "As trade is not possible without a valid IEC, the penalty levied may be the pay duty depending upon the quantum of the goods."
    },
    {
      question: "Does Custom department use IEC?",
      answer: "Yes, IEC number is reflected in all customs documents related to exports and imports."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <IECOverview />
      <IECRequirements />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="outline"
            title="Need Expert Guidance for IEC Registration?"
            description="Our DGFT experts will help you complete your Import Export Code registration seamlessly"
            primaryButton="Get Consultation"
            secondaryButton="Call Expert"
            badge="Expert Support"
          />
        </div>
      </section>

      <RequiredDocuments />
      <ServicePricing
        title="IEC Registration Fees"
        subtitle="Transparent pricing for Import Export Code registration"
        plans={pricingPlans}
        note="* Government fees (₹500) additional"
      />
      <IECBenefits />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about IEC registration"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
