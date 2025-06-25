import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import ISOOverview from "@/components/services/ISOOverview";
import ISOServices from "@/components/services/ISOServices";
import ISOTypes from "@/components/services/ISOTypes";
import ISOCategories from "@/components/services/ISOCategories";
import CTA from "@/components/common/CTA";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function ISORegistrationPage() {
  const heroData = {
    badge: "ISO Certification Services",
    title: "Want Company's ISO Certification?",
    subtitle: "Grab ISO Certification Services in your Budget!",
    description: `${SITE_FULL_NAME} is a renowned company that offers authentic ISO certification for your organisation. You know ISO stands for International Organization for Standardization. When your company, institute or business process gets ISO certification, it will be more credible among customers. Moreover, the ISO mark will make your service distinctive from similar organizations. It will increase your business remarkably.`,
    rating: {
      score: "4.4/5",
      reviews: "(1,000+ Reviews)"
    },
    features: [
      "Hassle-Free Certification",
      "20 Years Experience",
      "Fastest Delivery",
      "100% Data Security"
    ],
    pricing: {
      consultation: "₹6,000",
      consultationLabel: "Starting From",
      consultationDescription: "ISO certification services"
    },
    trustIndicators: [
      {
        title: "3 Years",
        subtitle: "Validity Period"
      },
      {
        title: "IAF/Non-IAF",
        subtitle: "Both Available"
      }
    ],
    form: {
      title: "Want Company's ISO Certification?",
      subtitle: "Fill Up the below mentioned form",
      fields: {
        name: "Your Full Name",
        mobile: "Your Mobile Number",
        email: "Your Email Address",
        state: "State"
      },
      placeholders: {
        name: "Your Full Name",
        mobile: "Your Mobile Number",
        email: "Your Email Address",
        state: "State"
      },
      button: "Get ISO Consultation",
      note: "*Our ISO experts will guide you to choose the right certification",
      terms: {
        termsLabel: "I agree to the Terms & Conditions",
        commsLabel: "I agree to receive updates via SMS/WhatsApp"
      }
    }
  };
  const pricingPlans = [
    {
      id: "iso-9001",
      title: "ISO 9001:2015 (Q.M.S)",
      price: "₹6,000",
      originalPrice: "₹10,000",
      recommended: true,
      features: [
        "Quality Management System",
        "IAF: ₹10,000",
        "Non-IAF: ₹6,000",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-14001",
      title: "ISO 14001:2015 (E.M.S)",
      price: "₹9,500",
      originalPrice: "₹14,000",
      recommended: false,
      features: [
        "Environment Management System",
        "IAF: ₹14,000",
        "Non-IAF: ₹9,500",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-45001",
      title: "ISO 45001:2018 (OH&S M.S)",
      price: "₹9,500",
      originalPrice: "₹12,000",
      recommended: false,
      features: [
        "Occupational Health & Safety Management System",
        "IAF: ₹12,000",
        "Non-IAF: ₹9,500",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-22000",
      title: "ISO 22000:2018 (F.S.M.S)",
      price: "₹9,500",
      originalPrice: "₹12,000",
      recommended: false,
      features: [
        "Food Safety Management System",
        "IAF: ₹12,000",
        "Non-IAF: ₹9,500",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-29993",
      title: "ISO 29993:2017",
      price: "₹14,000",
      recommended: false,
      features: [
        "Learning Services outside Formal Education",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-21001",
      title: "ISO 21001:2018",
      price: "₹14,000",
      recommended: false,
      features: [
        "Educational Organizations Management Systems",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-27001",
      title: "ISO 27001:2022",
      price: "₹17,000",
      recommended: false,
      features: [
        "Information Security Management System",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-7101",
      title: "ISO 7101:2023",
      price: "₹15,000",
      recommended: false,
      features: [
        "Healthcare Organization Management",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-10004",
      title: "ISO 10004:2018",
      price: "₹14,000",
      recommended: false,
      features: [
        "Quality Management & Customer Satisfaction",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "haccp",
      title: "HACCP",
      price: "₹15,000",
      recommended: false,
      features: [
        "Hazard Analysis and Critical Control Points",
        "Food Manufacturing Industry",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "rohs",
      title: "RoHS",
      price: "₹14,000",
      recommended: false,
      features: [
        "Restriction of Hazardous Substances Directive",
        "Electronic Goods Manufacturers",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "gmp",
      title: "GMP",
      price: "₹14,000",
      recommended: false,
      features: [
        "Good Manufacturing Practices",
        "Manufacturing Standards",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "cmmi",
      title: "CMMI",
      price: "₹16,500",
      recommended: false,
      features: [
        "Capability Maturity Model Integration",
        "Process Improvement Framework",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "who-gmp",
      title: "WHO - GMP Certification Services",
      price: "₹14,500",
      recommended: false,
      features: [
        "Good Manufacturing Practices",
        "Health Products Manufacturing",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "ce-marking",
      title: "CE Marking Certification",
      price: "₹14,000",
      recommended: false,
      features: [
        "European Conformity Marking",
        "Product Safety Certification",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "sa-8000",
      title: "SA 8000",
      price: "₹17,000",
      recommended: false,
      features: [
        "Social Accountability International",
        "Social Accountability Management",
        "Compliance Certificate",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: [
        "18% GST additional"
      ]
    },
    {
      id: "iso-modification",
      title: "ISO Modification & Surveillance Audit",
      price: "Depending on certificate",
      recommended: false,
      features: [
        "All category ISO Modification",
        "Surveillance Audit services",
        "Call, Chat, Email Support",
        "No hidden charges"
      ],
      excludes: []
    }
  ];

  const faqData = [
    {
      question: "What is an ISO for?",
      answer: "It is International standards ensure that the products and services you use in your daily life are safe, reliable, and of high quality. This organisation guides businesses in adopting suitable, sustainable and ethical practices that help create a future where customers' purchases not only perform excellently but also safeguard our planet. In short, standards seamlessly blend quality with consistency and conscience that enhance your everyday experiences and choices."
    },
    {
      question: "What is NABCB Accreditation for ISO?",
      answer: "NABCB stands for National Accreditation Board for Certification Bodies. They provide premium certification for your requirements. It is A Constituent Board of the Quality Council of India. We issue NABCB Accredited certificates at the most reasonable cost."
    },
    {
      question: "Why do I need ISO certification?",
      answer: `ISO stands for International Organisation for Standardisation. When your service, business or organisation is ISO certified, your clientele or consumers will be increased and your business will be more credible and distinctive than others. To know more call ${SITE_FULL_NAME}.`
    },
    {
      question: "What Is the Cost Of ISO Certification?",
      answer: "The cost of ISO certification may vary for various variable factors. The size of the company, organisation, employees, infrastructure, and many other factors depend on the cost of ISO certification. On the other hand, IAF certifications are costlier than that of non-IAF certification. However, both are accepted internationally. Call us to get an affordable price."
    },
    {
      question: "Is ISO a Government Organization?",
      answer: "No, usually ISO certification authorities are not government bodies. It is not a government organisation, and built with the membership of 165 National Standard Bodies. \"ISO is an independent, non-governmental international organization. It brings global experts together to agree on the best ways of doing things. From quality management to artificial intelligence, our mission is to make lives easier, safer and better – for everyone, everywhere.\""
    },
    {
      question: "Is there any Indian Government body for ISO accreditation?",
      answer: "Yes, NABCB is the Government Accreditation Body for ISO certification."
    },
    {
      question: "Why Do I Need ISO Certification for My Company?",
      answer: "ISO is not a certification only. It is the pledge to the clients or consumers to provide the standard quality consistently for years. So, there is a high possibility to increase your customer base if the quality of goods or services is determined and under surveillance. The Indian government has made it mandatory for all companies that are approaching government tenders. You will not get any if your company is not accredited by the IAS organisation"
    },
    {
      question: "What is IAF ISO?",
      answer: "IAF stands for The International Accreditation Forum, a worldwide renowned ISO accreditation body to assess and provide conformity, visiting the fields of management area to ensure processes, products, and services, looking at personnel, validation and verification and similar programmes. IAF-approved certification is a bit costlier. The certificate will also mention, \"IAF Approved Certificate.\""
    },
    {
      question: "What is Non-IAF ISO?",
      answer: "Non-IAF ISO: These accreditation bodies are not members of IAF. Still, they have the capability to issue ISO certificates. These certificates are also authentic and worldwide accepted. These certificates mention, \"ISO Certificate.\" The \"IAF\" is not mentioned there. These certificates are less costly compared to IAF ISO certification."
    },
    {
      question: "What is the validity of an ISO certification?",
      answer: "Most of the ISO certificates remain valid for 3 years."
    },
    {
      question: "How can I check the validity of an ISO Certificate?",
      answer: "You have to check the validity of the ISO certificate from the official website of the certification body. As soon as you put the certificate number on the website, you will get the validity of your ISO certificate."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero heroData={heroData} />
      <ISOOverview />
      <ISOServices />
      
      {/* Consultation CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTA
            variant="gradient"
            title="Need Help Choosing the Right ISO Certification?"
            description="Our ISO experts will guide you to select the perfect certification for your business needs"
            primaryButton="Get Expert Consultation"
            secondaryButton="Call ISO Expert"
            badge="Expert Guidance"
          />
        </div>
      </section>

      <ServicePricing
        title="Package Details for ISO Certification"
        subtitle="Choose the right ISO certification for your business"
        plans={pricingPlans}
        note="* 18% GST additional"
      />
      <ISOTypes />
      <ISOCategories />
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about ISO certification"
        faqs={faqData}
        columns={2}
      />
    </div>
  );
}
