import ServiceHero from "@/components/common/ServiceHero";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import ServicePricing from "@/components/common/ServicePricing";
import TrademarkRenewalOverview from "@/components/services/TrademarkRenewalOverview";
import TrademarkRenewalEligibility from "@/components/services/TrademarkRenewalEligibility";
import TrademarkRenewalDocuments from "@/components/services/TrademarkRenewalDocuments";
import TrademarkRenewalBenefits from "@/components/services/TrademarkRenewalBenefits";
import TrademarkRenewalKeyFactors from "@/components/services/TrademarkRenewalKeyFactors";
import { 
  TRADEMARK_RENEWAL_HERO, 
  HEAR_ABOUT_OPTIONS,
  TRADEMARK_RENEWAL_FAQ,
  TRADEMARK_RENEWAL_PRICING
} from "@/lib/services-constants";

export default function TrademarkRenewalPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero 
        heroData={TRADEMARK_RENEWAL_HERO}
        selectOptions={HEAR_ABOUT_OPTIONS}
        selectFieldType="hearAbout"
      />

      {/* Overview Section */}
      <TrademarkRenewalOverview />

      {/* Eligibility Section */}
      <TrademarkRenewalEligibility />      {/* Pricing Section */}
      <ServicePricing {...TRADEMARK_RENEWAL_PRICING} />

      {/* Documents Required Section */}
      <TrademarkRenewalDocuments />

      {/* Benefits Section */}
      <TrademarkRenewalBenefits />

      {/* Key Factors Section */}
      <TrademarkRenewalKeyFactors />

      {/* FAQ Section */}
      <ServiceFAQ 
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about trademark renewal"
        faqs={TRADEMARK_RENEWAL_FAQ}
      />
    </main>
  );
}
