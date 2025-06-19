import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import TrademarkObjectionOverview from "@/components/services/TrademarkObjectionOverview";
import TrademarkObjectionDocuments from "@/components/services/TrademarkObjectionDocuments";
import CTA from "@/components/common/CTA";
import { 
  TRADEMARK_OBJECTION_HERO, 
  TRADEMARK_OBJECTION_PRICING, 
  TRADEMARK_OBJECTION_FAQ,
  HEAR_ABOUT_OPTIONS
} from "@/lib/services-constants";

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
