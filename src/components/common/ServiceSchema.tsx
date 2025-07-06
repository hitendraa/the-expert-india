"use client";

import { SITE_FULL_NAME } from "@/lib/constants";

interface ServiceSchemaProps {
  name: string;
  description: string;
  price?: string;
  image?: string;
  serviceType?: string;
  areaServed?: string;
  features?: string[];
}

export default function ServiceSchema({
  name,
  description,
  price,
  image = "/logo-dark.png",
  serviceType = "Business Services",
  areaServed = "India",
  features = []
}: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": SITE_FULL_NAME,
      "logo": "https://theexpertindia.com/logo-dark.png",
      "url": "https://theexpertindia.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      }
    },
    "serviceType": serviceType,
    "areaServed": areaServed,
    "offers": price ? {
      "@type": "Offer",
      "price": price.replace(/[^0-9]/g, ""),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    } : undefined,
    "image": `https://theexpertindia.com${image}`,
    "serviceOutput": features.length > 0 ? features : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
