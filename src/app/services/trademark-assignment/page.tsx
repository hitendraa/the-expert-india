import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import TrademarkAssignmentOverview from "@/components/services/TrademarkAssignmentOverview";
import TrademarkAssignmentBenefits from "@/components/services/TrademarkAssignmentBenefits";
import { 
  TRADEMARK_ASSIGNMENT_HERO,
  TRADEMARK_ASSIGNMENT_PRICING
} from "@/lib/services-constants";

// Simple FAQ array for trademark assignment
const TRADEMARK_ASSIGNMENT_FAQ = [
  {
    question: "What is trademark assignment?",
    answer: "Trademark assignment is the transfer of ownership of a registered trademark from one party (assignor) to another party (assignee). It involves transferring all rights, title, and interest in the trademark."
  },
  {
    question: "What documents are required for trademark assignment?",
    answer: "Required documents include the original trademark registration certificate, assignment deed, identity proof of both parties, and power of attorney if applicable."
  },
  {
    question: "How long does the assignment process take?",
    answer: "The trademark assignment process typically takes 4-6 months from the date of filing the application with the trademark office."
  },
  {
    question: "Can a trademark be partially assigned?",
    answer: "Yes, a trademark can be assigned for specific goods/services or geographical areas, but the assignment must be clearly defined in the assignment deed."
  },
  {
    question: "Is registration of assignment mandatory?",
    answer: "While not mandatory, it is highly recommended to register the assignment with the trademark office to maintain clear ownership records and legal protection."
  },
  {
    question: "What are the benefits of trademark assignment?",
    answer: "Benefits include monetizing your trademark, expanding business opportunities, global reach, legal protection, and the ability to transfer valuable intellectual property assets."
  }
];

export default function TrademarkAssignmentPage() {
  return (
    <main className="min-h-screen">      <ServiceHero 
        heroData={TRADEMARK_ASSIGNMENT_HERO}
      /><TrademarkAssignmentOverview />
      <TrademarkAssignmentBenefits />
      <ServicePricing {...TRADEMARK_ASSIGNMENT_PRICING} />      <ServiceFAQ
        title="Frequently Asked Questions" 
        subtitle="Get answers to common questions about trademark assignment"
        faqs={TRADEMARK_ASSIGNMENT_FAQ}
        columns={2}
      />
    </main>
  );
}
