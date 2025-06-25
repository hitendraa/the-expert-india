"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Copyright, 
  Truck, 
  Utensils, 
  Receipt, 
  Building2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import "@/app/animations.css";

const PopularServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Complete tax filing and compliance services",
      href: "/services/tax-services"
    },
    {
      icon: Copyright,
      title: "Trademark Registration",
      description: "Protect your brand with trademark registration",
      href: "/services/trademark-registration"
    },
    {
      icon: Truck,
      title: "Import Export Code",
      description: "Get IEC for international trade business",
      href: "/services/import-export-code"
    },
    {
      icon: Utensils,
      title: "FSSAI Food License",
      description: "Food safety license for food businesses",
      href: "/services/fssai-license"
    },
    {
      icon: Receipt,
      title: "GST Services",
      description: "GST registration and return filing services",
      href: "/services/gst-services"
    },
    {
      icon: Building2,
      title: "Company Registration",
      description: "Various types of company registration services",
      href: "/services/company-registration"
    }
  ];
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Related Services
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Popular Services
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our other professional services to meet all your business needs
          </p>
        </div>        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">            {services.map((service, index) => (
              <Card key={index} className="animated-hover shadow-md border-0 bg-gradient-to-b from-white to-gray-50 h-full">
                <CardContent className="p-3 md:p-4 lg:p-6">
                  <div className="text-center">
                    <div className="bg-brand-primary/10 p-2 md:p-3 lg:p-4 rounded-full w-fit mx-auto mb-2 md:mb-3 lg:mb-4 transition-colors duration-300">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-brand-primary" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 md:mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2 md:mb-3 lg:mb-4 hidden lg:block">
                      {service.description}
                    </p>
                      <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 text-xs lg:text-sm h-7 md:h-8 lg:h-9 group"
                      asChild
                    >
                      <Link href={service.href} className="group-hover:text-white">
                        <span className="hidden lg:inline group-hover:text-white">Learn More</span>
                        <span className="lg:hidden group-hover:text-white">View</span>
                        <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 ml-1 lg:ml-2 group-hover:text-white" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
