"use client";

import "@/app/animations.css";
import { Button } from "@/components/ui/button";
import { 
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { 
  CONTACT_INFO, 
  FOOTER_SERVICES, 
  QUICK_LINKS, 
  SOCIAL_LINKS,
  FOOTER_CTA
} from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const Footer = () => {
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

  return (    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-gradient p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white">Expert Legal</span>
                <span className="text-sm text-brand-secondary font-medium">India</span>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
              India's most trusted legal services platform. We provide comprehensive legal solutions 
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
          {Object.entries(FOOTER_SERVICES).map(([title, services], index) => (
            <div key={index} className="mt-8 sm:mt-0">
              <h4 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">{title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      href="#"
                      className="text-sm md:text-sm text-gray-300 hover:text-brand-secondary transition-colors duration-300 block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
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
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-colors"
                />
                <Button className="bg-brand-gradient hover:opacity-90 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                </Button>
              </div>
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
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <div className="text-xs md:text-sm text-gray-400">
              © 2024 Expert Legal India. All rights reserved. 
              <span className="mx-2 hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Empowering businesses with legal excellence since 2009.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
              {QUICK_LINKS.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
