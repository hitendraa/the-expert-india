import { Metadata } from 'next'
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
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'Trademark Renewal Services | Extend Trademark Protection | The Expert India',
  description: 'Renew your trademark registration before expiry with expert assistance. Complete trademark renewal process with timely filing and documentation support.',
  keywords: [
    'trademark renewal',
    'renew trademark',
    'trademark extension',
    'trademark validity extension',
    'trademark protection renewal',
    'trademark registration renewal',
    'trademark renewal process',
    'trademark renewal filing'
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
