import { Metadata } from 'next'
import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import TrademarkObjectionOverview from "@/components/services/TrademarkObjectionOverview";
import TrademarkObjectionDocuments from "@/components/services/TrademarkObjectionDocuments";
import { 
  TRADEMARK_OBJECTION_HERO, 
  TRADEMARK_OBJECTION_PRICING, 
  TRADEMARK_OBJECTION_FAQ,
  HEAR_ABOUT_OPTIONS
} from "@/lib/services-constants";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Trademark Objection Reply Services | Overcome TM Objections | The Expert India',
  description: 'Expert assistance to respond to trademark examination objections. Professional reply drafting and filing services to overcome objections and proceed with registration.',
  keywords: [
    'trademark objection reply',
    'trademark examination report',
    'overcome trademark objection',
    'trademark objection response',
    'TM objection services',
    'trademark office action',
    'trademark registration objection',
    'trademark examiner objection'
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

export default function TrademarkObjectionReplyPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        heroData={TRADEMARK_OBJECTION_HERO}
        selectOptions={HEAR_ABOUT_OPTIONS}
        selectFieldType="hearAbout"
      />
      <TrademarkObjectionOverview />
      <TrademarkObjectionDocuments />
      <ServicePricing {...TRADEMARK_OBJECTION_PRICING} />      <ServiceFAQ 
        title="Frequently Asked Questions" 
        subtitle="Get answers to common questions about trademark objection replies"
        faqs={TRADEMARK_OBJECTION_FAQ}
        columns={2}
      />
    </main>
  );
}
