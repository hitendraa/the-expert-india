# SEO Implementation for The Expert India

This document outlines the SEO features implemented across the website.

## Main Components

### 1. Metadata in Root Layout

The root layout includes base metadata like title, description, OpenGraph, and Twitter card data.

### 2. Service Metadata

Each service page should include a `metadata.ts` file generated using the `generateServiceMetadata` function.

Example:
```ts
import { generateServiceMetadata } from "@/components/common/ServiceMeta";

export const metadata = generateServiceMetadata({
  title: "Service Title",
  description: "Service Description",
  keywords: ["keyword1", "keyword2"],
  slug: "service-slug"
});
```

### 3. Schema.org Structured Data

Each service page uses the `ServiceSchema` component to add structured data for search engines:

```tsx
<ServiceSchema 
  name="Service Name"
  description="Service Description"
  price="₹XXX" // Optional
  features={["Feature 1", "Feature 2"]}
/>
```

### 4. Sitemap and Robots.txt

- Automatically generated sitemap at `/sitemap.xml`
- Robots.txt available at `/robots.txt`

## Generating SEO Files

You can automatically generate metadata files for all service pages using:

```bash
npm run generate-seo
```

## Best Practices

1. Always include unique titles and descriptions for each page
2. Keep metadata descriptions under 160 characters
3. Use relevant keywords naturally in the content
4. Include schema.org structured data on all service pages
5. Keep the OpenGraph image (`/logo-dark.png`) updated

## Manual Steps for New Pages

When creating a new service page:

1. Create a `metadata.ts` file in the service directory
2. Add the `ServiceSchema` component to the bottom of the page
3. Update sitemap if needed (it should auto-generate)
