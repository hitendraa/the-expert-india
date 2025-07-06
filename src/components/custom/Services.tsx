"use client";

import "@/app/animations.css";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Scale,
  CreditCard,
  Briefcase,
} from "lucide-react";
import { MAIN_NAVIGATION, FOOTER_SERVICES, SERVICES_CONTENT } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const Services = () => {  // Service category mapping with icons and descriptions
  const serviceCategories = [
    {
      title: "Company Registration",
      icon: Building2,
      description: "Start your business journey with complete legal compliance",
      image: "/images/services/company-registration.png",
      color: "from-brand-primary to-brand-secondary",
      items: MAIN_NAVIGATION[0].items,
      featured: true,
    },    ...SERVICES_CONTENT.categories.map((category, index) => ({
      title: category.title,
      icon: [Shield, Scale, CreditCard, FileText, Building2, Briefcase, Shield][index],
      description: category.description,
      image: category.image,
      color: [
        "from-brand-primary/80 to-brand-secondary/80",
        "from-brand-secondary to-brand-primary", 
        "from-brand-primary/90 to-brand-secondary/70",
        "from-brand-secondary/90 to-brand-primary/80",
        "from-brand-primary/70 to-brand-secondary/90",
        "from-brand-secondary/80 to-brand-primary/90",
        "from-brand-primary/60 to-brand-secondary/80"
      ][index],
      items: MAIN_NAVIGATION[index + 1].items,
      featured: false,
    }))
  ];

  const popularServices = FOOTER_SERVICES["Popular Services"];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Star className="h-4 w-4 mr-2" />
            {SERVICES_CONTENT.header.badge}
          </Badge>          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Complete{" "}
            <span className="text-brand-gradient">
              Legal Solutions
            </span>{" "}
            for Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {SERVICES_CONTENT.header.description}
          </p>
        </div>        {/* Featured Service (Company Registration) */}
        <div className="mb-16">
          <div className="bg-brand-gradient rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="text-center relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>                  <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                    {SERVICES_CONTENT.featured.badge}
                  </Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {SERVICES_CONTENT.featured.title}
              </h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
                {SERVICES_CONTENT.featured.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                {serviceCategories[0].items.slice(0, 4).map((service, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 bg-white/10 rounded-xl p-3">
                    <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                ))}
              </div>                <Link href="/services/company-registration">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-primary hover:bg-white/95 font-semibold transition-all duration-300 shadow-brand animated-hover animated-hover-primary px-8 py-3 text-lg"
                >
                  {SERVICES_CONTENT.featured.button}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.slice(1).map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary/20 hover:shadow-brand transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brand-gradient p-3 rounded-xl">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {category.items.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                      <span className="text-xs text-gray-500">{item.name}</span>
                    </div>
                  ))}                  {category.items.length > 3 && (
                    <div className="text-xs text-brand-primary font-medium">
                      +{category.items.length - 3} more services
                    </div>
                  )}
                </div>                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 hover:bg-brand-primary/10 border border-transparent group-hover:border-brand-primary/20 animated-hover animated-press"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>        {/* Popular Services Quick Access */}        <div className="bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-brand-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              {SERVICES_CONTENT.popularServices.title}
            </h3>
            <p className="text-gray-600">
              {SERVICES_CONTENT.popularServices.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-xl p-4 text-center hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/5"
              >
                <div className="bg-brand-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-sm text-gray-900 group-hover:text-brand-primary transition-colors leading-tight">
                  {service.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <CTA
            variant="gradient"
            title={SERVICES_CONTENT.cta.title}
            description={SERVICES_CONTENT.cta.description}
            primaryButton={SERVICES_CONTENT.cta.primaryButton}
            secondaryButton={SERVICES_CONTENT.cta.secondaryButton}
            secondaryButtonHref="https://wa.me/917023314773?text=Hi, I need help choosing the right service"
            badge={SERVICES_CONTENT.cta.badge}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
