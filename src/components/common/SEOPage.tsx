import { Metadata } from 'next'
import { constructMetadata, generateServiceSchema  } from '@/lib/seo'
import { StructuredDataServer } from './StructuredData'

interface SEOPageProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article' | 'service'
  }
  service?: {
    name: string
    description: string
    price?: string
    category?: string
  }
  faqs?: Array<{ question: string; answer: string }>
  children: React.ReactNode
  noIndex?: boolean
}

export function SEOPage({
  title,
  description,
  keywords,
  canonical,
  openGraph,
  service,
  faqs,
  children,
  noIndex = false,
}: SEOPageProps) {
  const structuredData = []

  // Add service schema if provided
  if (service) {
    structuredData.push(generateServiceSchema({
      name: service.name,
      description: service.description,
      url: canonical || '',
      price: service.price,
      category: service.category,
    }))
  }

  // Add FAQ schema if provided
  if (faqs && faqs.length > 0) {
    structuredData.push(generateFAQSchema(faqs))
  }

  return (
    <>
      {structuredData.length > 0 && (
        <StructuredDataServer data={structuredData} />
      )}
      {children}
    </>
  )
}

// Generate metadata for a page
export function generatePageMetadata({
  title,
  description,
  keywords,
  canonical,
  openGraph,
  noIndex = false,
}: {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article' | 'service'
  }
  noIndex?: boolean
}): Metadata {
  return constructMetadata({
    title,
    description,
    keywords,
    canonical,
    noIndex,
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      type: openGraph?.type === 'article' ? 'article' : 'website',
      ...(openGraph?.image && { images: [{ url: openGraph.image }] }),
    },
  })
}
