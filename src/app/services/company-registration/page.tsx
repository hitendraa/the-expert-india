import type { Metadata } from 'next';
import CompanyRegistrationHero from "@/components/services/CompanyRegistrationHero";
import CompanyRegistrationOverview from "@/components/services/CompanyRegistrationOverview";
import RequiredDocuments from "@/components/services/RequiredDocuments";
import CompanyTypes from "@/components/services/CompanyTypes";
import CompanyComparison from "@/components/services/CompanyComparison";
import RegistrationProcess from "@/components/services/RegistrationProcess";
import ServiceFAQ from "@/components/common/ServiceFAQ";
import { COMPANY_REGISTRATION_FAQ } from "@/lib/services-constants";

export const metadata: Metadata = {
  title: 'Company Registration in India | Online Business Registration Services',
  description: 'Register your company online in India with Expert Legal. Choose from Private Limited, OPC, LLP, Section 8 & more. 100% online process, expert guidance, 15-day completion.',
  keywords: [
    'company registration India',
    'online company registration',
    'private limited company registration',
    'business registration India',
    'incorporate company India',
    'company formation services',
    'startup registration',
    'legal company registration'
  ].join(', '),
  openGraph: {
    title: 'Company Registration in India | Expert Legal Services',
    description: 'Professional company registration services in India. Fast, secure, and affordable. Get your business registered in 15 working days.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/company-registration'
  }
};

export default function CompanyRegistrationPage() {
  return (
    <div>
      <CompanyRegistrationHero />
      <CompanyRegistrationOverview />
      <CompanyTypes />
      <RequiredDocuments />
      <CompanyComparison />      <RegistrationProcess />
      <ServiceFAQ 
        title="Common Questions About Company Registration"
        subtitle="Get answers to the most frequently asked questions about company registration in India"
        faqs={COMPANY_REGISTRATION_FAQ}
        ctaTitle="Need Expert Help with Documentation?"
        ctaDescription="Our expert legal team is available 24/7 to help you with all documentation requirements and guide you through the registration process."
      />
    </div>
  );
}
