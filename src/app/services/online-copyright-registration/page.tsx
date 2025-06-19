import ServiceHero from "@/components/common/ServiceHero";
import ServicePricing from "@/components/common/ServicePricing";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import CopyrightOverview from "@/components/services/CopyrightOverview";
import CopyrightCategories from "@/components/services/CopyrightCategories";
import CopyrightRequirements from "@/components/services/CopyrightRequirements";
import CopyrightComparison from "@/components/services/CopyrightComparison";
import { 
  COPYRIGHT_REGISTRATION_HERO,
  COPYRIGHT_PRICING,
  COPYRIGHT_FAQ,
  HEAR_ABOUT_OPTIONS
} from "@/lib/services-constants";

export default function CopyrightRegistrationPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        heroData={COPYRIGHT_REGISTRATION_HERO}
        selectOptions={HEAR_ABOUT_OPTIONS}
        selectFieldType="hearAbout"
      />
      <CopyrightOverview />      <CopyrightCategories />
      <CopyrightRequirements />
      <ServicePricing {...COPYRIGHT_PRICING} />
      <CopyrightComparison />      <ServiceFAQ 
        title="Frequently Asked Questions" 
        subtitle="Get answers to common questions about copyright registration"
        faqs={COPYRIGHT_FAQ}
        columns={2}
      />
    </main>
  );
}
