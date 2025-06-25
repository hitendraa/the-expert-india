import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import IECModificationOverview from "@/components/services/IECModificationOverview";
import IECModificationRequirements from "@/components/services/IECModificationRequirements";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import IECBenefits from "@/components/services/IECBenefits";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function IECModificationPage() {
  const heroData = {
    badge: "IEC Certificate Modification",
    title: "Renew/Modify/Update your Import Export Code (IEC) Certificate",
    subtitle: "Quick & Professional IEC Updates",
    description: `Renew/Modify/Update your Import Export Code (IEC) Certificate with the help of ${SITE_FULL_NAME}. IEC expert from ${SITE_FULL_NAME} will help you update your details in Import Export Code Certificate within 24 hrs.`,
    rating: {
      score: "4.9/5",
      reviews: "(800+ Reviews)"
    },
    features: [
      "24 Hour Processing",
      "Expert IEC Support",
      "DGFT Compliant",
      "All Modifications Covered"
    ],
    pricing: {
      consultation: "₹1,999",
      consultationLabel: "Professional Fees",
      consultationDescription: "Complete IEC modification support"
    },
    trustIndicators: [
      {
        title: "24 Hours",
        subtitle: "Quick Processing"
      },
      {
        title: "All Types",
        subtitle: "Modifications Covered"
      }
    ],
    form: {
      title: "Need Help with IEC Renewal/Modification/Update?",
      subtitle: "Fill Up the below Mentioned Form",
      fields: {
        name: "Name",
        mobile: "Mobile",
        email: "Email Address",
        city: "City",
        state: "State"
      },
      placeholders: {
        name: "Name",
        mobile: "Mobile No.",
        email: "Email Address",
        city: "City",
        state: "Select State"
      },
      button: "Get Expert Consultation",
      note: "*Our IEC experts will contact you within 24 hours",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };

  const pricingPlans = [
    {
      id: "iec-modification",
      title: "IEC Modification",
      subtitle: "For Proprietor & Organization",
      price: "₹1,999",
      originalPrice: "",
      recommended: true,
      features: [
        "Change in company name",
        "Change in Business activities", 
        "Registered Branch details or add Branch",
        "Addition / alteration/ deletion of partner or director for any partnership firm or private limited company",
        "Change in registered mobile number and email id",
        "Dedicated IEC expert",
        "Call, Chat & Email Support",
        "Bank details update/modification"
      ],
      excludes: [
        "Government fees (Rs.200 additional)"
      ]
    }
  ];

  const faqData = [
    {
      question: "What are the documents required for IEC modification?",
      answer: "In the process of IEC modification, the required documents are namely:\n\n• PAN Card of an individual/business entity for which IEC is being issued\n• One valid E-mail ID\n• Phone number of the applicant"
    },
    {
      question: "How much time does it take to update modification on the DGFT portal?",
      answer: "To update the modification on the DGFT portal, it usually takes 1-5 days. Following the completion of the update, one fresh IEC Certificate will be issued by the DGFT."
    },
    {
      question: "Do I need to physically present for the process?",
      answer: `No, the applicants don't need to visit any Govt. office during the process. All you need is an internet connection in your Smartphone/Computer and the required documents with you. ${SITE_FULL_NAME} is an online platform where you can get the job done even if you are present at the remotest location of India.`
    },
    {
      question: "What documents are needed for IEC modification?",
      answer: "• Cancelled cheque\n• Aadhaar Card\n• PAN Card\n• Digital Signature Certificate\n(Contact IEC expert for more details)"
    },
    {
      question: "How do I check my IEC modification status?",
      answer: "You can visit the DGFT portal and check your IEC modification status once you complete the entire IEC modification procedure."
    },
    {
      question: "Is DSC mandatory for IEC modification?",
      answer: "Yes! Your DSC is mandatory in case of your Mobile number is not linked with the Aadhaar card."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <IECModificationOverview />
      <IECModificationRequirements />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="outline"
            title="Need Expert Guidance for IEC Modification?"
            description="Our DGFT experts will help you complete your IEC modifications quickly and efficiently"
            primaryButton="Get Consultation"
            secondaryButton="Call Expert"
            badge="Expert Support"
          />
        </div>
      </section>

      <RequiredDocuments />
      <ServicePricing
        title="IEC Modification Package"
        subtitle="Professional support for all types of IEC modifications"
        plans={pricingPlans}
        note="* Excluding Government fees (Rs.200)"
      />
      <IECBenefits />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about IEC modification"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
