"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "@/app/animations.css";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { 
  CONTACT_INFO, 
  FOOTER_SERVICES, 
  QUICK_LINKS, 
  SOCIAL_LINKS,
  FOOTER_CTA,
  SITE_FULL_NAME,
  SITE_SINCE
} from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/common/CTA";
import { getFormSource } from "@/lib/form-utils";
import { toast } from "sonner";

const Footer = () => {
  const pathname = usePathname();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const getSocialIcon = (iconName: string) => {
    const icons = {
      facebook: Facebook,
      twitter: Twitter,
      linkedin: Linkedin,
      instagram: Instagram,
      youtube: Youtube,
    };
    return icons[iconName as keyof typeof icons] || Facebook;
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmittingNewsletter) return;

    if (!newsletterEmail.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmittingNewsletter(true);

    try {
      getFormSource(pathname);
      
      // Add to newsletter directly
      const newsletterResponse = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          source: 'newsletter',
          sourceDetails: {
            page: pathname,
          },
          tags: ['newsletter', 'footer-signup'],
        }),
      });

      if (!newsletterResponse.ok) {
        throw new Error('Failed to subscribe to newsletter');
      }

      toast.success('Thank you for subscribing to our newsletter!');
      setNewsletterEmail("");

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex items-center">
              <Image
                src="/logo-light.png"
                alt="Expert India Consultancy"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
              India&apos;s most trusted legal services platform. We provide comprehensive legal solutions 
              for businesses and individuals with over 15 years of expertise and 1 lakh+ satisfied clients.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-brand-secondary flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-brand-secondary flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-300">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-brand-primary transition-colors duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>          {/* Services Columns */}
          {Object.entries(FOOTER_SERVICES).map(([title, services]) => (
            <div key={title} className="mt-8 sm:mt-0">
              <h4 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">{title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {Array.isArray(services) && services.map((service, serviceIndex) => {
                  // Type guard to ensure service has the expected structure
                  if (typeof service === 'object' && service !== null && 'name' in service && 'href' in service) {
                    return (
                      <li key={`${title}-${serviceIndex}`}>
                        <Link 
                          href={service.href}
                          className="text-sm md:text-sm text-gray-300 hover:text-brand-secondary transition-colors duration-300 block"
                        >
                          {service.name}
                        </Link>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        </div>        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Stay Updated with Legal Insights
              </h4>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                Get the latest updates on legal compliance, business tips, and regulatory changes 
                delivered straight to your inbox.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-colors"
                  disabled={isSubmittingNewsletter}
                />
                <Button 
                  type="submit"
                  className="bg-brand-gradient hover:opacity-90 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base whitespace-nowrap"
                  disabled={isSubmittingNewsletter}
                >
                  {isSubmittingNewsletter ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 md:h-4 md:w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>        {/* Quick Contact CTA */}
        <CTA
          variant="gradient"
          size="compact"
          rounded="large"
          title={FOOTER_CTA.title}
          description={FOOTER_CTA.description}
          primaryButton={FOOTER_CTA.primaryButton}
          secondaryButton={FOOTER_CTA.secondaryButton}
          secondaryButtonHref={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
          className="mt-8 md:mt-12"
        />
      </div>{/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 md:py-6">          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <div className="text-xs md:text-sm text-gray-400">
              © 2025 {SITE_FULL_NAME}. All rights reserved. 
              <span className="mx-2 hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Empowering businesses with legal excellence since {SITE_SINCE}.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
              {QUICK_LINKS.map((link, index) => {
                // Type guard to ensure link has the expected structure
                if (typeof link === 'object' && link !== null && 'name' in link && 'href' in link) {
                  return (
                    <Link 
                      key={`quick-link-${index}`}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  );
                }
                return null;
              })}
              <Link 
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/disclaimer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Disclaimer
              </Link>
              <Link 
                href="/refund-policy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
