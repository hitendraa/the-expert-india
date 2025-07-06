import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theexpertindia.com';
  
  // Main routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/documents',
    '/disclaimer',
    '/privacy-policy',
    '/refund-policy',
    '/terms-and-conditions',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const servicesDir = path.join(process.cwd(), 'src/app/services');
  
  try {
    const serviceRoutes = fs.readdirSync(servicesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => ({
        url: `${baseUrl}/services/${dirent.name}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }));
      
    return [...routes, ...serviceRoutes];
  } catch (error) {
    console.error('Error generating service routes for sitemap:', error);
    return routes;
  }
}
