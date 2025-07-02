import type { Metadata } from 'next';
import ServiceHero from "@/components/common/ServiceHero";
import TrademarkOverview from "@/components/services/TrademarkOverview";
import TrademarkBenefits from "@/components/services/TrademarkBenefits";
import TrademarkApplicantTypes from "@/components/services/TrademarkApplicantTypes";
import TrademarkProcess from "@/components/services/TrademarkProcess";
import TrademarkClasses from "@/components/services/TrademarkClasses";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { 
  TRADEMARK_REGISTRATION_HERO, 
  TRADEMARK_TYPES,
  TRADEMARK_PRICING,
  TRADEMARK_FAQ
} from "@/lib/services-constants";

export const metadata: Metadata = {
  title: 'Trademark Registration in India | Online Brand Protection Services',
  description: 'Register your trademark online in India with The Expert India. Protect your brand identity with exclusive rights. 50% discount for MSME certificate holders.',
  keywords: [
    'trademark registration India',
    'online trademark registration',
    'brand protection services',
    'trademark filing India',
    'logo trademark registration',
    'service mark registration',
    'intellectual property protection',
    'brand name registration'
  ].join(', '),
  openGraph: {
    title: 'Trademark Registration in India | The Expert India Services',
    description: 'Professional trademark registration services in India. Protect your brand with exclusive rights. Fast, secure, and affordable.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/trademark-registration'
  }
};

export default function TrademarkRegistrationPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        heroData={TRADEMARK_REGISTRATION_HERO}
        selectOptions={TRADEMARK_TYPES}
        selectFieldType="trademarkType"
      />
      <TrademarkOverview />
      <TrademarkBenefits />
      <TrademarkApplicantTypes />
      <TrademarkProcess />
      <TrademarkClasses />
      <ServicePricing 
        title="Trademark Registration Packages"
        subtitle="Choose the perfect package for your trademark registration needs"
        plans={TRADEMARK_PRICING}
        note="* Excluding Government fees. Government fee: ₹9,000 (₹4,500 for MSME/SSI certificate holders)"
      />
      <ServiceFAQ 
        title="Common Questions About Trademark Registration"
        subtitle="Get answers to the most frequently asked questions about trademark registration in India"
        faqs={TRADEMARK_FAQ}
        ctaTitle="Need Expert Guidance on Trademark Registration?"
        ctaDescription="Our trademark experts are available 24/7 to help you protect your brand and navigate the registration process successfully."
      />
    </main>
  );
}
