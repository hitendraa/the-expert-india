import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import TrademarkOppositionOverview from "@/components/services/TrademarkOppositionOverview";
import TrademarkOppositionDocuments from "@/components/services/TrademarkOppositionDocuments";
import TrademarkOppositionBenefits from "@/components/services/TrademarkOppositionBenefits";
import CTA from "@/components/common/CTA";
import { 
  TRADEMARK_OPPOSITION_HERO, 
  TRADEMARK_OPPOSITION_PRICING,
  HEAR_ABOUT_OPTIONS
} from "@/lib/services-constants";
import { FOOTER_CTA, SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Trademark Opposition Services | Defend Your Brand | The Expert India',
  description: 'Professional assistance to file or defend trademark opposition proceedings. Protect your brand rights through effective trademark opposition strategies.',
  keywords: [
    'trademark opposition',
    'TM opposition filing',
    'trademark opposition proceedings',
    'defend trademark opposition',
    'file trademark opposition',
    'trademark opposition notice',
    'trademark infringement protection',
    'brand protection services'
  ],
  authors: [{ name: SITE_FULL_NAME }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// For now, using a simple FAQ array - this can be expanded later
const TRADEMARK_OPPOSITION_FAQ = [
  {
    question: "What is trademark opposition?",
    answer: "Trademark opposition is a legal proceeding where a third party challenges a trademark application before it is registered, claiming that the proposed mark would cause confusion or harm their existing rights."
  },
  {
    question: "Who can file a trademark opposition?",
    answer: "Any person who believes they may be damaged by the registration of a trademark can file an opposition, including existing trademark owners, potential users of goods/services, or those with prior rights."
  },
  {
    question: "What is the time limit for filing an opposition?",
    answer: "Opposition must be filed within 4 months from the date of advertisement of the trademark application in the Trade Marks Journal."
  },
  {
    question: "What documents are required for filing opposition?",
    answer: "Required documents include notice of opposition, evidence of prior use or registration, power of attorney, and supporting documents to prove your case."
  },
  {
    question: "How long does the opposition process take?",
    answer: "The opposition process typically takes 1-2 years depending on the complexity of the case and whether hearings are required."
  },
  {
    question: "Can I withdraw my opposition?",
    answer: "Yes, you can withdraw your opposition at any time before the final decision by filing a request with the trademark office."
  }
];

export default function TrademarkOppositionPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        heroData={TRADEMARK_OPPOSITION_HERO}
        selectOptions={HEAR_ABOUT_OPTIONS}
        selectFieldType="hearAbout"
      />
      <TrademarkOppositionOverview />
      <TrademarkOppositionDocuments />
      <TrademarkOppositionBenefits />
      <ServicePricing {...TRADEMARK_OPPOSITION_PRICING} />
      <ServiceFAQ 
        title="Frequently Asked Questions" 
        subtitle="Get answers to common questions about trademark opposition"
        faqs={TRADEMARK_OPPOSITION_FAQ}
        columns={2}
      />
      <CTA {...FOOTER_CTA} />
    </main>
  );
}
