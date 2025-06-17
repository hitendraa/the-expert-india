"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  FileText,
  Calculator,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Users,
} from "lucide-react";
import { MAIN_NAVIGATION, FOOTER_SERVICES, SERVICES_CONTENT } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

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
    },
    ...SERVICES_CONTENT.categories.map((category, index) => ({
      title: category.title,
      icon: [Shield, FileText, Calculator, BookOpen][index],
      description: category.description,
      image: category.image,
      color: [
        "from-brand-primary/80 to-brand-secondary/80",
        "from-brand-secondary to-brand-primary", 
        "from-brand-primary/90 to-brand-secondary/70",
        "from-brand-secondary/90 to-brand-primary/80"
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
        </div>{/* Featured Service (Company Registration) */}
        <div className="mb-16">
          <div className="bg-brand-gradient rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>                  <Badge className="bg-white/20 text-white border-white/30">
                    {SERVICES_CONTENT.featured.badge}
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {SERVICES_CONTENT.featured.title}
                </h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {SERVICES_CONTENT.featured.description}
                </p><div className="grid grid-cols-2 gap-4 mb-6">
                  {serviceCategories[0].items.slice(0, 4).map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                      <span className="text-sm font-medium">{service.name}</span>
                    </div>
                  ))}
                </div>                <Button 
                  size="lg" 
                  className="bg-white text-brand-primary hover:bg-white/95 hover:scale-105 font-semibold transition-all duration-300 shadow-brand"
                >
                  {SERVICES_CONTENT.featured.button}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
              <div className="relative lg:block hidden">
                <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/services/company-registration.png"
                    alt="Company Registration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
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
                  <div className="w-12 h-12 relative">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain opacity-20 group-hover:opacity-40 transition-opacity"
                    />
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
                  className="w-full text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 hover:bg-brand-primary/10 border border-transparent group-hover:border-brand-primary/20"
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
            {popularServices.map((service, index) => (              <Link
                key={index}
                href="#"
                className="group bg-white rounded-xl p-4 text-center hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/5"
              ><div className="bg-brand-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-sm text-gray-900 group-hover:text-brand-primary transition-colors leading-tight">
                  {service}
                </h4>
              </Link>
            ))}
          </div>
        </div>        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-brand-gradient rounded-2xl p-8 md:p-12 shadow-brand-lg text-white relative overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>              <Badge className="bg-white/20 text-white border-white/30">
                {SERVICES_CONTENT.cta.badge}
              </Badge>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {SERVICES_CONTENT.cta.title}
            </h3>            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {SERVICES_CONTENT.cta.description}
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-brand">
                {SERVICES_CONTENT.cta.primaryButton}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-brand-primary hover:bg-white hover:text-brand-primary hover:scale-105 transition-all duration-300 shadow-brand">
                {SERVICES_CONTENT.cta.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
