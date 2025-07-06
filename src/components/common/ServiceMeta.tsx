import { Metadata } from "next";
import { SITE_FULL_NAME } from "@/lib/constants";

interface ServiceMetaProps {
  title: string;
  description: string;
  keywords?: string[];
  slug?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateServiceMetadata({
  title,
  description,
  keywords = [],
  slug = "",
  image = '/logo-dark.png',
  publishedTime = '2024-01-01T00:00:00Z',
  modifiedTime = new Date().toISOString(),
}: ServiceMetaProps): Metadata {
  const fullTitle = `${title} | ${SITE_FULL_NAME}`;
  const url = `https://theexpertindia.com/services/${slug}`;
  
  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "legal services", "business services", "India", "consultancy"],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_FULL_NAME,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
        }
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/logo-dark.png'],
    },
    alternates: {
      canonical: url,
    },
  };
}
